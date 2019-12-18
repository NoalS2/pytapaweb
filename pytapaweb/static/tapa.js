
// Global variables
var black;
var white;
var grey;
var yesterday = [[111,1,1,0,1,3],[1,0,1,1,1,1],[1,1,22,31,0,1],[0,1,31,3,1,1],[1,1,0,1,1,0],[3,1,1,1,0,11]];
var today = [[1,1,1,0,1,1],[1,7,1,51,6,1],[1,42,1,1,1,1],[1,1,0,1,6,1],[1,6,311,0,311,1],[1,1,1,1,0,1]];

// This function represents the entire creation of the Tapa puzzle
function tapa(solution, ident, buttonid) {

    // Local variables for the Tapa puzzle creation

    // The variable Jquery uses to call the specific element in my HTML
    let identity = "#" + ident;
    // The variable used to tell if the puzzle has been solved
    let solved = false;
    // The dimensions of the puzzle generated by the size of the solution matrix
    let puzzleHeight = solution[0].length;
    let puzzleWidth = solution.length;
    
    // A function that returns an HTML table element for the puzzle
    function tableCreate() {
        let tbl = document.createElement("table");

        for (let x = 0; x < puzzleWidth; x++) {
            let row = document.createElement("tr");
            tbl.appendChild(row);

            for (var y = 0; y < puzzleHeight; y++) {
                let cell = document.createElement("td");
                // Assigns every individual cell in the table a unique ID
                cell.id = ident + String(x) + String(y);
                let sol = solution[x][y];
                // Gives the hint class to the correct table elements
                if (sol > 1) {
                    cell.classList.add("hint");
                };

                row.appendChild(cell);
            };
        };
        
        return tbl;
    };

    // A function that uses Jquery to change the background color of individual cells in the table
    function changeColor(x,y) {
        let cellId = "#" + ident + String(x) + String(y);
        let color = $(cellId).css("background-color");
        // Jquery switch to change the color of the cell based on left click or right click
        $(cellId).mousedown(function (event) {
            switch (event.which) {
                // case 1 is the left click and automatically cycles through black, grey, white
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
                // case 2 is the not used in this switch
                case 2:
                    break;
                // case 3 is the right click and toggles between grey and white
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

    // A function that displays the correct hint based on the value from the solution matrix
    function displayHint(x,y) {
        // Hints are displayed for any number greater than 1. 
        // The numbers 0 and 1 represent tiles which are part of the puzzle, 0 = white, 1 = black.
        // The rest of the hints are pretty self explanitory. The bigger number will always come first 
        // and the biggest strange hint are the 1's. Because 1 = black I use the hints 11 to represent 1
        // 111 to represent 11 1111 to represent 111 and 11111 to represent 1111. 
        
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

    // A function that returns either true or false if the puzzle is solved
    function checkSolution() {
        // The empty list which will be filled with 0's for every correct tile.
        let solved = [];
        // The total number of tiles that are in the puzzle.
        let totalSolved = puzzleHeight * puzzleWidth;
        for (let x = 0; x < puzzleWidth; x++) {
            for (var y = 0; y < puzzleHeight; y++) {
                let cellId = identity + String(x) + String(y);
                // This automatically pushes a 0 to the list for every hint
                if (solution[x][y] > 1) {
                    solved.push(0);
                // This pushes a 0 to the list for every blackened tile that is part of the solution
                } else if (solution[x][y] === 1) {
                    if ($(cellId).css('background-color') === 'rgb(0, 0, 0)') {
                        solved.push(0);
                    };
                // This pushes a 0 to the list for every white or grey tile that is not part of the solution
                } else if (solution[x][y] === 0) {
                    if ($(cellId).css('background-color') === 'rgb(255, 255, 255)') {
                        solved.push(0);
                    } else if ($(cellId).css('background-color') === 'rgb(128, 128, 128)') {
                        solved.push(0);
                    };
                };
            };
        };
        // Returns true if every tile pushed a 0, meaning the entire puzzle is correctly solved.
        if (solved.length === totalSolved) {
            return true;
        } else {
            return false;
        };
    };

    let table = tableCreate();
    
    // Uses Jquery to display the puzzle 
    $(identity).append(table);
    
    // This creates the initial default puzzle
    for (let x = 0; x < puzzleWidth; x++) {
        for (var y = 0; y < puzzleHeight; y++) {
            changeColor(x,y);
            displayHint(x,y);    
        };
    };

    // A Jquery listener on the Check Button that will run the checkSolution function
    $(buttonid).click(function () {
        solved = checkSolution();
        if (solved === true && $(identity).find("h1").length === 0) {
            $(identity).append('<h1>You solved it!</h1>');
        }
    });

    // This is the 'game loop' which is refreshed every time the user clicks
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
    
    // This is how the timer is created and displayed
    let start = new Date;

    setInterval(function() {
        $('#timer').text(parseInt((new Date - start) / 1000) + " Seconds");
    }, 1000);

};

// This function adds a listener to the start button that runs the tapa function when it is pressed
function startButton(buttonid) {
    $(buttonid).click(function () {
        tapa(today, 'daily', '#dailybutton');
        $(buttonid).attr("hidden",true);
        $('#dailybutton').attr("hidden",false);
    }); 
};


startButton('#startbutton');







