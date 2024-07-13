import React, { useContext, useEffect, useState } from "react";
import { Context } from "./../main";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "https://hospital-management-syatem-backend.onrender.com/api/v1/user/doctors",
          { withCredentials: true }
        );
        setDoctors(data.allDoctors);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchDoctors();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="page doctors">
      <h1>ALL DOCTORS LIST</h1>
      <div className="doctors-banner">
        {doctors && doctors.length > 0 ? (
          doctors.map((element) => (
            <div className="doctors-card" key={element.id}>
              <img
                src={
                  element.docAvatar
                    ? element.docAvatar.url
                    : "/assets/docHolder.jpg"
                }
                alt="doctor avatar"
                className="doctors-card-img"
              />
              <h4 className="doctors-card-h4">{`${element.firstName} ${element.lastName}`}</h4>
              <div className="doctors-card-details">
                <p className="doctors-card-details-p">
                  Email:{" "}
                  <span className="doctors-card-details-span">
                    {element.email}
                  </span>
                </p>
                <p className="doctors-card-details-p">
                  Phone:{" "}
                  <span className="doctors-card-details-span">
                    {element.phone}
                  </span>
                </p>
                <p className="doctors-card-details-p">
                  DOB:{" "}
                  <span className="doctors-card-details-span">
                    {element.dob ? element.dob.substring(0, 10) : "N/A"}
                  </span>
                </p>
                <p className="doctors-card-details-p">
                  Department:{" "}
                  <span className="doctors-card-details-span">
                    {element.doctorDepartment}
                  </span>
                </p>
                <p className="doctors-card-details-p">
                  {element.national_identity_card_number}
                </p>
                <p className="doctors-card-details-p">
                  Gender:{" "}
                  <span className="doctors-card-details-span">
                    {element.gender}
                  </span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <h1>No Registered Doctors Found!</h1>
        )}
      </div>
    </section>
  );
};

export default Doctors;
