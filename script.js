
var banner = document.createElement('marquee');
            banner.classList.add('top-banner');
            banner.style.backgroundColor = "red";
            banner.style.color = "white";
            banner.style.width = "100%";
            banner.style.padding = "8px 0px";
            banner.innerText = "FREE SHIPPING ALL OVER INDIA  | 100% SECURE PAYMENT | 14-DAYS MONEY BACK GURANTEE | EASY RETURNS";
    document.body.append(banner);

var navbar = document.createElement('div');
           navbar.classList.add('navbar','sticky-top');
           navbar.style.width = "100%";
           navbar.style.backgroundColor = "white";
           navbar.style.display = "flex";
           navbar.style.justifyContent = "space-between";
           navbar.style.alignItems = "center";
           navbar.style.border="transpernt";
    document.body.append(navbar);

var navbarleft = document.createElement('div');
            navbarleft.style.display = "flex";
            navbarleft.style.alignItems = "center";
            navbarleft.style.gap = "35px";
            navbarleft.style.paddingTop = "30px";
            navbarleft.style.border="transpernt";
    navbar.append(navbarleft);

var logo = document.createElement('img');
            logo.setAttribute('src', './image/Web-Logo.png.webp');
            logo.style.width = "230px";
            logo.style.paddingLeft = "40px";
            logo.style.border="transpernt";
    navbarleft.append(logo);

var nav1 = document.createElement('i');
            nav1.setAttribute('class', 'bi bi-bell-fill');
            nav1.style.color = "red";

var navtext = document.createElement('div');
            navtext.classList.add('nav-text');
            navtext.style.display = "flex";
            navtext.style.alignItems = "center";
            navtext.style.fontSize = "16px";
            navtext.style.fontWeight = "600";
    navtext.append(nav1);
    navtext.append(document.createTextNode("NEW ARRIVAL"));

var navtext1 = document.createElement('div');
             navtext1.classList.add('nav-text1');
             navtext1.style.display = "flex";
             navtext1.style.alignItems = "center";
             navtext1.style.fontSize = "16px";
             navtext1.style.fontWeight = "600";
             navtext1.innerHTML = "SHOP BY CATEGORY";

var navtext2 = document.createElement('div');
            navtext2.classList.add('nav-text2');
            navtext2.style.display = "flex";
            navtext2.style.alignItems = "center";
            navtext2.style.fontSize = "16px";
            navtext2.style.fontWeight = "600";
            navtext2.innerHTML = "SHOP BY FABRIC";
    navbarleft.append(navtext);
    navbarleft.append(navtext1);
    navbarleft.append(navtext2);

var navbarright = document.createElement('div');
             navbarright.style.display = "flex";
             navbarright.style.paddingRight="50px";
             navbarright.style.paddingTop="30px";
             navbarright.style.alignItems = "center";
             navbarright.style.gap = "20px";
             navbarright.style.border="transpernt";
    navbar.append(navbarright);

var searchbox = document.createElement('div');
             searchbox.classList.add('search-box');
             searchbox.style.display = "flex";
             searchbox.style.alignItems = "center";
             searchbox.style.border = "1px solid #ccc";
             searchbox.style.borderRadius = "5px";
             searchbox.style.backgroundColor = "white";

var searchicon = document.createElement('i');
            searchicon.setAttribute('class', 'bi bi-search');
            searchicon.style.fontSize = "18px";
            searchicon.style.color = "gray";
            searchicon.style.padding = "0 10px";
    searchbox.append(searchicon);

var searchinput = document.createElement('input');
             searchinput.setAttribute('type','text');
             searchinput.setAttribute('placeholder', 'Search for products...');
             searchinput.style.padding = "8px";
             searchinput.style.border = "none";
             searchinput.style.fontSize = "16px";
             searchinput.style.width = "200px";
    searchbox.append(searchinput);
    navbarright.append(searchbox);

var navright =document.createElement('div');
            navright.classList.add('nav-right');
            navright.style.display="flex";
            navright.style.alignItems="center";
            navright.style.gap="10px";

var navicon=document.createElement('i');
             navicon.setAttribute('class','bi bi-bag');
             navicon.style.fontSize="23px";
             navicon.style.fontWeight='bold';

var navtext=document.createElement('span');
             navtext.innerText =" 0 /₹ 0.00";
             navtext.style.fontSize="16px";
             navtext.style.fontWeight ="bold";
        navright.append(navicon);
        navright.append(navtext);
        navbarright.append(navright);

var toggleIcon = document.createElement('i');
             toggleIcon.classList.add('bi', 'bi-list', 'toggle-icon');
             toggleIcon.style.fontSize = "28px";
             toggleIcon.style.display = "none"; 
       document.body.append(toggleIcon);
       navbarright.append(toggleIcon);

       

var wrapper = document.createElement('div');
              wrapper.classList.add('section-image'); 
              wrapper.style.border="transpernt";

var section = document.createElement('img');
                section.setAttribute('src', './image/Web-banner_2075x675_3 (1).webp');
                section.setAttribute('alt', 'banner image');
                section.classList.add('img-fluid', 'w-100');
     wrapper.append(section);
     document.body.append(wrapper);



var Container1 = document.createElement('div');
           Container1.classList.add = ('row');
           Container1.style.display = "flex";
           Container1.style.flexWrap = "wrap";
           Container1.style.justifyContent = "center";
           Container1.style.gap = "15px";
           Container1.style.padding = "10px";
           Container1.style.border="transpernt";

var box1 = document.createElement('div');
            box1.style.textAlign = "center";
            box1.style.width = "160px";

var img1 = document.createElement('img');
           img1.src = "./image/Web-banner_642-X-856_1.webp";
           img1.style.width = "100%";
           img1.style.borderRadius = "8px";
           img1.style.height = "auto";
           img1.classList.add('img-hover');

