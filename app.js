

// const API_URL =  ("https://api.github.com/users/")
const form = document.querySelector("#form")
const userImgDiv = document.getElementById("imgdiv");
const userImg = document.getElementById("userImg");
const name = document.getElementById("name");
const following = document.getElementById("following");
const follower = document.getElementById("follower");
const repos = document.getElementById("repos");
const anchorTag = document.getElementById("anchorTag");
const container = document.getElementById("container");
// const btndiv = document.getElementById("btndiv");


form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const value = event.target.children[0].value
    // console.log(value)

    const API_URL = `https://api.github.com/users/${value}`;
    // console.log(API_URL)
    try {
        const response = await axios(API_URL);
        console.log(response)

        userImg.src = (response.data.avatar_url)

        name.innerHTML = `<h1>${response.data.name}</h1>`

        repos.innerHTML = ` ${response.data.public_repos}
        <div>Repository</div>`

        follower.innerHTML = `${response.data.followers}
        <div>Follower</div>`

        following.innerHTML = `${response.data.following} 
        <div>Following</div>`

        anchorTag.href = `https://github.com/${value}`



    } catch (error) {
        // console.log(error.response.data.message);

    }
    // container.innerHTML = "";



})














