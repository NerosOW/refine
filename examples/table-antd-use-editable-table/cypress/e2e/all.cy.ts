/// <reference types="cypress" />
/// <reference types="../../cypress/support" />

describe("table-antd-use-update-many", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("should be view list page", () => {
        cy.resourceList();
    });

    it("should be show form when click on the row", () => {
        cy.getAntdLoadingOverlay().should("not.exist");

        cy.get(".ant-table-row").first().click();

        cy.get("#title").should("exist");
        cy.getSaveButton().should("exist");
        cy.get(".ant-btn-default").contains("Cancel").should("exist");
    });

    it("cancel button should be close the form", () => {
        cy.getAntdLoadingOverlay().should("not.exist");

        cy.get(".ant-table-row").first().click();

        cy.get("#title").should("exist");

        cy.get(".ant-btn-default").contains("Cancel").click();

        cy.get("#title").should("not.exist");

        cy.get(".ant-btn-default").contains("Cancel").should("not.exist");
        cy.getSaveButton().should("not.exist");
    });

    it("the form should be close when submit the form", () => {
        cy.getAntdLoadingOverlay().should("not.exist");

        cy.get(".ant-table-row").first().click();

        cy.get("#title").should("exist");

        cy.interceptPATCHBlogPost();

        cy.getSaveButton().first().click();

        cy.get("#title").should("not.exist");
        cy.get(".ant-btn-default").contains("Cancel").should("not.exist");
        cy.getSaveButton().should("not.exist");
    });

    it("should fill the form with the row data when click the edit button and save the form", () => {
        cy.getAntdLoadingOverlay().should("not.exist");

        cy.interceptGETBlogPost();

        cy.getEditButton().first().click();

        cy.get("#title").should("exist");

        cy.wait("@getBlogPost").then((interception) => {
            const { response } = interception;
            const data = response?.body;

            cy.get("#title").should("have.value", data.title);
        });

        cy.get("#title").clear().type("Fuga eos enim autem eos.");

        cy.interceptPATCHBlogPost();

        cy.getSaveButton().first().click();

        cy.wait("@patchBlogPost").then((interception) => {
            const { request } = interception;
            const data = request.body;

            expect(data.title).to.equal("Fuga eos enim autem eos.");
        });
    });
});
