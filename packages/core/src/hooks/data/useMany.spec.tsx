import { renderHook, waitFor } from "@testing-library/react";

import { MockJSONServer, TestWrapper, mockRouterBindings } from "@test";

import { useMany } from "./useMany";
import { defaultRefineOptions } from "@contexts/refine";
import { IRefineContextProvider } from "../../interfaces";

const mockRefineProvider: IRefineContextProvider = {
    hasDashboard: false,
    ...defaultRefineOptions,
    options: defaultRefineOptions,
};

describe("useMany Hook", () => {
    it("with rest json server", async () => {
        const { result } = renderHook(
            () => useMany({ resource: "posts", ids: ["1", "2"] }),
            {
                wrapper: TestWrapper({
                    dataProvider: MockJSONServer,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await waitFor(() => {
            expect(!result.current.isLoading).toBeTruthy();
        });

        const { status, data } = result.current;

        expect(status).toBe("success");
        expect(data?.data.length).toBe(2);
    });

    it("should only pass meta from the hook parameter and query parameters to the dataProvider", async () => {
        const getManyMock = jest.fn();

        renderHook(
            () => useMany({ resource: "posts", meta: { foo: "bar" }, ids: [] }),
            {
                wrapper: TestWrapper({
                    dataProvider: {
                        default: {
                            ...MockJSONServer.default,
                            getMany: getManyMock,
                        },
                    },
                    routerProvider: mockRouterBindings({
                        params: { baz: "qux" },
                    }),
                    resources: [{ name: "posts", meta: { dip: "dop" } }],
                }),
            },
        );

        await waitFor(() => {
            expect(getManyMock).toBeCalled();
        });

        expect(getManyMock).toBeCalledWith(
            expect.objectContaining({
                meta: expect.objectContaining({
                    foo: "bar",
                    baz: "qux",
                }),
            }),
        );
    });

    it("works correctly with `interval` and `onInterval` params", async () => {
        const onInterval = jest.fn();
        const { result } = renderHook(
            () =>
                useMany({
                    resource: "posts",
                    ids: ["1", "2"],
                    overtimeOptions: {
                        interval: 100,
                        onInterval,
                    },
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: {
                        default: {
                            ...MockJSONServer.default,
                            getMany: () => {
                                return new Promise((res) => {
                                    setTimeout(() => res({} as any), 1000);
                                });
                            },
                        },
                    },
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await waitFor(() => {
            expect(result.current.isLoading).toBeTruthy();
            expect(result.current.overtime.elapsedTime).toBe(900);
            expect(onInterval).toBeCalled();
        });

        await waitFor(() => {
            expect(result.current.isLoading).toBeFalsy();
            expect(result.current.overtime.elapsedTime).toBeUndefined();
        });
    });

    describe("useResourceSubscription", () => {
        it("useSubscription", async () => {
            const onSubscribeMock = jest.fn();

            const { result } = renderHook(
                () => useMany({ resource: "posts", ids: ["1", "2"] }),
                {
                    wrapper: TestWrapper({
                        dataProvider: MockJSONServer,
                        resources: [{ name: "posts" }],
                        liveProvider: {
                            unsubscribe: jest.fn(),
                            subscribe: onSubscribeMock,
                        },
                        refineProvider: {
                            ...mockRefineProvider,
                            liveMode: "auto",
                        },
                    }),
                },
            );

            await waitFor(() => {
                expect(!result.current.isLoading).toBeTruthy();
            });

            expect(onSubscribeMock).toBeCalled();
            expect(onSubscribeMock).toHaveBeenCalledWith({
                channel: "resources/posts",
                callback: expect.any(Function),
                params: expect.objectContaining({
                    ids: ["1", "2"],
                    resource: "posts",
                    subscriptionType: "useMany",
                }),
                types: ["*"],
            });
        });

        it("liveMode = Off useSubscription", async () => {
            const onSubscribeMock = jest.fn();

            const { result } = renderHook(
                () => useMany({ resource: "posts", ids: ["1", "2"] }),
                {
                    wrapper: TestWrapper({
                        dataProvider: MockJSONServer,
                        resources: [{ name: "posts" }],
                        liveProvider: {
                            unsubscribe: jest.fn(),
                            subscribe: onSubscribeMock,
                        },
                        refineProvider: {
                            ...mockRefineProvider,
                            liveMode: "off",
                        },
                    }),
                },
            );

            await waitFor(() => {
                expect(!result.current.isLoading).toBeTruthy();
            });

            expect(onSubscribeMock).not.toBeCalled();
        });

        it("liveMode = Off and liveMode hook param auto", async () => {
            const onSubscribeMock = jest.fn();

            const { result } = renderHook(
                () =>
                    useMany({
                        resource: "posts",
                        ids: ["1", "2"],
                        liveMode: "auto",
                    }),
                {
                    wrapper: TestWrapper({
                        dataProvider: MockJSONServer,
                        resources: [{ name: "posts" }],
                        liveProvider: {
                            unsubscribe: jest.fn(),
                            subscribe: onSubscribeMock,
                        },
                        refineProvider: {
                            ...mockRefineProvider,
                            liveMode: "off",
                        },
                    }),
                },
            );

            await waitFor(() => {
                expect(!result.current.isLoading).toBeTruthy();
            });

            expect(onSubscribeMock).toBeCalled();
        });

        it("unsubscribe call on unmount", async () => {
            const onSubscribeMock = jest.fn(() => true);
            const onUnsubscribeMock = jest.fn();

            const { unmount } = renderHook(
                () => useMany({ resource: "posts", ids: ["1", "2"] }),
                {
                    wrapper: TestWrapper({
                        dataProvider: MockJSONServer,
                        resources: [{ name: "posts" }],
                        liveProvider: {
                            unsubscribe: onUnsubscribeMock,
                            subscribe: onSubscribeMock,
                        },
                        refineProvider: {
                            ...mockRefineProvider,
                            liveMode: "auto",
                        },
                    }),
                },
            );

            expect(onSubscribeMock).toBeCalled();

            unmount();
            expect(onUnsubscribeMock).toBeCalledWith(true);
            expect(onUnsubscribeMock).toBeCalledTimes(1);
        });

        it("should not subscribe if `queryOptions.enabled` is false", async () => {
            const onSubscribeMock = jest.fn();

            renderHook(
                () =>
                    useMany({
                        resource: "posts",
                        ids: ["1", "2"],
                        queryOptions: {
                            enabled: false,
                        },
                    }),
                {
                    wrapper: TestWrapper({
                        dataProvider: MockJSONServer,
                        resources: [{ name: "posts" }],
                        liveProvider: {
                            unsubscribe: jest.fn(),
                            subscribe: onSubscribeMock,
                        },
                        refineProvider: {
                            ...mockRefineProvider,
                            liveMode: "auto",
                        },
                    }),
                },
            );

            expect(onSubscribeMock).not.toBeCalled();
        });
    });

    it("should use `getOne` method if does not exist `getMany` method in dataProvider", async () => {
        const getOneMock = jest.fn();

        const { result } = renderHook(
            () =>
                useMany({
                    resource: "posts",
                    ids: ["1", "2"],
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: {
                        default: {
                            ...MockJSONServer.default,
                            getOne: getOneMock,
                            getMany: undefined,
                        },
                    },
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await waitFor(() => {
            expect(result.current.isLoading).toBeFalsy();
        });

        expect(getOneMock).toBeCalledTimes(2);
        expect(getOneMock).toHaveBeenNthCalledWith(
            1,
            expect.objectContaining({
                resource: "posts",
                id: "1",
            }),
        );
        expect(getOneMock).toHaveBeenNthCalledWith(
            2,
            expect.objectContaining({
                resource: "posts",
                id: "2",
            }),
        );
    });

    describe("useNotification", () => {
        it("should call `open` from the notification provider on error", async () => {
            const getManyMock = jest.fn().mockRejectedValue(new Error("Error"));
            const notificationMock = jest.fn();

            const { result } = renderHook(
                () =>
                    useMany({
                        resource: "posts",
                        ids: ["1", "2"],
                    }),
                {
                    wrapper: TestWrapper({
                        dataProvider: {
                            default: {
                                ...MockJSONServer.default,
                                getMany: getManyMock,
                            },
                        },
                        notificationProvider: {
                            open: notificationMock,
                        },
                        resources: [{ name: "posts" }],
                    }),
                },
            );

            await waitFor(() => {
                expect(result.current.isError).toBeTruthy();
            });

            expect(notificationMock).toBeCalledWith({
                description: "Error",
                key: "1-posts-getMany-notification",
                message: "Error (status code: undefined)",
                type: "error",
            });
        });

        it("should call `open` from notification provider on success with custom notification params", async () => {
            const openNotificationMock = jest.fn();

            const { result } = renderHook(
                () =>
                    useMany({
                        resource: "posts",
                        ids: ["1", "2"],
                        successNotification: () => ({
                            message: "Success",
                            description: "Successfully created post",
                            type: "success",
                        }),
                    }),
                {
                    wrapper: TestWrapper({
                        dataProvider: MockJSONServer,
                        notificationProvider: {
                            open: openNotificationMock,
                        },
                        resources: [{ name: "posts" }],
                    }),
                },
            );

            await waitFor(() => {
                expect(result.current.isSuccess).toBeTruthy();
            });

            expect(openNotificationMock).toBeCalledWith({
                description: "Successfully created post",
                message: "Success",
                type: "success",
            });
        });

        it("should call `open` from notification provider on error with custom notification params", async () => {
            const getManyMock = jest.fn().mockRejectedValue(new Error("Error"));
            const openNotificationMock = jest.fn();

            const { result } = renderHook(
                () =>
                    useMany({
                        resource: "posts",
                        ids: ["1", "2"],
                        errorNotification: () => ({
                            message: "Error",
                            description: "There was an error creating post",
                            type: "error",
                        }),
                    }),
                {
                    wrapper: TestWrapper({
                        dataProvider: {
                            default: {
                                ...MockJSONServer.default,
                                getMany: getManyMock,
                            },
                        },
                        notificationProvider: {
                            open: openNotificationMock,
                        },
                        resources: [{ name: "posts" }],
                    }),
                },
            );

            await waitFor(() => {
                expect(result.current.isError).toBeTruthy();
            });

            expect(openNotificationMock).toBeCalledWith({
                description: "There was an error creating post",
                message: "Error",
                type: "error",
            });
        });
    });

    describe("useOnError", () => {
        it("should call `onError` from the auth provider on error", async () => {
            const getManyMock = jest.fn().mockRejectedValue(new Error("Error"));
            const onErrorMock = jest.fn();

            const { result } = renderHook(
                () =>
                    useMany({
                        resource: "posts",
                        ids: ["1", "2"],
                    }),
                {
                    wrapper: TestWrapper({
                        dataProvider: {
                            default: {
                                ...MockJSONServer.default,
                                getMany: getManyMock,
                            },
                        },
                        authProvider: {
                            onError: onErrorMock,
                        } as any,
                        resources: [{ name: "posts" }],
                    }),
                },
            );

            await waitFor(() => {
                expect(result.current.isError).toBeTruthy();
            });

            expect(onErrorMock).toBeCalledWith(new Error("Error"));
        });

        it("should call `checkError` from the legacy auth provider on error", async () => {
            const getManyMock = jest.fn().mockRejectedValue(new Error("Error"));
            const onErrorMock = jest.fn();

            const { result } = renderHook(
                () =>
                    useMany({
                        resource: "posts",
                        ids: ["1", "2"],
                    }),
                {
                    wrapper: TestWrapper({
                        dataProvider: {
                            default: {
                                ...MockJSONServer.default,
                                getMany: getManyMock,
                            },
                        },
                        legacyAuthProvider: {
                            checkError: onErrorMock,
                        },
                        resources: [{ name: "posts" }],
                    }),
                },
            );

            await waitFor(() => {
                expect(result.current.isError).toBeTruthy();
            });

            expect(onErrorMock).toBeCalledWith(new Error("Error"));
        });
    });

    describe("queryOptions", () => {
        it("should run `queryOptions.onSuccess` callback on success", async () => {
            const onSuccessMock = jest.fn();
            const getManyMock = jest.fn().mockResolvedValue({
                data: [{ id: 1, title: "foo" }],
            });

            const { result } = renderHook(
                () =>
                    useMany({
                        resource: "posts",
                        ids: ["1", "2"],
                        queryOptions: {
                            onSuccess: onSuccessMock,
                        },
                    }),
                {
                    wrapper: TestWrapper({
                        dataProvider: {
                            default: {
                                ...MockJSONServer.default,
                                getMany: getManyMock,
                            },
                        },
                        resources: [{ name: "posts" }],
                    }),
                },
            );

            await waitFor(() => {
                expect(result.current.isSuccess).toBeTruthy();
            });

            expect(onSuccessMock).toBeCalledWith({
                data: [{ id: 1, title: "foo" }],
            });
        });

        it("should run `queryOptions.onError` callback on error", async () => {
            const onErrorMock = jest.fn();
            const getManyMcok = jest.fn().mockRejectedValue(new Error("Error"));

            const { result } = renderHook(
                () =>
                    useMany({
                        resource: "posts",
                        ids: ["1", "2"],
                        queryOptions: {
                            onError: onErrorMock,
                        },
                    }),
                {
                    wrapper: TestWrapper({
                        dataProvider: {
                            default: {
                                ...MockJSONServer.default,
                                getMany: getManyMcok,
                            },
                        },
                        resources: [{ name: "posts" }],
                    }),
                },
            );

            await waitFor(() => {
                expect(result.current.isError).toBeTruthy();
            });

            expect(onErrorMock).toBeCalledWith(new Error("Error"));
        });
    });

    it("should select correct dataProviderName", async () => {
        const getManyDefaultMock = jest.fn().mockResolvedValue({
            data: [{ id: 1, title: "foo" }],
        });
        const getManyFooMock = jest.fn().mockResolvedValue({
            data: [{ id: 1, title: "foo" }],
        });

        const { result } = renderHook(
            () =>
                useMany({
                    resource: "posts",
                    ids: ["1", "2"],
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: {
                        default: {
                            ...MockJSONServer.default,
                            getMany: getManyDefaultMock,
                        },
                        foo: {
                            ...MockJSONServer.default,
                            getMany: getManyFooMock,
                        },
                    },
                    resources: [
                        {
                            name: "categories",
                        },
                        {
                            name: "posts",
                            meta: {
                                dataProviderName: "foo",
                            },
                        },
                    ],
                }),
            },
        );

        await waitFor(() => {
            expect(result.current.isSuccess).toBeTruthy();
        });

        expect(getManyFooMock).toBeCalledWith(
            expect.objectContaining({
                resource: "posts",
            }),
        );
        expect(getManyDefaultMock).not.toBeCalled();
    });

    it("should get correct `meta` of related resource", async () => {
        const getManyMock = jest.fn().mockResolvedValue({
            data: [{ id: 1, title: "foo" }],
        });

        const { result } = renderHook(
            () =>
                useMany({
                    resource: "posts",
                    ids: ["1", "2"],
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: {
                        default: {
                            ...MockJSONServer.default,
                            getMany: getManyMock,
                        },
                    },
                    resources: [
                        {
                            name: "posts",
                            meta: {
                                foo: "bar",
                            },
                        },
                    ],
                }),
            },
        );

        await waitFor(() => {
            expect(result.current.isSuccess).toBeTruthy();
        });

        expect(getManyMock).toBeCalledWith(
            expect.objectContaining({
                meta: expect.objectContaining({
                    foo: "bar",
                }),
            }),
        );
    });

    describe("when passing `identifier` instead of `name`", () => {
        it("should select correct dataProviderName", async () => {
            const getManyDefaultMock = jest.fn().mockResolvedValue({
                data: [{ id: 1, title: "foo" }],
            });
            const getManyFooMock = jest.fn().mockResolvedValue({
                data: [{ id: 1, title: "foo" }],
            });

            const { result } = renderHook(
                () =>
                    useMany({
                        resource: "featured-posts",
                        ids: ["1", "2"],
                    }),
                {
                    wrapper: TestWrapper({
                        dataProvider: {
                            default: {
                                ...MockJSONServer.default,
                                getMany: getManyDefaultMock,
                            },
                            foo: {
                                ...MockJSONServer.default,
                                getMany: getManyFooMock,
                            },
                        },
                        resources: [
                            {
                                name: "posts",
                            },
                            {
                                name: "posts",
                                identifier: "featured-posts",
                                meta: {
                                    dataProviderName: "foo",
                                },
                            },
                        ],
                    }),
                },
            );

            await waitFor(() => {
                expect(result.current.isSuccess).toBeTruthy();
            });

            expect(getManyFooMock).toBeCalledWith(
                expect.objectContaining({
                    resource: "posts",
                }),
            );
            expect(getManyDefaultMock).not.toBeCalled();
        });

        it("should create queryKey with `identifier`", async () => {
            const getManyMock = jest.fn().mockResolvedValue({
                data: [{ id: 1, title: "foo" }],
            });

            const { result } = renderHook(
                () =>
                    useMany({
                        resource: "featured-posts",
                        ids: ["1", "2"],
                    }),
                {
                    wrapper: TestWrapper({
                        dataProvider: {
                            default: {
                                ...MockJSONServer.default,
                                getMany: getManyMock,
                            },
                        },
                        resources: [
                            {
                                name: "posts",
                                identifier: "featured-posts",
                            },
                        ],
                    }),
                },
            );

            await waitFor(() => {
                expect(result.current.isSuccess).toBeTruthy();
            });

            expect(getManyMock).toBeCalledWith(
                expect.objectContaining({
                    meta: expect.objectContaining({
                        queryContext: expect.objectContaining({
                            queryKey: [
                                "default",
                                "featured-posts",
                                "getMany",
                                ["1", "2"],
                                expect.any(Object),
                            ],
                        }),
                    }),
                }),
            );
        });

        it("should get correct `meta` of related resource", async () => {
            const getManyMock = jest.fn().mockResolvedValue({
                data: [{ id: 1, title: "foo" }],
            });

            const { result } = renderHook(
                () =>
                    useMany({
                        resource: "featured-posts",
                        ids: ["1", "2"],
                    }),
                {
                    wrapper: TestWrapper({
                        dataProvider: {
                            default: {
                                ...MockJSONServer.default,
                                getMany: getManyMock,
                            },
                        },
                        resources: [
                            {
                                name: "posts",
                                identifier: "all-posts",
                                meta: {
                                    foo: "bar",
                                },
                            },
                            {
                                name: "posts",
                                identifier: "featured-posts",
                                meta: {
                                    bar: "baz",
                                },
                            },
                        ],
                    }),
                },
            );

            await waitFor(() => {
                expect(result.current.isSuccess).toBeTruthy();
            });

            expect(getManyMock).toBeCalledWith(
                expect.objectContaining({
                    meta: expect.objectContaining({
                        bar: "baz",
                    }),
                }),
            );
        });
    });
});
