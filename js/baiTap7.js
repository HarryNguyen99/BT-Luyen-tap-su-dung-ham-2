
function swap(a,b) {
    a= a+b;
    b=a-b;
    a=a-b;
    alert('a: '+a+ 'b: '+b);
}
function running() {
    let a = parseInt(prompt('nhap vao so a'));
    let b = parseInt(prompt('nhap vao so b'));
    swap(a,b);
}