
function hideOnClick() {
  document.getElementById('show').style.display = "block";
  document.getElementById('hideButton').style.display = "none";
  document.getElementById('song-detail').style.display = "none";
  document.getElementById('song-cover').style.display = "none";
  document.getElementById('song').style.display = "none";
  document.getElementById('PlayerButton').style.display = "block";
  document.getElementById('sticky-content').style.left = "90%";
}

function showOnClick() {
  document.getElementById('show').style.display = "none";
  document.getElementById('hideButton').style.display = "block";
  document.getElementById('song-detail').style.display = "block";
  document.getElementById('song-cover').style.display = "block";
  document.getElementById('song').style.display = "block";
  document.getElementById('PlayerButton').style.display = "none";
  document.getElementById('sticky-content').style.left = "0px";

}

function Play() {
  document.getElementById('song').play()
  document.getElementById('play').style.display = "none";
  document.getElementById('pause').style.display = "block";

}

function Pause() {
  document.getElementById('song').pause()
  document.getElementById('play').style.display = "block";
  document.getElementById('pause').style.display = "none";

}