var title1 = document.createElement('p');
           title1.innerText = "Kerala Sarees";
           title1.style.fontSize = "14px";
           title1.style.fontWeight = "600";
           title1.style.marginTop = "6px";
           title1.style.color = "black";

  box1.append(img1);
  box1.append(title1);
  Container1.append(box1);

var box2 = document.createElement('div');
          box2.style.textAlign = "center";
          box2.style.width = "160px";

var img2 = document.createElement('img');
          img2.src = "./image/Web-banner_642-X-856_2.webp";
          img2.style.width = "100%";
          img2.style.borderRadius = "8px";
          img2.style.height = "auto";
          img2.classList.add('img-hover');

var title2 = document.createElement('p');
          title2.innerText = "Designer";
          title2.style.fontSize = "14px";
          title2.style.fontWeight = "600";
          title2.style.marginTop = "6px";
          title2.style.color = "black";
box2.append(img2);
box2.append(title2);
Container1.append(box2);

var box3 = document.createElement('div');
         box3.style.textAlign = "center";
         box3.style.width = "160px";

var img3 = document.createElement('img');
         img3.src = "./image/Web-banner_642-X-856_3.webp";
         img3.style.width = "100%";
         img3.style.borderRadius = "8px";
         img3.style.height = "auto";
         img3.classList.add('img-hover');
 
var title3 = document.createElement('p');
         title3.innerText = "Banarasi";
         title3.style.fontSize = "14px";
         title3.style.fontWeight = "600";
         title3.style.marginTop = "6px";
         title3.style.color = "black";

box3.append(img3);
box3.append(title3);
Container1.append(box3);

var box4 = document.createElement('div');
         box4.style.textAlign = "center";
         box4.style.width = "160px";

var img4 = document.createElement('img');
         img4.src = "./image/Web-banner_642-X-856_4.webp";
         img4.style.width = "100%";
         img4.style.borderRadius = "8px";
         img4.style.height = "auto";
         img4.classList.add('img-hover');

var title4 = document.createElement('p');
        title4.innerText = "All Sarees";
        title4.style.fontSize = "14px";
        title4.style.fontWeight = "600";
        title4.style.marginTop = "6px";
        title4.style.color = "black";

box4.append(img4);
box4.append(title4);
Container1.append(box4);

var box5 = document.createElement('div');
         box5.style.textAlign = "center";
         box5.style.width = "160px";

var img5 = document.createElement('img');
        img5.src = "./image/Web-banner_642-X-856_5.webp";
        img5.style.width = "100%";
        img5.style.borderRadius = "8px";
        img5.style.height = "auto";
        img5.classList.add('img-hover');

var title5 = document.createElement('p');
        title5.innerText = "Kancheepuram";
        title5.style.fontSize = "14px";
        title5.style.fontWeight = "600";
        title5.style.marginTop = "6px";
        title5.style.color = "black";

box5.append(img5);
box5.append(title5);
Container1.append(box5);

var box6 = document.createElement('div');
       box6.style.textAlign = "center";
       box6.style.width = "160px";

var img6 = document.createElement('img');
       img6.src = "./image/Web-banner_642-X-856_6.webp";
       img6.style.width = "100%";
       img6.style.borderRadius = "8px";
       img6.style.height = "auto";
       img6.classList.add('img-hover');

var title6 = document.createElement('p');
     title6.innerText = "Tussar Sarees";
     title6.style.fontSize = "14px";
     title6.style.fontWeight = "600";
     title6.style.marginTop = "6px";
     title6.style.color = "black";

box6.append(img6);
box6.append(title6);
Container1.append(box6);
document.body.append(Container1);




var container2 = document.createElement('div');
         container2.classList.add('container', 'pt-5','pl-4');
         container2.style.border="transpernt";

var row = document.createElement('div');
          row.classList.add('row', 'text-center');

var subtitle = document.createElement('div');
         subtitle.classList.add('col-12', 'pt-5');
         subtitle.innerText = "SHOP NOW";
         subtitle.style.color = "red";
         subtitle.style.fontSize = "16px";
         subtitle.style.fontWeight = "700";

var maintitle = document.createElement('div');
        maintitle.classList.add('col-12', 'pt-2');
        maintitle.innerText = "STAY ON BUDGET, SHOP IN STYLE!";
        maintitle.style.fontSize = "24px";
        maintitle.style.fontWeight = "700";

row.append(subtitle);
row.append(maintitle);
container2.append(row);


var imageRow = document.createElement('div');
       imageRow.classList.add('row');
       imageRow.style.marginTop = '40px';
       imageRow.style.width = '100%';

var box1 = document.createElement('div');
         box1.classList.add('col-6','col-md-3','col-lg-3');

var img1 = document.createElement('img');
      img1.src = './image/642x856_2-1.webp';
      img1.style.width = '100%';
      img1.style.borderRadius = '10px';
      img1.classList.add('img-hover');
box1.append(img1);
imageRow.append(box1);

var box2 = document.createElement('div');
        box2.classList.add('col-6','col-md-3','col-lg-3');

var img2 = document.createElement('img');
       img2.src = './image/642x856_3-1.webp';
       img2.style.width = '100%';
       img2.style.borderRadius = '10px';
       img2.classList.add('img-hover');
box2.append(img2);
imageRow.append(box2);

var box3 = document.createElement('div');
        box3.classList.add('col-6','col-md-3','col-lg-3');
var img3 = document.createElement('img');
       img3.src = './image/642x856_4-1.webp';
       img3.style.width = '100%';
       img3.style.borderRadius = '10px';
       img3.classList.add('img-hover');
       img3.style.marginTop="10px";
box3.append(img3);
imageRow.append(box3);

var box4 = document.createElement('div');
         box4.classList.add('col-6','col-md-3','col-lg-3');
