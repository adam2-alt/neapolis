const menuContainer =
document.getElementById("menuContainer");


const categoriesContainer =
document.getElementById("categories");



/* عرض الأصناف */

function displayMenu(items){


menuContainer.innerHTML="";


items.forEach(item=>{


menuContainer.innerHTML += `

<div class="card">


<h3>
${item.name}
</h3>


<p class="english">
${item.english}
</p>


<p>
${item.category}
</p>


<div class="price">
${item.price} ₪
</div>


</div>


`;


});


}





/* إنشاء الأقسام */

function createCategories(){


let categories =
[
"الكل",
...new Set(
menu.map(item=>item.category)
)
];



categories.forEach(category=>{


let button=document.createElement("button");


button.className="category-btn";


button.innerText=category;



button.onclick=function(){


if(category==="الكل"){

displayMenu(menu);

}

else{


displayMenu(

menu.filter(
item=>item.category===category
)

);


}


};



categoriesContainer.appendChild(button);


});


}





/* البحث */


document
.getElementById("search")
.addEventListener(
"input",
function(){


let value=this.value
.toLowerCase();



let result =
menu.filter(item=>


item.name
.toLowerCase()
.includes(value)

||

item.english
.toLowerCase()
.includes(value)


);



displayMenu(result);



});





/* زر Hero */


function scrollMenu(){

document
.getElementById("menu")
.scrollIntoView({

behavior:"smooth"

});


}






/* تشغيل */


createCategories();

displayMenu(menu);