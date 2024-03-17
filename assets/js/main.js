// import React from "react";
// import PolicyComponent from "./PolicyComponent.js";
// import ServiceComponent from "./ServiceComponent.js";
// import EmbassySpeakingComponent from "./SpeakingComponent.js";
function initRender(){
    let policy=$('#policy-card-DOM')[0];
    let service=$('#Service-card-DOM')[0];
    let speaking=$('#Embassy-card-DOM')[0];
    ReactDOM.render(React.createElement(PolicyComponent,null,null), policy);
    ReactDOM.render(React.createElement(ServiceComponent,null,null), service);
    ReactDOM.render(React.createElement(EmbassySpeakingComponent,null,null), speaking);
}

$(document).ready(function(){
    initRender();
});