var img4 = document.createElement('img');
        img4.src = './image/642x856-1.webp';
        img4.style.width = '100%';
        img4.style.borderRadius = '10px';
        img4.classList.add('img-hover');
        img4.style.marginTop="10px";
box4.append(img4);
imageRow.append(box4);

container2.append(imageRow);
document.body.append(container2);




var container3 = document.createElement('div');
           container3.classList.add('container', 'pt-5');
           container3.style.border="transpernt";

var row = document.createElement('div');
           row.classList.add('row', 'text-center');

var subtitle1 = document.createElement('div');
           subtitle1.classList.add('col-12', 'pt-5');
           subtitle1.innerText = "SHOP NOW";
           subtitle1.style.color = "red";
           subtitle1.style.fontSize = "16px";
           subtitle1.style.fontWeight = "700";

var mainTitle1 = document.createElement('div');
          mainTitle1.classList.add('col-12', 'pt-2');
          mainTitle1.innerText = "STAY ON BUDGET, SHOP IN STYLE!";
          mainTitle1.style.fontSize = "24px";
          mainTitle1.style.fontWeight = "700";

row.append(subtitle1);
row.append(mainTitle1);
container3.append(row);

var imageRow = document.createElement('div');
       imageRow.classList.add('row','pr-3','pl-3');
       imageRow.style.paddingTop = '40px';

var box1 = document.createElement('div');
         box1.classList.add('col-4','col-md-2','col-lg-2');

var img1 = document.createElement('img',);
       img1.src = './image/320x480_1.webp';
       img1.style.width = '100%';
       img1.style.borderRadius = '10px';
       img1.classList.add('img-hover');
        img1.style.marginTop="8px";
box1.append(img1);
imageRow.append(box1);

var box2 = document.createElement('div');
         box2.classList.add('col-4','col-md-2','col-lg-2');

var img2 = document.createElement('img');
         img2.src = './image/320x480_2.webp';
         img2.style.width = '100%';
         img2.style.borderRadius = '10px';
         img2.classList.add('img-hover');
         img2.style.marginTop="8px";
box2.append(img2);
imageRow.append(box2);

var box3 = document.createElement('div');
        box3.classList.add('col-4','col-md-2','col-lg-2');

var img3 = document.createElement('img');
       img3.src = './image/320x480_3.webp';
       img3.style.width = '100%';
       img3.style.borderRadius = '10px';
       img3.classList.add('img-hover');
       img3.style.marginTop="8px";
box3.append(img3);
imageRow.append(box3);

var box4 = document.createElement('div');
        box4.classList.add('col-4','col-md-2','col-lg-2');

var img4 = document.createElement('img');
       img4.src = './image/320x480_4.webp';
       img4.style.width = '100%';
       img4.style.borderRadius = '10px';
       img4.classList.add('img-hover');
       img4.style.marginTop="12px";
box4.append(img4);
imageRow.append(box4);

var box5 = document.createElement('div');
        box5.classList.add('col-4','col-md-2','col-lg-2');

var img5 = document.createElement('img');
       img5.src = './image/320x480_5.webp';
       img5.style.width = '100%';
       img5.style.borderRadius = '10px';
       img5.classList.add('img-hover');
       img5.style.marginTop="12px";
box5.append(img5);
imageRow.append(box5);

var box6 = document.createElement('div');
        box6.classList.add('col-4','col-md-2','col-lg-2');

var img6 = document.createElement('img');
       img6.src = './image/320x480_6.webp';
       img6.style.width = '100%';
       img6.style.borderRadius = '10px';
       img6.classList.add('img-hover');
       img6.style.marginTop="12px";
box6.append(img6);
imageRow.append(box6);

container3.append(imageRow);
document.body.append(container3);




var container4 = document.createElement('div');
           container4.classList.add('container');
           container4.style.paddingTop = "100px";
           container4.style.border="transpernt";

var rowheading3 = document.createElement('div');
          rowheading3.style.textAlign = 'center';
          rowheading3.style.marginBottom = '30px';
          rowheading3.classList.add('row');

var subheading3 = document.createElement('div');
          subheading3.classList.add('col-12');
          subheading3.innerText = "FEATURED CATEGORIES";
          subheading3.style.color = "red";
          subheading3.style.fontSize = "16px";
          subheading3.style.fontWeight = "700";

var mainheading3 = document.createElement('div');
         mainheading3.classList.add('col-12');
         mainheading3.innerText = "CELEBRATORY COLLECTION OF FESTIVE OUTFITS";
         mainheading3.style.fontSize = "24px";
         mainheading3.style.fontWeight = "700";
         mainheading3.style.paddingTop = "12px";

rowheading3.append(subheading3);
rowheading3.append(mainheading3);
container4.append(rowheading3);


var imageRow3 = document.createElement('div');
      imageRow3.classList.add('row', 'justify-content-center', 'g-2');
      imageRow3.style.paddingLeft = "30px";
      imageRow3.style.paddingTop="30px";

var box1 = document.createElement('div');
      box1.classList.add('col-6','col-sm-6','col-md-3','col-lg-3','mb-2');
      box1.style.textAlign = 'center';

var img1 = document.createElement('img');
     img1.src = './image/300x132_kanchipuram.webp';
     img1.style.width = '100%';
     img1.style.borderRadius = '10px';
     img1.classList.add('img-hover');

var title1 = document.createElement('p');
     title1.innerText = "Kancheepuram Sarees";
     title1.style.fontSize = "15px";
     title1.style.fontWeight = "600";
     title1.style.marginTop = "6px";
     title1.style.color = "black";

box1.append(img1);
box1.append(title1);
imageRow3.append(box1);

var box2 = document.createElement('div');
       box2.classList.add('col-6','col-sm-6','col-md-3','col-lg-3','mb-2');
       box2.style.textAlign = 'center';

