async function generate(){
    let input = document.querySelector(".searchrobo");
    let image = document.querySelector(".image");

    image.src = `https://robohash.org/${input.value}`;

    input.value = "";
}