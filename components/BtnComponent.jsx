"use client";
import React, { useState } from "react";
import { ModalTrigger } from "@/components/Modal";

const BtnComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <ModalTrigger isOpen={isModalOpen} onClose={closeModal} />
      <button
        className="btn btn-mod btn-large btn-round btn-hover-anim align-middle me-2 me-sm-5 mt-10"
        onClick={openModal}
      >
        <span>I wish to know more</span>
      </button>
    </>
  );
};

export default BtnComponent;
