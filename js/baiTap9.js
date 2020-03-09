
function check(x,y) {
    let count = 0;
    for( let i = 0;i<y.length;i++){
        if(y[i]==x){
            count++
        }
        console.log(count)
    }
    if(count==0){
        alert('-1');
    }else {
        alert(count);
    }
}
function running() {
    let a = prompt('noi dung moi cua mang');
    let arr = a.split();
    let type = prompt('ky tu can kiem tra');
    check(type,arr);
}