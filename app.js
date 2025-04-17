const wrapper= document.querySelector(".sliderWrapper");
const menuItems=document.querySelectorAll(".menuItem");

const products=[
    {
        id:1,
        title:"AIR FORCE",
        price:119,
        colors:[
            {
                code:"black",
                img:"./img/air.png",
            },
            {
                code:"darkblue",
                img:"./img/air2.png",
            },
        ],
    },
    {
      id : 2,
      title:"AIR JORDAN",
      price: 149,
      colors:[
        {
            code:"lightgray",
            img:"./img/jordan.png",
        },
        {
            code:"green",
            img:"./img/jordan2.png",
        },
      ],
    },
    {
        id:3,
        title:"Blazer",
        price:109,
        colors:[
            {
                code:"lightgray",
                img:"./img/blazer.png",
            },
            {
                code:"green",
                img:"./img/blazer2.png",
            }
        ],
    },
    {
        id:4,
        title:"Crater",
        price:129,
        colors:[
            {
                code:"black",
                img:"./img/crater.png",
            },
            {
                code:"green",
                img:"./img/crater2.png",
            }
        ],
    },
    {
        id:5,
        title:"Hippie",
        price:99,
        colors:[
            {
                code:"gray",
                img:"./img/hippie.png",
            },
            {
                code:"green",
                img:"./img/hippie2.png",
            }
        ],
    },
];

let choosenProduct=products[0];

const currentProductImg=document.querySelector("productImg");
const currentProductTitle=document.querySelector("productTitle");
const currentProductPrice=document.querySelector("productPrice");
const currentProductColors=document.querySelectorAll(".color");
const currentProductSizes=document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //change the current slide
        wrapper.computedStyleMap.transform=`translateX(${-100*index}vw)`;

        //change the choosen product
        choosenProduct=products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "RM" + choosenProduct.title;
        currentProductImg.src = choosenProduct.colors[index].code;

        //asing new colors
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color,index) =>{
    color.addEventListener("click", () =>{
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProcutSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size) =>{
            size.style.backgroundColor="white";
            size.style.color="black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",() => {
    payment.style.display ="flex";
});

close.addEventListener("click",() =>{
    payment.style.display = "none";
});