const videos = [                                                    /* Cria a lista contendo as informacoes de cada video do canal */
    {                                                               /* Inicia o objeto com os dados do primeiro video */
        tag: "IPTV SMARTER",                                        /* Define o texto resumido que fica no centro da capa */
        title: "Como baixar IPTV SMARTER na tv TCL samsung smart",  /* Define o titulo principal do video */
        meta: "13 visualizações • há 2 semanas",                    /* Define o texto com visualizacoes e tempo de postagem */
        url: "https://www.youtube.com/watch?v=NuRsgRkWhoY"          /* Guarda o link oficial do video no YouTube */
    },                                                              /* Fecha as informacoes do primeiro video */
    {                                                               /* Inicia o objeto com os dados do segundo video */
        tag: "IBO PLAYER IOS",                                      /* Tag de identificacao para a miniatura */
        title: "Como baixar IBO PLAYER no IPHONE.",                 /* Titulo focado no sistema iOS */
        meta: "10 visualizações • há 2 semanas",                    /* Dados estatisticos de exibicao */
        url: "https://www.youtube.com/watch?v=rT1azuXHVME"          /* Link correspondente ao tutorial do IBO */
    },                                                              /* Fecha as informacoes do segundo video */
    {                                                               /* Inicia o objeto com os dados do terceiro video */
        tag: "SMARTERS LITE",                                       /* Tag indicando a versao leve do aplicativo */
        title: "Como baixar IPTV Smarters Player Lite no IPHONE.",  /* Titulo focado na instalacao no iPhone */
        meta: "34 visualizações • há 3 semanas",                    /* Dados estatisticos de acessos */
        url: "https://www.youtube.com/watch?v=PpPgp-4LWwM"          /* Link para o respectivo video */
    },                                                              /* Fecha as informacoes do terceiro video */
    {                                                               /* Inicia o objeto com os dados do quarto video */
        tag: "XCIPTV PLAYER",                                       /* Tag com o nome do aplicativo XCIPTV */
        title: "Como Resolver Erro de Login XCIPTV PLAYER",         /* Titulo focado em solucao de problemas de login */
        meta: "27 visualizações • há 3 semanas",                    /* Dados estatisticos de visualizacoes */
        url: "https://www.youtube.com/watch?v=dsKKlMWvQ1k"          /* Link para o tutorial de correcao de erros */
    },                                                              /* Fecha as informacoes do quarto video */
    {                                                               /* Inicia o objeto com os dados do quinto video */
        tag: "XC PLAYER TOP 2026",                                  /* Tag promocional atualizada para o ano de 2026 */
        title: "XCIPTV app Top 2026! Faça um teste Grátis! Disponível em tvs Android e Smart TV, LG, Roku", /* Titulo informativo */
        meta: "18 visualizações • há 3 semanas",                    /* Metricas de exibicao do video */
        url: "https://www.youtube.com/watch?v=l7S6AlLpx3Q"          /* Link de direcionamento para o YouTube */
    },                                                              /* Fecha as informacoes do quinto video */
    {                                                               /* Inicia o objeto com os dados do sexto video */
        tag: "APPS TV SAMSUNG",                                     /* Tag explicativa para televisores Samsung */
        title: "COMO BAIXAR APLICATIVOS NA TV SAMSUNG",              /* Titulo em letras maiusculas sobre a loja Samsung */
        meta: "13 visualizações • há 3 semanas",                    /* Metricas de alcance do video */
        url: "https://www.youtube.com/watch?v=4mqhXviPW40"          /* Link direto para o tutorial da Samsung */
    },                                                              /* Fecha as informacoes do sexto video */
    {                                                               /* Inicia o objeto com os dados do setimo video */
        tag: "DOWNLOADER FIRE STICK",                               /* Tag para o acessorio de streaming da Amazon */
        title: "Como baixar DOWNLOADER no FIRE STICK",              /* Titulo ensinando a instalar a ferramenta de downloads */
        meta: "17 visualizações • há 3 semanas",                    /* Metricas de visualizacoes obtidas */
        url: "https://www.youtube.com/watch?v=UrkMtXq6hCQ"          /* Link do tutorial para o Fire Stick */
    },                                                              /* Fecha as informacoes do setimo video */
    {                                                               /* Inicia o objeto com os dados do oitavo video */
        tag: "IBO PLAYER TV ROKU",                                  /* Tag para o sistema operacional Roku TV */
        title: "Como baixar o IBO PLAYER na TV ROKU.",              /* Titulo explicando o processo na plataforma Roku */
        meta: "11 visualizações • há 3 semanas",                    /* Metricas de contagem de acessos */
        url: "https://www.youtube.com/watch?v=fJfeQKl4cF8"          /* Link do video focado em Roku */
    },                                                              /* Fecha as informacoes do oitavo video */
    {                                                               /* Inicia o objeto com os dados do nono video */
        tag: "VU PLAYER SAMSUNG/LG",                                /* Tag englobando as duas marcas mais comuns de TV */
        title: "Baixar VU player para Tv Samsung e LG.",            /* Titulo sobre o aplicativo VU nessas plataformas */
        meta: "14 visualizações • há 4 semanas",                    /* Metricas de tempo e visualizacoes */
        url: "https://www.youtube.com/watch?v=aL1EFHpKeJg"          /* Link do tutorial para Smart TVs tradicionais */
    },                                                              /* Fecha as informacoes do nono video */
    {                                                               /* Inicia o objeto com os dados do decimo video */
        tag: "VU PLAYER FIRE STICK",                                /* Tag para o aplicativo VU rodando no aparelho Amazon */
        title: "Como Instalar Vu player na tv fire stick",          /* Titulo explicativo com o passo a passo */
        meta: "15 visualizações • há 4 semanas",                    /* Metricas de visualizacao do post */
        url: "https://www.youtube.com/watch?v=npK_wsgKw-4"          /* Link final do ultimo item da lista */
    }                                                               /* Fecha as informacoes do decimo video */
];                                                                  /* Fecha completamente o array da lista de videos */

function renderVideos() {                                           /* Declara a funcao que desenha o conteudo na tela */
    const grid = document.getElementById('videoGrid');              /* Seleciona o elemento container da grade pelo id */

    videos.forEach(video => {                                       /* Inicia um laco para ler individualmente cada video */
        const card = document.createElement('article');             /* Cria dinamicamente uma nova tag article na memoria */
        card.className = 'video-card';                              /* Atribui a classe CSS correspondente para o card */

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
        `;                                                          /* Define a estrutura HTML interna do card com as variaveis */

        grid.appendChild(card);                                     /* Coloca o card estruturado dentro do container da pagina */
    });                                                             /* Encerra a execucao do laco forEach */
}                                                                   /* Encerra a estrutura da funcao renderVideos */

document.addEventListener('DOMContentLoaded', renderVideos);         /* Ativa a funcao assim que o navegador carregar o HTML */
