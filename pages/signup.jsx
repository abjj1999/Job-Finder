import React, { useState } from "react";
import { Button, Card, Input, Select } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import Link from "next/link";
const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  //for the co
  const [choice, setChoice] = useState("");
  //email and pass form submit
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email && pass) {
      const emailCard = document.querySelector(".change-opt-email");
      //call axios for validation checks
      emailCard.style.opacity = 0.4;

      const choiceCard = document.querySelector(".change-opt-choice");
      choiceCard.style.opacity = 1;

      const arrows = document.querySelector(".add-ani");
      arrows.classList.add("animate__pulse");
    }
  };
  const onChange = (value) => {
    // console.log(`selected ${value}`);
    setChoice(value);
  };
  const handleRole = (e) => {
    e.preventDefault();
    console.log(email, pass, choice);
  };
  return (
    <div
      style={{ marginTop: "3rem", marginBottom: "5rem" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h4 className="font-change text-center">
        Job Finder <span className=" text-primary">!</span>
      </h4>
      <div className="row">
        <Card
          className="col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-2 offset-sm-1 mb-2 change-opt-email"
          title="Email & Password!"
        >
          <form onSubmit={handleEmailSubmit}>
            <Input
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              className="mt-2"
              placeholder="Password"
              required
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />

            <button className="btn btn-primary mt-2">Continue</button>
          </form>
        </Card>
        <div
          className="d-flex justify-content-center col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-2 offset-sm-1 mb-2 "
          style={{ opacity: 0.4 }}
        >
          <div className="row d-flex justify-content-between animate__animated add-ani">
            <ArrowDownOutlined className=" col-2 icon_size mt-1 text-secondary" />
            <ArrowDownOutlined className="col-2 icon_size mt-1 text-secondary" />
            <ArrowDownOutlined className="col-2 icon_size mt-1 text-secondary" />
            <ArrowDownOutlined className="col-2 icon_size mt-1 text-secondary" />
          </div>
        </div>
        <Card
          style={{ opacity: 0.4 }}
          className="col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-2 offset-sm-1 change-opt-choice"
          title="Select Your Role"
        >
          <form onSubmit={handleRole}>
            <Select
              placeholder="Select a Role"
              className="w-100"
              onChange={onChange}
              value={choice}
              options={[
                {
                  value: "worker",
                  label: "Seeking a job",
                },
                {
                  value: "boss",
                  label: "Employer",
                },
              ]}
            />
            <Link href={"/profile"}>
              <button className="btn btn-primary mt-2">Go to Profile</button>
            </Link>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Register;
