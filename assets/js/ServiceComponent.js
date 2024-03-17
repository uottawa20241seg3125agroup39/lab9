function ServiceComponent() {
    const handleMouseOver = (event) => {
        event.target.style.color = 'red';
    };

    const handleMouseOut = (event) => {
        event.target.style.color = 'black';
    };

    return (
        <ul className="list-inline d-flex justify-content-around align-items-center" style={{ width: '100%', listStyle: 'none', padding: 0 }}>
            <li className="list-inline-item text-center" style={{ flex: 1 }}>
                <a href="http://ca.china-embassy.gov.cn/eng/lsyw/gzrz/" style={{ textDecoration: 'none', color: 'black' }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <img src="assets/img/avatars/pass.PNG" className="img-fluid" style={{ maxWidth: '80px', display: 'block', margin: 'auto' }} alt="Visa, Passport, Notarization & Authentication" />
                    <span>Visa, Passport, Notarization & Authentication</span>
                </a>
            </li>
            <li className="list-inline-item text-center" style={{ flex: 1 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black', paddingLeft: 0 }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <img src="assets/img/avatars/edu.PNG" className="img-fluid" style={{ maxWidth: '80px', display: 'block', margin: 'auto' }} alt="Educational Service" />
                    <span>Educational Service</span>
                </a>
            </li>
            <li className="list-inline-item text-center" style={{ flex: 1 }}>
                <a href="#" style={{ textDecoration: 'none', color: 'black' }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <img src="assets/img/avatars/media.PNG" className="img-fluid" style={{ maxWidth: '80px', display: 'block', margin: 'auto' }} alt="Media Service" />
                    <span>Media Service</span>
                </a>
            </li>
        </ul>
    );
}

export default ServiceComponent;