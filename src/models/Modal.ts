
export interface ModalProps {
  watch: boolean;
  id?: string;
}

export interface StateModal {
  setShowModal: React.Dispatch<React.SetStateAction<ModalProps>>;
}