var img2 = document.createElement('img');
       img2.src = './image/300x132_banarasi.webp';
       img2.style.width = '100%';
       img2.style.borderRadius = '10px';
       img2.classList.add('img-hover');

var title2 = document.createElement('p');
      title2.innerText = "Banarasi Sarees";
      title2.style.fontSize = "15px";
      title2.style.fontWeight = "600";
      title2.style.marginTop = "6px";
      title2.style.color = "black";

box2.append(img2);
box2.append(title2);
imageRow3.append(box2);

var box3 = document.createElement('div');
      box3.classList.add('col-6','col-sm-6','col-md-3','col-lg-3','mb-2');
      box3.style.textAlign = 'center';

var img3 = document.createElement('img');
      img3.src = './image/300x132_designer.webp';
      img3.style.width = '100%';
      img3.style.borderRadius = '10px';
      img3.classList.add('img-hover');

var title3 = document.createElement('p');
     title3.innerText = "Designer Sarees";
     title3.style.fontSize = "15px";
     title3.style.fontWeight = "600";
     title3.style.marginTop = "6px";
     title3.style.color = "black";

box3.append(img3);
box3.append(title3);
imageRow3.append(box3);

var box4 = document.createElement('div');
      box4.classList.add('col-6','col-sm-6','col-md-3','col-lg-3','mb-2');
      box4.style.textAlign = 'center';

var img4 = document.createElement('img');
     img4.src = './image/300x132_organza.webp';
     img4.style.width = '100%';
     img4.style.borderRadius = '10px';
     img4.classList.add('img-hover');

var title4 = document.createElement('p');
      title4.innerText = "Organza Sarees";
      title4.style.fontSize = "15px";
      title4.style.fontWeight = "600";
      title4.style.marginTop = "10px";
      title4.style.color = "black";

box4.append(img4);
box4.append(title4);
imageRow3.append(box4);

var box5 = document.createElement('div');
      box5.classList.add('col-6','col-sm-6','col-md-3','col-lg-3','mb-2');
      box5.style.textAlign = 'center';
var img5 = document.createElement('img');
       img5.src = './image/300x132_softsilk.webp';
       img5.style.width = '100%';
       img5.style.borderRadius = '10px';
       img5.classList.add('img-hover');

var title5 = document.createElement('p');
       title5.innerText = "Soft Silk Sarees";
       title5.style.fontSize = "15px";
       title5.style.fontWeight = "600";
       title5.style.marginTop = "10px";
       title5.style.color = "black";
box5.append(img5);
box5.append(title5);
imageRow3.append(box5);

var box6 = document.createElement('div');
       box6.classList.add('col-6','col-sm-6','col-md-3','col-lg-3','mb-2');
       box6.style.textAlign = 'center'
 var img6 = document.createElement('img');
      img6.src = './image/300x132_georgette.webp';
      img6.style.width = '100%';
      img6.style.borderRadius = '10px';
      img6.classList.add('img-hover');
var title6 = document.createElement('p');
       title6.innerText = "Georgette Sarees";
      title6.style.fontSize = "15px";
      title6.style.fontWeight = "600";
      title6.style.marginTop = "10px";
      title6.style.color = "black";
box6.append(img6);
box6.append(title6);
imageRow3.append(box6);

var box7 = document.createElement('div');
      box7.classList.add('col-6','col-sm-6','col-md-3','col-lg-3','mb-2');
      box7.style.textAlign = 'center';

var img7 = document.createElement('img');
      img7.src = './image/products-collection-04-1.webp';
      img7.style.width = '100%';
      img7.style.borderRadius = '10px';
      img7.classList.add('img-hover');
var title7 = document.createElement('p');
     title7.innerText = "Kanchi Sarees";
     title7.style.fontSize = "15px";
      title7.style.fontWeight = "600";
     title7.style.marginTop = "10px";
     title7.style.color = "black";
box7.append(img7);
box7.append(title7);
imageRow3.append(box7);

var box8 = document.createElement('div');
      box8.classList.add('col-6','col-sm-6','col-md-3','col-lg-3','mb-2');
      box8.style.textAlign = 'center';

var img8 = document.createElement('img');
      img8.src = './image/products-collection-05-1.webp';
      img8.style.width = '100%';
      img8.style.borderRadius = '10px';
       img8.classList.add('img-hover');
var title8 = document.createElement('p');
     title8.innerText = "Tissue Sarees";
     title8.style.fontSize = "15px";
     title8.style.fontWeight = "600";
     title8.style.marginTop = "10px";
     title8.style.color = "#333";
box8.append(img8);
box8.append(title8);
imageRow3.append(box8);

var box9 = document.createElement('div');
       box9.classList.add('col-6','col-sm-6','col-md-3','col-lg-3','mb-2');
       box9.style.textAlign = 'center';

var img9 = document.createElement('img');
       img9.src = './image/products-collection-07-1.webp';
       img9.style.width = '100%';
       img9.style.borderRadius = '10px';
        img9.classList.add('img-hover');
var title9 = document.createElement('p');
      title9.innerText = "Linen Sarees";
      title9.style.fontSize = "15px";
      title9.style.fontWeight = "600";
      title9.style.marginTop = "10px";
      title9.style.color = "black";
box9.append(img9);
box9.append(title9);
imageRow3.append(box9);

var box10 = document.createElement('div');
       box10.classList.add('col-6','col-sm-6','col-md-3','col-lg-3','mb-2');
       box10.style.textAlign = 'center';

var img10 = document.createElement('img');
       img10.src = './image/products-collection-09-1.webp';
       img10.style.width = '100%';
       img10.style.borderRadius = '10px';
       img10.classList.add('img-hover');
var title10 = document.createElement('p');
       title10.innerText = "Chiffon Sarees";
       title10.style.fontSize = "15px";
       title10.style.fontWeight = "600";
       title10.style.marginTop = "10px";
       title10.style.color = "black";
