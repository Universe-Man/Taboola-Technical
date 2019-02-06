const API_URL = `https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init`;

const display1 = document.getElementById('box-1');
const display2 = document.getElementById('box-2');
const display3 = document.getElementById('box-3');
const display4 = document.getElementById('box-4');
const display5 = document.getElementById('box-5');
const display6 = document.getElementById('box-6');

const img1 = document.getElementById('img-1');
const img2 = document.getElementById('img-2');
const img3 = document.getElementById('img-3');
const img4 = document.getElementById('img-4');
const img5 = document.getElementById('img-5');
const img6 = document.getElementById('img-6');

const title1 = document.getElementById('title-1');
const title2 = document.getElementById('title-2');
const title3 = document.getElementById('title-3');
const title4 = document.getElementById('title-4');
const title5 = document.getElementById('title-5');
const title6 = document.getElementById('title-6');

const branding1 = document.getElementById('branding-1');
const branding2 = document.getElementById('branding-2');
const branding3 = document.getElementById('branding-3');
const branding4 = document.getElementById('branding-4');
const branding5 = document.getElementById('branding-5');
const branding6 = document.getElementById('branding-6');


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    fetch(API_URL)
      .then(res => res.json())
      .then(json => displayFetch(json))
  });

// image title branding

displayFetch = (data) => {
  let dataArray = data.list;
  console.log(dataArray);
  console.log("first", dataArray[0]);
  for (let i = 0; i < dataArray.length; i++) {
    let targetImg = null;
    let targetTitle = null;
    let targetBranding = null;
    let targetBox = null;
    let imgUrl = dataArray[i].thumbnail[0].url;
    let imgH = dataArray[i].thumbnail[0].height;
    let imgW = dataArray[i].thumbnail[0].width;
    let title = dataArray[i].name;
    let branding = dataArray[i].branding;
    let link = dataArray[i].url;
    if (i === 0) {
      targetImg = img1;
      targetTitle = title1;
      targetBranding = branding1;
      targetBox = display1;
    } else if (i === 1) {
      targetImg = img2;
      targetTitle = title2;
      targetBranding = branding2;
      targetBox = display2;
    } else if (i === 2) {
      targetImg = img3;
      targetTitle = title3;
      targetBranding = branding3;
      targetBox = display3;
    } else if (i === 3) {
      targetImg = img4;
      targetTitle = title4;
      targetBranding = branding4;
      targetBox = display4;
    } else if (i === 4) {
      targetImg = img5;
      targetTitle = title5;
      targetBranding = branding5;
      targetBox = display5;
    } else if (i === 5) {
      targetImg = img6;
      targetTitle = title6;
      targetBranding = branding6;
      targetBox = display6;
    }
    targetImg.src = imgUrl;
    targetImg.height = imgH;
    targetImg.width = imgW;
    targetTitle.innerText = title;
    targetBranding.innerText = branding;
    targetBox.addEventListener("click", () => {
      window.location = link;
    })
  }
}
