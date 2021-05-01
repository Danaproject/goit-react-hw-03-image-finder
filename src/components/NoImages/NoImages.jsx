import Album from './Album.jpg';
import './NoImages.scss';

export default function NoImages() {
  return (
    <div>
      <img src={Album} alt="Album" className="NoImages" />
    </div>
  );
}
