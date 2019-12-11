var black;
var white;
var grey;

var solution = [[1,1,1],[1,8,1],[1,1,1],[1,8,0],[1,1,1]];

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
                if (sol === 8) {
                    cell.classList.add('hint8');
                };
            };

            row.appendChild(cell);
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

function displayHint(x,y) {
    let sol = solution[x][y];
    let cellid = '#' + String(x) + String(y);
    if (sol === 8) {
        $(cellid).append('<h1>8</h1>');
    };
};

function checkSolution() {
    let solved = [];
    let totalSolved = puzzleHeight * puzzleWidth;
    for (let x = 0; x < puzzleWidth; x++) {
        for (var y = 0; y < puzzleHeight; y++) {
            let cellId = "#" + String(x) + String(y);
            if (solution[x][y] > 2) {
                solved.push(0);
            } else if (solution[x][y] === 1) {
                if ($(cellId).css('background-color') === 'rgb(0, 0, 0)') {
                    solved.push(0);
                 };
            } else if (solution[x][y] === 0) {
                if ($(cellId).css('background-color') === 'rgb(255, 255, 255)') {
                    solved.push(0);
                } else if ($(cellId).css('background-color') === 'rgb(128, 128, 128)') {
                    solved.push(0);
                };
            };
        };
    };
    if (solved.length === totalSolved) {
        return true;
    } else {
        return false;
    };
};

var puzzleHeight = solution[0].length;
var puzzleWidth = solution.length;

var solved = false;

var table = tableCreate();
console.log(table);

$('body').append(table);

for (let x = 0; x < puzzleWidth; x++) {
    for (var y = 0; y < puzzleHeight; y++) {
        changeColor(x,y);
        displayHint(x,y);    
    };
};


$('table').click(function () {
    for (let x = 0; x < puzzleWidth; x++) {
            for (var y = 0; y < puzzleHeight; y++) {
                changeColor(x,y);
            };
    };
    solved = checkSolution();
    if (solved === true) {
        $('body').html('<h1>You solved it!</h1>')
    }
});

