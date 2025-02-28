import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export interface SignUpFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  profilePic: string;
}

export interface LoginFormValues {
  username: string;
  password: string;
}

export interface Switch {
  onSwitch: () => void;
  onClose: () => void;
}
