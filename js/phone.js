const loadallPhone = async(iphone) =>{
    
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${iphone ? iphone : "iphone" }`)
    const date = await res.json()
    console.log(date);
    
    displayAllPhone(date.data.slice(0,6));
    
}

const displayAllPhone = (phones) =>{
    const phonesContainer = document.getElementById('phones-container')
    document.getElementById('phones-container').innerHTML = ''
    phones.forEach(phone => {
        const {image,phone_name} = phone
        // console.log(phone);
        const divContainer = document.createElement("div")

        divContainer.innerHTML = `
             <div class="card bg-base-100 w-96 shadow-xl">
                <figure class="px-10 mx-10 my-4 bg-base-200 pt-10 pb-2">
                    <img
                    src=${image}
                    alt="Shoes"
                    class="" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">${phone_name}</h2>
                    <p>There are many variations of passages of available, but the majority have suffered</p>
                    <h1 class="font-bold">$999</h1>

                    <div class="card-actions">
                    <button class="btn btn-primary m-3">Details</button>
                    </div>
                </div>
            </div>
        `
        phonesContainer.appendChild(divContainer)
       
        
        
    });
    
}
 async function handleShowAll(){
  
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    const date = await res.json()
    console.log(date);
    
    displayAllPhone(date.data)

}
function progess (search){

    document.getElementById("spinner").style.display = "none"
    // loadallPhone()
    loadallPhone(search)
}
const handleSearch=(search)=>{
    // const phonesContainer = document.getElementById('phones-container')
    document.getElementById('phones-container').innerHTML = ''
    const searchBox = document.getElementById("search-box").value;
    document.getElementById("search-box").value=""
    document.getElementById("spinner").style.display = "block"
    setTimeout(function () {
        progess(searchBox)
    },2000)
   
   
    
}






loadallPhone()