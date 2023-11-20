/*Display Lyrics*/

let params = new URL(document.location).searchParams;
let songId = params.get("id");
console.log(songId);

if(songId === null)
{
    displayError()
} 
else 
{
    displayLyrics()
}


function displayError () {
let errorMessage = document.querySelector("#lyricCard");
errorMessage.innerHTML = '<p class="idErrorMessage>' + 
'<h3>We could not find your music!🙁</h3>' +
'</br><h5>Please try to search again ' + 
'<a href="/index.html>here</a></br>' + 
'<h6>Pro tip: Check if you have the right keywords!</h6>' + 
'</p>';

}



function displayLyrics() {

    const url = `https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=${songId}`;
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
    let lyrics = data.lyrics.lyrics.body.html;
    console.log(lyrics);

    let lyricsContent = document.querySelector("#lyricCard");
    lyricsContent.innerHTML = lyrics;

    

}).catch(function (error) {
    console.log(error);
});



    
}