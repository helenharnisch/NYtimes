const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    responseContainer.innerHTMl = '';
    searchedForText = searchField.value;
    getNews();
});

function getNews(){
    const articleRequest = new XMLHttpsRequest();
    articleRequest.open('GET',)
}
