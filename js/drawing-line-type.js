function setlinetype(){
    var linetypeselect = document.getElementById("linetype-select").value;

    if (linetypeselect === 'Dotted'){
        linetype = [5,10]
        console.log('dotted')
    }
    else {
        linetype = []
        console.log('normal')
    }
}
