//Next launch

fetch("https://api.spacexdata.com/v3/launches/next")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        displayNextLaunch(json);
});


function displayNextLaunch(launch) {
    
    const container = document.querySelector("#next-launch-container");

    container.innerHTML = `<div>
                              <h2>Next launch</h2>
                                  <h3>${launch.mission_name} - ${launch.rocket.rocket_name}</h3>
                                    <p><b>Launch time:</b> ${launch.launch_date_local}</p>
                                    <p><b>Launch site:</b> ${launch.launch_site.site_name_long}</p> 
                                    <a href="launches.html" class="button-style">More launches</a>
                         </div>`;
}


//People in space

fetch("http://api.open-notify.org/astros.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        displayPeople(json);
});


function displayPeople(json) {

    const people = json.people;

    const peopleDetails = document.querySelector("#people-container");
    
    peopleDetails.innerHTML = `<div>
                                   <h2>People in space</h2>
                                   <p>There are ${people.length} people in space right now.</p>
                                   <p>Want to be an astronaut and wonder what it takes?</p>
                                   <a href="https://www.youtube.com/watch?v=4fXsAvv96Gw&feature=youtu.be" class="button-style" target="_blank">Find out</a>     
                               </div>`;
}










