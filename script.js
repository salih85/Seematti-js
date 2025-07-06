
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
    document.body.append(navbar);

var navbarleft = document.createElement('div');
            navbarleft.style.display = "flex";
            navbarleft.style.alignItems = "center";
            navbarleft.style.gap = "35px";
            navbarleft.style.paddingTop = "30px";
    navbar.append(navbarleft);

var logo = document.createElement('img');
            logo.setAttribute('src', './image/Web-Logo.png.webp');
            logo.style.width = "230px";
            logo.style.paddingLeft = "40px";
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
             navbarright.style.paddingRight="80px";
             navbarright.style.paddingTop="30px";
             navbarright.style.alignItems = "center";
             navbarright.style.gap = "20px";
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

var section = document.createElement('img');
                section.setAttribute('src', './image/Web-banner_2075x675_3 (1).webp');
                section.setAttribute('alt', 'banner image');
                section.classList.add('img-fluid', 'w-100');
     wrapper.append(section);
     document.body.append(wrapper);


var Container = document.createElement('div');
              Container.classList.add('row');
              Container.style.display = "flex";
              Container.style.flexWrap = "wrap";
              Container.style.justifyContent = "center";
              Container.style.gap = "5px";

var imageData = [
             { src: './image/Web-banner_642-X-856_3.webp', title: 'Banarasi' },
             { src: './image/Web-banner_642-X-856_5.webp', title: 'Kancheepuram' },
             { src: './image/Web-banner_642-X-856_4.webp', title: 'All sarees' },
             { src: './image/Web-banner_642-X-856_6.webp', title: 'Tussar Sarees' },
             { src: './image/Web-banner_642-X-856_2.webp', title: 'Designer' },
             { src: './image/Web-banner_642-X-856_1.webp', title: 'Kerala Sarees' }
];

imageData.forEach(data => {
            var imgWrapper = document.createElement('div');
            imgWrapper.classList.add('col-4', 'col-md-2', 'col-lg-2');
            imgWrapper.style.maxWidth = "180px";
            imgWrapper.style.width = "100%";
            imgWrapper.style.textAlign = "center";

var img = document.createElement('img');
            img.src = data.src;
            img.alt = data.title;
            img.style.width = "100%";
            img.style.borderRadius = "8px";
            img.style.height = "auto";
             img.classList.add('img-hover');

 var title = document.createElement('p');
             title.innerText = data.title;
             title.style.fontSize = "14px";
             title.style.fontWeight = "600";
             title.style.marginTop = "8px";
             title.style.color = "#333";

      imgWrapper.append(img);
      imgWrapper.append(title);
      Container.append(imgWrapper);
});
     document.body.append(Container);



var container1 = document.createElement('div');
            container1.classList.add('container', 'pt-5');

var row = document.createElement('div');
            row.classList.add('row', 'text-center');

var subtitle = document.createElement('div');
            subtitle.classList.add('col-12');
            subtitle.innerText = "SUITABLE FOR EVERY OCCASION";
            subtitle.style.color = "red";
            subtitle.style.fontSize = "16px";
            subtitle.style.fontWeight = "700";

var mainTitle = document.createElement('div');
             mainTitle.classList.add('col-12', 'pt-2');
             mainTitle.innerText = "CARRY CHARM WHEREVER YOU GO";
             mainTitle.style.fontSize = "24px";
             mainTitle.style.fontWeight = "700";

    row.append(subtitle);
    row.append(mainTitle);
    container1.append(row);

var imageRow = document.createElement('div');
            imageRow.classList.add('row', 'gy-4', 'pt-4');

var imageData1 = [
              { src: './image/642x856_2-1.webp' },
              { src: './image/642x856_3-1.webp' },
              { src: './image/642x856_4-1.webp' },
              { src: './image/642x856-1.webp' }
];

imageData1.forEach(data => {
var col = document.createElement('div');
              col.classList.add('col-6', 'col-md-3', 'col-lg-3');
var img = document.createElement('img');
              img.src = data.src;
              img.alt = "Image";
              img.style.width = "100%";
              img.style.marginTop = "13px";
              img.style.borderRadius = "10px";
               img.classList.add('img-hover');

     col.append(img);
     imageRow.append(col);
});

      container1.append(imageRow);
      document.body.append(container1);




var container2 = document.createElement('div');
             container2.classList.add('container', 'pt-5');

var row = document.createElement('div');
             row.classList.add('row', 'text-center');

var subtitle1 = document.createElement('div');
             subtitle1.classList.add('col-12','pt-5');
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
   container2.append(row);

