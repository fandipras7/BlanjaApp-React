import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import Input from "../../base/Input";
import Button from "../../base/Button";
import sortPic from "./img/sort.png";
import cartPic from "./img/cart.png";
import logo from "./img/logoBlanja.png";

const Navbar = ({ className, home, onChange, onClickButton }) => {
  const [tampilkan, setTampilkan] = useState("");
  return (
    <nav className={className}>
      <div className={`container ${styles.mybar}`}>
        <div className={`d-flex ${styles.navbar_brand}`}>
          <img src={logo} alt="" width="32" height="44" class="me-2" />
          <h5 className="mt-2">Blanja</h5>
        </div>
        <form className="d-flex searchAndSort ms-auto">
          <Input className={`${styles.form_control} me-2`} type="search" onChange={onChange} placeholder="Search"></Input>
          <Button onClick={onClickButton} type="button" >Search</Button>
          <Button className="btn btn-light me-2" height="40px" type="submit">
            <img src={sortPic} alt="" />
          </Button>
        </form>
        <div className="tools"></div>
        <Button
          onClick={() => setTampilkan(tampilkan ? "" : "show")}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div className={"collapse navbar-collapse my-auto " + tampilkan} id="navbarNav">
          {/* <li className="nav-item"></li> */}
          {home ? (
            <ul className="navbar-nav ms-auto ps-2 align-items-center">
              <li className="nav-item">
                <NavLink to="/">
                  <Button className="btn btn-cart" type="submit">
                    <img src={cartPic} alt="" />
                  </Button>
                </NavLink>
              </li>
              <li className="nav-item ms-2 mt-2">
                <NavLink to="/Login">
                  <Button className={styles.btnLogin}>Login</Button>
                </NavLink>
              </li>
              <li className="nav-item ms-2 mt-2">
                <NavLink to="/Register">
                  <Button className={styles.btnSignIn}>Sign In</Button>
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ms-auto ps-2 align-items-center">
              <li className="nav-item">
                <NavLink to="/">
                  <Button className="btn btn-cart" type="submit">
                    <img src={cartPic} alt="" />
                  </Button>
                </NavLink>
              </li>
              <li className="nav-item ms-2 mt-2">
                <NavLink to="/Login">
                  <Button className="btn btn-light" type="submit">
                    <img src="./images/navbar/notif.png" alt="" />
                  </Button>
                </NavLink>
              </li>
              <li className="nav-item ms-2 mt-2">
                <NavLink to="/Register">
                  <Button className="btn btn-light">
                    <img src="./images/navbar/mail.png" alt="" />
                  </Button>
                </NavLink>
              </li>
              <li className="nav-item ms-2 mt-2">
                <NavLink to="/Register">
                  <Button className="btn btn-light">
                    <img src="./images/navbar/avatar.png" alt="" />
                  </Button>
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  positon: "static",
};

export default Navbar;
