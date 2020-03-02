function radius(r) {
    r = document.getElementById("radius").value;
    let s = (r * r) * 3.14;
    return s;
}

function diameter(d) {
    d = document.getElementById("diameter").value;
    let p = d * 3.14;
    return p;
}

function calculator() {
    document.getElementById("result1").innerHTML = "Diện tích hình tròn là: " + radius();
    document.getElementById("result2").innerHTML = "Chu vi hình tròn là: " + diameter();
}