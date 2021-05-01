import ImageGalleryItem from './ImageGalleryItem';
import './ImageGallery.scss';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className="ImageGallery">
    <ImageGalleryItem images={images} onImageClick={onImageClick} />
  </ul>
);

export default ImageGallery;
