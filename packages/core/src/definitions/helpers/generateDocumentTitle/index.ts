import { IResourceItem } from "@contexts/resource";
import capitalize from "lodash/capitalize";
import { useUserFriendlyName } from "../useUserFriendlyName";

/**
 * Generates document title for the given resource and action.
 */
export function generateDefaultDocumentTitle(
    translate: {
        (
            key: string,
            options?: any,
            defaultMessage?: string | undefined,
        ): string;
        (key: string, defaultMessage?: string | undefined): string;
    },
    resource?: IResourceItem,
    action?: string,
    id?: string,
) {
    const getUserFriendlyName = useUserFriendlyName();

    const actionPrefixMatcher = {
        create: "Create new ",
        clone: `#${id ?? ""} Clone `,
        edit: `#${id ?? ""} Edit `,
        show: `#${id ?? ""} Show `,
        list: "",
    };

    const identifier = resource?.identifier ?? resource?.name;

    const resourceName =
        resource?.label ??
        resource?.meta?.label ??
        capitalize(
            getUserFriendlyName(
                identifier,
                action === "list" ? "plural" : "singular",
            ),
        );

    const defaultTitle = translate("documentTitle.default", "refine");
    const suffix = translate("documentTitle.suffix", " | refine");
    let autoGeneratedTitle = defaultTitle;

    if (action && identifier) {
        autoGeneratedTitle = translate(
            `documentTitle.${identifier}.${action}`,
            { id },
            `${
                actionPrefixMatcher[
                    action as keyof typeof actionPrefixMatcher
                ] ?? ""
            }${resourceName}${suffix}`,
        );
    }

    return autoGeneratedTitle;
}
