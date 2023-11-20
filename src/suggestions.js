/*Click Music Genre Buttons and get Musics*/
//let genreSelectionClass = document.querySelector
let genreSelection = document.querySelectorAll(".genrebtn");
for (let i of genreSelection) {
    i.addEventListener("click", showMusicSuggestions);
}

function showMusicSuggestions() {
    let btnValue = this.value;
    console.log(btnValue);


    let musicSuggestionCards = document.querySelector("#suggestionsContent");
    musicSuggestionCards.innerHTML = "";

    function buildSuggestionCard(title, songId) {
        return '<div class="card musicCards">' +
        '<div class="card-body">' + 
        '<h5 class="card-title">' + title + '</h5>' +
        '<p class="card-text">' + '<a id="lyricLinkCard" href="/pages/lyrics.html?id=' + songId + '">Click for Lyrics</a>' +
        '</p>' +
        '<div>' +
        '</div>'
    }

    switch (btnValue) {
        case 'country':
            musicSuggestionCards.innerHTML += buildSuggestionCard("Tennessee Whiskey", 1778812);
            musicSuggestionCards.innerHTML += buildSuggestionCard("Take me Home", 138406);
            musicSuggestionCards.innerHTML += buildSuggestionCard("Carissa", 355822);
            break;
        case 'pop':
            musicSuggestionCards.innerHTML += buildSuggestionCard("break up with your girlfriend, i'm bored", 4226433);
            musicSuggestionCards.innerHTML += buildSuggestionCard("Call Me Maybe", 70085);
            musicSuggestionCards.innerHTML += buildSuggestionCard("Watermelon Sugar", 5007939);
            break;
        case 'rap':
            musicSuggestionCards.innerHTML += buildSuggestionCard("Mansion", 725820);
            musicSuggestionCards.innerHTML += buildSuggestionCard("Fight Back", 3297302);
            musicSuggestionCards.innerHTML += buildSuggestionCard("Rap God", 235729);
            break;
        case 'rock':
            musicSuggestionCards.innerHTML += buildSuggestionCard("Leave Out All the Rest", 161013);
            musicSuggestionCards.innerHTML += buildSuggestionCard("Teenagers", 108282);
            musicSuggestionCards.innerHTML += buildSuggestionCard("American Idiot", 72937);
            break;
        case 'rb':
            musicSuggestionCards.innerHTML += buildSuggestionCard("What's My Name?", 1812);
            musicSuggestionCards.innerHTML += buildSuggestionCard("Miss Independent", 51829);
            musicSuggestionCards.innerHTML += buildSuggestionCard("Climax", 65806);
            break;
    }
}