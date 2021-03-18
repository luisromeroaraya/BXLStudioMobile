$(document).ready(function(){
    // cookie pop up
    function toggleCookie(){
        cookies.classList.toggle("hidden");
    }
    function acceptCookie(){
        localStorage.setItem("cookieBannerDisplayed", "true");
        toggleCookie();
    }

    setTimeout(() => {
        if (!localStorage.getItem("cookieBannerDisplayed")) {
            toggleCookie();
        }
    }, 1000);
    acceptCookies.addEventListener("click", acceptCookie);
    closeCookies.addEventListener("click", toggleCookie);

    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["concert", "demo", "streaming", "album", "video"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["concert", "demo", "streaming", "album", "video"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        video: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 1,
                nav: false
            },
            1000:{
                items: 1,
                nav: false
            }
        }
    });

    // translations
    var language = {
        en: {
            menuHome: "Home",
            menuAbout: "About us",
            menuServices: "Services",
            menuMusic: "Music",
            menuVideos: "Videos",
            menuContact: "Contact",
            homeText1: "Mobile multitrack recording studio",
            homeText2: "BXL Studio Mobile",
            homeText3: "We can record your",
            homeText4: "About us",
            aboutText1: "About us",
            aboutText2: "The studio at you home!",
            aboutText3: "Record your",
            aboutText4: "Multitrack recording session (in and out of Brussels). Simultaneous recording of up to 16 tracks at the location of your convenience. Either we record everyone playing together or track by track. Ideal for developing your first demo pieces, record live sessions or stream your concert. At the end of the session you receive a pre-mix of the recording and all the separate audio tracks. Song mixing service has an additional cost.",
            aboutText5: "Our works"
        },
        es: {
            menuHome: "Inicio",
            menuAbout: "Acerca de",
            menuServices: "Servicios",
            menuMusic: "Música",
            menuVideos: "Videos",
            menuContact: "Contacto",
            homeText1: "Estudio móvil de grabación multipista",
            homeText2: "BXL Studio Mobile",
            homeText3: "Podemos grabar tu",
            homeText4: "Acerca de",
            aboutText1: "Acerca de nosotros",
            aboutText2: "El estudio en tu casa!",
            aboutText3: "Graba tu",
            aboutText4: "Sesión de grabación multipista (dentro y fuera de Bruselas). Grabación simultánea de hasta 16 pistas en el lugar de tu conveniencia. Posibilidad de grabar todos juntos o pista por pista. Ideal para desarrollar tus primeros demos, grabar tu sesión en vivo o streamear tu concierto. Al final de la sesión, recibirás una pre-mezcla de la grabación y todas las pistas de audio por separado. El servicio de mezcla por canción tiene un costo adicional.",
            aboutText5: "Nuestros trabajos"
        },
        fr: {
            menuHome: "Accueil",
            menuAbout: "À propos",
            menuServices: "Services",
            menuMusic: "Musique",
            menuVideos: "Vidéos",
            menuContact: "Contact",
            homeText1: "Studio mobile d'enregistrement multipiste",
            homeText2: "BXL Studio Mobile",
            homeText3: "On peut enregistrer ton",
            homeText4: "À propos",
            aboutText1: "À propos de nous",
            aboutText2: "Le studio chez toi!",
            aboutText3: "Enregistre ton",
            aboutText4: "Session d'enregistrement multipiste (dans et hors Bruxelles). Enregistrement simultané jusqu'à 16 pistes à l'endroit de ta convenance. Possibilité d'enregistrer tous ensemble ou piste par piste. Idéal pour l'élaboration de tes premières morceaux démo, enregistrer tes sessions en direct ou bien streamer ton concert. À la fin de la session tu reçois; tant un pré-mixage de l'enregistrement que toutes les pistes audio séparées. Le service de mixage par morceaux implique un coût supplémentaire.",
            aboutText5: "Nos travaux"
        },
        nl: {
            menuHome: "Startpagina",
            menuAbout: "Over ons",
            menuServices: "Diensten",
            menuMusic: "Muziek",
            menuVideos: "Video's",
            menuContact: "Contact",
            homeText1: "Mobiele multitrack opnamestudio",
            homeText2: "BXL Studio Mobile",
            homeText3: "We can record your",
            homeText4: "Over ons",
            aboutText1: "Over ons",
            aboutText2: "De studio bij jou thuis!",
            aboutText3: "Record your",
            aboutText4: "Multitrack opnamesessie (in en buiten Brussel). Gelijktijdig opnemen van maximaal 16 tracks in je vertrowde omgeving. Mogelijkheid om alles samen op te nemen of track per track. Ideaal voor het ontwikkelen van jouw eerste demo-stukken, neem uw livesessies op of uw concerten streamen. Aan het einde van de sessie ontvang je zowel een pre-mix van de opname als alle afzonderlijke audiotracks. Voor het mixen van nummers wordt een toeslag in rekening gebracht.",
            aboutText5: "Onze werken"
        }
    }
});