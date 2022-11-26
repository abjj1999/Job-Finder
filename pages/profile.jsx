import { CameraOutlined } from "@ant-design/icons";
import { Button, Card, Input, Collapse } from "antd";
import React from "react";
import AddressForm from "../components/AddressForm";
import Eduction from "../components/Eduction";
const { Panel } = Collapse;
const Profile = () => {
  return (
    <div
      style={{ marginTop: "2rem", marginBottom: "5rem" }}
      className=" d-flex justify-content-center flex-column align-items-center"
    >
      <h4 className="font-change text-center mb-3">
        Your Profile <span className=" text-primary">!</span>
      </h4>
      <div className="row container ">
        <div className="col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-2 offset-sm-1 mb-3">
          <div className="d-flex justify-content-between">
            <Input placeholder="Name" className="w-50 profile-name" />
            <CameraOutlined style={{ fontSize: "2rem" }} />
          </div>
        </div>
        <div className="col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-2 offset-sm-1 ">
          <AddressForm />
          <Eduction />
        </div>
      </div>
    </div>
  );
};

export default Profile;
