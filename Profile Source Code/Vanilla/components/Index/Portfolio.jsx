import Portfolio_1 from '../../assets/Portfolio-1.png'
import '../../style.css'
import { Link } from 'react-router-dom'

export default function Portfolio() {
    return (
        <>
            <section className="portfolio container" id="portfolio">
                <h2>My Portfolio</h2>
                <div className="portfolio-group">
                    <Link to='/tabenori'><img src={Portfolio_1} alt="Portfolio-1" /></Link>
                    <img src={Portfolio_1} alt="Portfolio-1" />
                    <img src={Portfolio_1} alt="Portfolio-1" />
                </div>
            </section>
        </>
    )
}