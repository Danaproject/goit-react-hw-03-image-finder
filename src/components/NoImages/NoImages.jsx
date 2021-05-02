import Album from './Album.png';
import './NoImages.scss';

export default function NoImages() {
  return (
    <div>
      <img src={Album} alt="Album" className="NoImages" />
    </div>
  );
}
