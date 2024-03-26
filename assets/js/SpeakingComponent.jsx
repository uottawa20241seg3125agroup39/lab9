
function generateEmbassyNewsList(){
    return new Promise((resolve, reject) => {
        $.getJSON("assets/config/embassy.json", function (data) {
            resolve(
                <ul>
                    {data.map((item, index) => {
                        return (
                            <li className="item"  key={index}>
                                <a href={item.url} target="_blank">{item.name}</a>
                            </li>
                        )
                    })}
                </ul>
            )
        })
    })
}



async function EmbassySpeakingComponent() {
    return (
        <div className="right" id="sgfyr_list">
            {await generateEmbassyNewsList()}
        </div>
    );
}

$('document').ready(async function () {
    ReactDOM.render(await EmbassySpeakingComponent(), $('#Embassy-card-DOM')[0]);
})
