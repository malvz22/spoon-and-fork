import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export interface Switch {
  onSwitch: () => void;
}
