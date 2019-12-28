var src = null;
var Layout = {
  video : {
    Aplay : ()=>(
      `    <div class="container-fluid px-lg-4" id="Aplay">
      <div class="row py-lg-4">
        <div id="mainVidCon" class="col-lg-8 ">
          <div class="movieCon d-flex">
            <video id="mainVid" autoplay  class="img-fluid">Can't play video</video>
             <div id="controls">
            
            </div> 
          </div>
          <div class="description">
          </div>
        </div>
        <div class="col-lg-4  feed py-4 py-lg-0 ">

        </div>
      </div>
    </div> `
    ),
    initLayout : ()=>(
      `    <div class="container-fluid py-lg-4 px-lg-5" id="initLayout">
      <div class="row">
          <div class="col-lg-8">
               <div class="row">
                 <div class="col" id="videoCarousel">
                
                 </div>
               </div>
               <div class="row mt-2">
                 <div class="col feed">
                 </div>
               </div>
               <div class="row mt-2">
                 
               </div>
          </div>
          <div class="col-lg-4">

          </div>
        </div>
  </div>`
    )
    
  }
}
var sources = {
  img: [
    "../img/carol19/carol-pot.jpg",
    "../img/carol19/carol-land.jpg",
    "../img/carol19/carol (1).jpg",
    "../img/carol19/carol (2).jpg",
    "../img/carol19/carol (3).jpg",
    "../img/carol19/carol (4).jpg",
    "../img/apata2.jpg"
  ],
  vid: ["../vid/carol.mp4", "../vid/croud.mp4", "../vid/rain.mp4"],
  video: [
    {
      src: "../vid/carol.mp4",
      des: "GPPCR carol 2019 Worship the new born king"
    },
    {
      src: "../vid/croud.mp4",
      des: "Our organist odunmilade"
    },
    {
      src: "../vid/rain.mp4",
      des: "private video"
    }
  ]
};
const getSrc = type => {
  let n;
  if (type == "img") {
    n = Math.floor(Math.random() * sources.img.length);
    src = sources.img[n];
  } else {
    n = Math.floor(Math.random() * sources.vid.length);
    src = sources.vid[n];
  }
  return src;
};

const carouselItem = type => {
  let value = ` <div class="carousel-item active">
    <img src="${getSrc("img")}" alt="${src}">
               </div>`;
  if (type == "img") {
    for (var i = 0; i < sources.img.length; i++) {
      value += ` <div class="carousel-item">
                               <img src="${getSrc("img")}" alt="${src}">
                            </div>`;
    }
  } else {
    for (var i = 0; i < sources.vid.length; i++) {
      value += ` <div class="carousel-item">
                          <video src="${getSrc("vid")}" muted ></video>
                       </div>`;
    }
  }
  return value;
};

const miniCarouselItem = type => {
  var value = "";
  if (type == "img") {
    value = ` <div class="carousel-item active">
                             <img src="${getSrc("img")}" alt="${src}">
                      </div>`;
    for (var i = 0; i < sources.img.length; i++) {
      value += ` <div class="carousel-item">
                               <img src="${sources.img[i]}" alt="${src}">
                            </div>`;
    }
  } else {
    value = ` <div class="carousel-item active">
                       <video src="${getSrc("vid")}"  muted></video>
                    </div>`;
    for (var i = 0; i < sources.vid.length; i++) {
      value += ` <div class="carousel-item">
                          <video src="${sources.vid[i]}" ></video>
                       </div>`;
    }
  }
  return value;
};

const carousel = type => {
  if (type == "img") {
    return `  <div id="carouselId0" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
                     ${carouselItem("img")}
            </div>
            <a class="carousel-control-prev" href="#carouselId0" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselId0" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
          </div>`;
  } else if (type == "vid") {
    return `  <div id="carouselId0" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
                 ${carouselItem("vid")}
        </div>
        <a class="carousel-control-prev" href="#carouselId0" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselId0" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
      </div>`;
  } else if (type == "miniImg") {
    return `  <div id="carouselId1" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
                     ${miniCarouselItem("img")}
            </div>
            <a class="carousel-control-prev" href="#carouselId1" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselId1" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
          </div>`;
  } else if (type == "miniVid") {
    return `  <div id="carouselId2" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
                     ${miniCarouselItem("vid")}
            </div>
            <a class="carousel-control-prev" href="#carouselId2" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselId2" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
          </div>`;
  }
};

