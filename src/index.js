/*Search for Musics*/
let searchMusics = document.querySelector("#searchForm");
searchMusics.addEventListener("submit", showMusics);

function showMusics(event) {
    event.preventDefault();
    
    let searchWords = document.querySelector("#searchForm-input")
    let apiEndpoint = 'https://genius-song-lyrics1.p.rapidapi.com/search/?q=';
    
   
    let url = `${apiEndpoint}${searchWords.value}&per_page=10&page=1`;
    console.log(url)
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '60eae39899mshfe0cac01ce572c3p1a10f3jsnca77cf7eb129',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
};


fetch(url, options).then(function(result) {
    return result.json();
}).then(function(data) {
    console.log(data);

    for (let i=0; i < data.hits.length; i++) {
        let music = data.hits[i];
        let title = music.result.full_title;
        let img = music.result.header_image_url;
        let songId = music.result.id;

        musicCards.innerHTML += addMusicCard(title, img, songId);
    }
    

}).catch(function (error) {
    console.log(error);
});


let musicCards = document.getElementById("musicCards");


function addMusicCard(title, img, songId) {
    return '<div class="card musicCards">' +
    '<img src="' + img + '"class="card-img-top" alt="...">' +
    '<div class="card-body">' + 
    '<h5 class="card-title">' + title + '</h5>' +
    '<p class="card-text">' + '<a id="lyricLinkCard" href="/pages/lyrics.html?id=' + songId + '">Click for Lyrics</a>' +
    '</p>' +
    '<div>' +
    '</div>'
}

}
