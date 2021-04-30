import PropTypes from 'prop-types';

const ModalImage = ({ largeImageURL, tags }) => (
  <img src={largeImageURL} alt={tags} />
);

ModalImage.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
export default ModalImage;
