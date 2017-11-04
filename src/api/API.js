import axios from 'axios';

const getDefaultQualifications = () => ([
  {
    dateRange: '2016 - Present',
    description: 'As a Senior Software Engineer at Broadleaf, I\'m responsible for taking the lead on projects involving everything from client implementations to new product features. One of my favorite projects was building the Broadleaf React starter project from scratch.',
    organization: 'Broadleaf Commerce',
    title: 'Sr. Software Engineer',
    type: 'WORK',
  },
  {
    dateRange: '2015 - 2016',
    description: 'As a Software Engineer at Broadleaf, I was introduced to working on Java-based enterprise software. I worked on everything from proof of concepts for sales demos to features improving the search experience for those using the Broadleaf framework.',
    organization: 'Broadleaf Commerce',
    title: 'Software Engineer',
    type: 'WORK',
  },
  {
    dateRange: '2013 - 2015',
    description: 'During my college career, I worked full-time for a company called College Works Painting. I started out as a branch manager and ran my own painting business in my hometown. I quickly got promoted over the next couple years until making the position of General Manager, where I was responsible for training, teaching, and mentoring hundreds of branch managers within the state.',
    organization: 'College Works',
    title: 'General Manager',
    type: 'WORK',
  },
  {
    dateRange: '2011 - 2015',
    description: 'I was raised to be a Longhorn by my family, many of whom went to UT themselves. It was an exciting experience for me to be a Longhorn myself. I quickly found interest in coding and devoted my time towards a degree in Computer Science. Despite working full-time, I managed to acheive a degree in Computer Science from UT within four years.',
    organization: 'University of Texas at Austin',
    title: 'Computer Science',
    type: 'EDUCATION',
  },
]);

export default {
  fetchQualifications() {
    return new Promise((resolve) => {
      resolve(getDefaultQualifications());
    });
  },

  submitContact(contact) {
    return axios.post('/contact', contact);
  },
};
