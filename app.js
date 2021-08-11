const searchId = document.getElementById("search-element");

const searchBtn = document.getElementById("search");

const viewBtn = document.getElementById("viewCars");

const viewResultFound = document.getElementById("viewResultFound");

const viewResult = document.getElementById("viewResult");

const viewCarsResult = document.querySelector(".viewCarsResult");



// Display Search Bar
searchBtn.addEventListener("click", function() {
    searchId.setAttribute("style", "display: block");
    viewCarsResult.setAttribute("style", "display: none");
});

viewBtn.addEventListener("click", function() {
    
    const carJson = "car.json";
    fetch(carJson)
    .then(response => response.json())
    .then(data => {
        viewResultFound.innerHTML = `Found <strong>${data.length}</strong> results`;
        

        data.forEach(car => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card', 'my-2', 'w-25', 'col-4', 'offset-1', 'mt-5');

            const image = document.createElement('img');
            image.setAttribute('src', car.img);
            cardElement.appendChild(image);

            const heading = document.createElement('h2');
            heading.innerText = car.make;
            cardElement.appendChild(heading);

            const subHeading = document.createElement('h4');
            subHeading.innerText = car.price;
            cardElement.appendChild(subHeading);

            const description = document.createElement('p');
            description.innerText = `${car.year}`;
            cardElement.appendChild( description );

            viewResult.appendChild(cardElement);
        });
    }
    );
    viewCarsResult.setAttribute("style", "display: block");
    searchId.setAttribute("style", "display: none");
});

