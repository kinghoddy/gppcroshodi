


var loader = '<section class="mt-2 text-center" id="loader"><img src="img/load.gif" alt="loader" class="gif"></section>';
var date;
setInterval(() => {
    date = new Date(),
        day = date.getDate() + 21,
        hour = 23 - date.getHours(),
        min = 59 - date.getMinutes(),
        sec = 59 - date.getSeconds();

}, 1000);
var components = {

    default: [
        // header
        '<header class="py-5 py-lg-0  px-4"> <div id="header-bg" class="carousel slide" data-ride="carousel"> <ol class="carousel-indicators"> <li data-target="#header-bg" data-slide-to="0" class="active"></li> <li data-target="#header-bg" data-slide-to="1"></li> <li data-target="#header-bg" data-slide-to="2"></li> </ol> <div class="carousel-inner" role="listbox"> <div class="carousel-item active"> <img src="img/mike.jpg" alt="First slide"> </div> <div class="carousel-item"> <img src="img/audience1.jpg" alt="Second slide"> </div><div class="carousel-item"> <img src="img/audience2.jpg" alt="third slide"> </div> </div> <a class="carousel-control-prev" href="#header-bg" role="button" data-slide="prev"> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href="#header-bg" role="button" data-slide="next"> <span class="sr-only">Next</span> </a> </div> <div class="container hpg p py-5"> <div class="row align-items-center text-white"> <div class="col text-center wow rotateIn " data-wow-duration="1.5s"> <h1 class="text-capitalize">Praise challenge </h1> <h3 style="color:white !important" class="text-uppercase">season 2</h3> <p class="text-capitalize">Great physician pentecostal church of redeemer</p> <p> <a href="https://www.facebook.com/greatphysicianpentecostaloshodi/"> <i class="fab fa-facebook-f fa-2x text-primary"></i></a> <a href="https://chat.whatsapp.com/BwjhzBKvWDA9FpDSGctxlu"><i class="fab fa-whatsapp fa-2x mx-3 text-success"></i></a> <a href="https://www.youtube.com/channel/UCsuHF_CqyVjBYozRSG9sx-g"> <i class="fab fa-youtube fa-2x text-red"></i></a> </p> </div> <div class="spin-icon wow bounce slower infinite"> <a href="#footer"> <i href="#footer" class="text-white fa-2x fa fa-arrow-down "></i></a> </div> <div class="col-md-6 wow rollIn"> <div class="timer d-flex text-center justify-content-center"> <h3>Next Challenge In</h3> <div class="timer-row d-flex justify-content-center">  <div class="d-flex"><span class="domHour">00</span> <span>Hours</span></div> <div class="d-flex"><span class="domMin">00</span> <span>Minutes</span></div> <div class="d-flex"><span class="domSec">00</span> <span>Seconds</span></div> </div> </div> </div> </div> </div> </header>',
        // header foot
        '<div class="container bg-my-dgrey" id="headerFoot"> <div class="row" > <div class="col text-center text-mydark py-3 text-capitalize "> <h1 class="h2 text-mydark">40 days praise challenge <span id="domDay">day 1</span></h1> </div> </div> </div',

        // main
        '<main class="my-3"></main>',
        '<aside class="text-dark">Comments</aside>',
        // ads
        '<div class="container my-3"> <div class="row"> <div class="col p-2"> <ins class="adsbygoogle"style="display:block; text-align:center;"data-ad-layout="in-article"data-ad-format="fluid"data-ad-client="ca-pub-1126228242280434"data-ad-slot="3361606843"></ins> </div> </div> </div>'
    ],
    comment: '<div class="container text-left bg-mywhite"> <div class="row"> <div class="col-10 mx-auto my-3"><h1 class="h3 p-3">Comments</h1> <form method="POST" id="comment_form"> <div class="form-group"> <label for="comment_name">Your name</label> <input type="text" class="form-control" name="comment_name" id="comment_name" placeholder="Name"> </div> <div class="row"> <div class="col"> <div class="form-group"> <label for="comment_content">Your comment</label> <textarea name="comment_content" placeholder="your comment here......" class="form-control" id="comment_content"></textarea> </div> </div> <div class="col-12"> <div class="form-group"> <input type="submit" name="submit" id="submit" value="submit" class="btn btn-success"> </div> </div> </div> </form> <span id="comment_message"></span> <div id="display_comment"></div> </div> </div> </div>',
    footer: '<!-- footer --> <footer id="footer" class="bg-dark text-light text-center"> <div class="container-fluid"> <div class="row text-capitalize text-center" style="background: black;"> <div class="col-md-4 col-lg-5 py-4 d-flex justify-content-center align-items-center"> <h5 class="text-warning">This site was developed by <strong>Odunmilade Sogbuyi</strong> </h5> </div> <div class="col-md-4 col-lg-3 py-0 py-sm-4"> <a href="https://www.facebook.com/sogbuyiodunmilade"><i class="fab fa-facebook fa-2x text-light"></i></a> <a href="https://chat.whatsapp.com/BwjhzBKvWDA9FpDSGctxlu"><i class="fab fa-whatsapp fa-2x mx-3 text-white"></i></a> <a href="https://www.youtube.com/channel/UCsuHF_CqyVjBYozRSG9sx-g"> <i class="fab fa-youtube fa-2x text-white"></i></a> </div> <div class="col-md-4 my-4"> <a href="https://hoddy.netlify.com" class="btn btn-lg btn-outline-warning">Visit my site</a> </div> </div> </div> </footer>',
    banner: [
        '<div id="banner"> <h1 class="text-capitalize display-4 wow fadeIn brown">Praise Challenge <small>Season 2</small></h1> <p class="wow fadeIn text-capitalize"> Great physician pentecostal church of redeemer <small class="h6">GPPCR</small> </p> <p class="wow fadeIn delay-1s"> <a href="https://www.facebook.com/greatphysicianpentecostaloshodi/"> <i class="fab fa-facebook-f fa-2x text-primary"></i></a> <a href="https://chat.whatsapp.com/BwjhzBKvWDA9FpDSGctxlu"><i class="fab fa-whatsapp fa-2x mx-3 text-success"></i></a> <a href="https://www.youtube.com/channel/UCsuHF_CqyVjBYozRSG9sx-g"> <i class="fab fa-youtube fa-2x text-red"></i></a> </p> <div class="row mt-5 pb-5 wow fadeIn big-p mx-0"> <div class="col-md-6 mx-auto mt-5 pt-6"> <h1 class="coprate text-uppercase font-weight-bold">How to participate</h1> <p class="text-left mr-md-5 mr-3 ml-4"> You will praise the Lord with the Bible Passage that appears against the specific day.Each day starts by 12 am local time.Try to be the first person to read the Bible Passage and drop your comment as requested by the instructions page. <br> <button class="btn btn-outline-light btn-sm my-3 start-btn">Go to challenge</button> </p> </div> <div class="col-md-6 px-md-5"> <div class="timer time d-flex text-center justify-content-center"> <h3>Next Challenge In</h3> <div class="timer-row d-flex justify-content-center"> <div class="d-flex"><span class="domDays">00</span> <span>Days</span></div> <div class="d-flex"><span class="domHour">00</span> <span>Hours</span></div> <div class="d-flex"><span class="domMin">00</span> <span>Minutes</span></div> <div class="d-flex"><span class="domSec">00</span> <span>Seconds</span></div> </div> </div> </div> <div class="row mt-5 mx-0 "> <div class="col pl-lg-5"> <p class="mx-auto pr-4 pl-3 text-left"> <strong> Praise looks good on you.</strong> Be part of the believers that will Shake Heavens with Praise and Worship as the year runs to an end. Join our PRAISE CHALLENGE Season 2. Your Praise and Worship can perform a lot of wonders. Join us this season as we raise TEN MILLION Army to Praise His Majesty for forty days in Praise Challenge Season 2. </p> </div> <div class="col-12 col-md-6 my-5 "> <button class="btn btn-light btn-lg px-5 start-btn mx-auto">Go to challenge</button> </div> </div> </div> </div> <!-- end of banner -->'
    ],

    fontBox: '<div class=" font-box wow slideInUp" data-wow-delay="1s"> <div class="container bg-mywhite"> <div class="row justify-content-center text-center text-mydark py-2"> <div class="col-3"> <button id="font_increase" class="p-0 btn mx-3 btn-lg" title="increase font size">A <sup>&plus;</sup></button> </div> <div class="col-3"> <button id="font_reduce" class="btn p-0 mx-3 btn-lg" title="reduce font size">A <sup>&minus;</sup></button> </div> <div class="col-3"> <button id="dark_btn" class="btn mx-3 p-0 btn-lg" title="Dark Theme">&circledast;</button> </div> <div class="col-3"> <a href="#header-bg" id="btn-top" class="btn mx-3 p-0 btn-lg text-center" title="top">↑</a> </div> </div> </div> </div>',
    passage: '<div class="day container bg-mywhite py-5 my-3 px-lg-3 d-none" id= "%id%"> <div class="row  text-center"> <div class="col"> <h2 class="h4 c-green">%date% <small><strong>Day %day% </strong></small> </h2> <p class="text-mydark text-left flag "><span class="text-center"><i class="fa fa-flag fa-2x"></i></span> <span class=""><i class="fa fa-flag fa-2x"></i></span> <br> <em> %instruct% </em> </p> <h3 class="h5 coprate c-green">%passage%</h3> </div> </div> <div class="row px-md-5 justify-content-center"> <div class="col-12 col-lg-8 text-mydark text-left"> <p class="text-mydark text-left "> %content% </p>   <div class="fb-comments w-100" data-href="https://praisechallenge.netlify.com/#%id3%" data-width="100%" data-numposts="2"></div></div> </div> </div>',
    list: '<a href="#%id%"class="list-group-item list-group-item-action text-white bg-black">%list%</a>  '

}
function nightMd() {
    var isDark = false;
    dark_btn.addEventListener('click', () => {
        if (!isDark) {
            style2.innerHTML = ':root { --bg-mywhite: #000; --bg-my-dgrey: #111; --mydark: #fff} h3,h4,h5,.h4,.day span{color:yellow !important}';
            isDark = true
        } else {
            style2.innerHTML = '';
            isDark = false
        }
    })
}
var size = 1;
var styleDom = document.getElementById('style');

