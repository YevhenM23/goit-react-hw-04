import ImageCard from "../ImageCard/ImageCard";


const ImageGallery = ({ photos }) => {
    return (
        <ul>
        {photos.map((photo, index) => (
          <li key={`${photo.id}-${index}`}>
              <ImageCard photo={photo}/>
          </li>
        )
      )}
      </ul>
    )
}

export default ImageGallery;