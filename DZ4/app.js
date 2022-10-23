





const btn = document.querySelector('button')
const userName= document.querySelector('.name')
const age =document.querySelector('.age')
btn.addEventListener('click',() => {
    const request = new XMLHttpRequest();
    request.open('GET','data.json');
    request.setRequestHeader('Content-type','application/json');
    request.send();
    request.addEventListener('load',() => {
        const data =(JSON.parse(request.response));
        userName.innerHTML = data.name;
        age.innerHTML = data.age;
    })
})

