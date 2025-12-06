
export interface Statistics {
    label: string;
    value: string;
}

export interface ProjectMedia {
    type: 'video' | 'image';
    src: string;
    thumb?: string; // Optional thumbnail for videos
}

// ==========================================
// PADRONIZAÇÃO DE PROJETOS
// Para adicionar um novo projeto:
// 1. Adicione os arquivos de mídia em public/assets/Trabalhos/[Nome do Projeto]
// 2. Crie uma nova entrada no array 'projects' abaixo seguindo a interface 'Project'
// 3. O 'slug' deve ser único e usado na URL (ex: /works/meu-novo-projeto)
// ==========================================

export interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    category: string;
    client: string;
    date: string;
    stats: Statistics[];
    heroVideo?: string; // Video path for hero background
    heroImage?: string; // Fallback image for hero
    media: ProjectMedia[];
}

export const projects: Project[] = [
    {
        id: '1',
        slug: 'iriri-barbearia-club',
        title: 'Iriri Barbearia Club',
        description: 'Produção audiovisual completa para a Iriri Barbearia Club, uma referência em estilo e tradição desde 1994. O projeto capturou a essência do ambiente premium e a maestria dos cortes, destacando a experiência única oferecida aos clientes. Com takes dinâmicos e uma estética moderna, os vídeos transmitem a energia e o profissionalismo que tornam a barbearia um ponto de encontro exclusivo.',
        category: 'Social Media',
        client: 'Iriri Barbearia Club',
        date: '2024',
        stats: [
            { label: 'Views', value: '+150k' },
            { label: 'Engajamento', value: 'Alto' },
            { label: 'Vídeos', value: '7' },
        ],
        heroVideo: '/assets/Trabalhos/Iriri Barbearia Club/Videos/iriri-video-02.mp4',
        media: [
            { type: 'video', src: '/assets/Trabalhos/Iriri Barbearia Club/Videos/iriri-video-01.mp4' },
            { type: 'video', src: '/assets/Trabalhos/Iriri Barbearia Club/Videos/iriri-video-02.mp4' },
            { type: 'video', src: '/assets/Trabalhos/Iriri Barbearia Club/Videos/iriri-video-03.mp4' },
            { type: 'video', src: '/assets/Trabalhos/Iriri Barbearia Club/Videos/iriri-video-04.mp4' },
            { type: 'video', src: '/assets/Trabalhos/Iriri Barbearia Club/Videos/iriri-video-05.mp4' },
            { type: 'video', src: '/assets/Trabalhos/Iriri Barbearia Club/Videos/iriri-video-06.mp4' },
            { type: 'video', src: '/assets/Trabalhos/Iriri Barbearia Club/Videos/iriri-video-07.mp4' },
        ]
    },
    {
        id: '2',
        slug: 'atos-ii-massas',
        title: 'AtosII - Massas Artesanais',
        description: 'Projeto completo de Social Media e Produção Audiovisual para a AtosII Massas Artesanais. O objetivo foi destacar a qualidade artesanal e o sabor único das massas, criando uma identidade visual apetitosa e envolvente para as redes sociais.',
        category: 'Social Media',
        client: 'AtosII',
        date: '2025',
        stats: [
            { label: 'Alcance', value: 'Crescente' },
            { label: 'Engajamento', value: 'Alto' },
        ],
        heroVideo: '/assets/Trabalhos/AtosII - Massas/atos-main.mp4',
        media: [
            { type: 'video', src: '/assets/Trabalhos/AtosII - Massas/atos-main.mp4' },
            { type: 'video', src: '/assets/Trabalhos/AtosII - Massas/atos-reel.mp4' },
            { type: 'video', src: '/assets/Trabalhos/AtosII - Massas/atos-bts.mp4' },
            { type: 'video', src: '/assets/Trabalhos/AtosII - Massas/atos-editor-promo.mp4' },
        ]
    },
    {
        id: '3',
        slug: 'polos-uva',
        title: 'Polos UVA',
        description: 'Produção audiovisual estratégica para os Polos da Universidade Veiga de Almeida (UVA). O conteúdo destaca a infraestrutura moderna, o suporte ao aluno e a flexibilidade do ensino EAD, incentivando novas matrículas e engajamento da comunidade acadêmica.',
        category: 'Audiovisual',
        client: 'UVA',
        date: '2025',
        stats: [
            { label: 'Visualizações', value: '+50k' },
            { label: 'Matrículas', value: 'Crescente' },
        ],
        heroVideo: '/assets/Trabalhos/UVA/uva-promo-sonho.mp4',
        media: [
            { type: 'video', src: '/assets/Trabalhos/UVA/uva-promo-sonho.mp4' },
            { type: 'video', src: '/assets/Trabalhos/UVA/uva-promo-fixo.mp4' },
            { type: 'video', src: '/assets/Trabalhos/UVA/uva-bts.mp4' },
        ]
    },
    {
        id: '4',
        slug: 'prospera-branzeadora',
        title: 'Próspera Branzeadora 2025',
        description: 'Cobertura exclusiva do evento Próspera Branzeadora, capturando a energia, os bastidores e os melhores momentos. O vídeo final transmite a emoção e o sucesso do evento, servindo como uma poderosa ferramenta de divulgação para futuras edições.',
        category: 'Eventos',
        client: 'Próspera',
        date: '2025',
        stats: [
            { label: 'Público', value: 'Sold Out' },
            { label: 'Repercussão', value: 'Viral' },
        ],
        heroVideo: '/assets/Trabalhos/Evento - Próspera Branzeadora/prospera-full-event.mp4',
        media: [
            { type: 'video', src: '/assets/Trabalhos/Evento - Próspera Branzeadora/prospera-full-event.mp4' },
            { type: 'video', src: '/assets/Trabalhos/Evento - Próspera Branzeadora/prospera-aftermovie.mp4' },
            { type: 'video', src: '/assets/Trabalhos/Evento - Próspera Branzeadora/prospera-tips.mp4' },
        ]
    }
];
