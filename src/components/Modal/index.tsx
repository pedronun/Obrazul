import Modal from "react-modal";

import { Container } from './styles';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function LocationModal({ isOpen, onRequestClose }: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Onde você está?</h2>
        <span>Dessa forma você terá acesso aos produtos e ofertas da sua região</span>
        <span>Digite seu endereço:</span>

        <input type="text" placeholder="Ex: Avenida Raja Gabalia 4343, Santa Lucia"/>
        <button>Confirmar</button>
      </Container>
    </Modal>
  );
}
