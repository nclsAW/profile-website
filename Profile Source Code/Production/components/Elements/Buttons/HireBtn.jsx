import { Link } from "react-router-dom"

export default function HireBtn() {
    return (
        <>
            <div className="hire-btn">
                <Link to="https://drive.google.com/drive/folders/16vKYrxtmWxSWnIGG4uMrAp40AhISX8HW?usp=sharing"><button><span></span><p data-text="View CV" data-title="Hire Me"></p></button></Link>
            </div>
        </>
    )
}