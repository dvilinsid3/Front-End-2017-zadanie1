function countSeen() {
    "use strict";
    var moviesSeen = 0, i;
    for (i = 0; i < moviesData.length; i += 1) {
        if (moviesData[i].seen === "T") {
            moviesSeen += 1;
        }
    }
    return moviesSeen;
}

function countAll() {
    "use strict";
    return moviesData.length;
}

function showCounters() {
    "use strict";
    document.getElementById("moviesCounterAll").textContent = countAll(moviesData);
    document.getElementById("moviesCounterSeen").textContent = countSeen(moviesData);
}

function makeMoviesList() {
    "use strict";
    var list = document.getElementById("moviesList"), i;
    list.innerHTML = "";
    for (i = 0; i < moviesData.length; i += 1) {
        if (moviesData[i].seen === "T") {
            list.innerHTML += "<li> ID: " + moviesData[i].id + "</br> Title: " + moviesData[i].title
                + " (" + moviesData[i].year + ") </br>" + "Genre: " + moviesData[i].genre + "</br> Summary: "
                + moviesData[i].summary + "</br><img src = '.\\img\\seen.png' id='img" + i + "' onclick = 'changeValue(" + i + ")'/></br>Seen</li></br></br>";
        } else {
            list.innerHTML += "<li> ID: " + moviesData[i].id + "</br> Title: " + moviesData[i].title
                + " (" + moviesData[i].year + ") </br>" + "Genre: " + moviesData[i].genre + "</br> Summary: "
                + moviesData[i].summary + "</br><img src='.\\img\\unseen.png' id='img" + i + "' onclick= 'changeValue(" + i + ")'/></br>Unseen</li></br></br>";
        }
    }
}

function changeImage(imageNumber) {
    "use strict";
    var img = document.getElementById("img" + imageNumber);
    if (img.src.includes("unseen.png")) {
        img.src = ".\\img\\seen.png";
    } else {
        img.src = ".\\img\\unseen.png";
    }
}

function changeData(imageNumber) {
    "use strict";
    if (moviesData[imageNumber].seen === "T") {
        moviesData[imageNumber].seen = "F";
    } else {
        moviesData[imageNumber].seen = "T";
    }
}

function changeValue(imageNumber) {
    "use strict";
    changeImage(imageNumber);
    changeData(imageNumber);
    showCounters();
    makeMoviesList();
}

showCounters();
makeMoviesList();