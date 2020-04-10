import React, { Component } from "react";
import {
    EuiFlexGroup,
    EuiFlexItem,
    EuiBottomBar
} from "@elastic/eui";
import Grid from "../components/Grid";


class ProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: [],
            selected: []
        };
    }

    componentDidMount = () => {
        console.log("ExercisesDetailPage mounted, fetching data");
    };

    render() {
        return (
            <>
            <EuiFlexGroup>
                <EuiFlexItem>
                    <Grid/>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>Col1</EuiFlexItem>
            </EuiFlexGroup>
            <EuiBottomBar paddingSize="s">
</EuiBottomBar>
            </>
        );
    }
}

export default ProjectDetail;
