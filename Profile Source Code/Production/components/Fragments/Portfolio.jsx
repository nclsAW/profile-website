import PortfolioItem from "../Elements/Portfolio"

export default function Portfolio() {
    return (
        <>
            <section className="portfolio container" id="portfolio">
                <h2>My Portfolio</h2>
                <div className="portfolio-group">
                    <PortfolioItem />
                </div>
            </section>
        </>
    )
}