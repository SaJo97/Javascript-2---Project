import {Link } from "react-router"
import Form from "./Form"


const Register = () => {
  return (
    <div className="container-reg-from">
      <div className="wrapper">
        <Form />
      </div>
      <div>
        <p>Already have an account?</p>
          <Link to="/login">
            <button>
              Login
            </button>
          </Link>
      </div>
    </div>
  )
}
export default Register