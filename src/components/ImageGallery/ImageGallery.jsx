import ImageCard from "../ImageCard/ImageCard";
import s from './ImageGallery.module.css'

const ImageGallery = ({ photos, onImageClick }) => {
    return (
        <ul className={s.gallery}>
        {photos.map((photo, index) => (
          <li className={s.galleryItem} key={`${photo.id}-${index}`}>
            <ImageCard photo={photo} onImageClick={onImageClick} />
          </li>
        )
      )}
      </ul>
    )
}

export default ImageGallery;