const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];
let parent = document.querySelector('.gallery');
parent.style.listStyle = 'none';
parent.style.maxWidth = '1440px';
parent.style.justifyContent = 'center';
parent.style.paddingTop = '100px';
parent.style.paddingLeft = '156px';
parent.style.paddingRight = '156px';
parent.style.paddingBottom = '100px';
parent.style.display = 'flex';
parent.style.flexWrap = 'wrap';
parent.style.margin = '0 auto';
parent.style.gap = '48px 24px';
let rez = '';
for (let i = 0; i < 6; i += 1) {
  rez += '<li><img src="' + images[i].url + '" alt="' + images[i].alt + '" width="360" height="300" ></li> ';
  //let li = document.createElement('li');
  //let img = document.createElement('img');
  //img.src = images[i].url;
  //img.alt = images[i].alt;
  //img.style.width = ('360px');
  //img.style.height = ('300px');
  //li.append(img);
	//parent.append(li);
}
parent.insertAdjacentHTML("beforeend", rez);