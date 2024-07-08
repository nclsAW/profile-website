export default function ProfileServices(props) {
    const servicesType = [
        {
            title: 'Website',
            children: 'Create an attractive and responsive website, and create a good user experience when entering the website. And also make the website easy to use by new users.'
        },
        {
            title: 'UI/UX Designer',
            children: 'Create attractive design concepts and also create prototypes for several applications and websites to make it easier for developers to fulfill client wishes.'
        },
        {
            title: 'Editing',
            children: 'Editing video/photo concepts to make them more interesting and attractive in accordance with client requests.'
        },
    ]
    

    return (
        <>
            <div className="service-group">
                {servicesType.map((service, index) => (
                    <div className="service-box" key={index}>
                        <h3>{service.title}</h3>
                        <div className="text-service">{service.children}</div>
                    </div>
                ))}
            </div>    
        </>
    )
}