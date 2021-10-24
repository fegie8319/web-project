var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.')
    if (!myName || myName == null){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.innerHTML = 'Mozilla is cool,'+myName;
    }   
}

if (!localStorage.getItem('name')){ //  檢查name是否存在
    setUserName();
}else{
    let storeName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool,'+storeName;
}

myButton.onclick = function(){
    setUserName();
}