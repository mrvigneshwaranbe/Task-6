let parentdiv=document.getElementById("mart");
let product=[{name:"Camera",src:"image/camera1.jpg"},
{name:"Bag",src:"image/bag.jpg"},
{name:"HeadPhones",src:"image/headphone2.jpg"},
{name:"Watch",src:"image/watch1.jpg"},
{name:"HeadPhones",src:"image/headphone1.jpg"},
{name:"Watch",src:"image/watch2.jpg"},
{name:"Shoe",src:"image/shoe.jpg"},
{name:"Camera",src:"image/camera2.jpg"}
]
let prevsec=""
displayproduct()
function displayproduct(prdname='All'){
    if(prevsec!=""){
        document.getElementById(prevsec).style='none'
    }
    while(parentdiv.firstChild){
        parentdiv.removeChild(parentdiv.firstChild);
    }
    document.getElementById(prdname).style.backgroundColor='rgb(1,112,249)'
    document.getElementById(prdname).style.color='white'
    for(i=0;i<product.length;i++){
        if(prdname==product[i].name||prdname=='All'){
            let newdiv=document.createElement('div')
            newdiv.className='box'
            let spandiv=document.createElement('span')
            let imgtag=document.createElement('img')
            imgtag.src=product[i].src
            imgtag.alt=product[i].name
            imgtag.id='products'
            imgtag.addEventListener('click',function(){popup(imgtag.alt,imgtag.src)})
            spandiv.append(imgtag)
            newdiv.appendChild(spandiv)
            parentdiv.append(newdiv)
        } 
    }
    prevsec=prdname;
}
const closebtn=document.getElementById("closebtn");
const imagePopup=document.getElementById("imagePopup");
const span=document.getElementById("Category");
function popup(name,link){
    const img=document.getElementById("showpop");
    img.src=link
    imagePopup.style.display= "flex";
    span.innerText=name;
    closebtn.addEventListener('click',()=>{
        imagePopup.style.display="none";
    }
    )
}
