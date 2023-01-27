// nav 
//-----------
//start search button

let mySearch = document.querySelector (".navbar .search .magnifyer ");
// console.log(typeof mySearch);
let myForm = document.querySelector (".navbar .container .search input");
// console.log(typeof myForm);

mySearch.onclick = function (){
    myForm.classList.toggle("active");
    myForm.focus();
}

// end search button  

//--------------------------------------------------------------------------------

//start login button

let myButton = document.querySelector(".navbar .btn");

myButton.onclick = function(){
    let myOverlay = document.createElement("div");
    myOverlay.classList.add("overlay");
    
    let myLogin = document.createElement("div");
    myLogin.classList.add("login");
    
    

    let myForm = document.createElement("form");

    let myTextOne = document.createTextNode("User name:");
    myForm.appendChild(myTextOne);
    myInputOne = document.createElement ("input");
    myInputOne.classList.add("user");
    myForm.appendChild(myInputOne);


    let myTextTwo = document.createTextNode("Password:");
    myForm.appendChild(myTextTwo);
    myInputTwo = document.createElement ("input");
    myInputTwo.classList.add("user");
    myForm.appendChild(myInputTwo);
    
    
    let mySubmit = document.createElement("span");
    mySubmit.classList.add("submit");
    mySubmit.appendChild(document.createTextNode("Login"));
    myForm.appendChild(mySubmit);
    
    let myCancel = document.createElement("span");
    myCancel.classList.add("cancel");
    myCancel.appendChild(document.createTextNode("cancel"));
    myForm.appendChild(myCancel);
    
    myLogin.appendChild(myForm);
    
    myOverlay.appendChild (myLogin);

    document.body.appendChild (myOverlay);


    myOverlay.addEventListener("click", function(e){
        e.target.remove();
        myLogin.classList.remove("login");
        myInputTwo.remove();
        myInputOne.remove();
        myCancel.remove();
        myLogin.remove();



    });
    

    myCancel.onclick = function(){
        myOverlay.classList.remove("overlay");
    }
}


//end login button

//--------------------------------------------------------------------------------


//start links


let myUL = document.querySelectorAll(".navbar-nav li");


myUL.forEach(function(ele){
    ele.onclick = function(){
        myUL.forEach(function(ele){
            ele.classList.remove("active");
        });
        ele.classList.add("active");
    }
});

//end links


// start our work buttons (ul)
// START IMAGES  

let myBox = document.querySelectorAll(".our-work .row .box");
let boxArray = Array.from(myBox);


boxArray.forEach(function(ele, index){
    console.log(index);
    ele.onclick = function(){
        console.log(index);
        
        let lay = document.createElement("div");
        lay.classList.add("olay");
        
        let photo = document.createElement("div");
        photo.classList.add("photo");
        photo.style.backgroundImage = 'url("/imgs/work-0'+ (index + 1) +'.jpg")';
        lay.appendChild(photo);
        document.body.appendChild(lay);
        
        lay.addEventListener("click", function(e){
            e.target.remove();
        });
    }
});

// end IMAGES 

// start buttons  
let ulWork = document.querySelectorAll(".our-work .list-unstyled li");
ulWork.forEach(function(ele){
    ele.onclick = function(){
        ulWork.forEach(function(ele,index){
            ele.classList.remove("active");
        });
        ele.classList.add("active");


    }
});





// end buttons  


// end our work buttons (ul)


// start 3D ul



    let myMain = document.createElement("div");
    myMain.classList.add("back");
    let myList = document.createElement("ul");

    let lisFirst = document.createElement("li");
    let textFirst = document.createTextNode("Be Creative");
    lisFirst.appendChild(textFirst);
    
    let lisSecond = document.createElement("li");
    let textSecond = document.createTextNode("Be Hard Working");
    lisSecond.appendChild(textSecond);

    let lisThird = document.createElement("li");
    let textThird = document.createTextNode("Be Innovative");
    lisThird.appendChild(textThird);
    
    myList.appendChild(lisFirst);
    myList.appendChild(lisSecond);
    myList.appendChild(lisThird);
    
    myMain.appendChild(myList);
    let landingg = document.querySelector(".landing");
    landingg.appendChild(myMain);
    


    // end 3D ul

// start get started  button

// console.log(getStarted);



// end get started  button
