import { Link } from "react-router";
import FormLogin from "../components/FormLogin";

const Login = () => {
  return (
    <div className="container-reg-from">
      <div className="wrapper">
        <FormLogin />
      </div>
      <div className="acc-con">
        <p>Don't have an account?</p>
        <Link to="/register">
          <button className="btn-acc">Register</button>
        </Link>
      </div>
    </div>
  );
};
export default Login;
