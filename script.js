console.log("Starting")

const page1Div = document.querySelector(".page1-div");
const page2Div = document.querySelector(".page2-div");
const page3Div = document.querySelector(".page3-div");
const n1 = document.querySelector(".n1");
const n2 = document.querySelector(".n2");
const n3 = document.querySelector(".n3");
const nav = document.querySelector(".nav")
 const nav2 = document.querySelector("#nav2");
const section1Div = document.querySelector(".section1-div");
const logo2 = document.querySelector("#logo2");
const page = document.querySelector(".page")
const btnA = document.querySelector(".btn-div2a")
const btnC = document.querySelector("#btnContainer")
const ThirdBtn = document.querySelector("#btnContainer2")
const FouthBtn = document.querySelector("#btnContainer3")
const NavBtn = document.querySelector("#btn-div")
const BookNowBtn = document.querySelector("#btn-bookNow2")
const executiveChef1 = document.querySelector(".executiveChef-div")
const executiveChef2 = document.querySelector(".executiveChef-div2")
const executiveChef3 = document.querySelector(".executiveChef-div3")
const sN1 = document.querySelector(".sN1")
const sN2 = document.querySelector(".sN2")
const sN3 = document.querySelector(".sN3")
const secondN = document.querySelector(".secondN");
const zoom1 = document.querySelector(".zoom1");
const dish1 = document.querySelector(".dish1");
const dish2 = document.querySelector(".dish2");
const zoom2 = document.querySelector(".zoom2");
const zoom3 = document.querySelector(".zoom3");
const dish3 = document.querySelector(".dish3");
const dish4 = document.querySelector(".dish4");
const zoom4 = document.querySelector(".zoom4");
const zoom5 = document.querySelector(".zoom5");
const dish5 = document.querySelector(".dish5");
const dish6 = document.querySelector(".dish6");
const zoom6 = document.querySelector(".zoom6");
const zoom7 = document.querySelector(".zoom7");
const dish7 = document.querySelector(".dish7");
const dish8 = document.querySelector(".dish8");
const zoom8 = document.querySelector(".zoom8");
const page6 = document.querySelector(".page6");
const page6i = document.querySelector(".page6i");
const page6ii = document.querySelector(".page6ii");
const n6a = document.querySelector(".n6a");
const n6b = document.querySelector(".n6b");
const n6c = document.querySelector(".n6c");
// const qj1 = document.querySelectorAll(".quote-mark,.jama");
// const qj2 = document.querySelectorAll(".quote-marki,.jamai");
// const qj3 = document.querySelectorAll(".quote-markii,.jamaii");
// function test () {
//     var scrollValue = window.scrollY;

// console.log(scrollValue)
    
// }

//  window.addEventListener("scroll",test);
// executiveChef1.style.display = "block";
page6.style.display = "block";
n6a.style.backgroundColor = "#EB3007";

setTimeout(function(){
    page6.style.display = "none";
    page6i.style.display = "block";
    n6a.style.backgroundColor = "#fff";
    n6b.style.backgroundColor = "#EB3007";
},10000)
setTimeout(function(){
    page6i.style.display = "none";
    page6ii.style.display = "block";
    n6b.style.backgroundColor="#fff";
    n6c.style.backgroundColor = "#EB3007";
},20000)
setTimeout(function() {
    page6ii.style.display = "none";
    page6.style.display = "block";
 n6c.style.backgroundColor = "#fff";
 n6a.style.backgroundColor = "#EB3007";

},30000)
 zoom1.style.display = "none";
 dish1.addEventListener("mouseover",function(e) {
     zoom1.style.display = "block";
 });

 dish1.addEventListener("mouseout",function(e) {
     zoom1.style.display = "none";
 });

 zoom2.style.display = "none";
 dish2.addEventListener("mouseover",function(e) {
    zoom2.style.display = "block";
});

dish2.addEventListener("mouseout",function(e) {
    zoom2.style.display = "none";
});

zoom3.style.display = "none";
dish3.addEventListener("mouseover",function(e) {
    zoom3.style.display = "block";
});

dish3.addEventListener("mouseout",function(e) {
    zoom3.style.display = "none";
});