box10.append(img10);
box10.append(title10);
imageRow3.append(box10);

var box11 = document.createElement('div');
       box11.classList.add('col-6','col-sm-6','col-md-3','col-lg-3','mb-2');
       box11.style.textAlign = 'center';

var img11 = document.createElement('img');
      img11.src = './image/products-collection-10-1.webp';
      img11.style.width = '100%';
      img11.style.borderRadius = '10px';
      img11.classList.add('img-hover');
var title11 = document.createElement('p');
      title11.innerText = "Tussar Silk Sarees";
      title11.style.fontSize = "15px";
      title11.style.fontWeight = "600";
      title11.style.marginTop = "10px";
      title11.style.color = "black";
box11.append(img11);
box11.append(title11);
imageRow3.append(box11);

var box12 = document.createElement('div');
      box12.classList.add('col-6','col-sm-6','col-md-3','col-lg-3','mb-2');
      box12.style.textAlign = 'center';

var img12 = document.createElement('img');
      img12.src = './image/products-collection-12-1.webp';
      img12.style.width = '100%';
      img12.style.borderRadius = '10px';
       img12.classList.add('img-hover');
var title12 = document.createElement('p');
      title12.innerText = "Chanderi Sarees";
      title12.style.fontSize = "15px";
      title12.style.fontWeight = "600";
      title12.style.marginTop = "10px";
      title12.style.color = "#333";
box12.append(img12);
box12.append(title12);
imageRow3.append(box12);

container4.append(imageRow3);
document.body.append(container4);




var container5 = document.createElement('div');
        container5.classList.add('container', 'pt-5');
        container5.style.border="transpernet";

var row = document.createElement('div');
         row.classList.add('row', 'gy-4', 'p-4');

var col1 = document.createElement('div');
         col1.classList.add('col-12', 'col-md-6');

var img1 = document.createElement('img');
        img1.src = './image/banner1.png';
        img1.classList.add('img-fluid', 'img-hover');
        img1.style.marginTop = "10px";

col1.append(img1);
row.append(col1);

var col2 = document.createElement('div');
        col2.classList.add('col-12', 'col-md-6');

var img2 = document.createElement('img');
          img2.src = './image/banner2.png';
          img2.classList.add('img-fluid', 'img-hover');
          img2.style.marginTop = "10px";

col2.append(img2);
row.append(col2);

container5.append(row);
document.body.append(container5);





var container6 = document.createElement('div');
          container6.classList.add('container');
          container6.style.paddingTop = "110px";

var headingrow6 = document.createElement('div');
         headingrow6.classList.add('row', 'text-center');

var subtitle6 = document.createElement('div');
         subtitle6.classList.add('col-12');
         subtitle6.innerText = "SHADES OF HAPPINESS";
         subtitle6.style.color = "red";
         subtitle6.style.fontSize = "16px";
         subtitle6.style.fontWeight = "600";

var maintitle6 = document.createElement('div');
         maintitle6.classList.add('col-12', 'pt-2');
         maintitle6.innerText = "CHECKOUT OUR GALORE OF COLLECTIONS";
         maintitle6.style.fontSize = "24px";
         maintitle6.style.fontWeight = "700";

headingrow6.append(subtitle6, maintitle6);
container6.append(headingrow6);

var cards = document.createElement('div');
       cards.style.display = "flex";
       cards.style.overflowX = "auto";
       cards.style.gap = "20px";
       cards.style.paddingTop = "20px";
       cards.style.scrollbarWidth = "none";
       cards.style.border="transpernt";

var card1 = document.createElement('div');
       card1.style.flexShrink = "0";
       card1.style.width = "250px";
       card1.style.padding = "10px";
       card1.style.borderRadius = "8px";
       card1.style.textAlign = "center";
       card1.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";

var img1 = document.createElement('img');
       img1.src = './image/13798250-4-scaled.webp';
       img1.style.width = "100%";
       img1.style.height = "350px";
       img1.style.objectFit = "cover";
       img1.style.borderRadius = "6px";
       img1.classList.add('img-hover');

var cat1 = document.createElement('p');
      cat1.innerText = "Crepe Saree";
      cat1.style.color = 'gray';
      cat1.style.fontSize = '14px';
      cat1.style.marginBottom = '4px';

var name1 = document.createElement('h6');
       name1.innerText = 'Black Semi Creps Saree';
       name1.style.fontSize = '16px';
       name1.style.margin = '8px 0';

var price1 = document.createElement('p');
       price1.innerHTML = `<s>₹1,529.00</s> <strong>₹1,376.10</strong>`;
       price1.style.color = 'black';

card1.append(img1, cat1, name1, price1);
cards.append(card1);

var card2 = document.createElement('div');
       card2.style.flexShrink = "0";
       card2.style.width = "250px";
       card2.style.padding = "10px";
       card2.style.borderRadius = "8px";
       card2.style.textAlign = "center";
       card2.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";

var img2 = document.createElement('img');
       img2.src = './image/13809732-4-scaled.webp';
       img2.style.width = "100%";
       img2.style.height = "350px";
       img2.style.objectFit = "cover";
       img2.style.borderRadius = "6px";
       img2.classList.add('img-hover');

var cat2 = document.createElement('p');
       cat2.innerText = "Crepe Saree";
       cat2.style.color = 'gray';
       cat2.style.fontSize = '14px';
       cat2.style.marginBottom = '4px';

var name2 = document.createElement('h6');
        name2.innerText = 'Dark Blue Creps Saree';
        name2.style.fontSize = '16px';
        name2.style.margin = '8px 0';

var price2 = document.createElement('p');
price2.innerHTML = `<s>₹16,819.00</s> <strong>₹15,137.10</strong>`;
price2.style.color = 'black';

card2.append(img2, cat2, name2, price2);
cards.append(card2);

