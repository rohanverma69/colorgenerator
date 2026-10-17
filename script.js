let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    // 1. Teen random number nikalo 0 se 255 ke beech
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    // 2. RGB color bana lo (backticks ` ` ke saath)
    let nayaColor = `rgb(${r}, ${g}, ${b})`;

    // 3. Box ka color badal do
    document.querySelector(".box").style.backgroundColor = nayaColor;

    // 4. Heading me color ka naam likh do
    document.querySelector("h1").innerText = nayaColor;
});