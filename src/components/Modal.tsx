"use client";

import { ModalProps } from "@/types/modal";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const modalRoot = document.getElementById("modal-root");

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center w-full max-w-full h-screen bg-black/50 `}
    >
      <div className="bg-white relative p-10">
        {children}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition-colors duration-700"
        >
          <IoClose size={30} />
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
