import Copyright from "../Elements/Footer/Copyright";

export default function Footer(props) {
    const { children } = props;

    return (
        <>
            <footer className="footer">
                <Copyright>© 2024 Nicolas Anelka. All Rights Reserved.</Copyright>
            </footer>
        </>
    )
}