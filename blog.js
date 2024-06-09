
let Shoplist = [{
  picture: "fruits.jpg",
  headertext: "Fruits",
  subtext: "Two Kilos of fruits",
  important: 0,
  
  
},
{
  picture: "runningshoe.jpg",
  headertext: "Running shoes",
  subtext: "Nike running shoes",
  important: 0,
  
  
},
{
  picture: "cycling.jpg",
  headertext: "Racing Bike",
  subtext: "Second hand racing bike",
  important: 0,
  
  
},
{
  picture: "headset.jpg",
  headertext: "Headphone",
  subtext: "Bose headset",
  important: 0,
  
  
},
{
  picture: "coding.jpg",
  headertext: "Desktop",
  subtext: "Imac Desktop",
  important: 0,
  
 
},
{
  picture: "cleaning.jpg",
  headertext: "Detergents",
  subtext: "Kellogs cleaner",
  important: 0,
  
 
},
{
  picture: "Gym.jpg",
  headertext: "Gym Membership",
  subtext: "One year Membership",
  important: 0,
  
  
},
{
  picture: "bed.jpg",
  headertext: "Bedsheets",
  subtext: "Ikea bedsheet",
  important: 0,
  
  
},
{
  picture: "fish.jpg",
  headertext: "Fish",
  subtext: "Weekly Kilos of fish",
  important: 0,
  
},
{
  picture: "summer.jpg",
  headertext: "Summer Vacation",
  subtext: "Summer in Cancun",
  important: 0,
 
}
];

for(let val of Shoplist) {
  document.getElementById("result").innerHTML += `<div class= "mt-4 mb-4">
  <div class="card" style="width: 18rem;">
  <img src="photos/${val.picture}" class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title">${val.headertext} </h4>
    <h5 class="card-title"> ${val.subtext}</h5>
    <p class="card-text bg-success backcolor">
    important: <span class="numberlikes">${val.important}</span>
    </p>
    <a class="btn btn-primary likeBtn">importance</a>
  </div>
</div>
  </div>`;
}

let btns = document.querySelectorAll(".likeBtn");


btns.forEach((element, index) => {
  element.addEventListener("click", function(){
    if(Shoplist[index].important < 5)
    Shoplist[index].important++;
    document.querySelectorAll(".numberlikes") [index].innerText= Shoplist[index].important;
    if(Shoplist[index].important <= 1) {}
    else if (Shoplist[index].important <= 3) {
      document.getElementsByClassName("backcolor")[index].classList.add("bg-warning");
      document.getElementsByClassName("backcolor")[index].classList.remove("bg-danger bg-success")
    }
    else if (Shoplist[index].important <= 4) {
      document.getElementsByClassName("backcolor")[index].classList.add("bg-danger");
      document.getElementsByClassName("backcolor")[index].classList.remove("bg-warning bg-success")
    }
  });
});




document.getElementById("mostImpBtn").addEventListener("click", function () {
  document.getElementById("result").innerHTML = "";
  Shoplist = Shoplist.sort((a,b) =>b.important-a.important);
  for (let val of Shoplist) {
    document.getElementById("result").innerHTML += `<div class= "mt-4 mb-4">
  <div class="card" style="width: 18rem;">
  <img src="photos/${val.picture}" class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title">${val.headertext} </h4>
    <h5 class="card-title"> ${val.subtext}</h5>
    <p class="card-text bg-success backcolor">
    important: <span class="numberlikes">${val.important}</span>
    </p>
    <a class="btn btn-primary likeBtn">importance</a>
  </div>
</div>
  </div>`;
}



let btns = document.querySelectorAll(".likeBtn");
  btns.forEach((element, index) => {
    element.addEventListener("click", function () {
  if (Shoplist[index].important < 5) Shoplist[index].important++;
  document.querySelectorAll(".numberlikes")[index].innerText =
    Shoplist[index].important;
});
  if(Shoplist[index].important <= 1) {}
    else if (Shoplist[index].important <= 3) {
      document.getElementsByClassName("backcolor")[index].classList.add("bg-warning");
      document.getElementsByClassName("backcolor")[index].classList.remove("bg-success");
      document.getElementsByClassName("backcolor")[index].classList.remove("bg-danger");

    }
    else if (Shoplist[index].important <= 5) {
      document.getElementsByClassName("backcolor")[index].classList.add("bg-danger");
      document.getElementsByClassName("backcolor")[index].classList.remove("bg-success");
      document.getElementsByClassName("backcolor")[index].classList.remove("bg-warning");
    }


});
})


document.getElementById("leastImpBtn").addEventListener("click", function () {
  document.getElementById("result").innerHTML = "";
  Shoplist = Shoplist.sort((a,b) =>a.important-b.important);
  for (let val of Shoplist) 
  {document.getElementById("result").innerHTML += `<div class= "mt-4 mb-4">
  <div class="card" style="width: 18rem;">
  <img src="photos/${val.picture}" class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title">${val.headertext} </h4>
    <h5 class="card-title"> ${val.subtext}</h5>
    <p class="card-text bg-success backcolor">
    important: <span class="numberlikes">${val.important}</span>
    </p>
    <a class="btn btn-primary likeBtn">importance</a>
  </div>
</div>
  </div>`;
  
    }

    let btns = document.querySelectorAll(".likeBtn");
  btns.forEach((element, index) => {
    element.addEventListener("click", function () {
      if (Shoplist[index].important < 5) Shoplist[index].important++;
      document.querySelectorAll(".numberlikes")[index].innerText =
        Shoplist[index].important;
    });
      if(Shoplist[index].important <= 1) {}
        else if (Shoplist[index].important <= 3) {
          document.getElementsByClassName("backcolor")[index].classList.add("bg-warning");
          document.getElementsByClassName("backcolor")[index].classList.remove("bg-success");
          document.getElementsByClassName("backcolor")[index].classList.remove("bg-danger");
    
        }
        else if (Shoplist[index].important <= 5) {
          document.getElementsByClassName("backcolor")[index].classList.add("bg-danger");
          document.getElementsByClassName("backcolor")[index].classList.remove("bg-success");
          document.getElementsByClassName("backcolor")[index].classList.remove("bg-warning");
        }
    
    
    });
    });









