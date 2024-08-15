document.addEventListener('DOMContentLoaded', function() {
    var musica = document.getElementById('musica-campanha');
    var playButton = document.createElement('button');

    playButton.textContent = 'Clique e ouça a música de campanha';
    playButton.style.display = 'none'; // Inicialmente oculto

    document.body.appendChild(playButton);

    musica.volume = 0.5; // Ajuste o volume conforme necessário

    // Tenta tocar a música automaticamente
    musica.play().then(function() {
        console.log("Música tocando automaticamente");
    }).catch(function(error) {
        console.log("Reprodução automática falhou:", error);
        playButton.style.display = 'block'; // Mostra o botão para reprodução manual
    });

    // Reprodução manual
    playButton.addEventListener('click', function() {
        musica.play();
        playButton.style.display = 'none'; // Oculta o botão após tocar
    });

    // Inicializa o Slick Carousel com autoplay
    $('.gallery-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true, // Ativa o autoplay
        autoplaySpeed: 2000, // Avança a cada 2 segundos
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Expansão do vídeo para tela cheia
    var videoItems = document.querySelectorAll('.video-item');
    
    videoItems.forEach(function(video) {
        video.addEventListener('click', function() {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) { // Firefox
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) { // Chrome, Safari, Opera
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) { // IE/Edge
                video.msRequestFullscreen();
            }
        });
    });
    
});

document.addEventListener('DOMContentLoaded', function() {
    // Cria o elemento pop-up
    var popup = document.createElement('div');
    popup.id = 'popup';
    popup.innerHTML = `
        <div class="popup-content">
            <span id="close-popup" class="close-button">&times;</span>
            <p>Clique aqui e venha conhecer o <strong>PLANO DE GOVERNO</strong>, do candidato a vereador <strong>VAGNER RAMOS</strong>!</p>
            <button id="popup-button">Saiba mais</button>
        </div>
    `;

    // Adiciona o pop-up ao corpo do documento
    document.body.appendChild(popup);

    // Função para abrir o pop-up após 3 segundos
    setTimeout(function() {
        popup.style.display = 'block';
    }, 3000);

    // Evento de clique no botão "Saiba mais"
    document.getElementById('popup-button').addEventListener('click', function() {
        window.open('planos-de-governo.html', '_blank'); // Substitua pela URL real
    });

    // Evento de clique no botão "X" para fechar o pop-up
    document.getElementById('close-popup').addEventListener('click', function() {
        popup.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Data alvo para a contagem regressiva
    var targetDate = new Date('2024-10-06T00:00:00').getTime();

    // Função para atualizar a contagem regressiva
    function updateCountdown() {
        var now = new Date().getTime();
        var distance = targetDate - now;

        // Calculo de dias, horas, minutos e segundos
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Formatação do texto
        var countdownText = `${days} DIAS ${hours} HORAS ${minutes} MINUTOS ${seconds} SEGUNDOS`;

        // Atualiza o elemento HTML com o tempo restante
        document.getElementById('time-remaining').textContent = countdownText;

        // Se a contagem terminar, mostrar uma mensagem
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('time-remaining').textContent = "A contagem terminou!";
        }
    }

    // Atualiza a contagem a cada segundo
    var countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Executa imediatamente ao carregar
});

