let idLogin = prompt('Ten dang nhap la: ');
if (idLogin== 'Admin'){
    let pass = prompt('Mat khau la: ');
    if (pass=='The Master'){
        alert('Welcome')
    }else if (pass== null){
        alert('Canceled')
    }else {
        alert('Wrong Password')
    }
}else if (idLogin == 'null') {
    alert('Canceled');
}else {
    alert("I don't know you");

}