var playList = new Playlist();

var daddy = new Song("daddy","daddy got a gun", "2:34");
var mommy = new Song("mommy","jenny got a gun", "2:40");

playList.add(daddy);
Playlist.add(mommy);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButtton.onclick = function() {
  playlist.play();
  playlist.renderInElement(playlistElement);
}
var nextButton = document.getElementById("next");
nextButtton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
}
var stopButton = document.getElementById("stop");
stopButtton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}