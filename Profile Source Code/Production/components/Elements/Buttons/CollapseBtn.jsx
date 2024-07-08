import listIcon from "./../../../assets/list.svg";

export default function CollapseBtn(props) {
    const { onClick, iconNavRef } = props;

    return (
        <button className="navbar-toggler" type="button" onClick={onClick} data-bs-target="#navbarNav">
            <img className="iconNav" ref={iconNavRef} src={listIcon} alt="Toggle Icon" />
        </button>
    );
}