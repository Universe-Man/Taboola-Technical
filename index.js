const API_URL = `https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init`

const display1 = document.getElementById('box-1');
const display2 = document.getElementById('box-2');
const display3 = document.getElementById('box-3');
const display4 = document.getElementById('box-4');
const display5 = document.getElementById('box-5');
const display6 = document.getElementById('box-6');

const img1 = document.getElementById('img-1');


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    fetch(API_URL)
      .then(res => res.json())
      .then(json => displayFetch(json))
  });

// image title branding

displayFetch = (data) => {
  let dataArray = data.list
  console.log(dataArray);
  console.log("first", dataArray[0]);
  for (let i = 0; i < dataArray.length; i++) {
    let imgUrl = dataArray[i].thumbnail[0].url
    console.log(imgUrl);
  }
  display1.innerHTML = "Yo!"
}

















// let hi = document.getElementById('hi')
//
// handleClick = (event) => {
//   console.log("hi there!");
// }
//
// hi.addEventListener('click', handleClick);
