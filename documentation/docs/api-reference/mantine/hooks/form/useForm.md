---
id: useForm
title: useForm
sidebar_label: useForm
source: packages/mantine/src/hooks/form/useForm/index.ts
---

```tsx live shared
import React from "react";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender } from "@tanstack/react-table";

import {
    Edit as MantineEdit,
    Create as MantineCreate,
    List as MantineList,
    useTable as useMantineTable,
    EditButton as MantineEditButton,
    CloneButton as MantineCloneButton,
} from "@refinedev/mantine";
import {
    Input as MantineInput,
    Box as MantineBox,
    Group as MantineGroup,
    ScrollArea as MantineScrollArea,
    Table as MantineTable,
    Pagination as MantinePagination,
    TextInput as MantineTextInput,
    Text as MantineText,
    Textarea as MantineTextarea,
} from "@mantine/core";

interface IPost {
    id: number;
    title: string;
    content: string;
}

const PostList: React.FC = () => {
    const columns = React.useMemo<ColumnDef<IPost>[]>(
        () => [
            {
                id: "id",
                header: "ID",
                accessorKey: "id",
            },
            {
                id: "title",
                header: "Title",
                accessorKey: "title",
                meta: {
                    filterOperator: "contains",
                },
            },

            {
                id: "actions",
                header: "Actions",
                accessorKey: "id",
                enableColumnFilter: false,
                enableSorting: false,
                cell: function render({ getValue }) {
                    return (
                        <MantineGroup spacing="xs" noWrap>
                            <MantineEditButton
                                hideText
                                recordItemId={getValue() as number}
                            />
                            <MantineCloneButton
                                hideText
                                recordItemId={getValue() as number}
                            />
                        </MantineGroup>
                    );
                },
            },
        ],
        [],
    );

    const {
        getHeaderGroups,
        getRowModel,
        refineCore: { setCurrent, pageCount, current },
    } = useTable({
        columns,
    });

    return (
        <MantineScrollArea>
            <MantineList>
                <MantineTable highlightOnHover>
                    <thead>
                        {getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <th key={header.id}>
                                            {!header.isPlaceholder && (
                                                <MantineGroup
                                                    spacing="xs"
                                                    noWrap
                                                >
                                                    <MantineBox>
                                                        {flexRender(
                                                            header.column
                                                                .columnDef
                                                                .header,
                                                            header.getContext(),
                                                        )}
                                                    </MantineBox>
                                                </MantineGroup>
                                            )}
                                        </th>
                                    );
                                })}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {getRowModel().rows.map((row) => {
                            return (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => {
                                        return (
                                            <td key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext(),
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </MantineTable>
                <br />
                <MantinePagination
                    position="right"
                    total={pageCount}
                    page={current}
                    onChange={setCurrent}
                />
            </MantineList>
        </MantineScrollArea>
    );
};

const PostEdit: React.FC = () => {
    const { saveButtonProps, getInputProps, errors } = useForm({
        initialValues: {
            title: "",
            content: "",
        },
        validate: {
            title: (value) =>
                value.length < 3 && "Title must be at least 3 characters",
            content: (value) =>
                value.length < 10 && "Content must be at least 10 characters",
        },
    });

    return (
        <MantineEdit saveButtonProps={saveButtonProps}>
            <form>
                <MantineTextInput
                    mt={8}
                    label="Title"
                    placeholder="Title"
                    withAsterisk
                    {...getInputProps("title")}
                />

                <MantineTextarea
                    label="Content"
                    placeholder="Content"
                    minRows={4}
                    maxRows={4}
                    withAsterisk
                    {...getInputProps("content")}
                />
            </form>
        </MantineEdit>
    );
};

const PostCreate: React.FC = () => {
    const { saveButtonProps, getInputProps, errors } = mantineUseForm({
        initialValues: {
            title: "",
            content: "",
        },
        validate: {
            title: (value) =>
                value.length < 3 && "Title must be at least 3 characters",
            content: (value) =>
                value.length < 10 && "Content must be at least 10 characters",
        },
    });

    return (
        <MantineCreate saveButtonProps={saveButtonProps}>
            <form>
                <MantineTextInput
                    mt={8}
                    label="Title"
                    placeholder="Title"
                    withAsterisk
                    {...getInputProps("title")}
                />
                <MantineTextarea
                    label="Content"
                    placeholder="Content"
                    minRows={4}
                    maxRows={4}
                    withAsterisk
                    {...getInputProps("content")}
                />
            </form>
        </MantineCreate>
    );
};
```

