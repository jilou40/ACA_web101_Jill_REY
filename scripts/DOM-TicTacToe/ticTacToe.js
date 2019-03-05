var gameMarker = "X";

function placeMark(id){
    var cell = document.getElementById(id);
        cell.innerHTML = gameMarker;

    }



function changeMarkerToX(){
    gameMarker = "X";
    console.log(gameMarker);
}

function changeMarkerToO() {
    gameMarker = "O";
    console.log(gameMarker);
}

