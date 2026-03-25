const imglist = [ 
    {
        url1:"image/player1.png",
        url2:"image/player1b.png",
        url3:"url(image/cb1.jpg)",
        cname:"小乔",
        ename:"青蛇",
        p1:"“小乔，要努力变强！”",
        p2:"人人都嘲笑她的天真，同情心",
        p3:"以及不切实际的乐观",
        p4:"——直到他们被她强大的法力所震慑。",
        p5:"小乔是一位远程消耗型的法师，",
        p6:"适合走中路。",
        p7:"特长是远程消耗，攻击范围长。",
        p8:"",
        p9:"",
    },
    {
        url1:"image/player2!.png",
        url2:"image/player2b.png",
        url3:"url(image/cb2.jpg)",
        cname:"鲁班七号",
        ename:"机关造物",
        p1:"“终极怪兽登场。”",
        p2:"鲁班大师的年龄？",
        p3:"秘密！",
        p4:"鲁班大师的身高？",
        p5:"秘密！",
        p6:"鲁班七号是鲁班大师的天才机关造物",
        p7:"作为一个超远程射手",
        p8:"拥有强大的群体伤害",
        p9:"",
    },
    {
        url1:"image/player3.png",
        url2:"image/player3b.png",
        url3:"url(image/cb3.jpg)",
        cname:"公孙离",
        ename:"幻舞玲珑",
        p1:"“红叶最多情，一舞寄相思。”",
        p2:"她从一百位孤儿中被选中，",
        p3:"从那天开始慢慢蜕变，",
        p4:"直至破茧成蝶。",
        p5:"阿离手持纸伞时，",
        p6:"技能可连续释放两次，",
        p7:"打出爆发伤害。",
        p8:"",
        p9:"",
    },
    {
        url1:"image/player.png",
        url2:"image/player4b.png",
        url3:"url(image/cb4.jpg)",
        cname:"李白",
        ename:"青莲剑仙",
        p1:"“今朝有酒今朝醉。”",
        p2:"剑仙李白",
        p3:"三入长安了",
        p4:"这次长安城又将怎样被动摇呢？",
        p5:"李白是一名刺客型英雄",
        p6:"有位移、有控制、有输出",
        p7:"大招的释放是李白运用的关键",
        p8:"",
        p9:"",
    },
    {
        url1:"image/player5.png",
        url2:"image/player5b.png",
        url3:"url(image/cb5.jpg)",
        cname:"露娜 & 孙悟空",
        ename:"大圣娶亲",
        p1:"“要不要我把心掏出来给你看看啊”",
        p2:"如意金箍棒所及之处",
        p3:"枷锁碎裂",
        p4:"魔种们高喊着它的名字",
        p5:"纷纷倒戈",
        p6:"孙悟空近战输出强",
        p7:"团控能力适中",
        p8:"",
        p9:"",
    },
]

const reader = document.querySelector("#reader");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const img1 = document.querySelector(".chara1 img");
const img2 = document.querySelector(".charb1 img");
const describe = document.querySelector(".describe");
const h1 = document.querySelector("#reader h1");
const h4 = document.querySelector("#reader h4");
const back = document.querySelector(".charb1");
const aim = document.querySelector(".aim");
const chara = document.querySelector(".chara1");
const charb = document.querySelector(".charb1");


let i = 0;

function render(){
    if(i == 3 || i == 4){
        img1.style.height = "500px";
        img1.style.width = "500px";
        img2.style.height = "500px";
        img2.style.width = "500px";
    }
    else{
        img1.style.height = "450px";
        img1.style.width = "450px";
        img2.style.height = "450px";
        img2.style.width = "450px";
    }
    if(i == 2 || i == 4){
        img2.style.marginTop = "20px";
        chara.style.marginTop = "20px";
    }
    else if(i == 3){
        img2.style.marginTop = "40px";
        chara.style.marginTop = "40px";
    }
    else{
        img2.style.marginTop = "0px";
        chara.style.marginTop = "0px";
    }
    img1.src = imglist[i].url1;
    img2.src = imglist[i].url2;
    describe.innerHTML = `
        <p>${imglist[i].p1}</p>
        <p>${imglist[i].p2}</p>
        <p>${imglist[i].p3}</p>
        <p>${imglist[i].p4}</p>
        <p>${imglist[i].p5}</p>
        <p>${imglist[i].p6}</p>
        <p>${imglist[i].p7}</p>
        <p>${imglist[i].p8}</p>
        <p>${imglist[i].p9}</p>
    `;
    h1.innerHTML = imglist[i].cname;
    h4.innerHTML = imglist[i].ename;
    back.style.backgroundImage = imglist[i].url3;
}

prev.addEventListener("click",function(){
    aim.style.left = "-20px";
    aim.style.opacity = "0";
    i--;
    if(i < 0){
        i = imglist.length-1;
    }
    setTimeout(function(){
        aim.style.left = "0px";
        render();
        aim.style.opacity = "1";
    },500);
})

next.addEventListener("click",function(){
    aim.style.left = "20px";
    aim.style.opacity = "0";
    i++;
    if(i >= imglist.length){
        i = 0;
    }
    setTimeout(function(){
        aim.style.left = "0px";
        render();
        aim.style.opacity = "1";
    },500);
})