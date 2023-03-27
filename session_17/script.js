for(let i = 0; i<=10; i++){
    const heading2 = document.createElement("h2");
    const teksti = document.createTextNode("Hello from JavaScript" + i);

    heading2.appendChild(teksti);
    document.body.appendChild(heading2);
}