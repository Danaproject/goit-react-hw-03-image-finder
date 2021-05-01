import { Component } from 'react';
import Spinner from 'react-loader-spinner';
import '../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Loader.scss';

export default class Loader extends Component {
  render() {
    return (
      <Spinner
        type="ThreeDots"
        color="#3f51b5"
        height={100}
        width={100}
        timeout={3000}
        className="Loader"
      />
    );
  }
}