function increaseFont() {
    font_increase.addEventListener('click', () => {
        var style = ' .day *{ font-size: %size%em !important} ';
        size += 0.1
        style = style.replace('%size%', size);
        styleDom.innerHTML = style
    })
}
function reduceFont() {
    font_reduce.addEventListener('click', () => {
        var style = ' .day *{ font-size: %size%em !important} ';
        size -= 0.1
        style = style.replace('%size%', size);
        styleDom.innerHTML = style
    })
}
function countDown() {
    var domHour = Array.from(document.querySelectorAll('.domHour')),
        domDay = document.getElementById('domDay'),
        domMin = Array.from(document.querySelectorAll('.domMin')),
        domSec = Array.from(document.querySelectorAll('.domSec'));
    var date = new Date(),
        day = date.getDate() + 21,
        hour = 23 - date.getHours(),
        min = 59 - date.getMinutes(),
        sec = 59 - date.getSeconds();

    if (domDay) domDay.textContent = ` Day ${dec(day)} up next`;
    function dec(num) {
        if (num < 10) {
            return "0" + num;
        } else return num;
    }
    // checking if it is time for the challenge
    if (hour >= 23 && min >= 59 - 30) {
        day--
        hour = 0;
        min = 0;
        sec = 0;
        if (domDay) domDay.textContent = " Day " + day + " in progress";
    }
    function loop(unit, value) {
        unit.forEach(cur => {
            cur.textContent = dec(value)
        })
    }
    loop(domHour, hour);
    loop(domMin, min);
    loop(domSec, sec);
}
function getPosts(callback) {
    var req = new XMLHttpRequest();
    var posts = document.querySelector('main');
    posts.innerHTML = loader;
    req.onloadstart = () => {
        posts.classList.add("text-center");
    };
    req.onloadend = () => {
        var data = JSON.parse(req.responseText);
        posts.innerHTML = "";
        callback(data);
        posts.classList.remove("text-center");
    };
    req.open("GET", "json/pc.json", true);
    req.send(null);
}
function loadscript(src) {
    var script = document.createElement('script');
    script.src = src;
    script.setAttribute('crossorigin', "anonymous");
    script.setAttribute('async', true);
    script.setAttribute('defer', true);
    document.querySelector('html').append(script);
}
function loadAdsSrc(src) {
    var script = document.createElement('script');
    script.src = src;
    document.querySelector('html').append(script);
}
function createPost(data) {
    postDiv = document.querySelector("main");
    postDiv.innerHTML = loader;
    data.forEach((cur, i) => {
        var html = components.passage;
        html = html.replace("%id%", cur.id);
        html = html.replace("%id3%", cur.id);
        html = html.replace("%date%", cur.date);
        html = html.replace("%day%", cur.day);
        html = html.replace("%instruct%", cur.instruct);
        html = html.replace("%passage%", cur.passageEn);
        html = html.replace("%content%", cur.contentEn);
        // add to app
        postDiv.innerHTML += html;
        setInterval(() => {
            var loaderH = document.querySelector('#loader');
            loaderH.classList.add('d-none')

            if ((day - 1) >= cur.day)
                document.getElementById(cur.id).classList.remove('d-none')
        }, 1000);
        // list
        var list = components.list;
        list = list.replace('%list%', 'Day ' + cur.day);
        list = list.replace('%id%', cur.id);
        if ((day - 1) >= cur.day) {
            sideList.innerHTML += list
        } else {
            return
        }
    });

    // facebook
    loadscript('js/fb.js');
    // ads
    function src(val) {
        var script = document.createElement('script');
        script.innerHTML = val;
        document.querySelector('html').appendChild(script)
    }
    loadAdsSrc('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');

    src(' (adsbygoogle = window.adsbygoogle || []).push({});')


    btnYou.onclick = (e) => {
        e.preventDefault();
        postDiv.innerHTML = loader;
        data.forEach((cur, i) => {
            var html = components.passage;
            html = html.replace("%id%", cur.id);
            html = html.replace("%instruct%", cur.instruct);
            html = html.replace("%id3%", cur.id);
            html = html.replace("%date%", cur.date);
            html = html.replace("%day%", cur.day);
            html = html.replace("%passage%", cur.passageYou);
            html = html.replace("%content%", cur.contentYou);
            postDiv.innerHTML += html;
            setInterval(() => {
                if ((day - 1) >= cur.day) {
                    var loaderH = document.querySelector('#loader');
                    loaderH.classList.add('d-none');
                    document.getElementById(cur.id).classList.remove('d-none')
                }
            }, 1000);

        })


        loadscript('js/fb.js')
    }
    btnEng.onclick = (e) => {
        postDiv.innerHTML = loader;
        e.preventDefault();
        data.forEach((cur, i) => {
            var html = components.passage;
            html = html.replace("%id%", cur.id);
            html = html.replace("%id3%", cur.id);
            html = html.replace("%date%", cur.date);
            html = html.replace("%day%", cur.day);
            html = html.replace("%instruct%", cur.instruct);
            html = html.replace("%passage%", cur.passageEn);
            html = html.replace("%content%", cur.contentEn);
            postDiv.innerHTML += html;
            setInterval(() => {
                if ((day - 1) >= cur.day) {
                    var loaderH = document.querySelector('#loader');
                    loaderH.classList.add('d-none')
                    document.getElementById(cur.id).classList.remove('d-none')
                }
            }, 1000);
        })
        // ffacebook
        loadscript('js/fb.js')
    }

}
function slidectrl() {
    var x = false;
    var id = setInterval(() => {
        document.querySelector('.carousel-control-next').click()
    }, 6000)
    var hbg = document.querySelector('.hpg');
    console.log(hbg);

    hbg.addEventListener('click', (e) => {
        x = true;
        e.preventDefault()
        alert('frhdjsk')
        console.log('in')
        id.clearInterval()
    })

    if (x !== true) {
        // id
    } else (
        clearInterval(id)
    )
}

