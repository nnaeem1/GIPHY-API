async function fetchGifs() {
    const searchInput = document.querySelector("#search-input");
    const query = searchInput.value;
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=xli6vVM7D7FArHRV97NsXB8sJygOCL1c&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
    const data = await response.json();
    const images = data.data;

    const gifContainer = document.querySelector("#gif-container");

    for(let i = 0; i < images.length; i++){
        gifContainer.innerHTML += `<img src=${images[i].images.original.url} class="col-3 mb-3">`;
    }
}

const button = document.querySelector("#fetch-gif-btn");

button.addEventListener("click", function() {
    fetchGifs();
});