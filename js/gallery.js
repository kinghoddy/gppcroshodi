var main = document.querySelector('.main');
function singlePage() {

    var loader = `<img src="../img/load.png" alt="loader" class="loader">`,
        fragCache = {};
    // setting inner html on page load
    navigate();
    // setting innerHTML on url change
    window.addEventListener('hashchange', navigate)


    function fetchData(path, callBack) {
        // create new ajax request
        var request = new XMLHttpRequest();
        request.onload = () => {
            callBack(request.responseText);
        }
        request.open('GET', path)
        request.send(null)
    }
    function getContent(fragmentId, callBack) {
        // if page has been fetched before
        if (fragCache[fragmentId]) {
            callBack(fragCache[fragmentId])
        } else {
            fetchData(`frag/${fragmentId}frag.html`, (content) => {
                fragCache[fragmentId] = content;
                callBack(content)
            })
        }
    }
    function setActiveClass(fragmentId) {
        var links = document.querySelectorAll('.header-links'), pageName;
        Array.from(links).forEach(a => {
            pageName = a.getAttribute('href').substr(1);
            console.log(pageName)
            if (pageName == fragmentId) {
                a.parentElement.classList.add('active')
            } else {
                a.parentElement.classList.remove('active');
            }
        })
    }
    function playBack() {
        var dom = document.getElementById('vidMain'), dom = document.getElementById('videoDOM'),
            videos = Array.from(document.querySelectorAll('.video-list video'));
        videos.forEach(cur => {
            console.log(cur);
            cur.addEventListener('click', () => {
                alert('hi')
                dom.classList.remove('d-none')
                vidMain.src = cur.src
            })
        });

        // if (location.hash == '#photo') {
        //     dom.classList.add('d-none')
        // }
    }
    function navigate() {
        var fragmentId = location.hash.substr(1);
        main.innerHTML = loader;
        if (!location.hash) {
            location.hash = '#photo'
        }
        if (fragmentId) {
            getContent(fragmentId, content => {
                main.innerHTML = content;
                $(".parent-container").magnificPopup({
                    delegate: "a",
                    type: "image",
                    // removalDelay: 3000,
                    mainClass: 'mfp-fade',
                    gallery: {
                        enabled: true,
                        preload: [5, 5]
                    }
                });
                playBack();
            })

        }
        setActiveClass(fragmentId);
    }
}


(function init() {
    var nav = document.querySelector('nav');
    nav.addEventListener('click', () => {
        nav.children[1].classList.toggle('blind')
    })

    window.addEventListener('scroll', () => {
        var category = document.querySelector('.header-top'),
            db = document.documentElement;
        if (db.scrollTop > 100) category.style = `background: #111;
                                                       top:0;
                                                       padding:0`;
        else category.style = '';
    })
    singlePage()
})()