

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function(grid) {
    // refresh new grid
    $("table tr").remove();
    // call the grid
    makeGrid();
    // avoid the boxes desapears
    grid.preventDefault();

});


function makeGrid() {
    // Your code goes here!
    // Select size input
    var row = $("#inputHeight").val();
    var column = $("#inputWidth").val();
    // loop to creat boxes
    for (var r = 1; r <= row; r++) {
        $("#pixelCanvas").append("<tr id=box" + r + "></tr>");
        for (var c = 1; c <= column; c++) {
            $("#box" + r).append("<td></td>");
            // add color
            $("td").click(function(){
                // Select color input
                var colors = $("#colorPicker").val();
                $(this).css('background-color', colors);
                
            })
        }
    }
}
