function advertisementComponent(data) {

        return (
            <div className={"img-fluid row d-flex m-0 p-0 justify-content-center align-items-center"}>
                <img src={data.src} className={"col-12  p-0 w-100 h-auto"} alt={data.word} title={data.word} />
            </div>
        );


}

$(document).ready(function(){
    let advertisement=$('#ADV-card-DOM')[0];
    $.getJSON("assets/config/adv.json", function (data) {
        ReactDOM.render(advertisementComponent(data), advertisement);
    })
});