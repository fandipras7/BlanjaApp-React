import React from "react";
import styles from "./register.module.css";
import logoBlanja from "./logoBlanja.png";
import Button from "../../component/base/Button";
import Input from "../../component/base/Input";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="d-flex justify-content-center mb-4">
              <img src={logoBlanja} alt="logo" />
              <h4 className="mt-3 fw-bold">Blanja</h4>
            </div>
            <p className="text-center fw-bold">Please Login with your account</p>

            <div className="buttons text-center mb-4">
              <div className="btn-group">
                <Button title="Seller" className={styles.cs}></Button>
                <Button title="Customer" className={styles.sl}></Button>
              </div>
            </div>
            <p className="text-end">Forgot password?</p>
            <Input classWrapName="form-outline mb-2" type="email" id="email" className="form-control form-control-lg" placeholder="Email"></Input>
            <Input classWrapName="form-outline mb-2" type="text" id="nama" className="form-control form-control-lg" placeholder="Nama"></Input>
            <Input classWrapName="form-outline mb-4" type="password" id="password" className="form-control form-control-lg" placeholder="Password"></Input>
            <div className="d-grid">
              <Button title="Primary" width="none" className={`btn btn-danger ${styles.btnSubmit}`}></Button>
            </div>
            <p className="text-center mt-3">
              Already have a Tokopedia account?{" "}
              <span onClick={() => navigate("/Login")} className="text-danger">
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
