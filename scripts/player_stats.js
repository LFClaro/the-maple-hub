function highlight_row() {
    var table = document.getElementById('t1');
    // above set the variable table and references the id t1 
    // which is the id for the whole table

    var cells = table.getElementsByTagName('td');
    // set the var for cells, and is inside the table - set above
    // and references the tagname td for the tables cells

    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // using a for loop take each cell and loop through the table
        // in other words selecting each cell in the table
        // now we need to define cells selected vs not selected 
        
        
        cell.onclick = function () {
            // Do something on onclick event for cell - starting function inside a func
            
            var rowId = this.parentNode.rowIndex;
            // set the var rowID using this to refer to this. global object 
            // a node in js is simply a html element - everything from the start tag to the end tag:
            // The parentNode property returns the parent node of the specified node, as a Node object. - like when we click on the cell
            // The rowIndex property returns the position of a row in the rows collection of a table. 
            // utimately getting the row id where the cell exists /  is clicked

            var rowsNotSelected = table.getElementsByTagName('tr');
            // defining rows that are not selected 
            // using table var from before and the id tr which are the rows in the table

            for (var row = 0; row < rowsNotSelected.length; row++) {
                rowsNotSelected[row].style.backgroundColor = "";
                rowsNotSelected[row].classList.remove('selected');
                // using a for loop to loop through every row not selected
                // The classList property returns the class name(s) of an element, as a DOMTokenList object.
                // This property is useful to add, remove and toggle CSS classes on an element.
                // The classList property is read-only, however, you can modify it by using the add() and remove() methods.
                // leaving the background colour unchanged
                

            }
            var rowSelected = table.getElementsByTagName('tr')[rowId];
            rowSelected.style.backgroundColor = "gold";
            rowSelected.className += " selected";
            // setting variable for rows selected vs not
            // changing colours for selected rows 
            // The className property sets or returns the class name of an element (the value of an element's class attribute).

            msg = 'The player name is: ' + rowSelected.cells[0].querySelector('.player_name').innerHTML;
            msg += '\nThe cell value is: ' + this.innerHTML;
            alert(msg);          
            // prints message about the cell you clicked 
            // usses queryselctor to ignore image and look at span class
            // as well as this to get value from cell clicked on  
            // \n print the second part of the message on line below
        }
    }

} //end of function

window.onload = highlight_row;
// loads the function when page loads

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