var fragment = null;

function navigate() {
  document.documentElement.scrollTop = 0;
  // mainVid.pause();
  fragment = location.hash.substr(1);
  nest.innerHTML = fragment;
  var links = document.querySelectorAll("#category .btn");
  links.forEach(cur => {
    var activeClass = cur.getAttribute("href").substr(1);
    if (fragment == activeClass) {
      cur.classList.add("active");
    } else {
      cur.classList.remove("active");
    }
  });
  if (!location.hash) {
    location.hash = "albums";
  }
  var pages = document.querySelectorAll("section");
  pages.forEach(cur => {
    var pageId = cur.getAttribute("id");
    if (pageId == fragment) {
      cur.classList.remove("d-none");
    } else {
      cur.classList.add("d-none");
    }
  });

  // load component script

    if(fragment == 'photos'){
        scripts.photos()
      }else if(fragment == 'videos'){
        scripts.videos()
      }else if(fragment == 'albums'){
        scripts.albums()
    }else{
      console.log('script not available');
    }

   
}
function playback(target, cap) {
  var obj = {
    target : target,
    cap : cap
  }  
  var qString = Object.keys(obj).map(keys => keys + '=' +obj[keys]).join('&');
  location.search= qString;
  c
  document.documentElement.scrollTop = 0;
  var  video = document.querySelector(" #mainVid"),
    caption = document.querySelector(" .description");
    video.src = location.search.substr(1);
    controls.classList.remove("active");
      document.querySelector(".playBtn").innerHTML = '   <i class="material-icons">pause</i> ';
      caption.innerHTML = cap;
}

function mediaFeed() {
  var feed = document.querySelector(".feed"),
    vidFeed = [];
  for (var i = 0; i < sources.video.length; i++) {
    var el = `   <figure class="row mb-2 px-2" data-target="${sources.video[i].src}" data-des="${sources.video[i].des}">
      <video src="${sources.video[i].src}" class="p-0 col-5"></video>
      <figcaption class="col-7 px-2 ">${sources.video[i].des}</figcaption>
    </figure>`;
    vidFeed.push(el);
  }
  feed.innerHTML += vidFeed.join(" ");
}

function contoller() {
  var playBtn = document.querySelector(".playBtn"),
    mainVid = document.getElementById("mainVid");
  seekSlider = document.getElementById("rangeSeeker");
  playBtn.addEventListener("click", playPause);
   seekSlider.value = 0;
  seekSlider.addEventListener("change", () => {
    vidSeek();
    seekSliderBg(seekSlider.value);
  });
  var val = false
  seekSlider.addEventListener("mousedown", () => {
    seekSliderBg(seekSlider.value);
    val = true
  });
  seekSlider.addEventListener("mousemove", event => {
    if(val) mainVid.pause();
    seekSliderBg(seekSlider.value);
  });
  seekSlider.addEventListener("mouseup", () => {
    mainVid.play();
    val = false
  });
  mainVid.addEventListener("timeupdate", () => {
    var nt = mainVid.currentTime * (100 / mainVid.duration);
    seekSlider.value = nt;
    seekSliderBg(seekSlider.value);
    var curmin = Math.floor(mainVid.currentTime / 60),
      cursec = Math.floor(mainVid.currentTime - curmin * 60),
      durmins = Math.floor(mainVid.duration / 60),
      dursec = Math.floor(mainVid.duration - durmins * 60);
    if (cursec < 10) {
      cursec = "0" + cursec;
    }
    if (dursec < 10) {
      dursec = "0" + dursec;
    }
    if(dursec){
        durTime.innerHTML = durmins + ":" + dursec;
    }else{
        durTime.innerHTML = "0:00";
    }
    curTime.innerHTML = curmin + ":" + cursec;
  });
  function playPause() {
    if (mainVid.paused) {
        playBtn.innerHTML = '   <i class="material-icons">pause</i> ';
        mainVid.play();
        console.log("played");
        controls.classList.remove("active");
    } else {
        playBtn.innerHTML = '   <i class="material-icons">play_arrow</i> ';
      controls.classList.add("active");
      mainVid.pause();
      console.log("paused");
    }
  }
  function vidSeek() {
    var seekTo = mainVid.duration * (seekSlider.value / 100);
    mainVid.currentTime = seekTo;
  }
  function seekSliderBg(val) {
    seekSlider.style.background =
      "linear-gradient(to right, #f21 0%, #f21 " +
      val +
      "%, rgba(255,255,255, .7) " +
      val +
      "%,  rgba(255,255,255, .3)  100%)";
  }
}

