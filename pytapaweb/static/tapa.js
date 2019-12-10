function tableCreate() {
    var tbl = document.createElement("table");

    for (let x = 0; x < puzzleWidth; x++) {
        let row = document.createElement("tr");
        tbl.appendChild(row);

        for (var y = 0; y < puzzleHeight; y++) {
            let cell = document.createElement("td");
            cell.id = String(x) + String(y);
            row.appendChild(cell);
        };
    };
    
    return tbl;
};

function changeColor(x,y) {
    let cellId = "#" + String(x) + String(y);
    let color = $(cellId).css("background-color");
    $(cellId).click(function() { 
        if (color === 'rgb(255, 255, 255)') {
            $(cellId).css("background-color", "black");
        } else if ((color === 'rgb(0, 0, 0)')) {
            $(cellId).css("background-color", "grey");
        } else {
            $(cellId).css("background-color", "white");
        };
    });
};

var notSolved = true;
var puzzleHeight = 6;
var puzzleWidth = 6;

var table = tableCreate();
console.log(table);

$('body').append(table);

for (let x = 0; x < puzzleWidth; x++) {
    for (var y = 0; y < puzzleHeight; y++) {
        changeColor(x,y);
    };
};

$('table').click(function () {
    for (let x = 0; x < puzzleWidth; x++) {
            for (var y = 0; y < puzzleHeight; y++) {
                changeColor(x,y);
            };
        };
    });