import { Link } from "react-router"
import FormLogin from "../components/FormLogin"


const Login = () => {
  return (
    <div className="container-reg-from">
      <div className="wrapper">
        <FormLogin />
      </div>
      <div>
        <p>Don't have an account?</p>
        <Link to="/register">
          <button>
            Register
          </button>
        </Link>
      </div>
    </div>
  )
}
export default Login