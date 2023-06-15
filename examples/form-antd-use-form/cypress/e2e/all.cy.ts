/// <reference types="cypress" />
/// <reference types="../../cypress/support" />

describe("form-antd-use-form", () => {
    const BASE_URL = "http://localhost:3000";

    const mockPost = {
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        status: "Published",
    };

    const fillForm = () => {
        cy.get("#title").clear();
        cy.get("#title").type(mockPost.title);
        cy.get("#content textarea").clear();
        cy.get("#content textarea").type(mockPost.content);
        cy.setAntdDropdown({ id: "category_id", selectIndex: 0 });
        cy.setAntdSelect({ id: "status", value: mockPost.status });
    };

    const submitForm = () => {
        return cy.getSaveButton().click();
    };

    beforeEach(() => {
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();

        cy.interceptGETBlogPosts();
        cy.visit(BASE_URL);
    });

    it("should create form render errors", () => {
        cy.interceptGETBlogPost();

        cy.getCreateButton().click();

        submitForm();
        cy.getAntdFormItemError({ id: "title" }).contains(
            /please enter title/gi,
        );
        cy.getAntdFormItemError({ id: "content" }).contains(
            /please enter content/gi,
        );
        cy.getAntdFormItemError({ id: "category_id" }).contains(
            /please enter category/gi,
        );
        cy.getAntdFormItemError({ id: "status" }).contains(
            /please enter status/gi,
        );

        fillForm();

        cy.getAntdFormItemError({ id: "title" }).should("not.exist");
        cy.getAntdFormItemError({ id: "content" }).should("not.exist");
        cy.getAntdFormItemError({ id: "category_id" }).should("not.exist");
        cy.getAntdFormItemError({ id: "status" }).should("not.exist");
    });

    it("should edit form render errors", () => {
        cy.interceptGETBlogPost();

        cy.getEditButton().first().click();

        // wait loading state and render to be finished
        cy.wait("@getBlogPost");
        cy.getSaveButton().should("not.be.disabled");
        cy.getAntdLoadingOverlay().should("not.exist");

        cy.get("#title").should("not.have.value", "");
        cy.get("#title").clear();
        cy.get("#content textarea").should("not.have.value", "");
        cy.get("#content textarea").clear();

        cy.getAntdFormItemError({ id: "title" }).contains(
            /please enter title/gi,
        );
        cy.getAntdFormItemError({ id: "content" }).contains(
            /please enter content/gi,
        );

        fillForm();

        cy.getAntdFormItemError({ id: "title" }).should("not.exist");
        cy.getAntdFormItemError({ id: "content" }).should("not.exist");
    });

    it("should create form warn when unsaved changes", () => {
        cy.interceptGETBlogPost();

        cy.wait("@getBlogPosts");
        cy.getCreateButton().click();
        cy.get("#title").type("any value");
        cy.get(".ant-page-header-back-button > .ant-btn").click();
        cy.on("window:confirm", (str) => {
            expect(str).to.includes("You have unsaved changes");
        });
    });

    it("should edit form warn when unsaved changes", () => {
        cy.interceptGETBlogPost();

        cy.wait("@getBlogPosts");
        cy.getEditButton().first().click();

        // wait loading state and render to be finished
        cy.wait("@getBlogPost");
        cy.getSaveButton().should("not.be.disabled");
        cy.getAntdLoadingOverlay().should("not.exist");

        cy.get("#title").clear();
        cy.get("#title").type("any value");
        cy.get(".ant-page-header-back-button > .ant-btn").click();
        cy.on("window:confirm", (str) => {
            expect(str).to.includes("You have unsaved changes");
        });
    });
});
