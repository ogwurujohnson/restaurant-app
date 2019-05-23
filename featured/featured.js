
const restaurants = [
    {
        id: 1,
        name: "Portobello Pizza",
        rating: 4.0,
        meal1: "assets/svg/burger.svg",
        meal2: "assets/svg/chicken-leg.svg",
        location: "Lagos Nigeria"
    },
    {
        id: 2,
        name: "SCP Furniture",
        rating: 5.0,
        meal1: "assets/svg/pizza-slice.svg",
        meal2: "assets/svg/burger.svg",
        location: "Lagos Nigeria"
    },
    {
        id: 3,
        name: "Bar Boloud",
        rating: 3.0,
        meal1: "assets/svg/chicken-leg.svg",
        meal2: "assets/svg/pizza-slice.svg",
        location: "Lagos Nigeria"
    },
    {
        id: 4,
        name: "Portobello Pizza",
        rating: 4.0,
        meal1: "assets/svg/burger.svg",
        meal2: "assets/svg/chicken-leg.svg",
        location: "Lagos Nigeria"
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

        this.modifyFeature(restaurant);
    }

    modifyFeature(restaurantData) {
        //console.log(restaurantData);
    }
}

const features = document.querySelector('.features');
new Featured(features)