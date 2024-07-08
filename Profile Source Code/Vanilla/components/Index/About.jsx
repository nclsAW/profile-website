import '../../style.css'
import fotoCV from '../../assets/Foto CV Fix.png'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <>
            <section id="about" className="container about">
                <div className="about-container">
                    <div className="img-box">
                        <img src={fotoCV} alt="Profile Picture" />
                    </div>
                    <div className="text-group">
                        <h1>Nicolas Anelka</h1>
                        <hr />
                        <div className="bio-text">I am an active student at Kalbis University, and I am interested in front-end development. I love to improve my skills every time I code. I also like to edit videos in my spare time and create simple designs for the prototype of an application and its flow. I am studying the animation for each component so that users can get an interesting experience when entering the animation flow that I created. As for spare time, I plan to make mini projects both frontend and backend.</div>

                        <div className="hire-btn">
                            <Link to="https://drive.google.com/file/d/1U7nZS6evxqId0Vl-WHu4MPC44M0k9KNO/view"><button><span></span><p data-text="View CV" data-title="Hire Me"></p></button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
