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












}