var black;
var white;
var grey;

var solution = [[1,22,1,1,1,1],[1,7,1,5,5,1],[1,1,1,0,0,1],[1,0,0,1,1,1],[1,4,31,1,7,1],[1,1,0,1,22,1]];

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
        $(cellid).append('<h2>8</h2>');
    };
    if (sol === 7) {
        $(cellid).append('<h2>7</h2>');
    };
    if (sol === 6) {
        $(cellid).append('<h2>6</h2>');
    };
    if (sol === 5) {
        $(cellid).append('<h2>5</h2>');
    };
    if (sol === 51) {
        $(cellid).append('<h2>5    1</h2>');
    };
    if (sol === 4) {
        $(cellid).append('<h2>4</h2>');
    };
    if (sol === 41) {
        $(cellid).append('<h2>4     1</h2>');
    };
    if (sol === 42) {
        $(cellid).append('<h2>4     2</h2>');
    };
    if (sol === 3) {
        $(cellid).append('<h2>3</h2>');
    };
    if (sol === 33) {
        $(cellid).append('<h2>3     3</h2>');
    };
    if (sol === 32) {
        $(cellid).append('<h2>3     2</h2>');
    };
    if (sol === 311) {
        $(cellid).append('<h2>3      1</h2><h2>1</h2>');
    };
    if (sol === 31) {
        $(cellid).append('<h2>3      1</h2>');
    };
    if (sol === 22) {
        $(cellid).append('<h2>2      2</h2>');
    };
    if (sol === 2) {
        $(cellid).append('<h2>2</h2>');
    };
    if (sol === 21) {
        $(cellid).append('<h2>2      1</h2>');
    };
    if (sol === 221) {
        $(cellid).append('<h2>2      2</h2><h2>1</h2>');
    };
    if (sol === 211) {
        $(cellid).append('<h2>2      1</h2><h2>1</h2>');
    };
    if (sol === 11) {
        $(cellid).append('<h2>1</h2>');
    };
    if (sol === 111) {
        $(cellid).append('<h2>1      1</h2>');
    };
    if (sol === 1111) {
        $(cellid).append('<h2>1      1</h2><h2>1</h2>');
    };
    if (sol === 11111) {
        $(cellid).append('<h2>1      1</h2><h2>1     1</h2>');
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

