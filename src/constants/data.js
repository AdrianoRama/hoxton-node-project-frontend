import images from './images';


const wines = [
  {
    title: 'Sancerre Domaine Sylcain Bailly',
    price: '£10',
    tags: 'FR | 125ml GLASS'
  },
  {
    title: 'Gavi di Gavi La Giustiniana',
    price: '£9',
    tags: 'IT | 125ml GLASS'
  },
  {
    title: 'Sancerre Rosé, Domaine André Dezat',
    price: '£11',
    tags: 'Fr | 125ml GLASS'
  },
  {
    title: 'Bourgogne Pinot Noir, Domaine Glantenay',
    price: '£14',
    tags: 'Fr | 125ml GLASS'
  },
  {
    title: 'Tinpot Hut Pinot Noir, Marlborough',
    price: '£11',
    tags: 'NZ | 125ml GLASS'
  }
];

const champagnes = [
  {
    title: 'Taittinger Brut Imperial',
    price: '£15',
    tags: 'FR | 125ml GLASS'
  },
  {
    title: 'Veuve Clicquot Rich Doux',
    price: '£16',
    tags: 'FR | 125ml GLASS'
  },
  {
    title: 'Bollinger Special Cuvée Brut',
    price: '£17',
    tags: 'Fr | 125ml GLASS'
  },
  {
    title: 'Dom Pérignon, 2012',
    price: '£14',
    tags: 'Fr | 125ml GLASS'
  },
  {
    title: 'Ayala Blanc de Blancs, Grand Cru, 2014',
    price: '£18',
    tags: 'FR | 125ml GLASS'
  }
];

const gallery = [
  {
    title: 'gallery01',
    src: images.gallery01,
    extUrl: 'p/CPvfV4oDHKQ/'
  },
  {
    title: 'gallery02',
    src: images.gallery02,
    extUrl: 'p/CN2WvHBjsvV/'
  },
  {
    title: 'gallery03',
    src: images.gallery03,
    extUrl: 'p/CGNfkZxDUJY/'
  },
  {
    title: 'gallery04',
    src: images.gallery04,
    extUrl: 'p/CFbi_epDnsj/'
  },
]



export default { wines, champagnes, gallery };
