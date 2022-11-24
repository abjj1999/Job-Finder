import React from "react";
import { Button, Card, Input, Radio } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
const SearchForm = () => {
  return (
    <div className="row mt-4">
      <Card
        className="col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-2 offset-sm-1"
        title="Search For Next Job"
      >
        <label htmlFor="what" className="text-muted ">
          Job?
        </label>
        <Input
          placeholder="Job Title"
          type="text"
          className="form-control mb-2"
        />
        <label htmlFor="where" className="text-muted ">
          Where?
        </label>
        <Input
          placeholder="Location"
          className="form-control mb-2"
          type="text"
        />
        <div className="coviddiv">
          <p className="text-muted">Job conditions</p>
          <Radio>Remote</Radio>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <Button type="primary" className="">
            Search
          </Button>
          <DoubleRightOutlined
            className="icon_size mt-1 text-secondary"
            disabled
          />
        </div>
      </Card>
    </div>
  );
};

export default SearchForm;
