import React from "react";
import { Button, Card, Input, Radio } from "antd";
const SearchForm = () => {
  return (
    <div className="row">
      <Card className="   col-6 offset-md-3" title="Search For Next Job">
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
        <Button type="primary" className="mt-3">
          Search
        </Button>
      </Card>
    </div>
  );
};

export default SearchForm;
