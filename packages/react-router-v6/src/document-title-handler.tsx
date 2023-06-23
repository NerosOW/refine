import {
    Action,
    IResourceItem,
    useParsed,
    useTranslate,
    generateDefaultDocumentTitle,
    useUserFriendlyName,
} from "@refinedev/core";
import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import capitalize from "lodash/capitalize";

type Props = {
    handler?: (options: {
        resource?: IResourceItem;
        action?: Action;
        params?: Record<string, string | undefined>;
        pathname?: string;
        autoGeneratedTitle: string;
    }) => string;
};

export function DocumentTitleHandler({ handler }: Props) {
    const location = useLocation();
    const { action, id, params, pathname, resource } = useParsed();
    const translate = useTranslate();
    const getUserFriendlyName = useUserFriendlyName();

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

    useLayoutEffect(() => {
        const autoGeneratedTitle = generateDefaultDocumentTitle(
            translate,
            resource!,
            action,
            id + "",
            resourceName,
        );
        if (handler) {
            document.title = handler({
                action,
                resource,
                params,
                pathname,
                autoGeneratedTitle,
            });
        } else {
            document.title = autoGeneratedTitle;
        }
    }, [location]);

    return <></>;
}
