import TabenoriDevIcon from '../assets/TabenoriDevIcon.png';
import { Link } from "react-router-dom";
import '../tabenori.css';

export default function Tabenori() {
    return (
        <>
            <div className='tabenoriDevPage'>
                <img src={TabenoriDevIcon} alt="TabenoriDevIcon" />
                <h1>The Website is Under Development</h1>
                <Link to='/'>Go Back</Link>
            </div>
        </>
    )
}