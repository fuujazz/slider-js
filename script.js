
var models = [
    {
        name : "Bmw 418d",
        image : "img/bmw.jpg",
        link : "https://www.google.com/search?q=bmw+418d&sxsrf=APq-WBs4HLEXqapcHr3LuHe42e5fPNY8WA:1643755055075&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjj1p7hyN_1AhUulP0HHXEHDUgQ_AUoAXoECAEQAw&biw=1920&bih=877&dpr=1#imgrc=B-neektsS93YIM",

    },
    {
        name : "Volvo",
        image : "img/volvo.jpg",
        link :"https://www.google.com/search?q=volvo+back&tbm=isch&ved=2ahUKEwijuracyd_1AhXHEsAKHeJvB24Q2-cCegQIABAA&oq=volvo+back&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgQIABAeMgQIABAeMgQIABAeMgQIABAeMgQIABAeMgQIABAeMgQIABAeMgQIABAeOgcIIxDvAxAnOggIABCABBCxAzoHCAAQsQMQQ1CiAVirCGD7C2gAcAB4AIABhgGIAecFkgEDMC42mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=q7b5YeO4C8elgAbi353wBg&bih=877&biw=1903&hl=tr#imgrc=lmB8sAAV6IwDSM"
    },
    {
        name: "Taycan",
        image : "img/taycan.jpg",
        link : "https://www.google.com/search?q=porche+taycan&tbm=isch&ved=2ahUKEwiO3eqfyd_1AhVKRkEAHQXWDEgQ2-cCegQIABAA&oq=porche+taycan&gs_lcp=CgNpbWcQAzIFCAAQgAQyBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB46BwgjEO8DECc6BggAEAcQHjoICAAQgAQQsQM6BAgAEEM6BwgAELEDEEM6BggAEAoQGFDgBVjfGmC_G2gBcAB4AIABowKIAe4OkgEGMC4xMy4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=srb5YY68FMqMhbIPhayzwAQ&bih=877&biw=1903&hl=tr#imgrc=0l8nti2zCb3Q5M"
    },
    {
        name: "Panigale V2R White Rosso",
        image : "img/panigale.jpg",
        link : "https://www.google.com/search?q=panigale+v4r+white+rosso&tbm=isch&ved=2ahUKEwi98LC4yd_1AhVxgv0HHVlKDlwQ2-cCegQIABAA&oq=panigal&gs_lcp=CgNpbWcQARgAMgcIIxDvAxAnMgcIIxDvAxAnMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BggAEAcQHjoECAAQHjoECAAQQzoICAAQgAQQsQNQpwdY6AxgmBNoAHAAeACAAYQBiAHaB5IBAzAuOJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=5bb5Yf3pMfGE9u8P2ZS54AU&bih=877&biw=1903&hl=tr#imgrc=k4B_Behf8SH0-M"
    }
];

var index = 2;
var slayt_count = models.length;
var interval;
var settings = {
    duration : "2000",
    random : false
};

init(settings);
showSlide(index);

document.querySelector(".fa-arrow-circle-left").addEventListener("click",function(){
    index--;
    showSlide(index);
        
});

document.querySelector(".fa-arrow-circle-right").addEventListener("click",function(){
    index++;
    showSlide(index);
    
});

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval);
    })
});

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave",function(){
        init(settings);
    })
});


function init(_settings){

    let prev;
    
    interval = setInterval(function(){

        if(settings.random){
            // random index
            do{
                index = Math.floor(Math.random() * slayt_count);
            }while(index === prev)
            prev = index;
            
        }else{
            // artan
            if(slayt_count == index){
                index = 0;
            }
            
            console.log(index)
            showSlide(index);
            index++;

        }

        showSlide(index);
    },settings.duration)

}



function showSlide(i){

    index = i;

    if(i<0){
        index = slayt_count-1;
    }
    if(i >= slayt_count){
        index = 0;
    }

    document.querySelector(".card-title").textContent = models[index].name;
    document.querySelector(".card-img-top").setAttribute("src",models[index].image);
    document.querySelector("#card-link").setAttribute("href",models[index].link);

}


