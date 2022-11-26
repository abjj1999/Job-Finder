import React from "react";
import { Collapse, Card, Input } from "antd";
const { Panel } = Collapse;
const Eduction = () => {
  return (
    <Collapse bordered={false} defaultActiveKey={["1"]}>
      <Panel header="Eduction" className=" h6 font-change"></Panel>
    </Collapse>
  );
};

export default Eduction;
