//(lista) contendo os dados de cada video do canal
const videos = [
    {
        tag: "IPTV SMARTER",                                                  // Texto exibido no centro da capa
        title: "Como baixar IPTV SMARTER na tv TCL samsung smart",            // Titulo principal
        meta: "13 visualizações • há 2 semanas",                             // Detalhes do vídeo
        url: "https://www.youtube.com/watch?v=NuRsgRkWhoY"    // <--- INSIRA O LINK DO YOUTUBE AQUI
h
    },
    {
        tag: "IBO PLAYER IOS",
        title: "Como baixar IBO PLAYER no IPHONE.",
        meta: "10 visualizações • há 2 semanas",
        url: "https://www.youtube.com/watch?v=rT1azuXHVME"   // <--- INSIRA O LINK DO YOUTUBE AQUI
    },
    {
        tag: "SMARTERS LITE",
        title: "Como baixar IPTV Smarters Player Lite no IPHONE.",
        meta: "34 visualizações • há 3 semanas",
        url: "https://www.youtube.com/watch?v=PpPgp-4LWwM"  // <--- INSIRA O LINK DO YOUTUBE AQUI
    },
    {
        tag: "XCIPTV PLAYER",
        title: "Como Resolver Erro de Login XCIPTV PLAYER",
        meta: "27 visualizações • há 3 semanas",
        url: "https://www.youtube.com/watch?v=dsKKlMWvQ1k"   // <--- INSIRA O LINK DO YOUTUBE AQUI
    },
    {
        tag: "XC PLAYER TOP 2026",
        title: "XCIPTV app Top 2026! Faça um teste Grátis! Disponível em tvs Android e Smart TV, LG, Roku",
        meta: "18 visualizações • há 3 semanas",
        url: "https://www.youtube.com/watch?v=l7S6AlLpx3Q"    // <--- INSIRA O LINK DO YOUTUBE AQUI
    },
    {
        tag: "APPS TV SAMSUNG",
        title: "COMO BAIXAR APLICATIVOS NA TV SAMSUNG",
        meta: "13 visualizações • há 3 semanas",
        url: "https://www.youtube.com/watch?v=4mqhXviPW40"    // <--- INSIRA O LINK DO YOUTUBE AQUI
    },
    {
        tag: "DOWNLOADER FIRE STICK",
        title: "Como baixar DOWNLOADER no FIRE STICK",
        meta: "17 visualizações • há 3 semanas",
        url: "https://www.youtube.com/watch?v=UrkMtXq6hCQ"    // <--- INSIRA O LINK DO YOUTUBE AQUI
    },
    {
        tag: "IBO PLAYER TV ROKU",
        title: "Como baixar o IBO PLAYER na TV ROKU.",
        meta: "11 visualizações • há 3 semanas",
        url: "https://www.youtube.com/watch?v=fJfeQKl4cF8"   // <--- INSIRA O LINK DO YOUTUBE AQUI
    },
    {
        tag: "VU PLAYER SAMSUNG/LG",
        title: "Baixar VU player para Tv Samsung e LG.",
        meta: "14 visualizações • há 4 semanas",
        url: "https://www.youtube.com/watch?v=aL1EFHpKeJg"   // <--- INSIRA O LINK DO YOUTUBE AQUI
    },
    {
        tag: "VU PLAYER FIRE STICK",
        title: "Como Instalar Vu player na tv fire stick",
        meta: "15 visualizações • há 4 semanas",
        url: "https://www.youtube.com/watch?v=npK_wsgKw-4"  // <--- INSIRA O LINK DO YOUTUBE AQUI
    }
];

// Funcao responsavel por criar e desenhar os elementos HTML na tela
function renderVideos() {
    // Captura a div 'videoGrid' do arquivo index.html
    const grid = document.getElementById('videoGrid');

    // Percorre cada item da lista 'videos' acima
    videos.forEach(video => {
        // Cria um elemento HTML do tipo <article>
        const card = document.createElement('article');
        card.className = 'video-card'; // Adiciona a classe CSS para aplicar a estilizacao

        // Define a estrutura HTML interna do card aplicando os dados do video (${video.url}, ${video.title}, etc.)
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

// Dispara a função 'renderVideos' assim que a página e totalmente carregada
document.addEventListener('DOMContentLoaded', renderVideos);
