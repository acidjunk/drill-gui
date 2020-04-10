import {
    EuiPage,
    EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
    EuiPageContentHeader,
    EuiPageContentHeaderSection,
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiTitle,
} from "@elastic/eui";
import React from "react";

export default () => (
    <EuiPage>
        <EuiPageBody component="div">
            <EuiPageHeader>
                <EuiPageHeaderSection>
                    <EuiTitle size="l">
                        <h1>Drill GUI</h1>
                    </EuiTitle>
                </EuiPageHeaderSection>
            </EuiPageHeader>
            <EuiPageContent>
                <EuiPageContentBody>
                    <EuiTitle size="s">
                        <h2>Grid</h2>
                    </EuiTitle>
                    <p>not implemented yet</p>
                </EuiPageContentBody>
            </EuiPageContent>
        </EuiPageBody>
    </EuiPage>
);