var card3 = document.createElement('div');
       card3.style.flexShrink = "0";
       card3.style.width = "250px";
       card3.style.padding = "10px";
       card3.style.borderRadius = "8px";
       card3.style.textAlign = "center";
       card3.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";

var img3 = document.createElement('img');
       img3.src = './image/13820211-5-scaled.webp';
       img3.classList.add('img-hover');
       img3.style.width = "100%";
       img3.style.height = "350px";
       img3.style.objectFit = "cover";
       img3.style.borderRadius = "6px";

var cat3 = document.createElement('p');
       cat3.innerText = "Crepe Saree";
       cat3.style.color = 'gray';
       cat3.style.fontSize = '14px';
       cat3.style.marginBottom = '4px';

var name3 = document.createElement('h6');
       name3.innerText = 'Sandal Semi Crepe Saree';
        name3.style.fontSize = '16px';
        name3.style.margin = '8px 0';

var price3 = document.createElement('p');
       price3.innerHTML = `<s>₹3,145.00</s> <strong>₹2,920.50</strong>`;
       price3.style.color = 'black';

card3.append(img3, cat3, name3, price3);
cards.append(card3);

var card4 = document.createElement('div');
       card4.style.flexShrink = "0";
       card4.style.width = "250px";
       card4.style.padding = "10px";
       card4.style.borderRadius = "8px";
       card4.style.textAlign = "center";
       card4.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";

var img4 = document.createElement('img');
       img4.src = './image/13823045-5-scaled.webp';
       img4.classList.add('img-hover');
        img4.style.width = "100%";
       img4.style.height = "350px";
       img4.style.objectFit = "cover";
       img4.style.borderRadius = "6px";

var cat4 = document.createElement('p');
       cat4.innerText = "Crepe Saree";
       cat4.style.color = 'gray';
       cat4.style.fontSize = '14px';
       cat4.style.marginBottom = '4px';

var name4 = document.createElement('h6');
       name4.innerText = 'Green Crepe Saree';
       name4.style.fontSize = '16px';
       name4.style.margin = '8px 0';

var price4 = document.createElement('p');
       price4.innerHTML = `<s>₹17,919.00</s> <strong>₹16,127.10</strong>`;
       price4.style.color = '#000';

card4.append(img4, cat4, name4, price4);
cards.append(card4);

var card5 = document.createElement('div');
        card5.style.flexShrink = "0";
       card5.style.width = "250px";
       card5.style.padding = "10px";
       card5.style.borderRadius = "8px";
       card5.style.textAlign = "center";
       card5.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";

var img5 = document.createElement('img');
       img5.src = './image/13840901-5-scaled.webp';
       img5.classList.add('img-hover');
       img5.style.width = "100%";
       img5.style.height = "350px";
       img5.style.objectFit = "cover";
       img5.style.borderRadius = "6px";

var cat5 = document.createElement('p');
       cat5.innerText = "Crepe Saree";
       cat5.style.color = 'gray';
       cat5.style.fontSize = '14px';
       cat5.style.marginBottom = '4px';

var name5 = document.createElement('h6');
       name5.innerText = 'Chilly Red Semi Crepe Saree';
       name5.style.fontSize = '16px';
       name5.style.margin = '8px 0';

var price5 = document.createElement('p');
       price5.innerHTML = `<s>₹7,469.00</s> <strong>₹6,137.10</strong>`;
       price5.style.color = '#000';

card5.append(img5, cat5, name5, price5);
cards.append(card5);

var card6 = document.createElement('div');
       card6.style.flexShrink = "0";
       card6.style.width = "250px";
       card6.style.padding = "10px";
       card6.style.borderRadius = "8px";
       card6.style.textAlign = "center";
       card6.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";

var img6 = document.createElement('img');
       img6.src = './image/13823049-5-scaled.webp';
       img6.classList.add('img-hover');
       img6.style.width = "100%";
       img6.style.height = "350px";
       img6.style.objectFit = "cover";
       img6.style.borderRadius = "6px";

var cat6 = document.createElement('p');
      cat6.innerText = "Crepe Saree";
       cat6.style.color = 'gray';
       cat6.style.fontSize = '14px';
       cat6.style.marginBottom = '4px';

var name6 = document.createElement('h6');
       name6.innerText = 'Brown Crepe Saree';
       name5.style.fontSize = '16px';
       name5.style.margin = '8px 0';

var price6 = document.createElement('p');
       price6.innerHTML = `<s>₹16,819.00</s> <strong>₹15,137.10</strong>`;
       price6.style.color = '#000';

card6.append(img6, cat6, name6, price6);
cards.append(card6);

container6.append(cards);
document.body.append(container6);




var container6 = document.createElement('div');
         container6.classList.add('container');
         container6.style.paddingTop = "110px";

var headingrow6 = document.createElement('div');
         headingrow6.classList.add('row', 'text-center');

var subtitle6 = document.createElement('div');
       subtitle6.classList.add('col-12');
       subtitle6.innerText = "FLOW IN THE COMFORT OF FLAMBOYANT GRACE";
       subtitle6.style.color = "red";
       subtitle6.style.fontSize = "16px";
       subtitle6.style.fontWeight = "600";

var maintitle6 = document.createElement('div');
      maintitle6.classList.add('col-12', 'pt-2');
      maintitle6.innerText = "OUR EXCLUSIVE CHURIDAR COLLECTION";
      maintitle6.style.fontSize = "24px";
      maintitle6.style.fontWeight = "700";

headingrow6.append(subtitle6, maintitle6);
container6.append(headingrow6);

var cards = document.createElement('div');
     cards.style.display = "flex";
     cards.style.overflowX = "auto";
     cards.style.gap = "20px";
     cards.style.paddingTop = "20px";
     cards.style.scrollbarWidth = "none";
     cards.style.border="transpernt";

