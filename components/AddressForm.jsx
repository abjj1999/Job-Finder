import React from "react";
import { Collapse, Card, Input } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
const { Panel } = Collapse;
const AddressForm = () => {
  return (
    <Collapse bordered={false} defaultActiveKey={["1"]} ghost>
      <Panel
        header="Basic Info"
        className=" h6 font-change"
        expandIcon={<ArrowDownOutlined />}
      >
        <Card
          title="Basic Info"
          className="d-flex flex-column justify-content-center collapse "
        >
          <div
            id="addy"
            className="d-flex justify-content-between align-items-center pb-2 border-bottom"
          >
            <label htmlFor="" className="text-muted">
              Phone Number
            </label>
            <Input
              type="text"
              placeholder="(###) ### - ####"
              required
              className="w-75"
            />
          </div>
          <div>
            <h6 className="text-center mt-2 text-muted">Address</h6>
            <div className="row mt-2">
              <input
                type="address"
                className=" col-12 offset-1 address-in w-75 mb-3"
                placeholder="Address line #1"
              />
              <input
                type="address"
                className="  col-12 offset-1 address-in w-75 mb-3"
                placeholder="Address line #2"
              />
              <input
                type="address"
                className="  col-12 offset-1 address-in w-75 mb-3"
                placeholder="City"
              />
              <input
                type="address"
                className="  col-12 offset-1 address-in w-75 mb-3"
                placeholder="State"
              />
              <input
                type="address"
                className="  col-12 offset-1 address-in w-75 mb-3"
                placeholder="Zip-Code"
              />
            </div>
          </div>
          <button className="btn btn-primary " disabled>
            Save
          </button>
        </Card>
      </Panel>
    </Collapse>
  );
};

export default AddressForm;
