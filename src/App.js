import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import imagesApi from './components/services/images-api';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal';
import ModalImage from './components/ModalImage';
import Container from './components/Container';
import Loader from './components/Loader';
import 'react-toastify/dist/ReactToastify.css';
import NoImages from './components/NoImages';

class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    isLoading: false,
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

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });

        if (!images.length) {
          toast('Sorry, nothing to show!');
        }
      })
      .catch(error => {
        console.log(error);
        toast.error('Oops, something went wrong!');
      })
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
    const { images, isLoading, showModal, largeImageURL, tags } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />

        <Container>
          <ImageGallery images={images} onImageClick={this.onImageClick} />

          {isLoading && <Loader />}
          {!images.length && NoImages()}
          {shouldRenderLoadMoreButton && <Button onClick={this.fetchImages} />}

          {showModal && (
            <Modal onClose={this.onModalImageClose}>
              <ModalImage largeImageURL={largeImageURL} tags={tags} />
            </Modal>
          )}
          <ToastContainer autoClose={3000} />
        </Container>
      </div>
    );
  }
}

export default App;
