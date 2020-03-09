function min() {
    let a = parseInt(prompt('nhap vao so a'));
    let b = parseInt(prompt('nhap vao so b'));
    let c = parseInt(prompt('nhap vao so c'));
    if (c < b && c < a) {
        alert(c);
    } else {
        if (b < a && b < c) {
            alert(b);
        } else {
            alert(a);
        }
    }
}