var card1 = document.createElement('div');
     card1.style.flexShrink = "0";
     card1.style.width = "250px";
     card1.style.padding = "10px";
     card1.style.borderRadius = "8px";
     card1.style.textAlign = "center";
     card1.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";

var img1 = document.createElement('img');
     img1.src = './image/13892025-5-scaled.webp';
     img1.style.width = "100%";
     img1.style.height = "350px";
     img1.style.objectFit = "cover";
     img1.style.borderRadius = "6px";
     img1.classList.add('img-hover');

var cat1 = document.createElement('p');
     cat1.innerText = "Churider set";
     cat1.style.color = 'gray';
     cat1.style.fontSize = '14px';
     cat1.style.marginBottom = '4px';

var name1 = document.createElement('h6');
     name1.innerText = 'Peach Model printead Churidar unstitched';
     name1.style.fontSize = '16px';
     name1.style.margin = '8px 0';

var price1 = document.createElement('p');
      price1.innerHTML = `<s>₹5,885.00</s> <strong>₹5,296.50</strong>`;
      price1.style.color = 'black';

card1.append(img1, cat1, name1, price1);
cards.append(card1);

var card2 = document.createElement('div');
     card2.style.flexShrink = "0";
     card2.style.width = "250px";
     card2.style.padding = "10px";
     card2.style.borderRadius = "8px";
     card2.style.textAlign = "center";
     card2.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";

var img2 = document.createElement('img');
     img2.src = './image/13892028-5-scaled.webp';
     img2.classList.add('img-hover');
     img2.style.width = "100%";
     img2.style.height = "350px";
     img2.style.objectFit = "cover";
     img2.style.borderRadius = "6px";

var cat2 = document.createElement('p');
     cat1.innerText = "Churider set";
     cat1.style.color = 'gray';
     cat1.style.fontSize = '14px';
     cat1.style.marginBottom = '4px';   

var name2 = document.createElement('h6');
       name2.innerText = 'Blue Tussar Floral print Churidar...';
        name2.style.fontSize = '16px';
        name2.style.margin = '8px 0';

var price2 = document.createElement('p');
       price2.innerHTML = `<s>₹11,242.00</s> <strong>₹10,117.50</strong>`;
       price2.style.color = 'black';

card2.append(img2, cat2, name2, price2);
cards.append(card2);

var card3 = document.createElement('div');
     card3.style.flexShrink = "0";
     card3.style.width = "250px";
     card3.style.padding = "10px";
     card3.style.borderRadius = "8px";
     card3.style.textAlign = "center";
     card3.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";

var img3 = document.createElement('img');
     img3.src = './image/13892032-5-scaled.webp';
     img3.classList.add('img-hover');
     img3.style.width = "100%";
     img3.style.height = "350px";
     img3.style.objectFit = "cover";
     img3.style.borderRadius = "6px";

var cat3 = document.createElement('p');
     cat3.innerText = "Churider set";
     cat3.style.color = 'gray';
     cat3.style.fontSize = '14px';
     cat3.style.marginBottom = '4px';   

var name3 = document.createElement('h6');
       name3.innerText = 'Levender crush organza plain churidar';
       name3.style.fontSize = '16px';
       name3.style.margin = '8px 0';

var price3 = document.createElement('p');
       price3.innerHTML = `<s>₹4,301.00</s> <strong>₹3,807.90</strong>`;
       price3.style.color = 'black';

card3.append(img3, cat3, name3, price3);
cards.append(card3);

var card4 = document.createElement('div');
     card4.style.flexShrink = "0";
     card4.style.width = "250px";
     card4.style.padding = "10px";
     card4.style.borderRadius = "8px";
     card4.style.textAlign = "center";
     card4.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";

var img4 = document.createElement('img');
     img4.src = './image/13894285-5-scaled.webp';
     img4.classList.add('img-hover');
     img4.style.width = "100%";
     img4.style.height = "350px";
     img4.style.objectFit = "cover";
     img4.style.borderRadius = "6px";

var cat4 = document.createElement('p');
     cat4.innerText = "Churider set";
     cat4.style.color = 'gray';
     cat4.style.fontSize = '14px';
     cat4.style.marginBottom = '4px';   

var name4 = document.createElement('h6');
       name4.innerText = 'Pink Organza Floral print Churider...';
       name4.style.fontSize = '16px';
       name4.style.margin = '8px 0';

var price4 = document.createElement('p');
      price4.innerHTML = `<s>₹6,116.00</s> <strong>₹5,504.50</strong>`;
      price4.style.color = 'black';

card4.append(img4, cat4, name4, price4);
cards.append(card4);

var card5 = document.createElement('div');
     card5.style.flexShrink = "0";
     card5.style.width = "250px";
     card5.style.padding = "10px";
     card5.style.borderRadius = "8px";
     card5.style.textAlign = "center";
     card5.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";

var img5 = document.createElement('img');
     img5.src = './image/13894383-5-scaled.webp';
     img5.classList.add('img-hover');
     img5.style.width = "100%";
     img5.style.height = "350px";
     img5.style.objectFit = "cover";
     img5.style.borderRadius = "6px";

var cat5 = document.createElement('p');
     cat5.innerText = "Churider set";
     cat5.style.color = 'gray';
     cat5.style.fontSize = '14px';
     cat5.style.marginBottom = '4px';   

var name5 = document.createElement('h6');
     name5.innerText = 'Baby pink organza zari butta...';
     name5.style.fontSize = '16px';
     name5.style.margin = '8px 0';

var price5 = document.createElement('p');
     price5.innerHTML = `<s>₹4,257.00</s> <strong>₹3,831.10</strong>`;
     price5.style.color = 'black';

card5.append(img5, cat5, name5, price5);
cards.append(card5);

