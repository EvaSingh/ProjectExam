fetch("https://api.spacexdata.com/v3/launches/upcoming")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        loopThroughLaunches(json);
});


function loopThroughLaunches(launches) {

    let newHTML = "";

    launches.forEach(function(launch) {

        newHTML += `<div>
                        <h2>${launch.mission_name} - ${launch.rocket.rocket_name}</h2>
                            <p><b>Launch time:</b> ${launch.launch_date_local}</p>
                            <p><b>Launch site:</b> ${launch.launch_site.site_name_long}</p> 
                            <a href="${launch.links.reddit_campaign}" target="_blank">More &rarr;</a>
                    </div>`;
    });

    const container = document.querySelector("#launch-container");
    container.innerHTML = newHTML;
}

