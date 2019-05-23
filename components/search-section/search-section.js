class Search{
    constructor(searchPane) {
        this.searchPane = searchPane;
        this.searchBox = this.searchPane.querySelector('input');
        this.searchButton = this.searchPane.querySelector('button');

        this.searchButton.addEventListener('click', (e) => {
            
            this.searchAction(this.searchBox);
        });
    }

    searchAction(searchBox) {
        alert(`Fetching restaurants in ${searchBox.value}.......`);
    }
}

const searchPane = document.querySelector('.searchpane');
new Search(searchPane);