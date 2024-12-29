import { useState } from "react";
import Modal from 'react-modal';


const ImageModal = ({photo}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <div>   
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
            >
        <button onClick={closeModal}>x</button>
    </Modal>
    </div>
    )
}

export default ImageModal;