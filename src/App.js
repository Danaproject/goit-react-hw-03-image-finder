import { Component } from 'react';
import imagesApi from './components/services/images-api';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import ModalImage from './components/ModalImage';
import Container from './components/Container';
import './styles.css';

class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    isLoading: false,
    error: null,
    showModal: false,
    largeImageURL: '',
    tags: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    const options = { searchQuery, page };

    this.setState({ isLoading: true });

    imagesApi
      .fetchImages(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
        console.log(images);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onImageClick = e => {
    this.setState({
      largeImageURL: e.target.dataset.url,
      tags: e.target.alt,
    });

    this.toggleModal();
  };

  onModalImageClose = e => {
    const { largeImageURL } = this.state;
    largeImageURL && this.setState(() => ({ largeImageURL: '' }));
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const {
      images,
      isLoading,
      error,
      showModal,
      largeImageURL,
      tags,
    } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;
    return (
      <>
        {error && <h1>Oops, something's wrong!</h1>}
        <Searchbar onSubmit={this.onChangeQuery} />

        <Container>
          <ImageGallery images={images} onImageClick={this.onImageClick} />

          {isLoading && <h1>Loading...</h1>}
          {shouldRenderLoadMoreButton && (
            <button type="button" onClick={this.fetchImages} className="Button">
              Load more
            </button>
          )}

          {showModal && (
            <Modal onClose={this.onModalImageClose}>
              <ModalImage largeImageURL={largeImageURL} tags={tags} />
            </Modal>
          )}
        </Container>
      </>
    );
  }
}

export default App;
