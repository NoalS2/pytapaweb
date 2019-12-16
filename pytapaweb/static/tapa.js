var black;
var white;
var grey;

function tapa(solution, ident) {

    let identity = "#" + ident

    function tableCreate() {
        var tbl = document.createElement("table");

        for (let x = 0; x < puzzleWidth; x++) {
            let row = document.createElement("tr");
            tbl.appendChild(row);

            for (var y = 0; y < puzzleHeight; y++) {
                let cell = document.createElement("td");
                cell.id = ident + String(x) + String(y);
                let sol = solution[x][y];
                if (sol > 2) {
                    cell.classList.add("hint");
                };

                row.appendChild(cell);
            };
        };
        
        return tbl;
    };

    function changeColor(x,y) {
        let cellId = "#" + ident + String(x) + String(y);
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
        let cellid = identity + String(x) + String(y);
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
                let cellId = identity + String(x) + String(y);
                if (solution[x][y] > 1) {
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

    let puzzleHeight = solution[0].length;
    let puzzleWidth = solution.length;

    let solved = false;

    let table = tableCreate();

    console.log(table);

    $(identity).append(table);

    for (let x = 0; x < puzzleWidth; x++) {
        for (var y = 0; y < puzzleHeight; y++) {
            changeColor(x,y);
            displayHint(x,y);    
        };
    };


    $(identity).click(function () {
        for (let x = 0; x < puzzleWidth; x++) {
                for (var y = 0; y < puzzleHeight; y++) {
                    changeColor(x,y);
                };
        };
        solved = checkSolution();
        if (solved === true && $(identity).find("h1").length === 0) {
            $(identity).append('<h1>You solved it!</h1>')
        }
    });
};


tapa([[111,1,1,0,1,3],[1,0,1,1,1,1],[1,1,22,31,0,1],[0,1,31,3,1,1],[1,1,0,1,1,0],[3,1,1,1,0,11]], 'daily');
tapa([[1,1,1],[1,8,1],[1,1,1]], 'rule1');
tapa([[1,1,3],[5,1,1],[1,1,3]], 'rule2');
tapa([[1,22,1],[1,0,1],[1,1,1]], 'rule3');
tapa([[1,1,1,0],[1,0,1,4],[31,1,1,1],[1,1,0,2]], 'rule4');







