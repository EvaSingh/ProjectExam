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
