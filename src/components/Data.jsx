
import React from 'react';

import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiBasicTable, EuiHealth
} from '@elastic/eui';

export default ({data, ...props}) => {
  const columns = [
    {
      field: "x",
      name: "X"
    },
    {
      field: "y",
      name: "Y"
    },
    {
      field: "drill",
      name: "Drill"
    },
    {
      field: "printed",
      name: "Printed?",
      dataType: "boolean",
      render: printed => {
        const color = printed ? "success" : "danger";
        return <EuiHealth color={color}/>;
      }
    }
  ];

  const getRowProps = item => {
    const { id } = item;
    return {
      "data-test-subj": `row-${id}`,
      className: "customRowClass",
      onClick: () => console.log(`Clicked row ${id}`)
    };
  };

  const getCellProps = (item, column) => {
    const { id } = item;
    const { field } = column;
    return {
      className: "customCellClass",
      "data-test-subj": `cell-${id}-${field}`,
      textOnly: true
    };
  };

    return (
  <EuiPage>
    <EuiPageBody component="div">
      <EuiPageHeader>
        <EuiPageHeaderSection>
          <EuiTitle size="l">
            <h1>Data</h1>
          </EuiTitle>
        </EuiPageHeaderSection>
      </EuiPageHeader>
      <EuiPageContent>
        <EuiBasicTable
            items={data ? data : []}
            rowHeader="description"
            columns={columns}
            rowProps={getRowProps}
            cellProps={getCellProps}
        />
      </EuiPageContent>
    </EuiPageBody>
  </EuiPage>
    )
};
