import { EuiBottomBar, EuiButton, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import React, { Component } from "react";

import { loadProject } from "../api/client";
import Data from "../components/Data";
import Grid from "../components/Grid";

class ProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: [],
            selected: [],
        };
    }

    componentDidMount = () => {
        console.log("ExercisesDetailPage mounted, fetching data for project1 by default");
        this.loadProject("project1");
    };

    loadProject = (projectName) => {
        loadProject(projectName, (data) => {
            this.setState({
                data: data,
            });
        });
    };

    render() {
        return (
            <div className="project-container">
                <EuiFlexGroup gutterSize="xs">
                    <EuiFlexItem grow={7}>
                        <Grid />
                    </EuiFlexItem>
                    <EuiFlexItem grow={3}>
                        <Data data={this.state.data} />
                    </EuiFlexItem>
                </EuiFlexGroup>
                <EuiBottomBar paddingSize="s">
                    <EuiFlexGroup justifyContent="spaceBetween">
                        <EuiFlexItem grow={false}>
                            <EuiFlexGroup gutterSize="s">
                                <EuiFlexItem grow={false}>
                                    <EuiButton
                                        color="ghost"
                                        size="s"
                                        iconType="listAdd"
                                        onClick={() => this.loadProject("project1")}
                                    >
                                        project 1
                                    </EuiButton>
                                </EuiFlexItem>
                                <EuiFlexItem grow={false}>
                                    <EuiButton
                                        color="ghost"
                                        size="s"
                                        iconType="listAdd"
                                        onClick={() => this.loadProject("project2")}
                                    >
                                        project 2
                                    </EuiButton>
                                </EuiFlexItem>
                                <EuiFlexItem grow={false}>
                                    <EuiButton
                                        color="ghost"
                                        size="s"
                                        iconType="listAdd"
                                        onClick={() => this.loadProject("project3")}
                                    >
                                        project 3
                                    </EuiButton>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiBottomBar>
            </div>
        );
    }
}

export default ProjectDetail;
