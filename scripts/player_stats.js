function highlight_row() {
    var table = document.getElementById('t1');
    var cells = table.getElementsByTagName('td');

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
            msg += '\nThe cell value is: ' + this.innerHTML;
            alert(msg);            
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