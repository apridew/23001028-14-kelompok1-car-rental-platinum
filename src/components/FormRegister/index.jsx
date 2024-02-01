import React, { useState } from "react";
import banner from "../../assets/img/auth/banner-auth.png";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { registerCustomer } from "../../helpers/apis";

const FormRegister = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "Customer",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (event) => {
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
      await registerCustomer(form);
      setSuccess("Registrasi berhasil, silahkan login!");
      setTimeout(() => {
        navigate("/sign-in");
      }, 2000);
    } catch (error) {
      console.log(error.response.data.errors[0].message);
      if (error.response.data.message == "Email Already exists.") {
        setError("Email Anda sudah terdaftar, silahkan login!");
      } else if (
        error.response.data.errors[0].message ==
        "Validation isEmail on email failed"
      ) {
        setError("Harap isi dengan format email yang benar!");
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
              <h1 className="fw-bold">Sign Up</h1>

              <div className="form d-flex gap-2 flex-column my-5">
                {success && (
                  <div className="alert alert-success border-0">{success}</div>
                )}
                {error && (
                  <div className="alert alert-danger border-0 text-danger">
                    {error}
                  </div>
                )}
                <label className="form-label">Name*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nama Lengkap"
                />
                <label className="form-label">Email*</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Contoh: johndee@gmail.com"
                  onChange={handleRegister}
                  name="email"
                />
                <label className="form-label">Create Password*</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="6+ karakter"
                  onChange={handleRegister}
                  name="password"
                />
                <button
                  onClick={handleSubmit}
                  className="btn btn-primary btn-sign mt-3"
                >
                  Sign Up
                </button>
              </div>
              <p className="fw-semibold bottom-content">
                Already have an account? <Link to="/sign-in">Sign In here</Link>
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

export default FormRegister;
