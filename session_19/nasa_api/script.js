const search = document.querySelector("button");
const input = document.querySelector("input");
const title = document.querySelector("h1");
const image = document.querySelector("img");
const desc = document.querySelector("p");

search.addEventListener("click", ()=>{
    const date = input.value;

    fetch(`https://api.nasa.gov/planetary/apod?api_key=Bcmi8mgbbyH6noHHmFuCVgLWorbWlvPtelOJ7MIT&date=${date}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        title.textContent = data.title;
        image.src = data.hdurl;
        desc.textContent = data.explanation;
    })
    .catch(error=>{
        console.log(error);
    })
})