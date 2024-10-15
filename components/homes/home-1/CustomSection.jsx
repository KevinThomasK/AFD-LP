import React, { useState } from "react";
import { ModalTrigger } from "@/components/Modal";

const NIFTCoursePromo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      {" "}
      <ModalTrigger isOpen={isModalOpen} onClose={closeModal} />
      <div
        className="d-flex justify-content-center"
        style={{
          backgroundColor: "#ffcd7b",
          color: "black",
          padding: "2rem 1rem",
        }}
      >
        <div className="container text-center py-4">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto">
              <h1 className="mb-3">
                Prepared to crack the NIFT Entrance Exam?
              </h1>
              <h4 className="mb-4 fw-bold" style={{ fontSize: "60px" }}>
                Be the next AIR 1!
              </h4>
            </div>
            <div className="col-lg-4 text-center text-lg-right mt-3 mt-lg-0">
              <button
                onClick={openModal}
                className="btn"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "0.5rem 1.5rem",
                  fontSize: "23px",
                }}
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NIFTCoursePromo;
