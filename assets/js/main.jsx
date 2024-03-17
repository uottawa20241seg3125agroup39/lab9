import React from "react";
import PolicyComponent from "./PolicyComponent";
import ServiceComponent from "./ServiceComponent";
import EmbassySpeakingComponent from "./SpeakingComponent";
function initRender(){
    let policy=$('#policy-card-DOM')[0];
    let service=$('#Service-card-DOM')[0];
    let speaking=$('#Embassy-card-DOM')[0];
    ReactDOM.render(<PolicyComponent />, policy);
    ReactDOM.render(<ServiceComponent />, service);
    ReactDOM.render(<EmbassySpeakingComponent />, speaking);
}

$(document).ready(function(){
    initRender();
});