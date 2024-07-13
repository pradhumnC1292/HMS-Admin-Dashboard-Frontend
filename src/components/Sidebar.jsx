import React, { useContext, useState } from "react";
import { Context } from "../main";
import { GoHome } from "react-icons/go";
import { SlLogout } from "react-icons/sl";
import { AiOutlineMessage } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineAddModerator } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    await axios
      .get(
        "https://hospital-management-syatem-backend.onrender.com/api/v1/user/admin/logout",
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();

  const handleNavigation = (path) => {
    navigateTo(path);
    setShow(!show);
  };

  return (
    <>
      <nav
        style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
        className={show ? "show sidebar" : "sidebar"}
      >
        <div className="links">
          <GoHome onClick={() => handleNavigation("/")} />
          <FaUserDoctor onClick={() => handleNavigation("/doctors")} />
          <MdOutlineAddModerator
            onClick={() => handleNavigation("/admin/addnew")}
          />
          <IoPersonAddOutline
            onClick={() => handleNavigation("/doctor/addnew")}
          />
          <AiOutlineMessage onClick={() => handleNavigation("/messages")} />
          <SlLogout onClick={handleLogout} />
        </div>
      </nav>
      <div
        className="wrapper"
        style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
      >
        <RxHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </div>
    </>
  );
};

export default Sidebar;
