import LoginForm from "@/components/form/LoginForm";
const Login = () => {
  return (
    <div className="container w-full h-screen flex items-center justify-center">
      <div className="w-[400px] bg-gray-50 border border-gray-200 p-8 rounded-lg">
        <LoginForm title={"Login"} />
      </div>
    </div>
  );
};

export default Login;
