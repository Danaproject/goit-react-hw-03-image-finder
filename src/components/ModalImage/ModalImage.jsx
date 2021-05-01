import PropTypes from 'prop-types';
import './ModalImage.scss';

const ModalImage = ({ largeImageURL, tags }) => (
  <img src={largeImageURL} alt={tags} className="ModalImage" />
);

ModalImage.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
export default ModalImage;
