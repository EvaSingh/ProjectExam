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
                        <h2>${launch.rocket.rocket_name} - ${launch.mission_name}</h2>
                            <p>Launch time: ${launch.launch_date_local}</p>
                            <p>Launch site: ${launch.launch_site.site_name_long}</p>  
                    </div>`;
    });

    const container = document.querySelector("#launch-container");
    container.innerHTML = newHTML;
}

