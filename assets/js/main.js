const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// Định nghĩa các biến để dùng trong hàm 
var musicBarImg = $('.music-bar-description__img');
var musicBarName = $('.music-bar-description-name');
var musicBarSinger = $('.music-bar-description-author');
var musicBarFullTime = $('.music-bar-full-time')
var audio = document.getElementById("main-audio")
var spotify = document.getElementById("app")
var headerCoreImg = $('.play-list-header-core__img')
var progress = $('#music-bar-progress__input');
var curTime = $('.music-bar-curren-time')
var volumeProgress = $('#music-bar-option__input')
var musicBarRandomButton = $('.music-bar-action__icon-random');
var musicBarRepeatButton = $('.music-bar-action__icon-repeat');
var nextButton = $('.music-bar-action__icon-next');
var preButton = $('.music-bar-action__icon-pre');
var playList = $('.play-list-main-music')
// Biến trên mobile
var musicBarNameMobile = $('.play-bar-mobile-infor-name')
var musicBarImgMobile = $('.play-bar-mobile-infor__img')
var musicBarSingerMobile = $('.play-bar-mobile-infor-author')
var playButtonMobile = $('.play-bar-mobile-action-play__icon--play')
var pauseButtonMobile = $('.play-bar-mobile-action-play__icon--pause')
var mobilePlayButton = $('.mobile-overlay-play-action__icon-play')
var mobilePauseButton = $('.mobile-overlay-play-action__icon-pause')
var nextButtonMobile = $('.mobile-overlay-play-action__icon-next')
var preButtonMobile = $('.mobile-overlay-play-action__icon-pre')
var progressMobile = $('#music-bar-progress__input-mobile')
var musicBarRandomButtonMobile = $('.mobile-overlay-play-action__icon-random')
var musicBarRepeatButtonMobile = $('.mobile-overlay-play-action__icon-repeat')
var overlayMobileImg = $('.mobile-overlay-play-img');
var overlayMobileName = $('.mobile-overlay-play-content-infor-name');
var overlayMobileSinger = $('.mobile-overlay-play-content-infor-author');
var curTimeMobile = $('.mobile-overlay-play-curtime')
var overlayFtimeMobile = $('.mobile-overlay-play-ftime')
var progressMiniMobile = $('.play-bar-mobile__input')
var id = 1;
const app = {
    currentIndex: 0,
    songs: [
        {
            name: "Chuyện chàng trông xe",
            author: "MCK",
            img: "./assets/img/Chuyện chàng trông xe.jpg",
            path: "./assets/audio/Chuyện chàng trông xe - MCK.mp3",
            album: "Nothing",
            date: "27 thg 4, 2023",
            time: "5:37"
        },
        {
            name: "Querry",
            author: "QNT x TRUNG TRẦN ft RPT MCK",
            img: "./assets/img/Querry.jpg",
            path: "./assets/audio/QUERRY.mp3",
            album: "Nothing",
            date: "27 thg 4, 2023",
            time: "3:49"
        },
        {
            name: "Như anh đã thấy em",
            author: "PhucXp ft. Freak D",
            img: "./assets/img/Như anh đã thấy em.jpeg",
            path: "./assets/audio/Như anh đã thấy em.mp3",
            album: "Nothing",
            date: "29 thg 4, 2023",
            time: "5:36"
        },
        {
            name: "Hẹn em ở lần yêu thứ 2",
            author: "Nguyenn x Đặng Tuấn Vũ x Freak D",
            img: "./assets/img/Hẹn em ở lần yêu thứ 2.jpg",
            path: "./assets/audio/Hẹn em ở lần yêu thứ 2.mp3",
            album: "Nothing",
            date: "9 thg 5, 2023",
            time: "8:17"
        },
        {
            name: "Without me",
            author: "Eminem",
            img: "./assets/img/Without me.jpg",
            path: "./assets/audio/Without Me.mp3",
            album: "Nothing",
            date: "6 thg 5, 2023",
            time: "4:58"
        }
    ],
    renderSong: function () {
        const htmls = this.songs.map(function (song, index) {
            return ` <li class="play-list-main-music-item" ${index === app.currentIndex ? 'actived' : ''} index = "${id - 1}">
                                        <div class="play-list-main-music-order">${id++}</div>
                                        <i class="play-list-main-music__icon fa-solid fa-play"></i>
                                        <div class="play-list-main-music-description">
                                            <img class="play-list-main-music-name__img" src="${song.img}"
                                                alt="">
                                            <div class="play-list-main-music-link">
                                                <a href="#/" class="play-list-main-music-name">${song.name}</a>
                                                <a href="#/" class="play-list-main-music-author">${song.author}</a>
                                            </div>
                                        </div>
                                        <a href="#/" class="play-list-main-music-album">
                                            <span>${song.album}</span>
                                        </a>
                                        <div class="play-list-main-music-date">${song.date}</div>
                                        <div class="play-list-main-music-taa">
                                            <i class="play-list-main-music-favourite__icon fa-regular fa-heart"></i>
                                            <div class="play-list-main-music-time">${song.time}</div>
                                            <i class="play-list-main-music-option__icon fa-solid fa-ellipsis"></i>
                                        </div>
                                    </li> `
        })
        $(".play-list-main-music").innerHTML = htmls.join()
    },
    handleEvent: function () {
        const contentPlayButton = $('.play-list-content-play-icon');
        const contentPauseButton = $('.play-list-content-pause-icon');
        const musicBarPlayButton = $('.music-bar-action__icon-play');
        const musicBarPauseButton = $('.music-bar-action__icon-pause');

        // Xử lý tạm dừng, tiếp tục
        contentPauseButton.onclick = function () {
            audio.pause();
            spotify.classList.toggle("playing")
        }
        contentPlayButton.onclick = function () {
            audio.play();
            spotify.classList.toggle("playing")
        }

        musicBarPlayButton.onclick = function () {
            audio.play();
            spotify.classList.toggle("playing")
        } // pc

        musicBarPauseButton.onclick = function () {
            audio.pause();
            spotify.classList.toggle("playing")
        } // pc

        // Bài tiếp theo, bài trước
        nextButton.onclick = function () {
            app.nextSong();
            app.loadCurrentSong();
            audio.play();
            spotify.classList.add('playing');
        }
        preButton.onclick = function () {
            app.preSong();
            app.loadCurrentSong();
            audio.play();
            spotify.classList.add('playing');
        }

        // Thanh nhạc chạy
        audio.ontimeupdate = function (e) {
            if (audio.duration) {
                progressMobile.value = audio.currentTime / audio.duration * 100;
                progress.value = audio.currentTime / audio.duration * 100;
                progressMiniMobile.value = audio.currentTime / audio.duration * 100;
                let minute = Math.floor(audio.currentTime / 60)
                let second = Math.floor(audio.currentTime)
                minute += ':'
                if (second < 10) {
                    second = '0' + second;
                }
                if (second >= 60) {
                    second = second - 60 * Number(minute.slice(0, -1));
                    if (second < 10) {
                        second = '0' + second;
                    }
                }
                curTime.innerHTML = minute + second;
                curTimeMobile.innerHTML = minute + second;

                // Thanh màu xanh chạy khi nhạc chạy trên pc
                let target = progress;
                let min = target.min
                let max = target.max
                let val = target.value
                var result1 = (val - min) * 100 / (max - min) + '% 100%'
                target.style.backgroundSize = result1

                // Thanh màu xanh chạy khi nhạc chạy trên mobile
                let targetm = progressMobile;
                let minm = targetm.min
                let maxm = targetm.max
                let valm = targetm.value
                var result2 = (valm - minm) * 100 / (maxm - minm) + '% 100%'
                targetm.style.backgroundSize = result2

                let targetmini = progressMiniMobile;
                let minmini = targetmini.min
                let maxmini = targetmini.max
                let valmini= targetmini.value
                var result3 = (valmini - minmini) * 100 / (maxmini- minmini) + '% 100%'
                targetmini.style.backgroundSize = result3

            }
        }


        // Tua nhạc
        progress.oninput = function (e) {
            const seekTime = e.target.value / 100 * audio.duration;
            audio.currentTime = seekTime
            app.customInput(e);
        }

        // Add class active 2 button random and repeat


        musicBarRandomButton.onclick = function () {
            musicBarRandomButtonMobile.classList.toggle('active')
            musicBarRepeatButtonMobile.classList.remove('active')
            musicBarRandomButton.classList.toggle('active')
            musicBarRepeatButton.classList.remove('active')
        }
        musicBarRepeatButton.onclick = function () {
            musicBarRepeatButtonMobile.classList.toggle('active')
            musicBarRandomButtonMobile.classList.remove('active')
            musicBarRepeatButton.classList.toggle('active')
            musicBarRandomButton.classList.remove('active')
        }

        //Kết thúc bài nhạc
        audio.onended = function () {
            if (musicBarRepeatButton.classList.contains('active')) {
                app.loadCurrentSong();
                audio.play();
                spotify.classList.add('playing');
            }
            else if (musicBarRandomButton.classList.contains('active')) {
                nextButton.click();
            }
            else {
                nextButton.click();
            }

        }

        // volume
        volumeProgress.oninput = function (e) {
            const currentvolume = e.target.value
            audio.volume = currentvolume / 100;
        }


        // Click vào từng bài nhạc cho nó chạy
        playList.onclick = function (e) {
            const songNode = e.target.closest('.play-list-main-music-item')
            if (e.target !== songNode) {
                
            }
            else {
                const targetImg = e.target.querySelector(".play-list-main-music-name__img").getAttribute("src");
                const targetName = e.target.querySelector(".play-list-main-music-name").innerHTML;
                const targetSinger = e.target.querySelector(".play-list-main-music-author").innerHTML;
                const targetTime = e.target.querySelector(".play-list-main-music-time").innerHTML;
                var songPath;
                var songActive;
                var songItem = $$('.play-list-main-music-item')
                // Lấy ra bài hát đang phát
                songItem.forEach(function (song) {
                    if (song.classList.contains('actived')) {
                        songActive = song
                    }
                })
                // Check xem bài hát nhấn vào có phải là bài hát đang chạy không
                if (songActive !== e.target) {
                    // Remove class actived trước khi add
                    app.songs.forEach(function (song, index) {
                        songItem[index].closest(".play-list-main-music-item").classList.remove("actived");
                    })
                    // Add class actived vào nhạc đang chạy
                    app.songs.forEach(function (song, index) {
                        const songIndex = songItem[index].getAttribute("index");
                        if (Number(songIndex) === Number(e.target.getAttribute("index"))) {
                            songItem[index].closest(".play-list-main-music-item").classList.add("actived");
                        }
                    })

                    // Lấy path
                    app.songs.forEach(function (song, index) {
                        const songIndex = songItem[index].getAttribute("index");
                        if (Number(songIndex) === Number(e.target.getAttribute("index"))) {
                            songPath = song.path
                            app.currentIndex = Number(songIndex)
                        }
                    })
                    // Pc
                    musicBarImg.src = targetImg
                    musicBarName.innerHTML = targetName
                    musicBarSinger.innerHTML = targetSinger
                    musicBarFullTime.innerHTML = targetTime
                    audio.src = songPath;
                    headerCoreImg.src = targetImg



                    //Mobile
                    musicBarNameMobile.innerHTML = targetName
                    musicBarImgMobile.src = targetImg
                    musicBarSingerMobile.innerHTML = targetSinger
                    overlayMobileImg.src = targetImg
                    overlayMobileName.innerHTML = targetName
                    overlayMobileSinger.innerHTML = targetSinger
                    overlayFtimeMobile.innerHTML = targetTime
                    audio.play();
                    spotify.classList.add('playing')

                }
            }
        }

        var mediaQuery = window.matchMedia("(max-width: 700px)")
        if (mediaQuery.matches) {
            playList.onclick = function (e) {
                const songNode = e.target.closest('.play-list-main-music-item')
                const targetImg = songNode.querySelector(".play-list-main-music-name__img").getAttribute("src");
                const targetName = songNode.querySelector(".play-list-main-music-name").innerHTML;
                const targetSinger = songNode.querySelector(".play-list-main-music-author").innerHTML;
                const targetTime = songNode.querySelector(".play-list-main-music-time").innerHTML;
                const actionNode = songNode.querySelector('.play-list-main-music-taa')
                var songPath;
                var songActive
                // Check xem khi nào nhấn vào phần tim và thời gian thì không chuyển bài, còn nhấn vào tên thì chuyển bài 
                if (e.target.closest('.play-list-main-music-taa') !== actionNode){
                    // Remove class actived trước khi add
                    var songItem = $$('.play-list-main-music-item')
                    songItem.forEach(function (song) {
                        if (song.classList.contains('actived')) {
                            songActive = song
                        }
                    })
                    if (e.target.closest(".play-list-main-music-item") !== songActive) {
                        app.songs.forEach(function (song, index) {
                            songItem[index].closest(".play-list-main-music-item").classList.remove("actived");
                        })
                        // Add class actived vào nhạc đang chạy
                        app.songs.forEach(function (song, index) {
                            const songIndex = songItem[index].getAttribute("index");
                            if (Number(songIndex) === Number(songNode.getAttribute("index"))) {
                                songItem[index].closest(".play-list-main-music-item").classList.add("actived");
                            }
                        })
    
                        // Lấy path
                        app.songs.forEach(function (song, index) {
                            const songIndex = songItem[index].getAttribute("index");
                            if (Number(songIndex) === Number(songNode.getAttribute("index"))) {
                                songPath = song.path
                                app.currentIndex = Number(songIndex)
                            }
                        })
    
                        // Pc
                        musicBarImg.src = targetImg
                        musicBarName.innerHTML = targetName
                        musicBarSinger.innerHTML = targetSinger
                        musicBarFullTime.innerHTML = targetTime
                        audio.src = songPath;
                        headerCoreImg.src = targetImg
    
    
                        //Mobile
                        musicBarNameMobile.innerHTML = targetName
                        musicBarImgMobile.src = targetImg
                        musicBarSingerMobile.innerHTML = targetSinger
                        overlayMobileImg.src = targetImg
                        overlayMobileName.innerHTML = targetName
                        overlayMobileSinger.innerHTML = targetSinger
                        overlayFtimeMobile.innerHTML = targetTime
                        audio.play();
                        spotify.classList.add('playing')
                    };
                }
            }
        }


    },
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex]
            }
        })
    },
    loadCurrentSong: function () {
        // Remove class actived trước khi add
        var songItem = $$('.play-list-main-music-item')
        var songActive

        app.songs.forEach(function (song, index) {
            songItem[index].closest(".play-list-main-music-item").classList.remove("actived");
        })
        // Add class actived vào nhạc đang chạy
        app.songs.forEach(function (song, index) {
            const songIndex = songItem[index].getAttribute("index");
            if (Number(songIndex) === app.currentIndex) {
                songItem[index].closest(".play-list-main-music-item").classList.add("actived");
            }
        })
        // Pc
        audio.src = this.currentSong.path;
        musicBarImg.src = this.currentSong.img
        musicBarName.innerHTML = this.currentSong.name
        musicBarSinger.innerHTML = this.currentSong.author
        musicBarFullTime.innerHTML = this.currentSong.time
        headerCoreImg.src = this.currentSong.img


        //Mobile
        musicBarNameMobile.innerHTML = this.currentSong.name
        musicBarImgMobile.src = this.currentSong.img
        musicBarSingerMobile.innerHTML = this.currentSong.author
        overlayMobileImg.src = app.currentSong.img
        overlayMobileName.innerHTML = app.currentSong.name
        overlayMobileSinger.innerHTML = app.currentSong.author
        overlayFtimeMobile.innerHTML = this.currentSong.time
    },
    nextSong: function () {
        let newIndex;
        if (musicBarRandomButton.classList.contains('active')) {
            do {
                newIndex = Math.floor(Math.random() * (app.songs.length - 1 + 1));
            } while (newIndex === app.currentIndex);
            app.currentIndex = newIndex;
            audio.play();
            app.loadCurrentSong();
        }
        else {
            if (app.currentIndex === app.songs.length - 1) {
                app.currentIndex = 0;
            }
            else {
                app.currentIndex++;
            }
        }
    },
    preSong: function () {
        let newIndex;
        if (musicBarRandomButton.classList.contains('active')) {
            do {
                newIndex = Math.floor(Math.random() * (app.songs.length - 1 + 1));
            } while (newIndex === app.currentIndex);
            app.currentIndex = newIndex;
            audio.play();
            app.loadCurrentSong();
        }
        else {
            if (this.currentIndex === 0) {
                this.currentIndex = this.songs.length - 1;
            }
            else {
                this.currentIndex--;
            }
        }
    },
    main: function () {
        this.defineProperties();
        this.renderSong();
        this.loadCurrentSong();
        this.handleEvent()
        this.mobileHandleEvent();
    },
    mobileHandleEvent: function () {

        playButtonMobile.onclick = function () {
            audio.play();
            spotify.classList.add('playing');
        }
        pauseButtonMobile.onclick = function () {
            audio.pause();
            spotify.classList.remove('playing');
        }

        mobilePlayButton.onclick = function () {
            audio.play();
            spotify.classList.toggle("playing")
        }
        mobilePauseButton.onclick = function () {
            audio.pause();
            spotify.classList.remove("playing")
        }

        nextButtonMobile.onclick = function () {
            app.nextSong();
            app.loadCurrentSong();
            audio.play();
            spotify.classList.add('playing');
        }
        preButtonMobile.onclick = function () {
            app.preSong();
            app.loadCurrentSong();
            audio.play();
            spotify.classList.add('playing');
        }

        // Tua nhạc
        progressMobile.oninput = function (e) {
            const seekTime = e.target.value / 100 * audio.duration;
            audio.currentTime = seekTime
            app.customInput(e);
        }

        // Add class active 2 button random and repeat
        musicBarRandomButtonMobile.onclick = function () {
            musicBarRandomButton.classList.toggle('active')
            musicBarRandomButtonMobile.classList.toggle('active')
            musicBarRepeatButtonMobile.classList.remove('active')
            musicBarRepeatButton.classList.remove('active')
        }
        musicBarRepeatButtonMobile.onclick = function () {
            musicBarRepeatButton.classList.toggle('active')
            musicBarRepeatButtonMobile.classList.toggle('active')
            musicBarRandomButtonMobile.classList.remove('active')
            musicBarRandomButton.classList.remove('active')
        }

        //Kết thúc bài nhạc
        // audio.onended = function () {
        //     nextButton.click();
        // }

        // Close overlay
        const closeOverlayButton = $('.mobile-overlay-play-header-close__icon');
        const overlayMobile = $('.mobile-overlay-play');
        closeOverlayButton.onclick = function () {
            overlayMobile.style.display = 'none';
        }

        // Open overlay
        const OpenOverlay = $('.play-bar-mobile-wrapper');
        const playBarMobileInfor = $(".play-bar-mobile-infor")
        OpenOverlay.onclick = function (e) {
            if (!e.target.closest(".play-bar-mobile-action")) {
                overlayMobile.style.display = 'flex';
            }
        }
    },
    customInput: function (e) {
        let target = e.target;
        let min = target.min
        let max = target.max
        let val = target.value
        var result = (val - min) * 100 / (max - min) + '% 100%'
        target.style.backgroundSize = result
    }
}

app.main();
