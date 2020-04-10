import React, { Component } from "react";
import {
    EuiFlexGroup,
    EuiFlexItem,
} from "@elastic/eui";


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
            <EuiFlexGroup>
                <EuiFlexItem grow={false}>Col1</EuiFlexItem>
                <EuiFlexItem>Col2</EuiFlexItem>
            </EuiFlexGroup>
        );
    }
}

export default ProjectDetail;
