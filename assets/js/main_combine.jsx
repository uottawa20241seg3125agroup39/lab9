

function RecentPolicyComponent() {
    return (
        <div className="right">
            <ul>
                <li className="item">
                    <a href="./zytz_0/202401/t20240127_11234434.htm" target="_blank">Competition for the Chinese
                        Government Scholarship 2024-2025（2024-01-26）</a>
                </li>
                <li className="item">
                    <a href="./zytz_0/202312/t20231226_11212594.htm" target="_blank">Notice on the Abolition of Consular
                        Authentication Services by the Chinese Embassy and Consulates-General in Canada after the
                        Apost..（2023-12-25）</a>
                </li>
                <li className="item">
                    <a href="./zytz_0/202312/t20231223_11210065.htm" target="_blank">Notice on the Chinese Public
                        Holidays in 2024（2023-12-22）</a>
                </li>
                <li className="item">
                    <a href="./zytz_0/202312/t20231220_11207314.htm" target="_blank">Notice（2023-12-19）</a>
                </li>
            </ul>
        </div>
    );
}

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


function EmbassySpeakingComponent() {
    return (
        <div className="right" id="sgfyr_list">
            <ul>
                <li className="item" data-id="11261098">
                    <a href="#" target="_blank">Remarks of the Spokesperson of the Chinese Embassy in
                        Canada（2024-03-14）</a>
                </li>
                <li className="item" data-id="11259944">
                    <a href="#" target="_blank">Remarks of the Spokesperson of the Chinese Embassy in
                        Canada（2024-03-12）</a>
                </li>
                <li className="item" data-id="11256064">
                    <a href="#" target="_blank">Remarks of the Spokesperson of the Chinese Embassy in
                        Canada（2024-03-08）</a>
                </li>
                <li className="item" data-id="11247703">
                    <a href="#" target="_blank">Remarks of the Spokesperson of the Chinese Embassy in
                        Canada（2024-02-20）</a>
                </li>
                <li className="item" data-id="11227041">
                    <a href="#" target="_blank">Remarks of the Spokesperson of the Chinese Embassy in
                        Canada（2024-01-16）</a>
                </li>
            </ul>
        </div>
    );
}
function AdvertisementComponent() {
    return (
        <div className={"img-fluid row d-flex m-0 p-0 justify-content-center align-items-center"}>
            <img src={"assets/img/adv1.webp"} className={"col-12  p-0 w-100 h-auto"} alt={"Surprise 10000CAD Daily!"} />
        </div>
    );
}
function initRender(){
    let policy=$('#policy-card-DOM')[0];
    let service=$('#Service-card-DOM')[0];
    let speaking=$('#Embassy-card-DOM')[0];
    let adv=$('#ADV-card-DOM')[0];
    ReactDOM.render(<RecentPolicyComponent />, policy);
    ReactDOM.render(<ServiceComponent />, service);
    ReactDOM.render(<EmbassySpeakingComponent />, speaking);
    ReactDOM.render(<AdvertisementComponent />, adv);
}

$(document).ready(function(){
    initRender();
});