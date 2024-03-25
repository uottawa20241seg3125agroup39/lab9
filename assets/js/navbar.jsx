
function navlistComponent(link){
    return new Promise((resolve, reject) => {
        $.getJSON(link, function (data) {
            resolve(
                <li className="nav-item" id="nav-list-DOM">
                    {data.nav.map((item, index) => {
                        return (<a className="nav-link active" href={item.url} style={{fontSize: '17px'}} key={index} target={item.target}>
                            <i className={item.class} style={{fontSize:'35px'}} ></i>{item.name}
                        </a>)
                    })}
                </li>
            )
        })
    })
}

async function navbarComponent(link) {
    return (
        <nav className="navbar align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 navbar-dark d-flex flex-column h-100" style={{background: '#be0909'}}>
            <div className="sidebar-divider my-0">
                <ul className="navbar-nav text-light mb-auto mt-1 mr-auto ml-2" id="accordionSidebar" >
                    {await navlistComponent(link)}
                </ul>
                {/*<div className="text-center d-none d-md-inline"></div>*/}
                {/*<button className="btn rounded-circle border-0" id="sidebarToggle" type="button" style="position: relative;margin: 99px 99px 16px;display: block;margin-right: 50px;margin-left: 52px;padding-right: 0px;padding-left: 0px;padding-bottom: 0px;padding-top: 0px;"></button>*/}
                {/*<div style="padding-bottom: 0px;margin-bottom: 152px;"></div>*/}
            </div>
        </nav>
    );

}

$('document').ready(async function () {
    ReactDOM.render(await navbarComponent("assets/config/navbar.json"), $('#navbar-DOM')[0]);
})