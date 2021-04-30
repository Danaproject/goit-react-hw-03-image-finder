import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className="ImageGallery">
    <ImageGalleryItem images={images} onImageClick={onImageClick} />
  </ul>
);

export default ImageGallery;
