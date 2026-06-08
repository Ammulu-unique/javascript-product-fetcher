// Add an eventlistner (event listener is which listens to an event and responds)
// add event listener to btn

const btn = document.getElementById('show-products');
const listContainer = document.getElementById('product-list');
const BASE_URL = "https://dummyjson.com/"

btn.addEventListener("click",handleClick);

function handleClick(){
    getData(BASE_URL)
        .then((data)=> renderData(listContainer,data.products))
        .catch((error)=>renderError(listContainer,error));
}

async function getData(url){
    try{
        console.log("API call initiated");
        const data = await fetch(`${url}products`);
        if(!data.ok){
            throw new Error("error occured");
        }
        return data.json();
    }catch(e){
        throw e;
    }finally{
        console.log("data fetching completed");
    }
}

function renderData(container, apidata){
    container.innerHTML = "";
    apidata.forEach((item)=>{
        const list = document.createElement("li")
        list.innerText = item.title;
        container.appendChild(list);
    })
}

function renderError(container, apiError){
    container.innerHTML = "";
    const list = document.createElement("li")
    list.innerText = apiError.message;
    container.appendChild(list);
}

