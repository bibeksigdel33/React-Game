
function walking() {
    var i=0;
    var characterMovements = ['assets/character-1.png', 'assets/character-2.png'];
    window.setInterval( function() {
        document.getElementById('character-image').src= characterMovements[i];
        i++;
        if (i === characterMovements.length) { i=0; }
}, 200);
}
window.onload = function start() {
    walking();
}