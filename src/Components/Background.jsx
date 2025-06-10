import video from '../Assets/video1.mp4'
import './Background.css'
import image1 from '../Assets/image1.png'
import image2 from '../Assets/image2.png'
import image3 from '../Assets/image3.png'

const Background = ({ image, playing }) => {
  if (playing) {
    return (
      <video src={video} autoPlay loop muted className='background fade-in'></video>
    )
  }
  else if (image === 0) {
    return <img src={image1} className="background fade-in" alt="" />
  }
  else if (image === 1) {
    return <img src={image2} className="background fade-in" alt="" />
  }
  else if (image === 2) {
    return <img src={image3} className="background fade-in" alt="" />
  }
}

export default Background
