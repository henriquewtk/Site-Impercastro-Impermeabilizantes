/**
 * Todas as informações da loja ficam aqui.
 * Para mudar telefone, endereço, horário ou textos dos cards, edite só este arquivo.
 */

export const site = {
  name: 'Impercastro Impermeabilizantes',
  shortName: 'Impercastro',
  description:
    'Loja especializada em impermeabilizantes em Rio Verde (GO). Sika, Vedacit e Rhodopás. Mande uma foto pelo WhatsApp e receba a indicação do produto certo.',
  phone: {
    display: '(64) 3613-2438',
    e164: '+556436132438',
  },
  /** Número no formato internacional, só dígitos, usado no link do WhatsApp. */
  whatsapp: '556436132438',
  instagram: {
    handle: '@impercastroimpermeabilizantes',
    url: 'https://www.instagram.com/impercastroimpermeabilizantes/',
  },
  address: {
    street: 'Av. São Tomáz, s/n - Qd. 05, Lt. 08',
    short: 'Av. São Tomáz, Qd. 05, Lt. 08',
    district: 'Parque das Paineiras',
    city: 'Rio Verde',
    state: 'GO',
    zip: '75912-176',
  },
  hours: {
    summary: 'Seg a sex · 8h às 11h e 12h30 às 17h',
    table: [
      { days: 'Segunda a sexta', time: '8h às 11h e 12h30 às 17h' },
      { days: 'Sábado e domingo', time: 'Fechado' },
    ],
    /** Formato usado pelos dados estruturados do Google. */
    schema: [
      { opens: '08:00', closes: '11:00' },
      { opens: '12:30', closes: '17:00' },
    ],
  },
  brands: ['Sika', 'Vedacit', 'Rhodopás'],
} as const;

const mapsQuery = `${site.name}, ${site.address.street}, ${site.address.district}, ${site.address.city} - ${site.address.state}`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`;

export const defaultWhatsappMessage =
  'Olá! Tenho um problema de infiltração e queria uma indicação de produto.';

export function whatsappLink(message: string = defaultWhatsappMessage): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type IconName =
  | 'chat'
  | 'pin'
  | 'clock'
  | 'store'
  | 'menu'
  | 'close'
  | 'arrow'
  | 'phone'
  | 'instagram'
  | 'roof'
  | 'slab'
  | 'gutter'
  | 'pool'
  | 'wall'
  | 'shower'
  | 'bucket'
  | 'camera'
  | 'check'
  | 'shield'
  | 'layers';

export const problems: {
  title: string;
  description: string;
  icon: IconName;
  message: string;
}[] = [
  {
    title: 'Laje',
    description: 'Mancha no teto, goteira em dia de chuva, laje exposta ao sol.',
    icon: 'slab',
    message: 'Olá! Tenho um problema de infiltração na laje e queria uma indicação de produto.',
  },
  {
    title: 'Telhado e calhas',
    description: 'Vazamento em telhas, rufos, calhas e emendas.',
    icon: 'gutter',
    message: 'Olá! Tenho vazamento no telhado/calha e queria uma indicação de produto.',
  },
  {
    title: "Piscina e caixa d'água",
    description: 'Perda de água em piscinas, reservatórios e caixas.',
    icon: 'pool',
    message: "Olá! Preciso impermeabilizar uma piscina/caixa d'água e queria uma indicação de produto.",
  },
  {
    title: 'Paredes e rodapé',
    description: 'Umidade subindo do chão, mofo e pintura descascando.',
    icon: 'wall',
    message: 'Olá! Tenho umidade na parede/rodapé e queria uma indicação de produto.',
  },
  {
    title: 'Banheiro e áreas molhadas',
    description: 'Box, cozinha, lavanderia e sacadas, antes de assentar o piso.',
    icon: 'shower',
    message: 'Olá! Preciso impermeabilizar banheiro/área molhada e queria uma indicação de produto.',
  },
  {
    title: 'Obra e acabamento',
    description: 'Chapisco, aditivos para argamassa, adesivos e reparos estruturais.',
    icon: 'bucket',
    message: 'Olá! Estou com uma obra e queria ver produtos (chapisco, aditivos, adesivos).',
  },
];

export const reasons: { title: string; text: string; icon: IconName }[] = [
  {
    title: 'Especializada',
    text: 'A primeira loja de Rio Verde dedicada só a impermeabilização. Quem atende entende do assunto.',
    icon: 'shield',
  },
  {
    title: 'Orientação antes da compra',
    text: 'Mande foto e medida pelo WhatsApp. A gente indica o produto e a quantidade, pra você não comprar errado nem sobrar material.',
    icon: 'camera',
  },
  {
    title: 'Da reforma à obra',
    text: 'Atendemos quem está resolvendo um problema em casa e quem compra para a obra.',
    icon: 'layers',
  },
];

export const steps: { title: string; text: string; icon: IconName }[] = [
  { title: 'Chame no WhatsApp', text: 'Mande uma foto do local e a medida aproximada.', icon: 'chat' },
  { title: 'Receba a indicação', text: 'A gente diz qual produto usar e quanto você vai precisar.', icon: 'check' },
  { title: 'Retire na loja', text: 'Seu pedido fica separado. É só passar no balcão.', icon: 'store' },
];

export const navLinks = [
  { href: '#solucoes', label: 'Soluções' },
  { href: '#marcas', label: 'Marcas' },
  { href: '#como-comprar', label: 'Como comprar' },
  { href: '#localizacao', label: 'Localização' },
];
