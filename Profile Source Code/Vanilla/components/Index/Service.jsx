import '../../style.css'

export default function Service() {
    return (
        <>
            <section className="container service" id="services">
                <h2>Services</h2>
                <div className="service-group">
                    <div className="service-box">
                        <h3>Website</h3>
                        <div className="text-service">Create an attractive and responsive website, and create a good user experience when entering the website. And also make the website easy to use by new users.</div>
                    </div>
                    <div className="service-box">
                        <h3>UI/UX Designer</h3>
                        <div className="text-service">Create attractive design concepts and also create prototypes for several applications and websites to make it easier for developers to fulfill client wishes.</div>
                    </div>
                    <div className="service-box">
                        <h3>Editing</h3>
                        <div className="text-service">Editing video/photo concepts to make them more interesting and attractive in accordance with client requests </div>
                    </div>
                </div>
            </section>
        </>
    )
}