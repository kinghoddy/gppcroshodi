var src = null;
var sources = {
    img : [
        '../img/carol19/carol-pot.jpg',
        '../img/carol19/carol-land.jpg',
        '../img/carol19/carol (1).jpg',
        '../img/carol19/carol (2).jpg',
        '../img/carol19/carol (3).jpg',
        '../img/carol19/carol (4).jpg',
        '../img/apata2.jpg'
],
    vid : [
        '../vid/carol.mp4',
        '../vid/croud.mp4'
    ]
}
const getSrc = type => {
    let n ;
    if (type == 'img'){
     n = Math.floor(Math.random() * sources.img.length);
     src = sources.img[n];
    }else {
        n = Math.floor(Math.random() * sources.vid.length);
        src = sources.vid[n];
    }
    return src
}

const carouselItem = type =>{
    let value = ` <div class="carousel-item active">
    <img src="${getSrc('img')}" alt="${src}">
               </div>`;
    if (type == 'img'){
        for (var i = 0; i < sources.img.length; i++){
                 value += ` <div class="carousel-item">
                               <img src="${getSrc('img')}" alt="${src}">
                            </div>`;
        }
    }else {
        for (var i = 0; i < sources.vid.length; i++){
            value += ` <div class="carousel-item">
                          <video src="${getSrc('vid')}" muted autoplay></video>
                       </div>`;
        }
    }
    return value
}

const miniCarouselItem = type =>{
    var value = ''
    if (type == 'img'){
         value = ` <div class="carousel-item active">
                             <img src="${getSrc('img')}" alt="${src}">
                      </div>`;
        for (var i = 0; i < sources.img.length; i++){
                 value += ` <div class="carousel-item">
                               <img src="${sources.img[i]}" alt="${src}">
                            </div>`;
        }
    }else {
         value = ` <div class="carousel-item active">
                       <video src="${getSrc('vid')}" autoplay muted></video>
                    </div>`;
        for (var i = 0; i < sources.vid.length; i++){
            value += ` <div class="carousel-item">
                          <video src="${sources.vid[i]}" ></video>
                       </div>`;
        }
    }
    return value
}

const carousel = type =>{
    if (type == 'img'){
        return (
            `  <div id="carouselId0" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
                     ${carouselItem('img')}
            </div>
            <a class="carousel-control-prev" href="#carouselId0" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselId0" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
          </div>`
        )
    }else if (type == 'vid'){
     return (
        `  <div id="carouselId0" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
                 ${carouselItem('vid')}
        </div>
        <a class="carousel-control-prev" href="#carouselId0" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselId0" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
      </div>`
     )
    }else if(type == 'miniImg'){
        return (
            `  <div id="carouselId1" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
                     ${miniCarouselItem('img')}
            </div>
            <a class="carousel-control-prev" href="#carouselId1" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselId1" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
          </div>`
         )
    }else if (type == 'miniVid'){
        return (
            `  <div id="carouselId2" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
                     ${miniCarouselItem('vid')}
            </div>
            <a class="carousel-control-prev" href="#carouselId2" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselId2" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
          </div>`
         )
    }
}

(function init (){
    document.querySelector('.con').innerHTML = carousel('img');
    document.querySelector('.imgcon').innerHTML = carousel('miniImg');
    document.querySelector('.vidcon').innerHTML = carousel('miniVid');

 }())   