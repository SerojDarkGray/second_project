
// Header

let headerUl = [...document.getElementsByClassName("header_ul")[0].children];
headerUl.forEach((el)=>{
    el.addEventListener('click', (event)=>{    
        headerUl.forEach((el)=>{
            if(el.children[0].classList.contains('active')){
                el.children[0].classList.remove('active')
            }
        })
        event.target.classList.add('active');
    })
})

// Modal

const open = [...document.querySelectorAll('#open')]
const modal_container = document.getElementById('services_modal_container');
const close = document.getElementById('close');

let serviceRows = [...document.querySelectorAll('.services_row')];
serviceRows.shift();

open.forEach((el)=>{
    el.addEventListener('click', (event)=>{
        if(event.target.nodeName === "SPAN"){return;}
        serviceRows.forEach((el)=>{
            el.classList.add("d-none");
        });

        if(event.target.classList.contains("services_1")){
            serviceRows[0].classList.remove("d-none");
            console.log('serviceRows[0]', serviceRows[0])
        }
        else if(event.target.classList.contains("services_2")){
            serviceRows[1].classList.remove("d-none");
        }
        else if(event.target.classList.contains("services_3")){
            serviceRows[2].classList.remove("d-none");
        }
        else if(event.target.classList.contains("services_4")){
            serviceRows[3].classList.remove("d-none");
        }
       
        modal_container.classList.add("show");
    });
})

close.addEventListener('click', ()=>{
    modal_container.classList.remove("show");
})

modal_container.addEventListener('click', ()=>{
    modal_container.classList.remove('show');
   
})

// Slider

let slider = document.getElementsByClassName("slider")[0];

// left

let goLeft = () =>{ 
    let temp = slider.children[0];
    slider.appendChild(temp);
    slider.children[slider.children.length-1].style.setProperty("display", "none","important")
    slider.children[slider.children.length-2].style.setProperty("display", "none","important")
    slider.children[slider.children.length-3].style.setProperty("display", "none","important")
    slider.children[slider.children.length-4].style.setProperty("display", "flex","important")
    slider.children[slider.children.length-5].style.setProperty("display", "flex","important")
    slider.children[slider.children.length-6].style.setProperty("display", "flex","important")
    temp = "";

}
document.querySelector(".slide-left").onclick = goLeft;

// right 

let goRight = () =>{ 
    let temp = slider.children[slider.children.length-1];
    slider.removeChild(slider.children[slider.children.length-1])
    slider.insertAdjacentElement("afterbegin",temp);
    slider.children[slider.children.length-1].style.setProperty("display", "none","important")
    slider.children[slider.children.length-2].style.setProperty("display", "none","important")
    slider.children[slider.children.length-3].style.setProperty("display", "none","important")
    slider.children[slider.children.length-4].style.setProperty("display", "flex","important")
    slider.children[slider.children.length-5].style.setProperty("display", "flex","important")
    slider.children[slider.children.length-6].style.setProperty("display", "flex","important")
    temp = "";   
}
document.querySelector(".slide-right").onclick = goRight;

let interval = null;

startSlider();

function startSlider(){
    interval = setInterval(goRight, 5000);
}

function stopSlider(){
    clearInterval(interval);
    interval = null;
}

let sliderIcon =  document.getElementsByClassName("slider-icon");

sliderIcon.onmouseover = stopSlider;
sliderIcon.onmouseleave = startSlider;

slider.onmouseover = stopSlider;
slider.onmouseleave = startSlider;

// Order

let order = [...document.getElementsByClassName("order_service")[0].children];
let resetOrders = () => { order.forEach((el)=>el.classList.add("d-none"));}

let orderContainer = [...document.querySelectorAll(".order_container")];
let resetOrdersContainer = () =>{ orderContainer.forEach((el)=>  el.classList.add("d-none")); }

let orderBtn = document.querySelector(".order_close");
let hideOrderBtns = document.querySelector(".order_btns");
let closeBtn = () => {
    resetOrdersContainer()
    hideOrderBtns.classList.add("d-none");
}
orderBtn.addEventListener('click', closeBtn);

let services_13 = document.querySelector(".services_13");
services_13.addEventListener('click', ()=>{
    resetOrders();
    hideOrderBtns.classList.remove("d-none");
    let zipper = document.querySelector(".clothing_restoration");
    zipper.classList.remove("d-none");
})

let services_14 = document.querySelector(".services_14");
services_14.addEventListener('click', ()=>{
    resetOrders();
    hideOrderBtns.classList.remove("d-none");
    let zipper = document.querySelector(".leather_goods_restoration");
    zipper.classList.remove("d-none");
})

let services_15 = document.querySelector(".services_15");
services_15.addEventListener('click', ()=>{
    resetOrders();
    hideOrderBtns.classList.remove("d-none");
    let zipper = document.querySelector(".shoes_restoration");
    zipper.classList.remove("d-none");
})



let services_16 = document.querySelector(".services_16");
services_16.addEventListener('click', ()=>{
    resetOrders();
    hideOrderBtns.classList.remove("d-none");
    let zipper = document.querySelector(".bag_zipper");
    zipper.classList.remove("d-none");
})

let services_17 = document.querySelector(".services_17");
services_17.addEventListener('click', ()=>{
    resetOrders();
    hideOrderBtns.classList.remove("d-none");
    let zipper = document.querySelector(".down_jacket_zipper");
    zipper.classList.remove("d-none");
})

let services_18 = document.querySelector(".services_18");
services_18.addEventListener('click', ()=>{
    resetOrders();
    hideOrderBtns.classList.remove("d-none");
    let zipper = document.querySelector(".jacket_zipper");
    zipper.classList.remove("d-none");
})

let services_19 = document.querySelector(".services_19");
services_19.addEventListener('click', ()=>{
    resetOrders();
    hideOrderBtns.classList.remove("d-none");
    let zipper = document.querySelector(".jeans_zipper");
    zipper.classList.remove("d-none");
})