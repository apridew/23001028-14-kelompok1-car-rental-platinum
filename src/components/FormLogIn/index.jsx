import React, { useState } from "react";
import banner from "../../assets/img/auth/banner-auth.png";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { signInCustomer } from "../../helpers/apis";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, clearLoading } from "../../redux/features/auth/authSlice";

const FormLogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setError("");
    // console.log(form);
  };

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      setError("Data harus diisi tidak boleh kosong!");
      return;
    }
    try {
      const res = await signInCustomer(form);
      setSuccess("Login berhasil!");

      localStorage.setItem("token", res.data.access_token);

      const redirectPath = localStorage.getItem("redirectPath");
      if (redirectPath) {
        navigate(redirectPath);
        localStorage.removeItem("redirectPath");
      } else {
        setTimeout(() => {
          navigate("/");
        }, 1000);
        dispatch(setLoading());

        setTimeout(() => {
          dispatch(clearLoading());
        }, 2000);
      }
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data.message == "Password was Wrong.") {
        setError("Password salah, periksa kembali !");
      } else if (error.response.data.message == "Email not found.") {
        setError("Email anda belum terdaftar!");
      } else {
        setError("Password harus minimal 6 karakter");
      }
    }
  };

  return (
    <>
      <div className="container-fluid" id="register-page">
        <div className="row">
          <div className="col-7 d-flex left-register flex-column justify-content-center align-items-center">
            <div className="close-icon p-3 fs-2">
              <Link to={"/"}>X</Link>
            </div>
            <div className="wrapper-form d-flex flex-column">
              <h1 className="fw-bold">Welcome Back!</h1>

              <div className="form d-flex gap-2 flex-column my-5">
                {success && (
                  <div className="alert alert-success border-0">{success}</div>
                )}
                {error && (
                  <div className="alert alert-danger border-0 text-danger">
                    {error}
                  </div>
                )}

                <label className="form-label">Email*</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Contoh: johndee@gmail.com"
                  onChange={handleLogin}
                  name="email"
                />
                <label className="form-label">Password*</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="6+ karakter"
                  onChange={handleLogin}
                  name="password"
                />
                <button
                  onClick={handleSubmit}
                  className="btn btn-primary btn-sign mt-3"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden"></span>
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </div>
              <p className="fw-semibold bottom-content">
                Don’t have an account? <Link to="/register">Sign Up here</Link>
              </p>
            </div>
          </div>
          <div className="col register-right p-0">
            <img className="img-fluid" src={banner} alt="image auth" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLogIn;
