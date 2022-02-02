window.onload = function () {
    autocomplete.init();
}

class Autocomplete {
    input = null;
    autoCompleteList = null;

    init() {
        this.input = document.querySelector(".input");
        this.autoCompleteList = document.querySelector(".auto-complete-list");

        this.input.addEventListener("input", (e) => {
            this.fetchTichers();
        });
    }

    fetchTichers() {
        fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.input.value}&apikey=MUNXNVPZ1OFUSJBA`)
            .then(response => response.json())
            .then(data => this.parseData(data));
    }

    parseData(data) {
        console.log(data);
    }
}

const autocomplete = new Autocomplete();


