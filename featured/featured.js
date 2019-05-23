
const restaurants = [
    {
        id: 1,
        name: "Portobello Pizza",
        rating: 4.0,
        meal1: "assets/svg/burger.svg",
        meal2: "assets/svg/chicken-leg.svg",
        location: "Lagos Nigeria",
        background: "assets/img/architecture-ceiling-chairs-262047.jpg"
    },
    {
        id: 2,
        name: "SCP Furniture",
        rating: 5.0,
        meal1: "assets/svg/pizza-slice.svg",
        meal2: "assets/svg/burger.svg",
        location: "Lagos Nigeria",
        background: "assets/img/blur-chef-close-up-262978.jpg.jpg"
    },
    {
        id: 3,
        name: "Bar Boloud",
        rating: 3.0,
        meal1: "assets/svg/chicken-leg.svg",
        meal2: "assets/svg/pizza-slice.svg",
        location: "Lagos Nigeria",
        background: "assets/img/chair-cutlery-diner-941861.jpg"
    },
    {
        id: 4,
        name: "Portobello Pizza",
        rating: 4.0,
        meal1: "assets/svg/burger.svg",
        meal2: "assets/svg/chicken-leg.svg",
        location: "Lagos Nigeria",
        background: "assets/img/chair-cutlery-diner-941861.jpg"
    },
]


class Featured {
    constructor(featuresBlock) {
        this.featuresBlock = featuresBlock;
        //console.log(this.featuresBlock);
        restaurants.map(restaurant => {
            this.createFeature(restaurant);
        })
    }

    createFeature(restaurant) {
        this.singleFeature = document.createElement('div');
        
        this.modifyFeature(restaurant, this.singleFeature);
    }

    modifyFeature(restaurantData, newElement) {
        this.featureImage = document.createElement('div');
        this.featureName = document.createElement('div');
        this.featureInfo = document.createElement('div');
        this.featureRestInfo = document.createElement('div');
        this.featureRating = document.createElement('div');
        this.featureMeal = document.createElement('div');

        //append div blocks to dom
        newElement.appendChild(this.featureImage);
        newElement.appendChild(this.featureName);
        newElement.appendChild(this.featureInfo);
        newElement.appendChild(this.featureRestInfo);
        newElement.appendChild(this.featureRating);
        newElement.appendChild(this.featureMeal);


        this.featImage = document.createElement('img');
        this.featImage.setAttribute('src', restaurantData.background);
        this.featureImage.appendChild(this.featImage);
        console.log(newElement);
    }
}

const features = document.querySelector('.features');
new Featured(features)