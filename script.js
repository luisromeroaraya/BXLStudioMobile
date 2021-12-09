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
    
    $('.sandwich').click(function(){
        document.getElementsByClassName("lang-menu")[0].classList.toggle("hidden"); 
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
            homeSubTitle: "Mobile multitrack recording studio",
            homeTitle: "BXL Studio Mobile",
            homeTagline: "We can record your <span class='typing'></span>",
            homeLink: "About us",
            aboutTitle: "About us",
            aboutSubTitle: "The studio at you home!",
            aboutTagline: "Record your <span class='typing-2'></span>",
            aboutText: "Multitrack recording session (in and out of Brussels). Simultaneous recording of up to 16 tracks at the location of your choice. Either we record everyone playing together or track by track. Ideal for developing your first demo pieces, record live sessions or stream your concert. At the end of the session you receive a pre-mix of the recording and all the separate audio tracks. Song mixing service has an additional cost.",
            aboutLink: "Our works",
            servicesTitle: "Our services",
            servicesStudioTitle: "Mobile Studio",
            servicesStudioText: "Bring the studio to your home or wherever you want.",
            servicesLiveTitle: "Live Recording",
            servicesLiveText: "Complement the production of your live concert videos.",
            servicesStreamingTitle: "Streaming",
            servicesStreamingText: "Add professional audio quality to your live concert streamings.",
            musicTitle: "Music",
            videoTitle: "Videos",
            contactTitle: "Contact",
            contactBilling: "Billing via SMARTBE",
            contactSubTitle: "Contact us for a detailed quote adapted to your project."
        },
        es: {
            menuHome: "Inicio",
            menuAbout: "Acerca de",
            menuServices: "Servicios",
            menuMusic: "Música",
            menuVideos: "Videos",
            menuContact: "Contacto",
            homeSubTitle: "Estudio móvil de grabación multipista",
            homeTitle: "BXL Studio Mobile",
            homeTagline: "Podemos grabar tu <span class='typing'></span>",
            homeLink: "Acerca de",
            aboutTitle: "Acerca de nosotros",
            aboutSubTitle: "El estudio en tu casa!",
            aboutTagline: "Graba tu <span class='typing-2'></span>",
            aboutText: "Sesión de grabación multipista (dentro y fuera de Bruselas). Grabación simultánea de hasta 16 pistas en el lugar de tu elección. Posibilidad de grabar todos juntos o pista por pista. Ideal para desarrollar tus primeros demos, grabar tu sesión en vivo o streamear tu concierto. Al final de la sesión, recibirás una pre-mezcla de la grabación y todas las pistas de audio por separado. El servicio de mezcla por canción tiene un costo adicional.",
            aboutLink: "Nuestros trabajos",
            servicesTitle: "Nuestros servicios",
            servicesStudioTitle: "Estudio Móvil",
            servicesStudioText: "Trae el estudio a tu casa o donde tú quieras.",
            servicesLiveTitle: "Grabación en Vivo",
            servicesLiveText: "Complementa la producción de tus videos de conciertos en vivo.",
            servicesStreamingTitle: "Streaming",
            servicesStreamingText: "Agrega calidad de audio profesional a tus streamings de conciertos en vivo.",
            musicTitle: "Música",
            videoTitle: "Videos",
            contactTitle: "Contact",
            contactBilling: "Facturación via SMARTBE",
            contactSubTitle: "Contáctanos para un presupuesto detallado y adaptado a tu proyecto."
        },
        fr: {
            menuHome: "Accueil",
            menuAbout: "À propos",
            menuServices: "Services",
            menuMusic: "Musique",
            menuVideos: "Vidéos",
            menuContact: "Contact",
            homeSubTitle: "Studio mobile d'enregistrement multipiste",
            homeTitle: "BXL Studio Mobile",
            homeTagline: "On peut enregistrer ton <span class='typing'></span>",
            homeLink: "À propos",
            aboutTitle: "À propos de nous",
            aboutSubTitle: "Le studio chez toi!",
            aboutTagline: "Enregistre ton <span class='typing-2'></span>",
            aboutText: "Session d'enregistrement multipiste (dans et hors Bruxelles). Enregistrement simultané jusqu'à 16 pistes à l'endroit de ton choix. Possibilité d'enregistrer tous ensemble ou piste par piste. Idéal pour l'élaboration de tes premières morceaux démo, enregistrer tes sessions en direct ou bien streamer ton concert. À la fin de la session tu reçois; tant un pré-mixage de l'enregistrement que toutes les pistes audio séparées. Le service de mixage par morceaux implique un coût supplémentaire.",
            aboutLink: "Nos travaux",
            servicesTitle: "Nos services",
            servicesStudioTitle: "Studio Mobile",
            servicesStudioText: "Apporte le studio chez toi ou où tu le souhaite",
            servicesLiveTitle: "En direct",
            servicesLiveText: "Complémente la production de tes vidéos de concerts en direct.",
            servicesStreamingTitle: "Streaming",
            servicesStreamingText: "Ajoute une qualité audio professionnelle à la diffusion de tes concerts en direct.",
            musicTitle: "Musique",
            videoTitle: "Vidéos",
            contactTitle: "Contact",
            contactBilling: "Facturation via SMARTBE",
            contactSubTitle: "Contacte-nous pour un devis détaillé et adapté de ton projet."
        },
        nl: {
            menuHome: "Startpagina",
            menuAbout: "Over ons",
            menuServices: "Diensten",
            menuMusic: "Muziek",
            menuVideos: "Video's",
            menuContact: "Contact",
            homeSubTitle: "Mobiele multitrack opnamestudio",
            homeTitle: "BXL Studio Mobile",
            homeTagline: "We kunnen jouw <span class='typing'></span> opnemen",
            homeLink: "Over ons",
            aboutTitle: "Over ons",
            aboutSubTitle: "De studio bij jou thuis!",
            aboutTagline: "Neem jouw <span class='typing-2'></span> op",
            aboutText: "Multitrack opnamesessie (in en buiten Brussel). Gelijktijdig opnemen van maximaal 16 tracks in de plek van jouw keuze. Mogelijkheid om alles samen op te nemen of track per track. Ideaal voor het ontwikkelen van jouw eerste demo-stukken, neem uw livesessies op of uw concerten streamen. Aan het einde van de sessie ontvang je zowel een pre-mix van de opname als alle individuele audiotracks. Voor het mixen van nummers wordt een toeslag in rekening gebracht.",
            aboutLink: "Onze werken",
            servicesTitle: "Onze diensten",
            servicesStudioTitle: "Mobilestudio",
            servicesStudioText: "Breng de studio bij je thuis of waar je maar wilt.",
            servicesLiveTitle: "Live Recording",
            servicesLiveText: "Complementeer de productie van jouw live concertvideo's.",
            servicesStreamingTitle: "Streaming",
            servicesStreamingText: "Voeg professionele audiokwaliteit toe aan uw liveconcertstreaming's.",
            musicTitle: "Muziek",
            videoTitle: "Video's",
            contactTitle: "Contact",
            contactBilling: "Billing via SMARTBE",
            contactSubTitle: "Neem contact met ons op voor een gedetailleerde offerte aangepast aan jouw project."
        }
    };

    function changeLanguage() {
        if (this.innerHTML == "EN") {
            var array = Object.entries(language.en);
            //document.getElementById("selected-lang").innerHTML = "<img src='https://www.countryflags.io/gb/flat/32.png' alt='EN'>EN";
            // document.getElementById("selected-lang").innerHTML = "<img src='https://flagcdn.com/gb.svg' width='32' alt='EN'></img>EN";
            document.getElementById("selected-lang").innerHTML = "<img src='images/gb.svg' height='16' alt='EN'></img>EN";
        }
        if (this.innerHTML == "ES") {
            var array = Object.entries(language.es);
            //document.getElementById("selected-lang").innerHTML = "<img src='https://www.countryflags.io/es/flat/32.png' alt='ES'>ES";
            // document.getElementById("selected-lang").innerHTML = "<img src='https://flagcdn.com/es.svg' width='32' alt='ES'></img>ES";
            document.getElementById("selected-lang").innerHTML = "<img src='images/es.svg' height='16' alt='ES'></img>ES";
        }
        if (this.innerHTML == "FR") {
            var array = Object.entries(language.fr);
            //document.getElementById("selected-lang").innerHTML = "<img src='https://www.countryflags.io/fr/flat/32.png' alt='FR'>FR";
            // document.getElementById("selected-lang").innerHTML = "<img src='https://flagcdn.com/fr.svg' width='32' alt='FR'></img>FR";
            document.getElementById("selected-lang").innerHTML = "<img src='images/fr.svg' height='16' alt='FR'></img>FR";
        }
        if (this.innerHTML == "NL") {
            var array = Object.entries(language.nl);
            //document.getElementById("selected-lang").innerHTML = "<img src='https://www.countryflags.io/nl/flat/32.png' alt='NL'>NL";
            // document.getElementById("selected-lang").innerHTML = "<img src='https://flagcdn.com/nl.svg' width='32' alt='NL'></img>NL";
            document.getElementById("selected-lang").innerHTML = "<img src='images/nl.svg' height='16' alt='NL'></img>NL";
            
        }
        array.forEach(function(value) {
            var id = document.getElementById(value[0]);
            id.innerHTML = value[1];
        });
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
        toggleLangMenu()
    }

    function toggleLangMenu(){
        document.getElementById("lang-menu").classList.toggle("hidden");
    }

    document.getElementById("selected-lang").addEventListener("click", toggleLangMenu);
    buttonEN.addEventListener("click", changeLanguage);
    buttonES.addEventListener("click", changeLanguage);
    buttonFR.addEventListener("click", changeLanguage);
    buttonNL.addEventListener("click", changeLanguage);

});