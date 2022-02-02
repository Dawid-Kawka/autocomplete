window.onload = function () {
    autocomplete.init();
}

class Autocomplete {
    input = null;
    autoCompleteList = null;

    init() {
        this.input = document.querySelector(".input");
        this.autoCompleteList = document.querySelector(".auto-complete-list");

    }
}

const autocomplete = new Autocomplete();


