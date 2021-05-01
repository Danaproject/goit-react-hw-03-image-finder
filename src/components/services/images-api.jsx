import axios from 'axios';
import PropTypes from 'prop-types';

// axios.defaults.headers.common['Authorization'] =
//   'Bearer 20473685-97e7769accc1d65c6975902f8';

const apiKey = '20473685-97e7769accc1d65c6975902f8';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchImages = ({ searchQuery = '', page = 1 }) => {
  return axios
    .get(
      `?q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=12&key=${apiKey}`,
    )
    .then(response => response.data.hits);
};

fetchImages.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default { fetchImages };
