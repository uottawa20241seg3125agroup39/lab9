function ServiceComponent(data) {
    const handleMouseOver = (event) => {
        event.target.style.color = 'red';
    };

    const handleMouseOut = (event) => {
        event.target.style.color = 'black';
    };

    return (
        <ul className="list-inline d-flex justify-content-around align-items-center" style={{ width: '100%', listStyle: 'none', padding: 0 }}>
            <li className="list-inline-item text-center" style={{ flex: 1 }}>
                <a href={data.o1.href} style={{ textDecoration: 'none', color: 'black' }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} target="_blank">
                    <img src={data.o1.img} className="img-fluid" style={{ maxWidth: '80px', display: 'block', margin: 'auto' }} alt={data.o1.name} title={data.o1.name} />
                    <span>{data.o1.name}</span>
                </a>
            </li>
            <li className="list-inline-item text-center" style={{ flex: 1 }}>
                <a href={data.o2.href} style={{textDecoration: 'none', color: 'black'}} onMouseOver={handleMouseOver}
                   onMouseOut={handleMouseOut} target="_blank">
                    <img src={data.o2.img} className="img-fluid"
                         style={{maxWidth: '80px', display: 'block', margin: 'auto'}} alt={data.o2.name}
                         title={data.o2.name}/>
                    <span>{data.o2.name}</span>
                </a>
            </li>
            <li className="list-inline-item text-center" style={{flex: 1}}>
                <a href={data.o3.href} style={{textDecoration: 'none', color: 'black'}} onMouseOver={handleMouseOver}
                   onMouseOut={handleMouseOut} target="_blank">
                    <img src={data.o3.img} className="img-fluid"
                         style={{maxWidth: '80px', display: 'block', margin: 'auto'}} alt={data.o3.name}
                         title={data.o3.name}/>
                    <span>{data.o3.name}</span>
                </a>
            </li>
        </ul>
    );
}

$('document').ready(function () {
    $.getJSON("assets/config/service.json", function (data) {
        ReactDOM.render(<ServiceComponent {...data} />, $('#Service-card-DOM')[0]);
    })
})
