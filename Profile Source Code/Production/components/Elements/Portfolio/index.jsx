import { Link } from 'react-router-dom'
import TabenoriDev from './../../../assets/UnderDevTabenori.png'

export default function PortfolioItem() {
    const portfolio = [
        {
            name: 'Portfolio-1',
            link: '/tabenori',
            srcImg: TabenoriDev,
        },
    ]

    return (
        <>
            {portfolio.map((item, index) => (
                <Link to={item.link} key={index}>
                    <img src={item.srcImg} alt={item.name} />
                </Link>
            ))}
        </>
    )
}