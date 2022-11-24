import React from "react";
import { Button, Card, Input } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
const Register = () => {
  return (
    <>
      <h5 className="font-change text-center">
        Job Finder <span className=" text-primary">!</span>
      </h5>
      <div className="row">
        <Card
          className="col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-2 offset-sm-1 mb-2"
          title="Email!"
        >
          <Input placeholder="Email Address" required />
          <button className="btn btn-primary mt-2">Continue</button>
        </Card>
        <div className="d-flex justify-content-center col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-2 offset-sm-1 mb-2 ">
          <div className="row d-flex justify-content-between">
            <ArrowDownOutlined className="col-2 icon_size mt-1 text-secondary" />
            <ArrowDownOutlined className="col-2 icon_size mt-1 text-secondary" />
            <ArrowDownOutlined className="col-2 icon_size mt-1 text-secondary" />
            <ArrowDownOutlined className="col-2 icon_size mt-1 text-secondary" />
          </div>
        </div>
        <Card
          className="col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-2 offset-sm-1"
          title="Create an Account!"
        ></Card>
      </div>
    </>
  );
};

export default Register;
