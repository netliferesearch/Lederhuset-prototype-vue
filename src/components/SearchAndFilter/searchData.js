import sortBy from 'lodash/sortBy';

const data = [
  {
    id: 1,
    categoryTitle: 'Feriepenger',
    searchableContent: '',
    posts: [
      {
        title: 'Feriepenger',
        url: '/tema-side',
        searchableContent: '',
      },
    ],
  },
  {
    id: 2,
    categoryTitle: 'Ledelse og lederrollen',
    searchableContent: '',
    posts: [
      {
        title: 'Bygge tillit og kultur',
        url: '/tema-side',
        searchableContent: '',
      },
      {
        title: 'Dette er god ledelse',
        url: '/tema-side',
        searchableContent: '',
      },
      {
        title: 'Lederens årshjul - lederoppgaver',
        url: '/tema-side',
        searchableContent: '',
      },
    ],
  },
  {
    id: 3,
    categoryTitle: 'Arbeidstid',
    searchableContent: '',
    posts: [
      {
        title: 'Arbeidstid og overtid deltid, fleksitid, turnus',
        url: '/tema-side',
        searchableContent: '',
      },
      {
        title: 'Helligdager, religiøse høytider, kvelds- og nattjobbing, ugunstig arbeidstid',
        url: '/tema-side',
        searchableContent: '',
      },
      {
        title: 'Fri og uavhengig stilling',
        url: '/tema-side',
        searchableContent: '',
      },
      {
        title: 'Redusert arbeidstid, fri- og uavhengig stilling',
        url: '/tema-side',
        searchableContent: '',
      },
      {
        title: 'Overtid og avspasering',
        url: '/tema-side',
        searchableContent: '',
      },
    ],
  },
];

/**
 * Takes the dummy search data and sorts it by post titles and then category titles.
 * @return {[Array]} sorted search data
 */
export default function getSearchData() {
  return sortBy(data.map(category => ({ ...category, ...{ posts: sortBy(category.posts, ['title']) } })), ['categoryTitle']);
}
