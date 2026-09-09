// Array (lista) contendo os dados de cada vídeo do canal
const videos = [
    {
        tag: "IPTV SMARTER",                                                  // Texto exibido no centro da capa
        title: "Como baixar IPTV SMARTER na tv TCL samsung smart",            // Título principal
        meta: "13 visualizações • há 2 semanas",                             // Detalhes do vídeo
        url: "COLOQUE_AQUI_O_LINK_DO_VIDEO_1"                                // <--- INSIRA O LINK DO YOUTUBE AQUI (Substitua o texto entre aspas)
    },
    {
        tag: "IBO PLAYER IOS",
        title: "Como baixar IBO PLAYER no IPHONE.",
        meta: "10 visualizações • há 2 semanas",
        url: "COLOQUE_AQUI_O_LINK_DO_VIDEO_2"                                // <--- INSIRA O LINK DO YOUTUBE AQUI
    },
    {
        tag: "SMARTERS LITE",
        title: "Como baixar IPTV Smarters Player Lite no IPHONE.",
        meta: "34 visualizações • há 3 semanas",
        url: "COLOQUE_AQUI_O_LINK_DO_VIDEO_3"                                // <--- INSIRA O LINK DO YOUTUBE AQUI
    },
    {
        tag: "XCIPTV PLAYER",
        title: "Como Resolver Erro de Login XCIPTV PLAYER",
        meta: "27 visualizações • há 3 semanas",
        url: "COLOQUE_AQUI_O_LINK_DO_VIDEO_4"                                // <--- INSIRA O LINK DO YOUTUBE AQUI
    },
    {
        tag: "XC PLAYER TOP 2026",
        title: "XCIPTV app Top 2026! Faça um teste Grátis! Disponível em tvs Android e Smart TV, LG, Roku",
        meta: "18 visualizações • há 3 semanas",
        url: "COLOQUE_AQUI_O_LINK_DO_VIDEO_5"                                // <--- INSIRA O LINK DO YOUTUBE AQUI
    },
    {
        tag: "APPS TV SAMSUNG",
        title: "COMO BAIXAR APLICATIVOS NA TV SAMSUNG",
        meta: "13 visualizações • há 3 semanas",
        url: "COLOQUE_AQUI_O_LINK_DO_VIDEO_6"                                // <--- INSIRA O LINK DO YOUTUBE AQUI
    },
    {
        tag: "DOWNLOADER FIRE STICK",
        title: "Como baixar DOWNLOADER no FIRE STICK",
        meta: "17 visualizações • há 3 semanas",
        url: "COLOQUE_AQUI_O_LINK_DO_VIDEO_7"                                // <--- INSIRA O LINK DO YOUTUBE AQUI
    },
    {
        tag: "IBO PLAYER TV ROKU",
        title: "Como baixar o IBO PLAYER na TV ROKU.",
        meta: "11 visualizações • há 3 semanas",
        url: "COLOQUE_AQUI_O_LINK_DO_VIDEO_8"                                // <--- INSIRA O LINK DO YOUTUBE AQUI
    },
    {
        tag: "VU PLAYER SAMSUNG/LG",
        title: "Baixar VU player para Tv Samsung e LG.",
        meta: "14 visualizações • há 4 semanas",
        url: "COLOQUE_AQUI_O_LINK_DO_VIDEO_9"                                // <--- INSIRA O LINK DO YOUTUBE AQUI
    },
    {
        tag: "VU PLAYER FIRE STICK",
        title: "Como Instalar Vu player na tv fire stick",
        meta: "15 visualizações • há 4 semanas",
        url: "COLOQUE_AQUI_O_LINK_DO_VIDEO_10"                               // <--- INSIRA O LINK DO YOUTUBE AQUI
    }
];

// Função responsável por criar e desenhar os elementos HTML na tela
function renderVideos() {
    // Captura a div 'videoGrid' do arquivo index.html
    const grid = document.getElementById('videoGrid');

    // Percorre cada item da lista 'videos' acima
    videos.forEach(video => {
        // Cria um elemento HTML do tipo <article>
        const card = document.createElement('article');
        card.className = 'video-card'; // Adiciona a classe CSS para aplicar a estilização

        // Define a estrutura HTML interna do card aplicando os dados do vídeo (${video.url}, ${video.title}, etc.)
        card.innerHTML = `
            <a href="${video.url}" target="_blank" class="thumb-box" rel="noopener">
                <div class="thumb-content">
                    <span class="thumb-title-preview">${video.tag}</span>
                    <div class="play-icon"></div>
                </div>
            </a>
            <div class="video-info">
                <a href="${video.url}" target="_blank" class="video-title" rel="noopener">
                    ${video.title}
                </a>
                <span class="video-meta">${video.meta}</span>
                <a href="${video.url}" target="_blank" class="btn-watch" rel="noopener">Assistir no YouTube</a>
            </div>
        `;

        // Insere o card montado dentro da grade principal do site
        grid.appendChild(card);
    });
}

// Dispara a função 'renderVideos' assim que a página é totalmente carregada
document.addEventListener('DOMContentLoaded', renderVideos);
