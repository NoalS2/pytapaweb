var black;
var white;
var grey;

var solution = [[1,1,1],[1,8,1],[1,1,1]];

function tableCreate() {
    var tbl = document.createElement("table");

    for (let x = 0; x < puzzleWidth; x++) {
        let row = document.createElement("tr");
        tbl.appendChild(row);

        for (var y = 0; y < puzzleHeight; y++) {
            let cell = document.createElement("td");
            cell.id = String(x) + String(y);
            let sol = solution[x][y];
            if (sol > 2) {
                 cell.classList.add("hint");
                 console.log(cell.classList.contains('hint'));
             };
             row.appendChild(cell)
        };
    };
    
    return tbl;
};

function changeColor(x,y) {
    let cellId = "#" + String(x) + String(y);
    let color = $(cellId).css("background-color");
    $(cellId).click(function() { 
        if (this.classList.contains('hint') !== true) {
            if (color === 'rgb(255, 255, 255)') {
                $(this).css("background-color", "black");
            } else if ((color === 'rgb(0, 0, 0)')) {
                $(this).css("background-color", "grey");
            } else {
                $(this).css("background-color", "white");
            };
        };
    });
};

var notSolved = true;
var puzzleHeight = 3;
var puzzleWidth = 3;

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