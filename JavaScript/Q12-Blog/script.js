document.getElementsByClassName("blog")[0];


let apiLink = "https://jsonplaceholder.typicode.com/posts"
const data= async (link)=>{
    let fetcdedData = await fetch(link);
    console.log(fetcdedData);
}
data(apiLink)