export const styleFilters = ['Chic', 'Décontracté', 'Simple', 'Sportwear', 'Bureau', 'Voyage'];

export const wardrobeItems = [
  {
    id: 1,
    type: 'Haut',
    name: 'Chemise beige',
    color: 'Beige',
    season: 'Printemps',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    type: 'Bas',
    name: 'Jean droit',
    color: 'Bleu',
    season: 'Toute saison',
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    type: 'Chaussures',
    name: 'Sneakers blanches',
    color: 'Blanc',
    season: 'Printemps',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    type: 'Accessoire',
    name: 'Sac à main',
    color: 'Marron',
    season: 'Automne',
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
  },
];

export const looks = [
  {
    id: 1,
    title: 'Look du jour',
    recommendation: 'Cheveux lâchés',
    temp: '26°',
    mood: 'Après-midi légère',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    palette: ['#E7D7C9', '#D7C1A6', '#8B6A4B'],
    beauty: {
      hair: 'Cheveux lâchés avec une légère ondulation',
      makeup: 'Teint lumineux et blush doux',
    },
  },
  {
    id: 2,
    title: 'Look bureau',
    recommendation: 'Mise en beauté naturelle',
    temp: '22°',
    mood: 'Coup de frais le matin',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    palette: ['#BFD1D5', '#E8E0D6', '#A87F65'],
    beauty: {
      hair: 'Chignon bas et volume discret',
      makeup: 'Fard neutre et lèvres rosées',
    },
  },
];

export const calendarDays = [
  { day: 'Lun', active: false },
  { day: 'Mar', active: false },
  { day: 'Mer', active: true },
  { day: 'Jeu', active: false },
  { day: 'Ven', active: false },
  { day: 'Sam', active: false },
  { day: 'Dim', active: false },
];

export const monthDays = [
  { label: '1', active: false },
  { label: '2', active: false },
  { label: '3', active: true },
  { label: '4', active: false },
  { label: '5', active: false },
  { label: '6', active: false },
  { label: '7', active: false },
  { label: '8', active: false },
  { label: '9', active: false },
  { label: '10', active: false },
  { label: '11', active: false },
  { label: '12', active: false },
  { label: '13', active: false },
  { label: '14', active: false },
  { label: '15', active: false },
  { label: '16', active: false },
  { label: '17', active: false },
  { label: '18', active: false },
  { label: '19', active: false },
  { label: '20', active: false },
  { label: '21', active: true },
  { label: '22', active: false },
  { label: '23', active: false },
  { label: '24', active: false },
  { label: '25', active: false },
  { label: '26', active: false },
  { label: '27', active: false },
  { label: '28', active: false },
  { label: '29', active: false },
  { label: '30', active: false },
];

export const tabData = ['Accueil', 'Dressing', 'Calendrier', 'Profil'];

export const profileData = {
  firstName: 'Anaïs',
  stylePreferences: ['Chic', 'Minimal', 'Décontracté'],
  colorimetry: {
    skin: 'Claire',
    eyes: 'Marron',
    hair: 'Brun',
  },
  sizes: {
    top: 'S',
    bottom: '34',
    shoes: '38',
  },
  goals: ['Gain de temps le matin', 'Looks adaptés à la météo'],
};
