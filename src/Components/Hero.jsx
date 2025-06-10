import './Hero.css'
import playbtn from '../Assets/play_icon.png'
import pausebtn from '../Assets/pause_icon.png'
import arrow from '../Assets/arrow_btn.png'

const Hero = ({ textData, playing, setPlaying, image, setImage }) => {
    return (
        <div className='hero'>
            <div className='hero-text'>
                <p>{textData.text1}</p>
                <p>{textData.text2}</p>
            </div>
            <div className="hero-explore">
                <p>Explore the features</p>
                <img src={arrow} alt="" />
            </div>
            <div className="hero-dot-play">
                <ul className="hero-dots">
                    <li onClick={() => setImage(0)} className={image === 0 ? 'hero-dot orange' : 'hero-dot'}></li>
                    <li onClick={() => setImage(1)} className={image === 1 ? 'hero-dot orange' : 'hero-dot'}></li>
                    <li onClick={() => setImage(2)} className={image === 2 ? 'hero-dot orange' : 'hero-dot'}></li>
                </ul>
                <div className="hero-play" onClick={() => setPlaying(!playing)}>
                    <img src={playing ? pausebtn : playbtn} alt="" />
                    <p>Watch Video</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