function displayControls(){
    var mobileCtrl = `<div class="control-dom"> <button class=" playBtn"> <i class="material-icons">pause</i> </button> <div class="bottom text-white container-fluid"> <div class="row text-center align-items-center"> <div class="col-4 col-lg-2 "> <span id="curTime" class="px-1 "></span> / <span id="durTime" class="px-1 "></span> </div> <div class="col-6 col-lg-9 px-0 pb-2"> <input type="range" min="0" value="0" max="100" step="1" id="rangeSeeker"> </div> <div class="col-2 col-lg-1 px-2"> <button id="volumeBtn"> <i class="material-icons">fullscreen</i> </button> </div> </div> </div> <style> .playBtn{ font-size: 4rem !important; } .bottom{ padding: .5rem .5rem } #rangeSeeker{ height: 2.5px; } </style> </div>
    `,
    desktopCtrl = `<style> .bottom { padding: 0 .5rem .3rem; } #btnNext{ font-size: 1.7rem; } .playBtn { font-size: 1.9rem !important } @media only screen and (min-width: 760px) { .playBtn { font-size: 1.2rem } } </style> <div class="bottom text-white container-fluid"> <div class="row "> <div class=" col "> <input type="range" min="0" max="100" step="1" value="0" id="rangeSeeker"> </div> </div> <div class="row align-items-center justify-content-between"> <div class="col align-items-center d-flex"> <button class=" playBtn px-sm-4"> <i class="material-icons">play_arrow</i> </button> <button id="btnNext" class="pr-2"> <i class="material-icons" >skip_next</i> </button> <button id="volumeBtn" class="pr-3"> <i class="material-icons" >volume_up</i> </button> <span id="curTime" class="px-1 font-weight-light "></span> / <span id="durTime" class="px-1 font-weight-light" ></span> </div> <div class="col d-flex align-items-center "> <button id="pInP" class="ml-auto pr-2"> <i class="material-icons">picture_in_picture_alt</i> </button> <button id="pInP" class="pr-2 d-none d-md-flex"> <i class="material-icons">crop_landscape</i> </button> <button id="fullScreen" class="pr-2"> <i class="material-icons">fullscreen</i> </button> </div> </div> </div>`;
    if(window.innerWidth > 1024){
        controls.innerHTML = desktopCtrl
    }else{
        controls.innerHTML = mobileCtrl;
    }
}

var scripts = {
  albums : ()=>{
    document.querySelector(".con").innerHTML = carousel("img");
    document.querySelector(".imgcon").innerHTML = carousel("miniImg");
    document.querySelector(".vidcon").innerHTML = carousel("miniVid");
  },
  photos : ()=>{

  },
  videos: ()=>{
    const vidSec = document.getElementById('videos');
    if(!location.search){
      vidSec.innerHTML = Layout.video.initLayout();
      mediaFeed();
    }else{
      const p = new Promise((resolve,reject)=>{
        if(Layout.video.Aplay){
          resolve(Layout.video.Aplay);
        }else{
          reject('Cant be loaded')
        }
      })
      p.then((data)=>{
        vidSec.innerHTML = data
        displayControls()
        // playback(location.search, 'hello');
        contoller();
      })

    
    }
      // playback call
  var figures = document.querySelectorAll(".feed figure");
  figures.forEach(cur => {
    cur.addEventListener("click", () => {
      figures.forEach(cur => {
        cur.classList.remove("active");
      });
      cur.classList.add("active");
      playback(cur.getAttribute("data-target"), cur.getAttribute("data-des"), true);
    });
  });
  // end of playback call

  }
};

(function init() {
  navigate();

  window.addEventListener("hashchange", event => {
    event.preventDefault();
    navigate();
  });
})();


/*
      <div class="col-4 p-2">
                         <div class="feed_sm">
                
                         </div>
                     </div>
*/