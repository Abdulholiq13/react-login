import { Button, Form, Input, message } from "antd";
import axios from "@/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = ({ title }) => {
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  const navitage = useNavigate();

  const handleLogin = (values) => {
    setLoading(true);
    console.log("Success:", values);

    axios
      .post("/auth/login", values)
      .then((res) => {
        messageApi.success("Login is success!"),
          navitage("/"),
          dispatch({ type: "LOGIN", payload: res.data.token });
      })
      .catch((err) => {
        console.log(err), messageApi.error("Username or Password is incorrect");
      })
      .finally(setLoading(false));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {contextHolder}
      <h2 className="text-xl mb-3 text-center font-sans font-semibold">
        {title}
      </h2>

      <div className="w-[500px] flex items-center">
        <Form
          className="w-full"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={handleLogin}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            initialValue={"emilys"}
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input className="border-none" />
          </Form.Item>

          <Form.Item
            initialValue={"emilyspass"}
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password className="border-none" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
            <Button className="w-full mt-2" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