var card6 = document.createElement('div');
     card6.style.flexShrink = "0";
     card6.style.width = "250px";
     card6.style.padding = "10px";
     card6.style.borderRadius = "8px";
     card6.style.textAlign = "center";
     card6.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";

var img6 = document.createElement('img');
     img6.src = './image/13894401-5-scaled.webp';
     img6.classList.add('img-hover');
     img6.style.width = "100%";
     img6.style.height = "350px";
     img6.style.objectFit = "cover";
     img6.style.borderRadius = "6px";

var cat6 = document.createElement('p');
     cat6.innerText = "Churider set";
     cat6.style.color = 'gray';
     cat6.style.fontSize = '14px';
     cat6.style.marginBottom = '4px';  

var name6 = document.createElement('h6');
     name6.innerText = 'Yellow crepe cheridar Unstitched meterial';
      name6.style.fontSize = '16px';
     name6.style.margin = '8px 0';

var price6 = document.createElement('p');
       price6.innerHTML = `<s>₹13,629.00</s> <strong>₹12,266.10</strong>`;
       price6.style.color = 'black';

card6.append(img6, cat6, name6, price6);
cards.append(card6);

container6.append(cards);
document.body.append(container6);





var container8 = document.createElement('footer');
      container8.style.backgroundColor = "black";
      container8.style.color = "white";
      container8.style.padding = "60px 20px";
      container8.style.marginTop = "100px";

var footerbox = document.createElement('div');
     footerbox.style.display = "flex";
     footerbox.style.flexWrap = "wrap";
     footerbox.style.justifyContent = "space-between";
     footerbox.style.gap = "30px";

var col1 = document.createElement('div');
     col1.style.width = "200px";

var heading1 = document.createElement('h4');
    heading1.innerText = "Quick Links";
    heading1.style.marginBottom = "15px";
    heading1.style.fontSize = "24px";
    heading1.style.color = "white";

var p1 = document.createElement('p');
    p1.innerText = "About Us";
    p1.style.margin = "5px 0";
    p1.style.fontSize = "14px";
    p1.style.color = "white";

var p2 = document.createElement('p');
    p2.innerText = "Sarees";
    p2.style.margin = "5px 0";
    p2.style.fontSize = "14px";
    p2.style.color = "white";

var p3 = document.createElement('p');
    p3.innerText = "Churidar Set";
    p3.style.margin = "5px 0";
    p3.style.fontSize = "14px";
    p3.style.color = "white";

var p4 = document.createElement('p');
    p4.innerText = "Collections";
    p4.style.margin = "5px 0";
    p4.style.fontSize = "14px";
    p4.style.color = "white";

col1.append(heading1, p1, p2, p3, p4);


var col2 = document.createElement('div');
     col2.style.width = "200px";

var heading2 = document.createElement('h4');
    heading2.innerText = "Policies";
    heading2.style.marginBottom = "15px";
    heading2.style.fontSize = "24px";
    heading2.style.color = "white";

var p5 = document.createElement('p');
    p5.innerText = "Shipping Policy";
    p5.style.margin = "5px 0";
    p5.style.fontSize = "14px";
    p5.style.color = "white";

var p6 = document.createElement('p');
    p6.innerText = "Privacy Policy";
    p6.style.margin = "5px 0";
    p6.style.fontSize = "14px";
    p6.style.color = "whitw";

var p7 = document.createElement('p');
    p7.innerText = "Returns Policy";
    p7.style.margin = "5px 0";
    p7.style.fontSize = "14px";
    p7.style.color = "whitw";

var p8 = document.createElement('p');
    p8.innerText = "Terms & Conditions";
    p8.style.margin = "5px 0";
    p8.style.fontSize = "14px";
    p8.style.color = "whitw";

col2.append(heading2, p5, p6, p7, p8);


var col3 = document.createElement('div');
     col3.style.width = "200px";

var heading3 = document.createElement('h4');
      heading3.innerText = "Let Us Help You";
      heading3.style.marginBottom = "15px";
      heading3.style.fontSize = "24px";
      heading3.style.color = "white";

var p9 = document.createElement('p');
     p9.innerText = "Help / FAQ";
     p9.style.margin = "5px 0";
     p9.style.fontSize = "14px";
     p9.style.color = "white";

var p10 = document.createElement('p');
     p10.innerText = "Store Locator";
     p10.style.margin = "5px 0";
     p10.style.fontSize = "14px";
     p10.style.color = "white";

var p11 = document.createElement('p');
     p11.innerText = "Order Tracking";
     p11.style.margin = "5px 0";
     p11.style.fontSize = "14px";
     p11.style.color = "white";

var p12= document.createElement('p');
     p12.innerText = "Blogs";
     p12.style.margin = "5px 0";
     p12.style.fontSize = "14px";
     p12.style.color = "white";

col3.append(heading3, p9, p10, p11, p12);


var col4 = document.createElement('div');
      col4.style.width = "200px";

var heading4 = document.createElement('h4');
      heading4.innerText = "Get in Touch";
      heading4.style.marginBottom = "15px";
      heading4.style.fontSize = "24px";
      heading4.style.color = "white";

var p13 = document.createElement('p');
      p13.innerText = "Email: shop@seematti.com";
      p13.style.margin = "5px 0";
      p13.style.fontSize = "14px";
      p13.style.color = "white";

var p14 = document.createElement('p');
     p14.innerText = "Call: +91 9841434500";
     p14.style.margin = "5px 0";
     p14.style.fontSize = "14px";
     p14.style.color = "white";

var p15 = document.createElement('p');
     p15.innerText = "+91 484 235 3523 / 411 2233";
     p15.style.margin = "5px 0";
     p15.style.fontSize = "14px";
     p15.style.color = "white";

col4.append(heading4, p13, p14, p15);

footerbox.append(col1, col2, col3, col4);
container8.append(footerbox);
document.body.append(container8);


