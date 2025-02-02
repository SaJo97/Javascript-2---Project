import { useDispatch, useSelector } from "react-redux";
import useForm from "../hooks/useForm";
import FormInput from "./FormInput";
import { login } from "../store/features/auth/authSlice";
import { useNavigate } from "react-router";

const FormLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const {
    form: formData,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useForm({
    email: "",
    password: "",
  });
  const onSubmit = (e) => {
    const { success, form: values } = handleSubmit(e);
    console.log("Form values before dispatch:", values); // Log the values being submitted

    if (!success) return;

    dispatch(login(values)).then((action) => {
      console.log("Action after dispatch:", action);
      if (login.fulfilled.match(action)) {
        console.log("Login successful:", action.payload); // Log successful login
        navigate("/account"); // Redirect to account page
      } else {
        console.error("Login failed:", action.payload); // Log error if login fails
      }
    });
  };
  return (
    <form onSubmit={onSubmit} className="login-form space-y-1" noValidate>
      {error && <p className="error-message">{error}</p>}
      <FormInput
        label="Email"
        name="email"
        id="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        errorMsg={errors.email}
        onBlur={handleBlur}
      />

      <FormInput
        label="Password"
        name="password"
        id="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        errorMsg={errors.password}
        onBlur={handleBlur}
      />

      <button type="submit" className="btn-acc" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};
export default FormLogin;
