// Mock Array data for 
const stages = [
    {
        id: 1,
        title: "Choose Area",
        image: "assets/svg/choose.svg",
        content: "Looking for restaurants in an area to eat, to have a personal time, meet with friends or have a date with your loved one?.",
    },
    {
        id: 2,
        title: "Select A Restaurant",
        image: "assets/svg/booking.svg",
        content: "Search and filter hundreds of listings, read reviews, explore photos and find the perfect spot. Book directly from the restaurant passport app.",
    },
    {
        id: 3,
        title: "Arrive at Restaurant",
        image: "assets/svg/welcoming_chef.svg",
        content: "Go and have a good time, recieve the best customer service and comfort you deserve. All of those, thanks to Restaurant Passport!.",
    },
]

/**
 *
 *
 * @class HowTo
 */
class HowTo {

    /**
     *Creates an instance of HowTo.
     * @param {*} howToGrid
     * @memberof HowTo
     */
    constructor(howToGrid) {
        this.howToGrid = howToGrid;

        stages.map(stage =>  {
            this.createCard(stage);
        });
    }

    /**
     *
     *
     * @param {*} stage
     * @memberof HowTo
     */
    createCard(stage) {
        this.stepCard = document.createElement('div');
        this.stepCard.setAttribute('class', 'step');
        this.stepCard.setAttribute('data-aos', 'zoom-in-left');

        this.modifyCard(stage, this.stepCard);
    }


    /**
     *
     *
     * @param {*} stage
     * @param {*} stepCard
     * @memberof HowTo
     */
    modifyCard(stage, stepCard) {
        this.cardImage = document.createElement('div');
        this.cardImage.setAttribute('class', 'img');
        

        this.img = document.createElement('img');
        this.img.setAttribute('src', stage.image);
        this.cardImage.appendChild(this.img);
        

        this.cardTitle = document.createElement('h2');
        this.cardTitle.innerText = stage.title;

        this.cardContent = document.createElement('p');
        this.cardContent.innerText = stage.content;


        stepCard.appendChild(this.cardImage);
        stepCard.appendChild(this.cardTitle);
        stepCard.appendChild(this.cardContent);

        this.howToGrid.appendChild(stepCard);

    }
}

const howTo = document.querySelector('.how-to-grid');
// instantiate the HowTo class
new HowTo(howTo);