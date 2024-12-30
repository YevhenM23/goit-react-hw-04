import Modal from 'react-modal';
import s from './ImageModal.module.css'

const ImageModal = ({photo, closeModal}) => {

    return (
    <Modal
        isOpen={!!photo}
        onRequestClose={closeModal}
        className={s.modalContent}
        overlayClassName={s.modalOverlay} 
            >
             {photo && (
        <img
          src={photo.urls.full}
          alt={photo.description}
          className={s.modalImage} 
        />
      )}
    </Modal>
    
    )
}

export default ImageModal;