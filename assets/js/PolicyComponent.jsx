
function generatePolicyList(){
    return new Promise((resolve, reject) => {
        $.getJSON("assets/config/policy.json", function (data) {
            resolve(
                <ul>
                    {data.map((item, index) => {
                        return (
                            <li className="item font-weight-normal text-primary text-sm-left"  key={index} data-id={index}>
                                <a href={item.url} target="_blank">{item.name}</a>
                            </li>
                        )
                    })}
                </ul>
            )
        })
    })
}



async function RecentPolicyComponent() {
    return (
        <div className="right">
            {await generatePolicyList()}
        </div>
    );
}

$('document').ready(async function () {
    ReactDOM.render(await RecentPolicyComponent(), $('#policy-card-DOM')[0]);
})
