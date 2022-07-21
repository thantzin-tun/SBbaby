
let image = document.querySelector(".brand");
let brandArray = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Eleven","Twelve","One"];
let brandName = "";
for(let i=0;i<brandArray.length;i++){
    image.innerHTML += `<img src="./brand/brand${brandArray[i]}"/>`
}


//For Products List
let category_Item = document.querySelector(".category_item");
let item="";
let product_category = [
    {
        id:1,
        category:"RECOMMEND FOR YOU"
    },
    {
        id:2,
        category:"Pregnancy & Maternity"
    }
    ,
    {
        id:3,
        category:"Ride-on Toys"
    },
    {
        id:4,
        category:"Bath & Diapering"
    },
    {
        id:5,
        category:"Travel Gear"
    },
    {
        id:6,
        category:"Bedding Accessories"
    },
    {
        id:7,
        category:"Nursing & Feeding"
    },
    {
        id:8,
        category:"Kitchen & Dinning Accessories"
    },
    {
        id:9,
        category:"Toys & Playground Accessories"
    },
    {
        id:10,
        category:"School Stationaries and Teaching Aids"
    },
    {
        id:11,
        category:"Furniture"
    },
    {
        id:12,
        category:"For Kids"
    },
    {
        id:13,
        category:"For Newborns & Toddlers"
    },
    {
        id:14,
        category:"Healthy and Safety"
    },
]

let source = "https://admin.sbbabyshop.com/restful/static/description/pro.png"
for(let i=0;i<product_category.length;i++){
    item += ` 
    <li>
        <img src=${source} class="icon" alt="category-icon" />
        <p>${product_category[i].category}</p>
    </li>
    `
    category_Item.innerHTML = item;
}

// For Home Feed Shop
let homeFeed_Section = document.querySelector(".home_Feed");
let imageArray = [ "./assets/shopOne.jfif","./assets/shopTwo.jfif","./assets/shopThree.jfif","./assets/shopFour.jfif"];
let image_index = 0;

function homeFeed(imageArray){    
        return{
            next:function(){
                return image_index < imageArray.length ? {value:imageArray[image_index++],done:false}:{done:true}
            }
        }
}

let showImage = homeFeed(imageArray);

function changeHomeFeed(){
    let result = showImage.next();
    if(!result.done){
        homeFeed_Section.children[0].innerHTML = `<img src="${result.value}" alt="image" />`;
    }
    else {
        image_index = 0;
    }
}

setInterval(()=> {
    changeHomeFeed();
},3000);



// ,"Five","Six","Seven","Eight","Nine","Eleven","Twelve"