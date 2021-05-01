import PropTypes from 'prop-types';
import './ImageGallery.scss';

const ImageGalleryItem = ({ images, onImageClick }) =>
  images.map(({ id, tags, webformatURL, largeImageURL }) => (
    <li key={id} onClick={onImageClick} className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        data-url={largeImageURL}
        className="ImageGalleryItem-image"
      />
    </li>
  ));

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ImageGalleryItem;
