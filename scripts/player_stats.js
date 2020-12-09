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

            msg = 'The player name is: ' + rowSelected.cells[0].innerHTML;
            msg += '\nThe cell value is: ' + this.innerHTML;
            alert(msg);
        }
    }

} //end of function

window.onload = highlight_row;

// create a function to display what the abbreviations (GP,G,A, etc) are on click / hover 
// maybe use an array and alert to display? 
// below is very simple 
function display(){
    document.getElementById("abr").innerHTML = "Games Played";
}
function reset(){
    document.getElementById("abr").innerHTML = "GP";
}
