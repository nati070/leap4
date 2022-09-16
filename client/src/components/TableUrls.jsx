import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";



const IS_EMPTY = 0;
const TableUrls = (props) => {
  const data = props.data;
  const HtmlSyntexData = data.map((ele) => (
    <tr key={ele._id}>
      <td>{ele.url}</td>
      <td>{ele._id}</td>
    </tr>
  ));

  if (data.length == IS_EMPTY) {
    return <Div>please enter new Add URL</Div>;
  }

  return (
    <Div>
      <table>
        <tbody>
          <tr>
            <th>urls</th>
            <th>ids</th>
          </tr>
          {HtmlSyntexData}
        </tbody>
      </table>
    </Div>
  );
};

export default TableUrls;

const Div = styled.div`
  display: flex;
  justify-content: center;
`;
