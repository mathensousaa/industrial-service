const title = 'Industrial Service | Alpinismo industrial e predial';
const description = 'A Industrial Service é uma empresa especializada em serviços de alpinismo e manutenção industrial e predial, com treinamentos de acesso por cordas. Atuando desde 2011, conta com equipe altamente qualificada, garantindo máxima segurança em seus serviços.';

const SEO = {
    title,
    description,
    canonical: 'https://industrialservicebr.com.br',
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: 'https://industrialservicebr.com.br',
        title,
        description,
        images: [
            {
                url: 'https://industrialservicebr.com.br/_next/static/media/industrialservice-logo.7078a792.svg',
                alt: title,
                width: 1280,
                height: 720,
            },
        ],
    },
};

export default SEO;