`useForm` is used to manage forms. It is based on [`Mantine useForm`][use-form-mantine] and [`refine useForm`][use-form-core] to supports all the features of these packages and adds some additional features.

<GeneralConceptsLink />

## Basic Usage

> For more detailed usage examples please refer to the [Mantine Form](https://mantine.dev/form/use-form/) documentation.

We'll show the basic usage of `useForm` by adding an editing form.

```tsx
import { Edit, useForm } from "@refinedev/mantine";
import { Select, TextInput } from "@mantine/core";

const PostEdit: React.FC = () => {
    const { saveButtonProps, getInputProps } = useForm({
        initialValues: {
            title: "",
            status: "",
        },
        validate: {
            title: (value) => (value.length < 2 ? "Too short title" : null),
            status: (value) =>
                value.length <= 0 ? "Status is required" : null,
        },
    });

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <form>
                <TextInput
                    mt={8}
                    label="Title"
                    placeholder="Title"
                    withAsterisk
                    {...getInputProps("title")}
                />
                <Select
                    mt={8}
                    label="Status"
                    placeholder="Pick one"
                    data={[
                        { label: "Published", value: "published" },
                        { label: "Draft", value: "draft" },
                        { label: "Rejected", value: "rejected" },
                    ]}
                    withAsterisk
                    {...getInputProps("status")}
                />
            </form>
        </Edit>
    );
};
```

In the example if you navigate to `/posts/edit/1234` it will manage the data of the post with id of `1234` in an editing context. See [Actions](/api-reference/core/hooks/useForm.md/#actions) on how `useForm` determines this is an editing context.

Since this is an edit form it will fill the form with the data of the post with id of `1234` and then the form will be ready to edit further and submit the changes.

Submit functionality is provided by `saveButtonProps` which includes all of the necessary props for a button to submit a form including automatically updating loading states.

:::tip
If you want to show a form in a modal or drawer where necessary route params might not be there you can use the [useModalForm](/docs/api-reference/mantine/hooks/form/useModalForm/) or the [useDrawerForm](/docs/api-reference/mantine/hooks/form/useDrawerForm/) hook.
:::

## Properties

### `action`

`useForm` can handle `edit`, `create` and `clone` actions.

:::tip
By default, it determines the `action` from route. The action is inferred by matching the resource's action path with the current route.

It can be overridden by passing the `action` prop where it isn't possible to determine the action from the route (e.g. when using form in a modal or using a custom route).
:::

<Tabs
defaultValue="create"
values={[
{label: 'create', value: 'create'},
{label: 'edit', value: 'edit'},
{label: 'clone', value: 'clone'}
]}>
<TabItem value="create">

`action: "create"` is used for creating a new record that didn't exist before.

`useForm` uses [`useCreate`](/docs/api-reference/core/hooks/data/useCreate/) under the hood for mutations on create mode.

In the following example, we'll show how to use `useForm` with `action: "create"`.

```tsx live url=http://localhost:3000/posts/create previewHeight=420px
setInitialRoutes(["/posts/create"]);

// visible-block-start
import React from "react";

import { Create, useForm } from "@refinedev/mantine";
import { Text, TextInput, Textarea } from "@mantine/core";

const PostCreatePage: React.FC = () => {
    const { saveButtonProps, getInputProps, errors } = useForm({
        initialValues: {
            title: "",
            content: "",
        },
        validate: {
            title: (value) =>
                value.length < 3 && "Title must be at least 3 characters",
            content: (value) =>
                value.length < 10 && "Content must be at least 10 characters",
        },
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <form>
                <TextInput
                    mt={8}
                    label="Title"
                    placeholder="Title"
                    withAsterisk
                    {...getInputProps("title")}
                />
                <Textarea
                    label="Content"
                    placeholder="Content"
                    minRows={4}
                    maxRows={4}
                    withAsterisk
                    {...getInputProps("content")}
                />
            </form>
        </Create>
    );
};
// visible-block-end

setRefineProps({
    resources: [
        {
            name: "posts",
            list: PostList,
            create: PostCreatePage,
            edit: PostEdit,
        },
    ],
});

render(<RefineMantineDemo />);
```

</TabItem>

<TabItem value="edit">

`action: "edit"` is used for editing an existing record. It requires the `id` for determining the record to edit. By default, it uses the `id` from the route. It can be changed with the `setId` function or `id` property.

It fetches the record data according to the `id` with [`useOne`](/docs/api-reference/core/hooks/data/useOne/) and returns the `queryResult` for you to fill the form. After the form is submitted, it updates the record with [`useUpdate`](/docs/api-reference/core/hooks/data/useUpdate/).

In the following example, we'll show how to use `useForm` with `action: "edit"`.

```tsx live url=http://localhost:3000/edit/123 previewHeight=420px
setInitialRoutes(["/posts/edit/123"]);

// visible-block-start
import React from "react";

import { Edit, useForm } from "@refinedev/mantine";
import { Text, TextInput, Textarea } from "@mantine/core";

const PostEditPage: React.FC = () => {
    const { saveButtonProps, getInputProps, errors } = useForm({
        initialValues: {
            title: "",
            content: "",
        },
        validate: {
            title: (value) =>
                value.length < 3 && "Title must be at least 3 characters",
            content: (value) =>
                value.length < 10 && "Content must be at least 10 characters",
        },
    });

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <form>
                <TextInput
                    mt={8}
                    label="Title"
                    placeholder="Title"
                    withAsterisk
                    {...getInputProps("title")}
                />
                <Textarea
                    label="Content"
                    placeholder="Content"
                    minRows={4}
                    maxRows={4}
                    withAsterisk
                    {...getInputProps("content")}
                />
            </form>
        </Edit>
    );
};
// visible-block-end

setRefineProps({
    resources: [
        {
            name: "posts",
            list: PostList,
            create: PostCreate,
            edit: PostEditPage,
        },
    ],
});

render(<RefineMantineDemo />);
```

</TabItem>

<TabItem value="clone">

`action: "clone"` is used for cloning an existing record. It requires the `id` for determining the record to clone. By default, it uses the `id` from the route. It can be changed with the `setId` function.

You can think `action:clone` like save as. It's similar to `action:edit` but it creates a new record instead of updating the existing one.

It fetches the record data according to the `id` with [`useOne`](/docs/api-reference/core/hooks/data/useOne/) and returns the `queryResult` for you to fill the form. After the form is submitted, it creates a new record with [`useCreate`](/docs/api-reference/core/hooks/data/useCreate/).

In the following example, we'll show how to use `useForm` with `action: "clone"`. You will see `action:clone` toggle at the top of the page. You can toggle it to set the action to `clone`.

```tsx live url=http://localhost:3000/clone/123 previewHeight=420px
setInitialRoutes(["/posts/clone/123"]);

// visible-block-start
import React from "react";

import { Create, useForm } from "@refinedev/mantine";
import { Text, TextInput, Textarea } from "@mantine/core";

const PostCreatePage: React.FC = () => {
    const { saveButtonProps, getInputProps, errors } = useForm({
        initialValues: {
            title: "",
            content: "",
        },
        validate: {
            title: (value) =>
                value.length < 3 && "Title must be at least 3 characters",
            content: (value) =>
                value.length < 10 && "Content must be at least 10 characters",
        },
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <form>
                <TextInput
                    mt={8}
                    label="Title"
                    placeholder="Title"
                    withAsterisk
                    {...getInputProps("title")}
                />
                <Textarea
                    label="Content"
                    placeholder="Content"
                    minRows={4}
                    maxRows={4}
                    withAsterisk
                    {...getInputProps("content")}
                />
            </form>
        </Create>
    );
};
// visible-block-end

setRefineProps({
    resources: [
        {
            name: "posts",
            list: PostList,
            create: PostCreatePage,
            edit: PostEdit,
        },
    ],
});

render(<RefineMantineDemo />);
```

</TabItem>

</Tabs>

### `resource`

> Default: It reads the `resource` value from the current URL.

It will be passed to the [`dataProvider`][data-provider]'s method as a params. This parameter is usually used to as a API endpoint path. It all depends on how to handle the `resource` in your [`dataProvider`][data-provider]. See the [`creating a data provider`](/api-reference/core/providers/data-provider.md#creating-a-data-provider) section for an example of how `resource` are handled.

-   When `action` is `"create"`, it will be passed to the [`create`][create] method from the [`dataProvider`][data-provider].
-   When `action` is `"edit"`, it will be passed to the [`update`][update] and the [`getOne`][get-one] method from the [`dataProvider`][data-provider].
-   When `action` is `"clone"`, it will be passed to the [`create`][create] and the [`getOne`][get-one] method from the [`dataProvider`][data-provider].

```tsx
useForm({
    refineCoreProps: {
        resource: "categories",
    },
});
```

:::caution

If the `resource` is passed, the `id` from the current URL will be ignored because it may belong to a different resource. To retrieve the `id` value from the current URL, use the `useParsed` hook and pass the `id` value to the `useForm` hook.

```tsx
import { useForm } from "@refinedev/mantine";
import { useParsed } from "@refinedev/core";

const { id } = useParsed();

useForm({
    refineCoreProps: {
        resource: "custom-resource",
        id,
    },
});
```

Or you can use the `setId` function to set the `id` value.

```tsx
import { useForm } from "@refinedev/mantine";

const {
    refineCore: { setId },
} = useForm({
    refineCoreProps: {
        resource: "custom-resource",
    },
});

setId("123");
```

:::

If you have multiple resources with the same name, you can pass the `identifier` instead of the `name` of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the `name` of the resource defined in the `<Refine/>` component.

> For more information, refer to the [`identifier` of the `<Refine/>` component documentation &#8594](/docs/api-reference/core/components/refine-config#identifier)

### `id`

`id` is used for determining the record to `edit` or `clone`. By default, it uses the `id` from the route. It can be changed with the `setId` function or `id` property.

It is useful when you want to `edit` or `clone` a `resource` from a different page.

> Note: `id` is required when `action: "edit"` or `action: "clone"`.

```tsx
useForm({
    refineCoreProps: {
        action: "edit", // or clone
        resource: "categories",
        id: 1, // <BASE_URL_FROM_DATA_PROVIDER>/categories/1
    },
});
```

### `redirect`

`redirect` is used for determining the page to redirect after the form is submitted. By default, it uses the `list`. It can be changed with the `redirect` property.

It can be set to `"show" | "edit" | "list" | "create"` or `false` to prevent the page from redirecting to the list page after the form is submitted.

```tsx
useForm({
    refineCoreProps: {
        redirect: false,
    },
});
```

### `onMutationSuccess`

It's a callback function that will be called after the mutation is successful.

It receives the following parameters:

-   `data`: Returned value from [`useCreate`](/docs/api-reference/core/hooks/data/useCreate/) or [`useUpdate`](/docs/api-reference/core/hooks/data/useUpdate/) depending on the `action`.
-   `variables`: The variables passed to the mutation.
-   `context`: react-query context.

```tsx
useForm({
    refineCoreProps: {
        onMutationSuccess: (data, variables, context) => {
            console.log({ data, variables, context });
        },
    },
});
```

### `onMutationError`

It's a callback function that will be called after the mutation is failed.

It receives the following parameters:

-   `data`: Returned value from [`useCreate`](/docs/api-reference/core/hooks/data/useCreate/) or [`useUpdate`](/docs/api-reference/core/hooks/data/useUpdate/) depending on the `action`.
-   `variables`: The variables passed to the mutation.
-   `context`: react-query context.

```tsx
useForm({
    refineCoreProps: {
        onMutationError: (data, variables, context) => {
            console.log({ data, variables, context });
        },
    },
});
```

### `invalidates`

You can use it to manage the invalidations that will occur at the end of the mutation.

By default it's invalidates following queries from the current `resource`:

-   on `create` or `clone` mode: `"list"` and `"many"`
-   on `"edit"` mode: `"list"`, `"many"` and `"detail"`

```tsx
useForm({
    refineCoreProps: {
        invalidates: ["list", "many", "detail"],
    },
});
```

### `dataProviderName`

If there is more than one `dataProvider`, you should use the `dataProviderName` that you will use.
It is useful when you want to use a different `dataProvider` for a specific resource.

:::tip
If you want to use a different `dataProvider` on all resource pages, you can use the [`dataProvider` prop ](docs/api-reference/core/components/refine-config/#dataprovidername) of the `<Refine>` component.
:::

```tsx
useForm({
    refineCoreProps: {
        dataProviderName: "second-data-provider",
    },
});
```

### `mutationMode`

Mutation mode determines which mode the mutation runs with. Mutations can run under three different modes: `pessimistic`, `optimistic` and `undoable`. Default mode is `pessimistic`.
Each mode corresponds to a different type of user experience.

> For more information about mutation modes, please check [Mutation Mode documentation](/docs/advanced-tutorials/mutation-mode) page.

```tsx
useForm({
    refineCoreProps: {
        mutationMode: "undoable", // "pessimistic" | "optimistic" | "undoable",
    },
});
```

### `successNotification`

> [`NotificationProvider`][notification-provider] is required for this prop to work.

After form is submitted successfully, `useForm` will call `open` function from [`NotificationProvider`][notification-provider] to show a success notification. With this prop, you can customize the success notification.

```tsx
useForm({
    refineCoreProps: {
        successNotification: (data, values, resource) => {
            return {
                message: `Post Successfully created with ${data.title}`,
                description: "Success with no errors",
                type: "success",
            };
        },
    },
});
```

### `errorNotification`

> [`NotificationProvider`][notification-provider] is required for this prop to work.

After form is submit is failed, `useForm` will call `open` function from [`NotificationProvider`][notification-provider] to show a success notification. With this prop, you can customize the success notification.

```tsx
useForm({
    refineCoreProps: {
        action: "create",
        resource: "post",
        errorNotification: (data, values, resource) => {
            return {
                message: `Something went wrong when deleting ${data.id}`,
                description: "Error",
                type: "error",
            };
        },
    },
});
```

```json title="Default values"
{
    "message": "Error when updating <resource-name> (status code: ${err.statusCode})" or "Error when creating <resource-name> (status code: ${err.statusCode})",
    "description": "Error",
    "type": "error",
}
```

### `meta`

`meta` is a special property that can be used to pass additional information to data provider methods for the following purposes:

-   Customizing the data provider methods for specific use cases.
-   Generating GraphQL queries using plain JavaScript Objects (JSON).
-   Providing additional parameters to the redirection path after the form is submitted.

[Refer to the `meta` section of the General Concepts documentation for more information &#8594](/docs/api-reference/general-concepts/#meta)

In the following example, we pass the `headers` property in the `meta` object to the `create` method. With similar logic, you can pass any properties to specifically handle the data provider methods.

```tsx
useForm({
    refineCoreProps: {
        meta: {
            headers: { "x-meta-data": "true" },
        },
    },
});

const myDataProvider = {
    //...
    // highlight-start
    create: async ({ resource, variables, meta }) => {
        const headers = meta?.headers ?? {};
        // highlight-end
        const url = `${apiUrl}/${resource}`;

        // highlight-next-line
        const { data } = await httpClient.post(url, variables, { headers });

        return {
            data,
        };
    },
    //...
};
```

### `queryMeta`

In addition to the [`meta`](#meta) property, you can also pass the `queryMeta` property to the `useForm` hook. This property is used to pass additional information to the `useOne` hook that is used to fetch the data in the `edit` and `clone` modes. This is useful when you have to apply different values to the `useOne` hook from the `useCreate` or `useUpdate` hook mutations.

```tsx
useForm({
    queryMeta: {
        querySpecificValue: "someValue",
    },
});
```

:::tip
If you have overlapping properties in both `meta` and `queryMeta`, the `queryMeta` property will be used.
:::

### `mutationMeta`

In addition to the [`meta`](#meta) property, you can also pass the `mutationMeta` property to the `useForm` hook. This property is used to pass additional information to the `useCreate` or `useUpdate` hook mutations. This is useful when you have to apply different values to the `useCreate` or `useUpdate` hooks from the `useOne` hook query.

```tsx
useForm({
    mutationMeta: {
        mutationSpecificValue: "someValue",
    },
});
```

:::tip
If you have overlapping properties in both `meta` and `mutationMeta`, the `mutationMeta` property will be used.
:::

### `queryOptions`

> Works only in `action: "edit"` or `action: "clone"` mode.

in `edit` or `clone` mode, `refine` uses [`useOne`](/docs/api-reference/core/hooks/data/useOne/) hook to fetch data. You can pass [`queryOptions`](https://tanstack.com/query/v4/docs/react/reference/useQuery) options by passing `queryOptions` property.

```tsx
useForm({
    refineCoreProps: {
        queryOptions: {
            retry: 3,
        },
    },
});
```

### `createMutationOptions`

> This option is only available when `action: "create"` or `action: "clone"`.

In `create` or `clone` mode, **refine** uses [`useCreate`](/docs/api-reference/core/hooks/data/useCreate/) hook to create data. You can pass [`mutationOptions`](https://tanstack.com/query/v4/docs/react/reference/useMutation) by passing `createMutationOptions` property.

```tsx
useForm({
    refineCoreProps: {
        queryOptions: {
            retry: 3,
        },
    },
});
```

### `updateMutationOptions`

> This option is only available when `action: "edit"`.

In `edit` mode, **refine** uses [`useUpdate`](/docs/api-reference/core/hooks/data/useUpdate/) hook to update data. You can pass [`mutationOptions`](https://tanstack.com/query/v4/docs/react/reference/useMutation) by passing `updateMutationOptions` property.

```tsx
useForm({
    refineCoreProps: {
        queryOptions: {
            retry: 3,
        },
    },
});
```

### `warnWhenUnsavedChanges`

> Default: `false`

When it's true, Shows a warning when the user tries to leave the page with unsaved changes. It can be used to prevent the user from accidentally leaving the page.

It can be set globally in [`refine config`](/docs/api-reference/core/components/refine-config/#warnwhenunsavedchanges).

```tsx
useForm({
    refineCoreProps: {
        warnWhenUnsavedChanges: true,
    },
});
```

### `liveMode`

Whether to update data automatically ("auto") or not ("manual") if a related live event is received. It can be used to update and show data in Realtime throughout your app.
For more information about live mode, please check [Live / Realtime](/docs/api-reference/core/providers/live-provider/#livemode) page.

```tsx
useForm({
    refineCoreProps: {
        liveMode: "auto",
    },
});
```

### `onLiveEvent`

The callback function that is executed when new events from a subscription are arrived.

```tsx
useForm({
    refineCoreProps: {
        onLiveEvent: (event) => {
            console.log(event);
        },
    },
});
```

### `liveParams`

Params to pass to [liveProvider's](/docs/api-reference/core/providers/live-provider/#subscribe) subscribe method.

### `overtimeOptions`

If you want loading overtime for the request, you can pass the `overtimeOptions` prop to the this hook. It is useful when you want to show a loading indicator when the request takes too long.
`interval` is the time interval in milliseconds. `onInterval` is the function that will be called on each interval. 

Return `overtime` object from this hook. `elapsedTime` is the elapsed time in milliseconds. It becomes `undefined` when the request is completed.

```tsx
const { overtime } = useForm({
    //...
    overtimeOptions: {
        interval: 1000,
        onInterval(elapsedInterval) {
            console.log(elapsedInterval);
        },
    }
});

console.log(overtime.elapsedTime); // undefined, 1000, 2000, 3000 4000, ...

// You can use it like this:
{elapsedTime >= 4000 && <div>this takes a bit longer than expected</div>}
```
## Return Values

:::tip
All [`mantine useForm`][use-form-mantine] and [`core useForm`][use-form-core] return values also available in `useForm`.
:::

### `queryResult`

If the `action` is set to `"edit"` or `"clone"` or if a `resource` with an `id` is provided, `useForm` will call [`useOne`](/docs/api-reference/core/hooks/data/useOne/) and set the returned values as the `queryResult` property.

```tsx
const {
    refineCore: { queryResult },
} = useForm();

const { data } = queryResult;
```

### `mutationResult`

When in `"create"` or `"clone"` mode, `useForm` will call [`useCreate`](/docs/api-reference/core/hooks/data/useCreate/). When in `"edit"` mode, it will call [`useUpdate`](/docs/api-reference/core/hooks/data/useUpdate/) and set the resulting values as the `mutationResult` property."

```tsx
const {
    refineCore: { mutationResult },
} = useForm();

const { data } = mutationResult;
```

### `setId`

`useForm` determine `id` from the router. If you want to change the `id` dynamically, you can use `setId` function.

```tsx
const {
    refineCore: { id, setId },
} = useForm();

const handleIdChange = (id: string) => {
    setId(id);
};

return (
    <div>
        <input value={id} onChange={(e) => handleIdChange(e.target.value)} />
    </div>
);
```

### `redirect`

"By default, after a successful mutation, `useForm` will `redirect` to the `"list"` page. To redirect to a different page, you can either use the `redirect` function to programmatically specify the destination, or set the redirect [property](/docs/api-reference/core/hooks/useForm/#redirect) in the hook's options.

In the following example we will redirect to the `"show"` page after a successful mutation.

```tsx
const {
    refineCore: { onFinish, redirect },
} = useForm();

// --

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await onFinish(formValues);
    redirect("show", data?.data?.id);
};

// --
```

### `onFinish`

`onFinish` is a function that is called when the form is submitted. It will call the appropriate mutation based on the `action` property.
You can override the default behavior by passing an `onFinish` function in the hook's options.

For example you can [change values before sending to the API](/docs/api-reference/mantine/hooks/form/useForm/#how-can-i-change-the-form-data-before-submitting-it-to-the-api).

### `overtime`

`overtime` object is returned from this hook. `elapsedTime` is the elapsed time in milliseconds. It becomes `undefined` when the request is completed.

```tsx
const { overtime } = useForm();

console.log(overtime.elapsedTime); // undefined, 1000, 2000, 3000 4000, ...
```
## FAQ

### How can Invalidate other resources?

You can invalidate other resources with help of [`useInvalidate`](/docs/api-reference/core/hooks/invalidate/useInvalidate/) hook.

It is useful when you want to `invalidate` other resources don't have relation with the current resource.

```tsx
import React from "react";
import { useInvalidate } from "@refinedev/core";
import { useForm } from "@refinedev/mantine";

const PostEdit = () => {
    const invalidate = useInvalidate();

    useForm({
        refineCoreProps: {
            onMutationSuccess: (data, variables, context) => {
                invalidate({
                    resource: "users",
                    invalidates: ["resourceAll"],
                });
            },
        },
    });

    // ---
};
```

### How can I change the form data before submitting it to the API?

You may need to modify the form data before it is sent to the API.

For example, Let's send the values we received from the user in two separate inputs, `name` and `surname`, to the API as `fullName`.

```tsx title="pages/user/create.tsx"
import React from "react";
import { Create, useForm } from "@refinedev/mantine";
import { TextInput } from "@mantine/core";

const UserCreate: React.FC = () => {
    const { saveButtonProps, getInputProps } = useForm({
        initialValues: {
            name: "",
            surname: "",
        },
        // highlight-start
        transformValues: (values) => ({
            fullName: `${values.name} ${values.surname}`,
        }),
        // highlight-end
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <form>
                <TextInput
                    mt={8}
                    label="Name"
                    placeholder="Name"
                    {...getInputProps("name")}
                />
                <TextInput
                    mt={8}
                    label="Surname"
                    placeholder="Surname"
                    {...getInputProps("surname")}
                />
            </form>
        </Create>
    );
};
```

### How to pass `meta` values only for the mutation or query?

You can use `meta` property to pass common values to the mutation and the query. But in some cases, you may want to pass different values to the mutation and the query. To do this, you can use `mutationMeta` and `queryMeta` properties.

## API Reference

### Properties

It supports all the features of the [`useForm`][use-form-mantine] hook provided by `@mantine/form`.
Also, we added the following return values.

`refineCoreProps`: You can define all properties provided by [`useForm`][use-form-core] here. You can see all of them in [here](/api-reference/core/hooks/useForm.md#properties).

> For example, we can define the `refineCoreProps` property in the `useForm` hook as:

```tsx
import { useForm } from "@refinedev/mantine";

const { ... } = useForm({
    ..., // @mantine/form's useForm props
    refineCoreProps: {
        resource: "posts",
        redirect: false,
        //  @refinedev/core's useForm props
    },
});
```

### Return values

Returns all the return values of the [`useForm`][use-form-mantine] hook provided by `@mantine/form`. Also, we added the following return values.

`refineCore`: Returns all values returned by [`useForm`][use-form-core]. You can see all of them in [here](/api-reference/core/hooks/useForm.md##return-values).

> For example, we can access the `refineCore` return value in the `useForm` hook as:

```tsx
import { useForm } from "@refinedev/react-hook-form";

const {
    ..., // @mantine/form's useForm return values
    saveButtonProps,
    refineCore: {
        queryResult,
        ...  // @refinedev/core's useForm return values
    },
} = useForm({ ... });
```

| Property        | Description               | Type                                                                             |
| --------------- | ------------------------- | -------------------------------------------------------------------------------- |
| saveButtonProps | Props for a submit button | `{ disabled: boolean; onClick: (e: React.FormEvent<HTMLFormElement>) => void; }` |
| overtime        | Overtime loading props    | `{ elapsedTime?: number }`                                                       |

### Type Parameters

| Property       | Desription                                                                                                                                                          | Type                       | Default                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------------------------- |
| TQueryFnData   | Result data returned by the query function. Extends [`BaseRecord`][baserecord]                                                                                      | [`BaseRecord`][baserecord] | [`BaseRecord`][baserecord] |
| TError         | Custom error object that extends [`HttpError`][httperror]                                                                                                           | [`HttpError`][httperror]   | [`HttpError`][httperror]   |
| TVariables     | Form values for mutation function                                                                                                                                   | `{}`                       | `Record<string, unknown>`  |
| TTransformed   | Form values after transformation for mutation function                                                                                                              | `{}`                       | `TVariables`               |
| TData          | Result data returned by the `select` function. Extends [`BaseRecord`][baserecord]. If not specified, the value of `TQueryFnData` will be used as the default value. | [`BaseRecord`][baserecord] | `TQueryFnData`             |
| TResponse      | Result data returned by the mutation function. Extends [`BaseRecord`][baserecord]. If not specified, the value of `TData` will be used as the default value.        | [`BaseRecord`][baserecord] | `TData`                    |
| TResponseError | Custom error object that extends [`HttpError`][httperror]. If not specified, the value of `TError` will be used as the default value.                               | [`HttpError`][httperror]   | `TError`                   |

## Example

<CodeSandboxExample path="form-mantine-use-form" />

[use-form-core]: /api-reference/core/hooks/useForm.md
[use-form-mantine]: https://mantine.dev/form/use-form
[baserecord]: /api-reference/core/interfaces.md#baserecord
[httperror]: /api-reference/core/interfaces.md#httperror
[notification-provider]: /docs/api-reference/core/providers/notification-provider/
[get-one]: /docs/api-reference/core/providers/data-provider/#getone-
[create]: /docs/api-reference/core/providers/data-provider/#create-
[update]: /docs/api-reference/core/providers/data-provider/#update-
[data-provider]: /docs/api-reference/core/providers/data-provider
