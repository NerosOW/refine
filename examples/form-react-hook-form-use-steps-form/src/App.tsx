import { GitHubBanner, Refine, ErrorComponent } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, {
    NavigateToResource,
    UnsavedChangesNotifier,
    DocumentTitleHandler,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PostCreate, PostEdit, PostList } from "pages/posts";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <GitHubBanner />
            <Refine
                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                routerProvider={routerProvider}
                resources={[
                    {
                        name: "blog_posts",
                        list: "/blog-posts",
                        create: "/blog-posts/create",
                        edit: "/blog-posts/edit/:id",
                    },
                ]}
                options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                }}
            >
                <Routes>
                    <Route
                        index
                        element={<NavigateToResource resource="blog_posts" />}
                    />

                    <Route path="/blog-posts">
                        <Route index element={<PostList />} />
                        <Route path="create" element={<PostCreate />} />
                        <Route path="edit/:id" element={<PostEdit />} />
                    </Route>

                    <Route path="*" element={<ErrorComponent />} />
                </Routes>
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
            </Refine>
        </BrowserRouter>
    );
};

export default App;
