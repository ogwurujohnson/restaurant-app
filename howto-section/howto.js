const stages = [
    {
        id: 1,
        title: "Choose Area",
        image: "assets/svg/choose.svg",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 2,
        title: "Select A Restaurant",
        image: "assets/svg/booking.svg",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 3,
        title: "Arrive at Restaurant",
        image: "assets/svg/welcoming_chef.svg",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
]

class HowTo {
    constructor(howToGrid) {
        this.howToGrid = howToGrid;

        stages.map(stage =>  {
            this.createCard(stage);
        });
    }

    createCard(stage) {
        this.stepCard = document.createElement('div');
        this.stepCard.setAttribute('class', 'step');
        this.stepCard.setAttribute('data-aos', 'zoom-in-left');

        this.modifyCard(stage, this.stepCard);
    }

    modifyCard(stage, stepCard) {
        this.cardImage = document.createElement('div');
        this.cardImage.setAttribute('class', 'img');
        

        this.img = document.createElement('img');
        this.img.setAttribute('src', stage.image);
        this.cardImage.appendChild(this.img);
        
        console.log(this.cardImage);

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
new HowTo(howTo);