import React from "react";
import { Form, Input } from "antd";
const Register = () => {
  return (
    <>
      <h5 className="font-change">
        Sign Up <span className=" text-primary">!</span>
      </h5>
      <div className="row">
        <Form className="col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-2 offset-sm-1">
          <Form.Item>
            <label htmlFor="" className="text-muted ">
              First Name
            </label>
            <Input placeholder="First name" />
          </Form.Item>
          <Form.Item>
            <label htmlFor="" className="text-muted ">
              Last Name
            </label>
            <Input placeholder="Last name" />
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Register;
