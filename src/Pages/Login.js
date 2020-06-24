import React, { useState } from "react";
import "antd/dist/antd.css";
import { Card, Input, Icon, Button, Spin, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../static/css/Login.css";
import axios from "axios";
import servicePath from "../config/apiUrl";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const checkLogin = () => {
    setIsLoading(true);
    if (!username) {
      message.error("用户名不能为空");
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return false;
    } else if (!password) {
      message.error("密码不能为空");
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return false;
    }
    let dataProps = {
      username: username,
      password: password,
    };
    axios({
      method: "post",
      url: servicePath.checkLogin,
      data: dataProps,
      withCredentials: true,
    }).then((res) => {
      setIsLoading(false);
      if (res.data.data == "登录成功") {
        localStorage.setItem("openId", res.data.openId);
        props.history.push("/index");
      } else {
        message.error("用户名密码错误");
      }
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  return (
    <div className="login-div">
      <Spin tip="Loading..." spinning={isloading}>
        <Card title="Serlin blog System" bordered={true} style={{ width: 400 }}>
          <Input
            id="username"
            size="large"
            placeholder="Enter your userName"
            prefix={<UserOutlined style={{ color: "rgba(0, 0, 0, .3)" }} />}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          <br />
          <Input.Password
            id="password"
            size="large"
            placeholder="Enter your password"
            prefix={<UserOutlined style={{ color: "rgba(0, 0, 0, .3)" }} />}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <Button type="primary" size="large" block onClick={checkLogin}>
            {" "}
            Login in{" "}
          </Button>
        </Card>
      </Spin>
    </div>
  );
}
export default Login;
