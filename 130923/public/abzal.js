let counter = 0,
     _counter = document.getElementById("counter"),
     _buttonInc = document.getElementById("inc"),
    _buttonDec = document.getElementById("dec"),
    _buttonReset = document.getElementById("reset");

function _incCounter() {



    if (counter >= 0 && counter < 10) {

        counter += 1;
        _counter.innerHTML = `${counter}`;
        _buttonReset.disabled = false;
        _buttonReset.style.background = "yellow";
        _buttonDec.disabled = false;
        _buttonDec.style.background = "red";
    }

    if (counter == 10) {
        _counter.style.color = "red";
        _buttonInc.disabled = true;
        _buttonInc.style.background = "grey";
    }

}

function _decCounter () {

   if(counter > 0) {

       counter = counter - 1;
       _counter.innerHTML = `${counter}`;
       _buttonInc.disabled = false;
       _buttonInc.style.background = "green";

   }

    if(counter == 0) {

        _buttonDec.disabled = true;
        _buttonDec.style.background = "grey";
        _buttonReset.disabled = true;
        _buttonReset.style.background = "grey";

    }
    _counter.style.color = "black";

}

function _resetCounter () {

    if(counter == 0) {
        _buttonReset.disabled = true;
        _buttonReset.style.background = "grey";
    }
    if(counter !== 0) {

        counter = 0;
        _counter.innerHTML = `${counter}`;

        _buttonReset.disabled = true;
        _buttonReset.style.background = "grey";
        _buttonDec.disabled = true;
        _buttonDec.style.background = "grey";

        _buttonInc.disabled = false;
        _buttonInc.style.background = "green";
    }

}