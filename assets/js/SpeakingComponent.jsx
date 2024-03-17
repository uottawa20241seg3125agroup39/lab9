function EmbassySpeakingComponent() {
    return (
        <div className="col-lg-5 col-xl-4">
            <div className="card shadow mb-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h6 className="text-primary fw-bold m-0">Embassy speaking</h6>
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
                    <div className="right" id="sgfyr_list">
                        <ul>
                            <li className="item" data-id="11261098">
                                <a href="#" target="_blank">Remarks of the Spokesperson of the Chinese Embassy in Canada（2024-03-14）</a>
                            </li>
                            <li className="item" data-id="11259944">
                                <a href="#" target="_blank">Remarks of the Spokesperson of the Chinese Embassy in Canada（2024-03-12）</a>
                            </li>
                            <li className="item" data-id="11256064">
                                <a href="#" target="_blank">Remarks of the Spokesperson of the Chinese Embassy in Canada（2024-03-08）</a>
                            </li>
                            <li className="item" data-id="11247703">
                                <a href="#" target="_blank">Remarks of the Spokesperson of the Chinese Embassy in Canada（2024-02-20）</a>
                            </li>
                            <li className="item" data-id="11227041">
                                <a href="#" target="_blank">Remarks of the Spokesperson of the Chinese Embassy in Canada（2024-01-16）</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
