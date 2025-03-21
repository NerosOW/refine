import {
    useMutation,
    UseMutationOptions,
    UseMutationResult,
} from "@tanstack/react-query";

import {
    BaseRecord,
    CreateManyResponse,
    HttpError,
    SuccessErrorNotification,
    MetaQuery,
    IQueryKeys,
} from "../../interfaces";
import {
    useResource,
    useTranslate,
    usePublish,
    useHandleNotification,
    useDataProvider,
    useInvalidate,
    useLog,
    useMeta,
    useRefineContext,
} from "@hooks";
import {
    handleMultiple,
    pickDataProvider,
    pickNotDeprecated,
} from "@definitions";
import {
    useLoadingOvertime,
    UseLoadingOvertimeOptionsProps,
    UseLoadingOvertimeReturnType,
} from "../useLoadingOvertime";

type useCreateManyParams<TData, TError, TVariables> = {
    resource: string;
    values: TVariables[];
    meta?: MetaQuery;
    metaData?: MetaQuery;
    dataProviderName?: string;
    invalidates?: Array<keyof IQueryKeys>;
} & SuccessErrorNotification<CreateManyResponse<TData>, TError, TVariables[]>;

export type UseCreateManyReturnType<
    TData extends BaseRecord = BaseRecord,
    TError = HttpError,
    TVariables = {},
> = UseMutationResult<
    CreateManyResponse<TData>,
    TError,
    useCreateManyParams<TData, TError, TVariables>,
    unknown
>;

export type UseCreateManyProps<
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables = {},
> = {
    mutationOptions?: Omit<
        UseMutationOptions<
            CreateManyResponse<TData>,
            TError,
            useCreateManyParams<TData, TError, TVariables>
        >,
        "mutationFn" | "onError" | "onSuccess"
    >;
} & UseLoadingOvertimeOptionsProps;

/**
 * `useCreateMany` is a modified version of `react-query`'s {@link https://react-query.tanstack.com/reference/useMutation `useMutation`} for multiple create mutations.
 *
 * It uses `createMany` method as mutation function from the `dataProvider` which is passed to `<Refine>`.
 *
 * @see {@link https://refine.dev/docs/api-reference/core/hooks/data/useCreateMany} for more details.
 *
 * @typeParam TData - Result data of the query extends {@link https://refine.dev/docs/core/interfaceReferences#baserecord `BaseRecord`}
 * @typeParam TError - Custom error object that extends {@link https://refine.dev/docs/core/interfaceReferences#httperror `HttpError`}
 * @typeParam TVariables - Values for mutation function
 *
 */
export const useCreateMany = <
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables = {},
>({
    mutationOptions,
    overtimeOptions,
}: UseCreateManyProps<TData, TError, TVariables> = {}): UseCreateManyReturnType<
    TData,
    TError,
    TVariables
> &
    UseLoadingOvertimeReturnType => {
    const dataProvider = useDataProvider();
    const { resources, select } = useResource();
    const translate = useTranslate();
    const publish = usePublish();
    const handleNotification = useHandleNotification();
    const invalidateStore = useInvalidate();
    const { log } = useLog();
    const getMeta = useMeta();
    const {
        options: { textTransformers },
    } = useRefineContext();

    const mutation = useMutation<
        CreateManyResponse<TData>,
        TError,
        useCreateManyParams<TData, TError, TVariables>
    >(
        ({
            resource: resourceName,
            values,
            meta,
            metaData,
            dataProviderName,
        }: useCreateManyParams<TData, TError, TVariables>) => {
            const { resource, identifier } = select(resourceName);

            const combinedMeta = getMeta({
                resource,
                meta: pickNotDeprecated(meta, metaData),
            });

            const selectedDataProvider = dataProvider(
                pickDataProvider(identifier, dataProviderName, resources),
            );

            if (selectedDataProvider.createMany) {
                return selectedDataProvider.createMany<TData, TVariables>({
                    resource: resource.name,
                    variables: values,
                    meta: combinedMeta,
                    metaData: combinedMeta,
                });
            } else {
                return handleMultiple(
                    values.map((val) =>
                        selectedDataProvider.create<TData, TVariables>({
                            resource: resource.name,
                            variables: val,
                            meta: combinedMeta,
                            metaData: combinedMeta,
                        }),
                    ),
                );
            }
        },
        {
            onSuccess: (
                response,
                {
                    resource: resourceName,
                    successNotification,
                    dataProviderName,
                    invalidates = ["list", "many"],
                    values,
                    meta,
                    metaData,
                },
            ) => {
                const { resource, identifier } = select(resourceName);

                const resourcePlural = textTransformers.plural(identifier);

                const notificationConfig =
                    typeof successNotification === "function"
                        ? successNotification(response, values, identifier)
                        : successNotification;

                handleNotification(notificationConfig, {
                    key: `createMany-${identifier}-notification`,
                    message: translate(
                        "notifications.createSuccess",
                        {
                            resource: translate(
                                `${identifier}.${identifier}`,
                                identifier,
                            ),
                        },
                        `Successfully created ${resourcePlural}`,
                    ),
                    description: translate("notifications.success", "Success"),
                    type: "success",
                });

                invalidateStore({
                    resource: identifier,
                    dataProviderName: pickDataProvider(
                        identifier,
                        dataProviderName,
                        resources,
                    ),
                    invalidates,
                });

                const ids = response?.data
                    .filter((item) => item?.id !== undefined)
                    .map((item) => item.id!);

                publish?.({
                    channel: `resources/${resource.name}`,
                    type: "created",
                    payload: {
                        ids,
                    },
                    date: new Date(),
                });

                const combinedMeta = getMeta({
                    resource,
                    meta: pickNotDeprecated(meta, metaData),
                });

                const { fields, operation, variables, ...rest } =
                    combinedMeta || {};

                log?.mutate({
                    action: "createMany",
                    resource: resource.name,
                    data: values,
                    meta: {
                        dataProviderName: pickDataProvider(
                            identifier,
                            dataProviderName,
                            resources,
                        ),
                        ids,
                        ...rest,
                    },
                });
            },
            onError: (
                err: TError,
                { resource: resourceName, errorNotification, values },
            ) => {
                const { identifier } = select(resourceName);

                const notificationConfig =
                    typeof errorNotification === "function"
                        ? errorNotification(err, values, identifier)
                        : errorNotification;

                handleNotification(notificationConfig, {
                    key: `createMany-${identifier}-notification`,
                    description: err.message,
                    message: translate(
                        "notifications.createError",
                        {
                            resource: translate(
                                `${identifier}.${identifier}`,
                                identifier,
                            ),
                            statusCode: err.statusCode,
                        },
                        `There was an error creating ${identifier} (status code: ${err.statusCode}`,
                    ),
                    type: "error",
                });
            },
            ...mutationOptions,
        },
    );

    const { elapsedTime } = useLoadingOvertime({
        isLoading: mutation.isLoading,
        interval: overtimeOptions?.interval,
        onInterval: overtimeOptions?.onInterval,
    });

    return { ...mutation, overtime: { elapsedTime } };
};
