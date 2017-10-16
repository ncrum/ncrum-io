import axios from 'axios';

const getDefaultQualifications = () => ([
  {
    dateRange: '2016 - Present',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec congue risus. In non nulla lacus. Maecenas eros sapien, eleifend quis augue eu, pellentesque tincidunt tellus',
    organization: 'Broadleaf Commerce',
    title: 'Sr. Software Engineer',
    type: 'WORK',
  },
  {
    dateRange: '2015 - 2016',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec congue risus. In non nulla lacus. Maecenas eros sapien, eleifend quis augue eu, pellentesque tincidunt tellus',
    organization: 'Broadleaf Commerce',
    title: 'Software Engineer',
    type: 'WORK',
  },
  {
    dateRange: '2013 - 2015',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec congue risus. In non nulla lacus. Maecenas eros sapien, eleifend quis augue eu, pellentesque tincidunt tellus',
    organization: 'College Works',
    title: 'General Manager',
    type: 'WORK',
  },
  {
    dateRange: '2011 - 2015',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec congue risus. In non nulla lacus. Maecenas eros sapien, eleifend quis augue eu, pellentesque tincidunt tellus',
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
