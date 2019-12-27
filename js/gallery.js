var src = null;
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
                          <video src="${getSrc("vid")}" muted autoplay></video>
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
                       <video src="${getSrc("vid")}" autoplay muted></video>
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
  mainVid.pause();
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
}
function playback(target, cap) {
  document.documentElement.scrollTop = 0;
  var vidSec = document.getElementById("videos"),
    video = document.querySelector(" #mainVid"),
    caption = document.querySelector("#mainVidCon .description"),
    feed = document.querySelector(".feed"),
    vidCon = document.getElementById("mainVidCon");
  vidSec.classList.add("toggled");
  if (vidSec.getAttribute("class").indexOf("toggled") > -1) {
    vidCon.classList.remove("d-none");
    vidCon.classList.add("col-lg-8");
    feed.classList.remove("col-12");
    feed.classList.add("col-lg-4");
    video.src = target;
    caption.innerHTML = cap;
  } else {
    vidCon.classList.add("d-none");
    vidCon.classList.remove("col-lg-8");
    feed.classList.add("col-12");
    feed.classList.remove("col-lg-4");
    video.src = null;
  }
  controls.classList.remove("active");
  document.querySelector(".playBtn").innerHTML = '   <i class="material-icons">pause</i> ';
}

function mediaFeed() {
  var feed = document.querySelector(".feed"),
    vidFeed = [];
  for (var i = 0; i < sources.video.length; i++) {
    var el = `   <figure class="row p-2 px-4" data-target="${sources.video[i].src}" data-des="${sources.video[i].des}">
      <video src="${sources.video[i].src}" class="col-3"></video>
      <figcaption class="col-9">${sources.video[i].des}</figcaption>
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
  seekSlider.addEventListener("change", () => {
    vidSeek();
    console.log(seekSlider.value);
    seekSliderBg(seekSlider.value);
  });
  seekSlider.addEventListener("mousedown", () => {
    mainVid.pause();
  });
  seekSlider.addEventListener("mousemove", event => {
    seekSliderBg(seekSlider.value);
  });
  seekSlider.addEventListener("mouseup", () => {
    mainVid.play();
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
      dursec = "0" + cursec;
    }
    curTime.innerHTML = curmin + ":" + cursec;
    durTime.innerHTML = durmins + ":" + dursec;
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
      "%, rgba(255,255,255, .5) " +
      val +
      "%,  rgba(255,255,255, .2)  100%)";
  }
}

(function init() {
  navigate();
  document.querySelector(".con").innerHTML = carousel("img");
  document.querySelector(".imgcon").innerHTML = carousel("miniImg");
  document.querySelector(".vidcon").innerHTML = carousel("miniVid");
  window.addEventListener("hashchange", event => {
    event.preventDefault();
    navigate();
  });

  mediaFeed();

  // playback call
  var figures = document.querySelectorAll(".feed figure");
  figures.forEach(cur => {
    cur.addEventListener("click", () => {
      figures.forEach(cur => {
        cur.classList.remove("active");
      });
      cur.classList.add("active");

      playback(cur.getAttribute("data-target"), cur.getAttribute("data-des"));
    });
  });
  // end of playback call
  contoller();
})();