zoom4.style.display = "none";
dish4.addEventListener("mouseover",function(e) {
   zoom4.style.display = "block";
});

dish4.addEventListener("mouseout",function(e) {
   zoom4.style.display = "none";
});

zoom5.style.display = "none";
 dish5.addEventListener("mouseover",function(e) {
     zoom5.style.display = "block";
 });

 dish5.addEventListener("mouseout",function(e) {
     zoom5.style.display = "none";
 });

 zoom6.style.display = "none";
 dish6.addEventListener("mouseover",function(e) {
    zoom6.style.display = "block";
});

dish6.addEventListener("mouseout",function(e) {
    zoom6.style.display = "none";
});

zoom7.style.display = "none";
dish7.addEventListener("mouseover",function(e) {
    zoom7.style.display = "block";
});

dish7.addEventListener("mouseout",function(e) {
    zoom7.style.display = "none";
});

zoom8.style.display = "none";
dish8.addEventListener("mouseover",function(e) {
   zoom8.style.display = "block";
});

dish8.addEventListener("mouseout",function(e) {
   zoom8.style.display = "none";
});


executiveChef2.style.display = "none";
executiveChef3.style.display = "none";

setTimeout(function() {
    executiveChef1.style.display="none"
    executiveChef2.style.display="block"
    sN1.style.backgroundColor = "#EB3007"
    secondN.style.display = "block"

},4000)

setTimeout(function() {
    executiveChef2.style.display="none"
    executiveChef3.style.display="block"
    sN1.style.backgroundColor = " #ede9e9"
    sN2.style.backgroundColor = "#EB3007"
    secondN.style.display = "block"
},8000)


BookNowBtn.addEventListener("mouseover",function(e) {
    BookNowBtn.classList.remove("btn-bookNow") 
    BookNowBtn.classList.add("btn-bookNow2")
    

    
})

BookNowBtn.addEventListener("mouseout",function(e) {
    BookNowBtn.classList.remove("btn-bookNow2")
    BookNowBtn.classList.add("btn-bookNow")

    
})
NavBtn.addEventListener("mouseover",function(e) {
    NavBtn.classList.remove("btn-div") 
    NavBtn.classList.add("btn-divA")
    

    
})

NavBtn.addEventListener("mouseout",function(e) {
    NavBtn.classList.remove("btn-divA")
    NavBtn.classList.add("btn-div")

    
})

btnC.addEventListener("mouseover",function(e) {
    btnC.classList.remove("btn-div2")
    btnC.classList.add("btn-div2a")

    
})

btnC.addEventListener("mouseout",function(e) {
    btnC.classList.remove("btn-div2a")
    btnC.classList.add("btn-div2")

    
})

// ThirdBtn.addEventListener("mouseover",function(e) {
//     ThirdBtn.classList.remove("btn-div3")
//     ThirdBtn.classList.add("btn-div3a")

    
//  })

// FouthBtn.addEventListener("mouseover",function(e) {
//     FouthBtn.classList.remove("btn-div4")
//     FouthBtn.classList.add("btn-div4a")

    
// })

    setTimeout(function() {
        page1Div.style.display = "none"
         page2Div.style.display = "block"
          n1.style.backgroundColor = "#fff"
         n2.style.backgroundColor = "#EB3007"
         
    },6000)

 
    setTimeout(function() {
        page2Div.style.display = "none"
         page3Div.style.display = "block"
         n2.style.backgroundColor = "#fff"
         n3.style.backgroundColor = "#EB3007"
    },12000)


    setTimeout(function() {
        page3Div.style.display = "none"
         page1Div.style.display = "block"
         n3.style.backgroundColor = "#fff"
         n1.style.backgroundColor = "#EB3007"
    },18000)







window.addEventListener("scroll",function(e) {
    scrollValue = window.scrollY
    if (scrollValue < 0.000031){
        nav2.classList.remove("bgchange")
        logo2.classList.remove("chbglogo")
        // section1Div.classList.remove("page1-div")
        //page1Div.style.display = "block"

    }else {
    nav2.classList.add("bgchange")
    logo2.classList.add("chbglogo")
    }
     
});