var imageRow = document.createElement('div');
            imageRow.classList.add('row', 'gy-4', 'pt-5');

var imageData1 = [
          { src: './image/320x480_1.webp' },
          { src: './image/320x480_2.webp' },
          { src: './image/320x480_3.webp' },
          { src: './image/320x480_4.webp' },
          { src: './image/320x480_5.webp' },
          { src: './image/320x480_6.webp' }
];

imageData1.forEach(data => {
var col = document.createElement('div');
                col.classList.add('col-6', 'col-md-4', 'col-lg-2'); 

  var img = document.createElement('img');
            img.src = data.src;
             img.alt = "Image";
            img.style.width = "100%";
            img.style.marginTop = "16px";
            img.style.borderRadius = "10px";
            img.classList.add('img-hover');

    col.append(img);
    imageRow.append(col);
});

    container2.append(imageRow);
    document.body.append(container2);




var container3 = document.createElement('div');
             container3.classList.add('container');
             container3.style.paddingTop="100px";

var headingRow2 = document.createElement('div');
              headingRow2.classList.add('row', 'text-center');

var subtitle2 = document.createElement('div');
             subtitle2.classList.add('col-12');
             subtitle2.innerText = "FEATURED CATEGORIES";
             subtitle2.style.color = "red";
             subtitle2.style.fontSize = "16px";
             subtitle2.style.fontWeight = "700";


var mainTitle2 = document.createElement('div');
            mainTitle2.classList.add('col-12','pt-3');
            mainTitle2.innerText = "CELEBRATORY COLLECTION OF FESTIVE OUTFITES";
            mainTitle2.style.fontSize = "24px";
            mainTitle2.style.fontWeight = "700";


    headingRow2.append(subtitle2);
    headingRow2.append(mainTitle2);
    container3.append(headingRow2);

var imageRow2 = document.createElement('div');
            imageRow2.classList.add('row','gy-4', 'pt-4');

var imageData2 = [
            { src: './image/300x132_kanchipuram.webp',title: 'Kancheepuram' },
            { src: './image/300x132_georgette.webp',title: 'Georgette Sarees' },
            { src: './image/300x132_banarasi.webp',title: 'Banarasi Sarees' },
            { src: './image/300x132_designer.webp',title: 'Designer Sarees' },
            { src: './image/300x132_organza.webp',title: 'Organza Sarees' },
            { src: './image/300x132_softsilk.webp',title: 'Soft Silk Sarees' },
            { src: './image/products-collection-04-1.webp',title:'Kanchi Sarees' },
            { src: './image/products-collection-05-1.webp',title:'Tissue Sarees' },
            { src: './image/products-collection-07-1.webp',title:'Linen Sarees' },
            { src: './image/products-collection-09-1.webp',title:'Chiffon Sarees' },
            { src: './image/products-collection-10-1.webp',title:'Tussar Silk Sarees' },
            { src: './image/products-collection-12-1.webp',title:'Chanderi Sarees' }
];

imageData2.forEach(data => {
var col = document.createElement('div');
             col.classList.add('col-6', 'col-md-3', 'col-lg-3'); 

 var img = document.createElement('img');
           img.src = data.src;
           img.alt = data.title;
           img.alt = "Image";
           img.style.width = "100%";
           img.style.borderRadius = "10px";
           img.style.marginTop ="25px";
           img.classList.add('img-hover');

var title = document.createElement('p');
           title.innerText = data.title;
           title.style.fontSize = "17px";
           title.style.fontWeight = "600";
           title.style.marginTop = "8px";
           title.style.color = "#333";
           title.style.textAlign = "center";

   col.append(img);
   col.append(title); 
   imageRow2.append(col);
});
   container3.append(imageRow2);
   document.body.append(container3);




var container4 = document.createElement('div');
             container4.classList.add('container', 'pt-5');

var row = document.createElement('div');
         row.classList.add('row', 'gy-4','p-4');

var imageData = [
           { src: './image/banner1.png'},
           { src: './image/banner2.png'}
];

imageData.forEach(data => {
            var col = document.createElement('div');
            col.classList.add('col-12', 'col-md-6');

var img = document.createElement('img');
            img.src = data.src;
            img.alt = 'Image';
            img.classList.add('img-fluid', 'img-hover');
            img.style.marginTop = "10px"; 

    col.append(img);
    row.append(col);
});
   container4.append(row);
   document.body.append(container4);




var container5 = document.createElement('div');
            container5.classList.add('container');
            container5.style.paddingTop="110px";

