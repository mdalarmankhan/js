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
    
    
    // fetch("car.json")
    // .then(response => response.json())
    // .then(data => {
        viewResultFound.innerHTML = `Found <strong>${cars.length}</strong> results`;
        

        for (i = 0; i <= cars.length; i++ ) {
            let car = cars[i];
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
        };

    viewCarsResult.setAttribute("style", "display: block");
    searchId.setAttribute("style", "display: none");
    });
let cars = [
    {
        "carNo": 1,
        "model": "Prado",
        "make": "Toyota",
        "price": 1000,
        "year": 2021,
        "img" : "https://www.slashgear.com/wp-content/uploads/2020/08/20200803_01_02_s-1280x720.jpg",
        "borrowed": false

    },
    {
        "carNo": 2,
        "model": "X trail",
        "make": "Nissan",
        "price": 500,
        "year": 2020,
        "img" : "https://roboticsandautomationnews.com/wp-content/uploads/2017/08/X-Trail-Ti_Ruby-Red.jpg",
        "borrowed": false
    },
    {
        "carNo": 3,
        "model": "Outback",
        "make": "Subaru",
        "price": 700,
        "year": 2016,
        "img" : "https://cdn.oem-production.subaru.com.au/media/7933/my21-outback-touring-360.jpg",
        "borrowed": false
    }
    ,

    {
        "carNo": 1,
        "model": "Prado",
        "make": "Toyota",
        "price": 1000,
        "year": 2021,
        "img" : "https://www.slashgear.com/wp-content/uploads/2020/08/20200803_01_02_s-1280x720.jpg",
        "borrowed": false

    },
    {
        "carNo": 2,
        "model": "X trail",
        "make": "Nissan",
        "price": 500,
        "year": 2020,
        "img" : "https://roboticsandautomationnews.com/wp-content/uploads/2017/08/X-Trail-Ti_Ruby-Red.jpg",
        "borrowed": false
    },
    {
        "carNo": 3,
        "model": "Outback",
        "make": "Subaru",
        "price": 700,
        "year": 2016,
        "img" : "https://cdn.oem-production.subaru.com.au/media/7933/my21-outback-touring-360.jpg",
        "borrowed": false
    }
]