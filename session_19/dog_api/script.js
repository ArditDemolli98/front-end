fetch("https://dog.ceo/api/breed/doberman/images/random")
.then(res => res.json())
.then(data =>{
    console.log(data);
    document.querySelector("img").src = data.message;
})
.catch(error=>{
    console.log(error);
})