var headingrow5 = document.createElement('div');
             headingrow5.classList.add('row', 'text-center');

var subtitle5 = document.createElement('div');
             subtitle5.classList.add('col-12');
             subtitle5.innerText = "SHADES OF HAPPINESS";
             subtitle5.style.color = "red";
             subtitle5.style.fontSize = "16px";
             subtitle5.style.fontWeight = "600";

var maintitle5 = document.createElement('div');
             maintitle5.classList.add('col-12', 'pt-2');
             maintitle5.innerText = "CHECKOUT OUR GALORE OF COLLECTIONS";
             maintitle5.style.fontSize = "24px";
             maintitle5.style.fontWeight = "700";

    headingrow5.append(subtitle5, maintitle5);
    container5.append(headingrow5);

var cards = document.createElement('div');
            cards.style.display = "flex";
            cards.style.overflowX = "auto";
            cards.style.gap = "20px";
            cards.style.paddingTop = "20px";
            cards.style.scrollbarWidth = "none";

var products5 = [
  {
          image: './image/13798250-4-scaled.webp',
          category: 'Crepe Saree',
          name: 'Black Semi Creps Saree',
          oldPrice: '₹1,529.00',
          newPrice: '₹1,376.10'
  },
  {
         image: './image/13809732-4-scaled.webp',
         category: 'Crepe Saree',
         name: 'Dark Blue Creps Saree',
         oldPrice: '₹16,819.00',
         newPrice: '₹15,137.10'
  },
  {
         image: './image/13820211-5-scaled.webp',
         category: 'Crepe Saree',
         name: 'Sandal Semi Crepe Saree',
         oldPrice: '₹3,145.00',
         newPrice: '₹2,920.50'
  },
  {
         image: './image/13823045-5-scaled.webp',
         category: 'Crepe Saree',
         name: 'Green Crepe Saree',
         oldPrice: '₹17,919.00',
         newPrice: '₹16,127.10'
  },
  {
        image: './image/13840901-5-scaled.webp',
        category: 'Crepe Saree',
        name: 'Chilly Red Semii Crepe Saree',
        oldPrice: '₹7,469.00',
        newPrice: '₹6,137.10'
  },
  {
        image: './image/13823049-5-scaled.webp',
        category: 'Crepe Saree',
        name: 'Brown Crepe Saree',
        oldPrice: '₹16,819.00',
        newPrice: '₹15,137.10'
  }
];

products5.forEach(product => {
var card = document.createElement('div');
           card.style.flexShrink = "0"; 
           card.style.width = "250px";
           card.style.borderRadius = "8px";
           card.style.padding = "10px";
           card.style.textAlign = "center";
           card.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';

var img = document.createElement('img');
          img.src = product.image;
          img.alt = product.name;
          img.classList.add('img-fluid','pt-3','img-hover');
          img.style.height = '350px';
          img.style.width = '300%';
          img.style.objectFit = 'cover';
          img.style.borderRadius = '6px';

var category = document.createElement('p');
          category.innerText = product.category;
          category.style.color = 'gray';
          category.style.marginBottom = '4px';
          category.style.fontSize = "14px";

var name = document.createElement('h6');
          name.innerText = product.name;
          name.style.fontSize = "16px";
          name.style.margin = "8px 0";

var price = document.createElement('p');
          price.innerHTML = `<s>${product.oldPrice}</s> <strong>${product.newPrice}</strong>`;
          price.style.color = '#000';

   card.append(img, category, name, price);
   cards.append(card);
});

  container5.append(cards);
  document.body.append(container5);




var container6 = document.createElement('div');
             container6.classList.add('container');
             container6.style.paddingTop="110px";

var headingrow6 = document.createElement('div');
             headingrow6.classList.add('row', 'text-center');

var subtitle6 = document.createElement('div');
             subtitle6.classList.add('col-12');
             subtitle6.innerText = "FLOW IN THE COMFORT OF FLAMBOYANT GRACE";
             subtitle6.style.color = "red";
             subtitle6.style.fontSize = "16px";
             subtitle6.style.fontWeight = "600";

var maintitle6 = document.createElement('div');
            maintitle6.classList.add('col-12','p-3');
            maintitle6.innerText = "OUR EXCLUSIVE CHURIDAR COLLECTION";
            maintitle6.style.fontSize = "24px";
            maintitle6.style.fontWeight = "700";

   headingrow6.append(subtitle6, maintitle6);
   container6.append(headingrow6);

