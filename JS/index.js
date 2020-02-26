//Next launch

fetch("https://api.spacexdata.com/v3/launches/next")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        displayNextLaunch(json);
});


function displayNextLaunch(launch) {
    
    const container = document.querySelector("#launch-section-homepage");

    container.innerHTML = `<div>
                              <h2>Next launch</h2>
                                  <h3>${launch.rocket.rocket_name} - ${launch.mission_name}</h3>
                                    <p>Launch time: ${launch.launch_date_local}</p>
                                    <p>Launch site: ${launch.launch_site.site_name_long}</p> 
                                    <a href="launches.html">More launches</a>
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
                                  <h3>People in space</h3>
                                      <p>There are currently ${people.length} people in space.</p>
                               </div>`;
}


//Astronomy picture of the day

fetch("https://api.nasa.gov/planetary/apod?api_key=SE0EI5G7B2vjIeO25iSjGFpTfpH0Kid63Hx9fXc5")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        displayAPOD(json);
    
});


function displayAPOD(apod) {
    
    const container = document.querySelector("#apod-container");

    container.innerHTML = `<div>
                            <img id="apod"src="${apod.url}"></img>       
                         </div>`;
}







