import s from './ImageCard.module.css'

const ImageCard = ({ photo, onImageClick }) => {
    return (
        <div>
        <img className={s.imageCard} onClick={() => onImageClick(photo)} src={photo.urls.small} alt={photo.description} />
    </div>
    )
}

export default ImageCard;