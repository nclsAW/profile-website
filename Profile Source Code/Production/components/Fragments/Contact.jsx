import ProfileContact from "../Elements/Contact/ProfileContact";

export default function Contact() {
    return (
        <>
            <section id="contact" className="container contact">
                <h2>Let's Talk</h2>
                <div className="contact-txt">Please feel free to contact me below for more collaboration information.</div>
                <div className="main">
                    <ProfileContact />
                </div>
            </section>
        </>
    );
    
}
