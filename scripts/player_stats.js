function highlight_row() {
    var table = document.getElementById('t1');
    // above set the variable table and references the id t1 
    // which is the id for the entire table

    var cells = table.getElementsByTagName('td');
    // set the var for cells, but says inside this table
    // and references the tagname td for the table cells 

    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // using a for loop take each cell and loop
        // in other words selecting each cell in the table
        // now we need to define cells selected vs not selected 
        
        
        cell.onclick = function () {
            // Do something on onclick event for cell - starting function in func
            
            var rowId = this.parentNode.rowIndex;
            // set the var rowID using this to refer to this object (node object)
            // The parentNode property returns the parent node of the specified node, as a Node object.
            // The rowIndex property returns the position of a row in the rows collection of a table.
            // Get the row id where the cell exists / clicked

            var rowsNotSelected = table.getElementsByTagName('tr');
            // defining rows that are not selected 
            // using table var from before and the id tr which are the rows in the table

            for (var row = 0; row < rowsNotSelected.length; row++) {
                rowsNotSelected[row].style.backgroundColor = "";
                rowsNotSelected[row].classList.remove('selected');
                // using a for loop to loop through all rows not selected
                // leaving the background colour unchanged
                

            }
            var rowSelected = table.getElementsByTagName('tr')[rowId];
            rowSelected.style.backgroundColor = "gold";
            rowSelected.className += " selected";
            // setting variable for rows selected vs not
            // changing colours for selected rows 

            msg = 'The player name is: ' + rowSelected.cells[0].querySelector('.player_name').innerHTML;
            msg += '\nThe cell value is: ' + this.innerHTML;
            alert(msg);          
            // prints message about the cell you clicked 
            // usses queryselctor to ignore image and look at span class
            // as well as this to get value from cell clicked on  
        }
    }

} //end of function

window.onload = highlight_row;

/*
function highlight_row2() {
    var table = document.getElementById('t1');
    var cells = table.getElementsByTagName('td');
    var th = table.getElementsByTagName('th');

    for (var i = 0; i < cells.length; i++) {
        // Take each cell and lopp
        var cell = cells[i];
        // do something on onclick event for cell
        cell.onclick = function () {
            // Get the row id where the cell exists / clicked
            var rowId = this.parentNode.rowIndex;

            var rowsNotSelected = table.getElementsByTagName('tr');
            for (var row = 0; row < rowsNotSelected.length; row++) {
                rowsNotSelected[row].style.backgroundColor = "";
                rowsNotSelected[row].classList.remove('selected');
            }
            var rowSelected = table.getElementsByTagName('tr')[rowId];
            rowSelected.style.backgroundColor = "gold";
            rowSelected.className += " selected";

            msg = 'The player name is: ' + rowSelected.cells[0].querySelector('.player_name').innerHTML;
            msg += '\nThe ' + th.innerHTML + ' value is: ' + this.innerHTML;
            alert(msg);            
        }
    }

} //end of function

window.onload = highlight_row2;
*/