function convert()
{
    let number = document.getElementById("number").value;
    let fromBase = document.getElementById("fromBase").value;
    let toBase = document.getElementById("toBase").value;

    let result = parseInt(number, fromBase).toString(toBase);

    document.getElementById("result").innerHTML = result.toUpperCase();
}