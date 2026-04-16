export interface Service {
  id: string;
  number: string;
  name: string;
  path: string;
  pullQuote: string;
  body: string;
  imageUrl: string;
  imagePlaceholderColor: string;
}

export const SERVICES: Service[] = [
  {
    id: 'eventos',
    number: '01',
    name: 'Organización de Eventos',
    path: '/eventos',
    pullQuote: '"Creamos eventos que no solo se viven, se recuerdan."',
    body: 'En MissCapriccio diseñamos eventos que trascienden lo convencional para convertirse en experiencias memorables. Cada proyecto nace de una idea única, desarrollada con sensibilidad estética, atención al detalle y una ejecución impecable. Nos encargamos de todo el proceso, desde la conceptualización hasta la coordinación integral, seleccionando cuidadosamente cada elemento: espacios, gastronomía, ambientación y ritmo del evento. Trabajamos con una red de colaboradores de confianza para garantizar resultados a la altura de cada ocasión.',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069',
    imagePlaceholderColor: '#1a1a1a'
  },
  {
    id: 'concierge',
    number: '02',
    name: 'Personal Assistance',
    path: '/concierge',
    pullQuote: '"Convertimos lo complejo en sencillo y lo cotidiano en extraordinario."',
    body: 'Ofrecemos un servicio de atención personalizada diseñado para quienes valoran su tiempo, su comodidad y la excelencia en cada detalle. Desde la gestión de reservas exclusivas hasta la organización de experiencias privadas, en MissCapriccio anticipamos necesidades y resolvemos cada petición con discreción, eficacia y un enfoque completamente a medida.',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
    imagePlaceholderColor: '#1a1a1a'
  },
  {
    id: 'marcas',
    number: '03',
    name: 'Luxury Brand Manager',
    path: '/marcas',
    pullQuote: '"Más que representar, construimos valor y proyección a largo plazo."',
    body: 'Actuamos como puente estratégico entre marcas de lujo y nuevos mercados, desarrollando su presencia con coherencia, elegancia y conocimiento del entorno. En MissCapriccio representamos marcas a nivel nacional e internacional, creando conexiones sólidas con clientes, espacios y oportunidades alineadas con su posicionamiento. Cuidamos cada detalle de su imagen, comunicación y experiencia para garantizar una implantación auténtica y diferenciadora.',
    imageUrl: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070',
    imagePlaceholderColor: '#1a1a1a'
  },
  {
    id: 'carla',
    number: '04',
    name: 'Quién es MissCapriccio',
    path: '/carla',
    pullQuote: '',
    body: '',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974',
    imagePlaceholderColor: '#F5F3EF'
  }
];
