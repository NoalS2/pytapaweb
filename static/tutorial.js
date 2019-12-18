var black;
var white;
var grey;

function tapa(solution, ident, buttonid) {

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
                if (sol > 1) {
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
        $(cellId).mousedown(function (event) {
            switch (event.which) {
                case 1:
                    if (this.classList.contains('hint') !== true) {
                        if (color === 'rgb(0, 0, 0)') {
                            $(this).css("background-color", "grey");
                        } else if (color === 'rgb(128, 128, 128)') {
                            $(this).css("background-color", "white");
                        } else {
                            $(this).css("background-color", "black");
                        };
                    };
                    break;
                case 2:
                    break;
                case 3:
                    if (this.classList.contains('hint') !== true) {
                        if (color === 'rgb(128, 128, 128)') {
                            $(this).css("background-color", "white");
                        } else {
                            $(this).css("background-color", "grey");
                        };
                    };
                    break;      
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

    $(identity).append(table);

    for (let x = 0; x < puzzleWidth; x++) {
        for (var y = 0; y < puzzleHeight; y++) {
            changeColor(x,y);
            displayHint(x,y);    
        };
    };

    $(buttonid).click(function () {
        solved = checkSolution();
        if (solved === true && $(identity).find("h1").length === 0) {
            $(identity).append('<h1>You solved it!</h1>');
        }
    });


    $(identity).mousedown(function (event) {
        switch (event.which) {
            case 1:
                for (let x = 0; x < puzzleWidth; x++) {
                        for (var y = 0; y < puzzleHeight; y++) {
                            changeColor(x,y);
                        };
                };
                break;
            case 2:
                break;
            case 3:
                for (let x = 0; x < puzzleWidth; x++) {
                    for (var y = 0; y < puzzleHeight; y++) {
                        changeColor(x,y);
                    };
                };
                break;      
        };
    });
    
    $('#button5').click(function () {
        solved = checkSolution();
        if (solved === true && $(identity).find("h1").length === 0) {
            $('#congrats').append('<h1>You solved it!</h1>');
        };
    });
};

function startButton(buttonid) {
    $(buttonid).click(function () {
        tapa([[111,1,1,0,1,3],[1,0,1,1,1,1],[1,1,22,31,0,1],[0,1,31,3,1,1],[1,1,0,1,1,0],[3,1,1,1,0,11]], 'daily', '#dailybutton');
    }); 
};

var practiceSolution = [[1,1,1,0],[1,0,1,4],[31,1,1,1],[1,1,0,2]];

function help(solution) {
    // This for loop gives a hint for the first step of the puzzle.
    for (let x = 0; x < solution.length; x++) {
        for (var y = 0; y < solution[0].length; y++) {
            let cellId = '#practice' + String(x) + String(y);
            if (x === 0 && y === 2) {
                if ($(cellId).css('background-color') === 'rgb(255, 255, 255)' || $(cellId).css('background-color') === 'rgb(128, 128, 128)') {
                    return '<p>The "4" hint is touching 5 squares. This means of the 5 available squares 4 of them will be blackened. Because of this the middle 3 squares will always be black.</p>';
                };
            } else if (x === 1 && y === 2) {
                if ($(cellId).css('background-color') === 'rgb(255, 255, 255)' || $(cellId).css('background-color') === 'rgb(128, 128, 128)') {
                    return '<p>The "4" hint is touching 5 squares. This means of the 5 available squares 4 of them will be blackened. Because of this the middle 3 squares will always be black.</p>';
                };
            } else if (x === 2 && y === 2) {
                if ($(cellId).css('background-color') === 'rgb(255, 255, 255)' || $(cellId).css('background-color') === 'rgb(128, 128, 128)') {
                    return '<p>The "4" hint is touching 5 squares. This means of the 5 available squares 4 of them will be blackened. Because of this the middle 3 squares will always be black.</p>';
                };
            };
        };
    };
    // This for loop gives a hint for the second step of the puzzle.
    for (let x = 0; x < solution.length; x++) {
        for (var y = 0; y < solution[0].length; y++) {
            let cellId = '#practice' + String(x) + String(y);       
            if (x === 2 && y === 1) {
                if ($(cellId).css('background-color') === 'rgb(255, 255, 255)' || $(cellId).css('background-color') === 'rgb(128, 128, 128)') {
                    return '<p>The "3" hint is touching 5 squares. This means of the 5 available squares 3 of them will be blackened. Because of this the middle square will always be black.</p>';
                };
            };
        };
    };
    // This for loop gives a hint for the third step of the puzzle.
    for (let x = 0; x < solution.length; x++) {
        for (var y = 0; y < solution[0].length; y++) {
            let cellId = '#practice' + String(x) + String(y);
            if (x === 1 && y === 1) {
                if ($(cellId).css('background-color') === 'rgb(255, 255, 255)' || $(cellId).css('background-color') === 'rgb(0, 0, 0)') {
                    return '<p>Remember that you can never have a 2x2 block of black tiles. Mark any tiles you know are not part of the solution grey.</p>';
                };
            };
        };
    };
    // This for loop gives a hint for the fourth step of the puzzle.
    for (let x = 0; x < solution.length; x++) {
        for (var y = 0; y < solution[0].length; y++) {
            let cellId = '#practice' + String(x) + String(y);
            if (x === 1 && y === 0) {
                if ($(cellId).css('background-color') === 'rgb(255, 255, 255)' || $(cellId).css('background-color') === 'rgb(128, 128, 128)') {
                    return '<p>The "3 1" hint is now complete because there are 4 available tiles and there should be 4 black tiles next to it.</p>';
                };
            }else if (x === 3 && y === 0) {
                if ($(cellId).css('background-color') === 'rgb(255, 255, 255)' || $(cellId).css('background-color') === 'rgb(128, 128, 128)') {
                    return '<p>The "3 1" hint is now complete because there are 4 available tiles and there should be 4 black tiles next to it.</p>';
                };
            }else if (x === 3 && y === 1) {
                if ($(cellId).css('background-color') === 'rgb(255, 255, 255)' || $(cellId).css('background-color') === 'rgb(128, 128, 128)') {
                    return '<p>The "3 1" hint is now complete because there are 4 available tiles and there should be 4 black tiles next to it.</p>';
                };
            };
        };
    };
    // This for loop gives a hint for the fifth step of the puzzle.
    for (let x = 0; x < solution.length; x++) {
        for (var y = 0; y < solution[0].length; y++) {
            let cellId = '#practice' + String(x) + String(y);
            if (x === 0 && y === 0) {
                if ($(cellId).css('background-color') === 'rgb(255, 255, 255)' || $(cellId).css('background-color') === 'rgb(128, 128, 128)') {
                    return '<p>The solution must be a continuous line.</p>';
                };
            };
            if (x === 0 && y === 1) {
                if ($(cellId).css('background-color') === 'rgb(255, 255, 255)' || $(cellId).css('background-color') === 'rgb(128, 128, 128)') {
                    return '<p>The solution must be a continuous line.</p>';
                };
            };
        };
    };
    // This for loop gives a hint for the sixth step of the puzzle.
    for (let x = 0; x < solution.length; x++) {
        for (var y = 0; y < solution[0].length; y++) {
            let cellId = '#practice' + String(x) + String(y);
            if (x === 3 && y === 2) {
                if ($(cellId).css('background-color') === 'rgb(255, 255, 255)' || $(cellId).css('background-color') === 'rgb(0, 0, 0)') {
                    return '<p>Remember that you can never have a 2x2 block of black tiles.</p><p>Mark any tiles you know are not part of the solution grey.</p>';
                };
            };
        };
    };
    // This for loop gives the hint for the last step of the puzzle.
    for (let x = 0; x < solution.length; x++) {
        for (var y = 0; y < solution[0].length; y++) {
            let cellId = '#practice' + String(x) + String(y);
            if (x === 2 && y === 3) {
                if ($(cellId).css('background-color') === 'rgb(255, 255, 255)' || $(cellId).css('background-color') === 'rgb(128, 128, 128)') {
                    return '<p>The "2" hint is now complete because there are 2 available tiles and there should be 2 black tiles next to it.</p>';
                }
            };
        };
    };

};    

tapa([[1,1,1],[1,8,1],[1,1,1]], 'rule1', '#button1');
tapa([[1,1,3],[5,1,1],[1,1,3]], 'rule2', '#button2');
tapa([[1,22,1],[1,0,1],[1,1,1]], 'rule3', '#button3');
tapa([[0,1,3],[1,1,1],[3,1,0]], 'rule4', '#button4');
tapa([[1,1,1,0],[1,0,1,4],[31,1,1,1],[1,1,0,2]], 'practice', '#button6');

$('#help').click(function () {
    $('#hints').html(help(practiceSolution));
});



