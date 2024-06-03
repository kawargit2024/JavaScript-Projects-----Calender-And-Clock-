
// Image Slider With JavaScript //

// ===================== //
//  Call or all selector  // 
// ==================== //

const sliderWrapper  =  document.querySelector(".sliderWrapper");
const sliders   =  document.querySelectorAll(".sliderSingle");
const nextBtn  =  document.querySelector(".next");
const prevBtn  =  document.querySelector(".prev");
const dotListParents  =  document.querySelector("ul.dotList");
const dots  =  document.querySelectorAll("li.dot");
const totalSlides = sliders.length;
let slideIndex = 0;

window.addEventListener("load",function(){
    dotControls();
    nextSlider();
    prevSlider();
});

// ===================== //
//  Dot Btn Click Event  // 
// ==================== //
function dotControls(){
    dots.forEach(( dot , index )=>{
        dot.addEventListener("click",function(){
        slideIndex = index;
        document.querySelector("li.dot.active").classList.remove("active");
        dot.classList.add("active");
        sliders.forEach((slider)=>{
          slider.classList.remove("active");
        });
        sliders[slideIndex].classList.add("active");
       });

    });
}
dotControls();
// ===================== //
// Next Btn Click Event // 
// ==================== //
function nextSlider(){
   nextBtn.addEventListener("click",()=>{

    sliders.forEach((slider)=>{
        slider.classList.remove("active");
    });
    slideIndex++;

    if(slideIndex > totalSlides-1 ){
      slideIndex = 0;
    }
    document.querySelector("li.dot.active").classList.remove("active");
     sliders[slideIndex].classList.add("active");
     dotListParents.children[slideIndex].classList.add("active");
    });
}
nextSlider();


// ===================== //
// Prev Btn Click Event // 
// ==================== //
function prevSlider(){
    prevBtn.addEventListener("click", () =>{

        sliders.forEach(( slider ) => {
            slider.classList.remove("active");
        });
        slideIndex--;

        if( slideIndex < 0 ){
          slideIndex = totalSlides-1;
        }
         document.querySelector("li.dot.active").classList.remove("active");
         sliders[slideIndex].classList.add("active");
         dotListParents.children[slideIndex].classList.add("active");
    });
}
prevSlider();

// ===================== //
   // Autoplay // 
// ==================== //
let sliderAutoPlay;

let repeater  = ()=>{
    sliderAutoPlay = setInterval(function(){


    sliders.forEach(( slider ) => {
        slider.classList.remove("active");
    });

    slideIndex--;
    if( slideIndex < 0 ){
      slideIndex = totalSlides-1;
    }
       
    document.querySelector("li.dot.active").classList.remove("active");
    sliders[slideIndex].classList.add("active");
    dotListParents.children[slideIndex].classList.add("active");



    }, 5000);
};
repeater();


// ===================== //
//    Mouseover Event   // 
// ==================== //
sliderWrapper.addEventListener("mouseover",() => {
  clearInterval(sliderAutoPlay);
});

// ===================== //
//   Mouseout event     // 
// ==================== //
sliderWrapper.addEventListener("mouseout",() => {
 repeater(sliderAutoPlay);
});



//console.log(dotListParents);