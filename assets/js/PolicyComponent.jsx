function RecentPolicyComponent() {
    return (
        <div className="card shadow mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h6 className="text-primary fw-bold m-0">Recent Policy</h6>
                <div className="dropdown no-arrow">
                    <button className="btn btn-link btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fas fa-ellipsis-v text-gray-400"></i>
                    </button>
                    <div className="dropdown-menu shadow dropdown-menu-end animated--fade-in">
                        <p className="text-center dropdown-header">dropdown header:</p>
                        <a className="dropdown-item" href="#">&nbsp;Action</a>
                        <a className="dropdown-item" href="#">&nbsp;Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">&nbsp;Something else here</a>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="right">
                    <ul>
                        <li className="item">
                            <a href="./zytz_0/202401/t20240127_11234434.htm" target="_blank">Competition for the Chinese Government Scholarship 2024-2025（2024-01-26）</a>
                        </li>
                        <li className="item">
                            <a href="./zytz_0/202312/t20231226_11212594.htm" target="_blank">Notice on the Abolition of Consular Authentication Services by the Chinese Embassy and Consulates-General in Canada after the Apost..（2023-12-25）</a>
                        </li>
                        <li className="item">
                            <a href="./zytz_0/202312/t20231223_11210065.htm" target="_blank">Notice on the Chinese Public Holidays in 2024（2023-12-22）</a>
                        </li>
                        <li className="item">
                            <a href="./zytz_0/202312/t20231220_11207314.htm" target="_blank">Notice（2023-12-19）</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