function render() {
    var wrapper = document.getElementById('body');
    wrapper.innerHTML = '';
    wrapper.scrollTop = 0;
    components.default.forEach(cur => {
        wrapper.innerHTML += cur
    });
    wrapper.innerHTML += components.tips;
    var skipBtn = Array.from(document.querySelectorAll('.skipBtn'));
    infoBtn.onclick = () => {
        tipcon.classList.add('d-flex')
        tipcon.classList.remove('d-none')
        tipcon.style = 'z-index: 1100'
        setTimeout(() => {
            tipcon.classList.remove('blind');
        }, 500)
    }
    if (day < 3) {
        tipcon.style = 'z-index: 1100'
        tipcon.classList.add('d-flex')
        tipcon.classList.remove('d-none')
        tipcon.classList.remove('blind');
    }
    skipBtn.forEach(cur => {
        cur.onclick = () => {
            tipcon.classList.add('blind')

            setTimeout(() => {
                tipcon.style = 'z-index: -1'
                tipcon.classList.remove('d-flex')
                tipcon.classList.add('d-none')
            }, 500);
        }
    })

    slidectrl()
    wrapper.innerHTML += components.footer
    wrapper.innerHTML += components.fontBox

    getPosts(createPost);

    $(document).ready(function () {
        new WOW().init();
    });

    // voice note
    (function () {

        if (window.heyoya == undefined) { window.heyoya = {}; window.heyoyaStructure = {}; window.heyoyaStructure.heyoyaRootUrl = { rootUrl: "" }; if (typeof Object.freeze == "function") { Object.freeze(window.heyoyaStructure); Object.freeze(window.heyoyaStructure.heyoyaRootUrl); } if (typeof Object.seal == "function") { Object.seal(window.heyoyaStructure); Object.seal(window.heyoyaStructure.heyoyaRootUrl); } (function () { var heyoyaSettings = window.heyoyaSettings = {}; heyoyaSettings.isStore = false; heyoyaSettings.rt = 30000; heyoyaSettings.width = 1000; heyoyaSettings.title = 'Complete your challenge'; heyoyaSettings.stit = 1; heyoyaSettings.sl = 'en'; heyoyaSettings.titleColorText = '#f3f3f3'; heyoyaSettings.titleColorBackground = '#104500'; heyoyaSettings.mainColor = ''; heyoyaSettings.logoPath = ''; heyoyaSettings.ppPath = ''; heyoyaSettings.affId = 'v8z6eKKQXi'; heyoyaSettings.sads = 0; heyoyaSettings.sadscid = 32767; heyoyaSettings.swdt = 0; heyoyaSettings.smachl = 1; heyoyaSettings.srachl = 1; heyoyaSettings.macht = 'Record your voice or type a comment'; heyoyaSettings.racht = ''; heyoyaSettings.ssacht = 0; heyoyaSettings.sacht = ''; heyoyaSettings.srsacht = 1; heyoyaSettings.rsacht = ''; heyoyaSettings.fonts = ''; heyoyaSettings.pec = 0; heyoyaSettings.wa = 0; heyoyaSettings.recordingIconsColor = '#38761d'; heyoyaSettings.linksColor = '#38761d'; heyoyaSettings.textColor = ''; heyoyaSettings.cardsColor = ''; heyoyaSettings.buttonsColor = '#104500'; heyoyaSettings.asi = '36194'; heyoyaSettings.sdwl = 0; var heyoya = document.createElement('script'); heyoya.type = 'text/javascript'; heyoya.async = true; heyoya.src = '//commerce-static.heyoya.com/b2b/b2b_loader.hey?affId=v8z6eKKQXi'; var script = document.getElementsByTagName('script')[0]; script.parentNode.insertBefore(heyoya, script); })(); }
    }())
    // end of voice note

    //  comments
    var commentSection = document.querySelector('aside');
    // commentSection.innerHTML = components.comment;
    // loadAdsSrc('js/comments.js')
    // buttons
    nightMd()
    increaseFont()
    reduceFont();
    var fontb = document.querySelector('.font-box');
    body.addEventListener('scroll', () => {
        var fb = fontb.getBoundingClientRect().top;
        var b = document.querySelector('footer').getBoundingClientRect().top;
        var header = document.querySelector('header').getBoundingClientRect().bottom;
        if (fb > b || fb < header) {
            fontb.classList.add('blind');
        } else {
            fontb.classList.remove('blind');
        }
    })
}
(function () {
    components.banner.forEach(cur => {
        body.innerHTML = cur + components.footer
    });
    var wow = new WOW({
        scrollContainer: '#body'
    }
    )
    wow.init()
    if (window.innerWidth > 1025) {
        // $("#wrapper").toggleClass("toggled");
    }
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    // app starter
    setInterval(() => {
        countDown();
        var starter = Array.from(document.querySelectorAll('.start-btn')),
            date_ = 0 - new Date().getDate();

        if (date_ < 10 && date_ > 0) {
            starter.forEach(cur => {
                cur.innerHTML = `Active in ${date_} days time`
            })
            document.querySelector('.domDays').innerHTML = date_;
            document.querySelector('.timer h3').innerHTML = 'First challenge in';

        } else if (date_ == 0) {
            starter.forEach(cur => {
                cur.innerHTML = 'Get Ready'
            })
            document.querySelector('.timer h3').innerHTML = 'First challenge in';
            document.querySelector('.domDays').parentElement.innerHTML = ''
        } else if (date_ < 0) {

            starter.forEach(cur => {
                cur.innerHTML = 'Go to challenge'
                cur.addEventListener('click', render);
            })
            if (hour >= 23 && min >= 59 - 30) {
                document.querySelector('.timer h3').innerHTML = " Day " + (day - 1) + " in progress";
            } else document.querySelector('.timer h3').innerHTML = 'Next challenge in';
            document.querySelector('.domDays').parentElement.innerHTML = ''

        }
    }, 1000)
    // scroll
    if (window.innerWidth < 1025) {
        var pos = 0;
        var pan = document.getElementById('language-pan');
        body.addEventListener('scroll', () => {
            if (body.scrollTop < pos) {
                pan.style = 'visibility: hidden;opacity:0';
            } else {
                pan.style = 'visibility: visible;opacity:1';
            }
            pos = body.scrollTop;
        })
    }
    // end of scroll
})()