var cards1 = document.createElement('div');
           cards1.style.display = "flex";
           cards1.style.overflowX = "auto";
           cards1.style.gap = "20px";
           cards1.style.paddingTop = "20px";
           cards1.style.scrollbarWidth = "none";

var products6 = [
  {
            image: './image/13892025-5-scaled.webp',
            category: 'Churidhar Set',
            name: 'Peach Model Printed Churidar Unstitched',
            oldPrice: '₹5,885.00',
            newPrice: '₹5,296.50'
  },
  {
            image: './image/13892028-5-scaled.webp',
            category: 'Churidhar Set',
            name: 'Blue Tussar Floral Print Churidar...',
            oldPrice: '₹11,242.00',
            newPrice: '₹10,117.80'
  },
  {
            image: './image/13892032-5-scaled.webp',
            category: 'Churidhar Set',
            name: 'Levender Crush Organza Plain Churidar',
            oldPrice: '₹4,301.00',
            newPrice: '₹3,870.90'
  },
  {
            image: './image/13894285-5-scaled.webp',
            category: 'Churidhar Set',
            name: 'Pink Organza Floral Print Churidar...',
            oldPrice: '₹6,116.00',
            newPrice: '₹5,504.40'
  },
  {
            image: './image/13894383-5-scaled.webp',
            category: 'Churidhar Set',
            name: 'Baby Pink Organza Zari Butta...',
            oldPrice: '₹4,257.00',
            newPrice: '₹3,831.30'
  },
  {
            image: './image/13894401-5-scaled.webp',
            category: 'Churidhar Set',
            name: 'Yellow Crepe Churidhar Unstitched Material',
            oldPrice: '₹13,629.00',
            newPrice: '₹12,266.10'
  }
];

products6.forEach(product => {
var card1 = document.createElement('div');
           card1.style.flexShrink = "0"; 
           card1.style.width = "250px";
           card1.style.borderRadius = "8px";
           card1.style.padding = "10px";
           card1.style.textAlign = "center";
           card1.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';

var img = document.createElement('img');
           img.src = product.image;
           img.alt = product.name;
           img.classList.add('img-fluid','pt-3','img-hover');
           img.style.height = '350px';
           img.style.width = '300%';
           img.style.objectFit = 'cover';
           img.style.borderRadius = '6px';

var category1 = document.createElement('p');
          category1.innerText = product.category;
          category1.style.color = 'gray';
          category1.style.marginBottom = '4px';
          category1.style.fontSize = "14px";

var name1 = document.createElement('h6');
          name1.innerText = product.name;
          name1.style.fontSize = "16px";
          name1.style.margin = "8px 0";

var price1 = document.createElement('p');
           price1.innerHTML = `<s>${product.oldPrice}</s> <strong>${product.newPrice}</strong>`;
           price1.style.color = '#000';

   card1.append(img, category1, name1, price1);
   cards1.append(card1);
});

  container6.append(cards1);
  document.body.append(container6);




var container7 = document.createElement('footer',);
          container7.style.backgroundColor = "black";
          container7.style.color = "white";
          container7.style.padding = "60px 20px";
          container7.style.marginTop = "100px";

var footerbox = document.createElement('div');
           footerbox.style.display = "flex";
           footerbox.style.flexWrap = "wrap";
           footerbox.style.justifyContent = "space-between";
           footerbox.style.gap = "30px";

var footerSections = [
  {
         title: "Quick Links",
         items: ["About Us", "Sarees", "Churidar Set", "Collections"]
  },
  {
         title: "Policies",
         items: ["Shipping Policy", "Privacy Policy", "Returns Policy", "Terms & Conditions"]
  },
  {
         title: "Let Us Help You",
         items: ["Help / FAQ", "Store Locator", "Order Tracking", "Blogs"]
  },
  {
         title: "Get in Touch",
         items: ["Email: shop@seematti.com","Call: +91 9841434500","+91 484 235 3523 / 411 2233"]    
  }
];

footerSections.forEach(section => {
  var col = document.createElement('div');
         col.style.flex = "1 1 200px";

var heading = document.createElement('h4');
          heading.innerText = section.title;
          heading.style.marginBottom = "15px";
          heading.style.fontSize = "16px";
          heading.style.color = "white";

   col.appendChild(heading);

section.items.forEach(item => {
 var p = document.createElement('p');
            p.innerText = item;
            p.style.margin = "5px 0";
            p.style.fontSize = "14px";
            p.style.color = "#ccc";
     col.appendChild(p);
 });
   footerbox.appendChild(col);
});

   container7.appendChild(footerbox);
   document.body.appendChild(container7);







   