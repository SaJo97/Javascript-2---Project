import {Link } from "react-router"
import Form from "./Form"


const Register = () => {
  return (
    <div className="container-reg-from">
      <div className="wrapper">
        <Form />
      </div>
      <div className="acc-con">
        <p>Already have an account?</p>
          <Link to="/login">
            <button className="btn-acc">
              Login
            </button>
          </Link>
      </div>
    </div>
  )
}
export default Register