const ImageCard = ({photo, openModal, closeModal}) => {
    return (
        <div>
        <img onClick={openModal} src={photo.urls.small} alt={photo.description} />
    </div>
    )
}

export default ImageCard;