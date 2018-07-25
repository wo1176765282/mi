window.onload=function () {
    //购物车选项卡
    let head_right_shopping=document.getElementById("head_right_shopping");
    let head_right_shopping_car=document.getElementsByClassName("head_right_shopping_car")[0];
    /*console.log(head_right_shopping_car);
    console.log(head_right_shopping);*/
    head_right_shopping.onmouseenter=function () {
        head_right_shopping_car.style.height="86px";
        head_right_shopping_car.style.boxShadow="0 2px 5px 1px #999";
    }
    head_right_shopping.onmouseleave=function () {
        head_right_shopping_car.style.height=0;
        head_right_shopping_car.style.boxShadow="none";
    }




    //banner侧导航部分aside
    let aside=document.getElementsByTagName("aside")[0];
    let lis=aside.getElementsByTagName("li");
    let aside_on_wrap=document.getElementsByClassName("aside_on_wrap");
    // console.log(lis);
    for (let i=0;i<lis.length;i++){
        lis[i].onmouseenter=function () {
            lis[i].style.background="#ff6700";
            aside_on_wrap[i].style.display="block";
            aside_on_wrap[i].style.boxShadow="-1px 3px 5px -1px #999";
            for (let j=0;j<lis.length;j++){
                lis[j].onmouseleave=function(){
                    aside_on_wrap[j].style.display="none";
                    lis[j].style.background="#b0b0b0";
                }
            }
        }

    }


//家电开始
    /*let electricalEquipment_text=document.getElementsByClassName("electricalEquipment_text")[0];
    let electricalEquipment_text_a=electricalEquipment_text.getElementsByTagName("a");
    let max2=document.getElementsByClassName("max2");

    for (let i=0;i<electricalEquipment_text_a.length;i++){
        electricalEquipment_text_a[i].onmouseenter=function () {
            for (let j=0;j<electricalEquipment_text_a.length;j++){
                max2[j].style.display="none";
                electricalEquipment_text_a[j].style.color="#333";
                electricalEquipment_text_a[j].style.paddingBottom=0;
                electricalEquipment_text_a[j].style.borderBottom="none";
            }
            max2[i].style.display="block";
            electricalEquipment_text_a[i].style.color="#ff6700";
            electricalEquipment_text_a[i].style.paddingBottom="2px";
            electricalEquipment_text_a[i].style.borderBottom="2px solid #ff6700";

        }

    }*/

//封装函数
    function xxk(floor,floor1) {
        let electricalEquipment_text_a=floor.getElementsByTagName("a");
        let max2=document.getElementsByClassName(floor1);

        for (let i=0;i<electricalEquipment_text_a.length;i++){
            electricalEquipment_text_a[i].onmouseenter=function () {
                for (let j=0;j<electricalEquipment_text_a.length;j++){
                    max2[j].style.display="none";
                    electricalEquipment_text_a[j].style.color="#333";
                    electricalEquipment_text_a[j].style.paddingBottom=0;
                    electricalEquipment_text_a[j].style.borderBottom="none";
                }
                max2[i].style.display="block";
                electricalEquipment_text_a[i].style.color="#ff6700";
                electricalEquipment_text_a[i].style.paddingBottom="2px";
                electricalEquipment_text_a[i].style.borderBottom="2px solid #ff6700";
            }
        }
    }
    let electricalEquipment_text=document.getElementsByClassName("electricalEquipment_text")[0];

    xxk(electricalEquipment_text,"max2");
    let electricalEquipment_text1=document.getElementsByClassName("electricalEquipment_text1")[0];

    xxk(electricalEquipment_text1,"max3");


    //导航选项卡部分
    let nav_text=document.getElementById('nav_text');
    let nav_text_a=nav_text.getElementsByTagName('a');
    let nav_text_box=document.getElementsByClassName('nav_text_box');
    // console.log(nav_text_a);
    // console.log(nav_text_box);
    for (let i=0;i<nav_text_a.length-2;i++){
        // nav_text_box[i].style.height="230px";
        nav_text_a[i].onmouseenter=function () {
            nav_text_box[i].style.height="230px";
            for (let j=0;j<nav_text_a.length-2;j++){
                // nav_text_box[j].style.height=0;
                nav_text_a[j].onmouseleave=function () {
                    nav_text_box[j].style.height="0";
                }
        }
        }
    }


//banner轮播图部分
   /* let banner_bg_lis=document.querySelectorAll('.banner_bg li');
    console.log(banner_bg_lis);*/
    let banner_bg=document.getElementsByClassName('banner_bg')[0];
    let banner_bg_lis=banner_bg.getElementsByTagName('li');
    let num=0;
    let btnS=document.querySelectorAll('.circle li')
    /*let circle=document.getElementsByClassName('circle')[0];
    let btnS=circle.getElementsByTagName('li');*/

    let time=setInterval(lbt,2000);
    function lbt() {
        num++;
        if (num==banner_bg_lis.length){
            num=0;
        }
        for (let i=0;i<banner_bg_lis.length;i++){
            banner_bg_lis[i].style.zIndex='5';
            btnS[i].style.background="";
        }
        banner_bg_lis[num].style.zIndex='9';
        btnS[num].style.background='#fff';
    }
    function lbt1() {
        num--;
        if (num==-1){
            num=banner_bg_lis.length-1;
        }
        for (let i=0;i<banner_bg_lis.length;i++){
            banner_bg_lis[i].style.zIndex='5';
            btnS[i].style.background="";
        }

        banner_bg_lis[num].style.zIndex='9';
        btnS[num].style.background='#fff';
    }

    let btn_left=document.getElementsByClassName('btn_left')[0];
    let btn_right=document.getElementsByClassName('btn_right')[0];
    // console.log(btn_left, btn_right);
    btn_right.onclick=function () {
        lbt();
        clearInterval(time);
        time=setInterval(lbt,2000);
    }
    btn_left.onclick=function () {
        lbt1();
        clearInterval(time);
        time=setInterval(lbt1,2000);
    }



    banner_bg.onmouseenter=function () {
        clearInterval(time);
    }
    banner_bg.onmouseleave=function () {
        time=setInterval(lbt,2000);
    }


        //点击圆点
     for (let i=0;i<btnS.length;i++){
            btnS[i].onclick=function () {
                for (let j=0;j<btnS.length;j++){
                    banner_bg_lis[j].style.zIndex='5';
                    btnS[j].style.background='';
                }
                banner_bg_lis[i].style.zIndex='9';
                btnS[i].style.background='#fff';
                num=i;
            }
     }




        //内容二维下标轮播
    doubleBanner(0);
    doubleBanner(1);
    doubleBanner(2);
    doubleBanner(3);

    function doubleBanner(a) {
        let contentAd = document.getElementsByClassName('contentAd')[a];
        console.log(contentAd);
        // let contentAd=document.getElementsByClassName('contentAd')[0];
        let product_a = contentAd.querySelectorAll('a');
        let now = 0;
        let next = 0;
        let width = parseInt(getComputedStyle(product_a[now], null).width);
        let content_yuan = contentAd.querySelector('.content_yuan');
        let btns = content_yuan.querySelectorAll('span');
        let san_left = contentAd.querySelector('.san_left');
        let san_right = contentAd.querySelector('.san_right');
        console.log(san_right, san_left);
        console.log(btns);
        // let t = setInterval(move, 1000);
        //标记
        let flag = true;

        function move() {
            //右->左
            next++;
            if (next == product_a.length) {
                next = 0;
            }
            //就位
            product_a[next].style.left = width + 'px';
            //移动
            animate(product_a[now], {left: -width});
            btns[now].style.border = "none";
            animate(product_a[next], {left: 0}, function () {
                flag = true;
            });
            btns[next].style.border = "2px solid #ff6700";
            now = next;
        }

        function move1() {

            //右->左
            if (next == 0) {
                next = product_a.length;
            }
            next--;
            //就位
            product_a[next].style.left = -width + 'px';
            //移动
            animate(product_a[now], {left: width});
            btns[now].style.border = "none";
            animate(product_a[next], {left: 0}, function () {
                flag = true;
            });
            btns[next].style.border = "2px solid #ff6700";
            now = next;
        }

        san_left.onclick = function () {
            if (!flag) {    //flag==false
                return;
            }
            if (next == 0) {
                return;
            }
            flag = false;
            move1();
        }
        san_right.onclick = function () {
            if (!flag) {    //flag==false
                return;
            }
            if (next == product_a.length - 1) {
                return;
            }
            flag = false;
            move();
        }

       /* contentAd.onmouseenter = function () {
            clearInterval(t);
        }
        contentAd.onmouseleave = function () {
            t = setInterval(move, 1000);
        }*/
        //小点点击
        for (let i = 0; i < product_a.length; i++) {
            btns[i].onclick = function () {
                if (i == now) {
                    return;
                }
                if (i < now) {
                    //就位
                    product_a[i].style.left = -width + 'px';
                    //移动
                    animate(product_a[i], {left: 0});
                    btns[i].style.border = "2px solid #ff6700";
                    animate(product_a[now], {left: width});
                    btns[now].style.border = "none";
                    next = now = i;
                }
                if (i > now) {
                    btns[now].style.border = "none";
                    product_a[i].style.left = width + 'px';
                    animate(product_a[now], {left: -width});
                    animate(product_a[i], {left: 0});
                    btns[i].style.border = "2px solid #ff6700";
                    next = now = i;
                }
            }
        }

    }


    //小米闪购
    let str_text_right=document.getElementById('str_text_right');
    let str_text_right_a=str_text_right.querySelectorAll('a');
    console.log(str_text_right_a);
    let lites=document.querySelector('.listUl ul');
    /*let litesLi=document.querySelectorAll('.listUl li');
    console.log(litesLi);*/
    let litesWidth=parseInt(getComputedStyle(lites,null).width)/2;
    console.log(litesWidth);
    console.log(lites);
    let times=0;
    str_text_right_a[1].onclick=function () {
        console.log(1);
        times++;
        if (times==2){
            times=1;
        }
        lites.style.transform=`translateX(-${litesWidth*times}px)`;
        // console.log(times);
        }
    str_text_right_a[0].onclick=function () {
        times--;
        if (times<0){
            times=0;
        }
        lites.style.transform=`translateX(-${litesWidth*times}px)`;
        // console.log(times);
        }



}