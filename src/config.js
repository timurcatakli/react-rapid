// http://t.commonsupport.com/calena/about.html
// http://themes.axilweb.com/html/marketo/modern-big-digital-agency/services.html
// http://www.mockaroo.com/
// https://placeimg.com/
// http://abcgomel.ru/haswell/about-us-2.html
// https://www.pexels.com/photo/working-in-a-group-6224/
// 1- Create Content For pages - should be responsive...
// 2- Create Contact Form and Setit with Firebase
// 6- Fix homepage
// 10- Get Google Site Speed Report
// 10- icons
// formspree.io ?
// https://medium.com/@mirokoczka/how-to-host-static-react-website-with-contact-forms-for-free-e12fbdc2414b

// <div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

// Blazing-fast static site generator for React
// Get Started
// Github Repor
// Contribution
// How to setup/install
// How to add a new page
// Packages used
// Support
// Github page title and tags =>
// ⚛️📄🚀 Blazing fast static site generator for React https://www.gatsbyjs.org
// gatsby static-site-generator react blog documentation-tool

// Packages
// This repository is a monorepo managed using Lerna. This means that we publish many packages to NPM from the same codebase.
// Thanks
// Thanks to our many contributors and sponsors as well as the companies sponsoring our testing and hosting infrastructure, Travis CI, Appveyor, and Netlify.

const config = {
  homepage: 'http://www.siteurl.com',
  email: 'contact@acme.com',
  phone: '415 555 6745',
  siteLabel: 'React Rapid',
  siteLogoUrl: 'img/react-rapid-logo-512.png',
  footer: {
    message:
      'Extra space for a call to action inside the footer that could help re-engage users.',
    copyrightYear: 2017
  },
  socialMediaLinks: [
    {
      id: 'facebook',
      url: 'http://www.facebook.com',
      active: true,
      icon: 'facebook'
    },
    {
      id: 'instagram',
      url: 'http://www.instagram.com',
      active: true,
      icon: 'instagram'
    },
    {
      id: 'pinterest',
      url: 'http://www.pinterest.com',
      active: true,
      icon: 'pinterest'
    },
    {
      id: 'twitter',
      url: 'http://www.twitter.com',
      active: true,
      icon: 'twitter'
    },
    {
      id: 'linkedin',
      url: 'http://www.linkedin.com',
      active: true,
      icon: 'linkedin'
    }
  ],
  pages: {
    aboutus: {
      component: 'AboutUs',
      label: 'About Us',
      icon: 'building',
      subTitle:
        'About Us unc gravida tellus eget odio molestie eleifend feugiat non lorem.',
      path: '/aboutus'
    },
    portfolio: {
      component: 'Portfolio',
      label: 'Portfolio',
      icon: 'bullseye',
      subTitle:
        'Portfolio Nunc gravida tellus eget odio molestie eleifend feugiat non lorem.',
      path: '/portfolio'
    },
    services: {
      component: 'Services',
      label: 'Services',
      icon: 'lab',
      subTitle:
        'Services Nunc gravida tellus eget odio molestie eleifend feugiat non lorem.',
      path: '/services'
    },
    contactus: {
      component: 'ContactUs',
      label: 'Contact Us',
      icon: 'phone',
      subTitle:
        'Contact Us Nunc gravida tellus eget odio molestie eleifend feugiat non lorem.',
      path: '/contact'
    }
  },
  projects: [
    {
      id: 1,
      name: 'Prodder',
      thumbnail: '/img/projects/project-01.jpeg',
      category: 'Branding',
      release_date: '08/12/2017',
      author: 'Babette Sussans',
      website: 'canalblog.com',
      client: 'Tillman, Douglas and Rohan'
    },
    {
      id: 2,
      name: 'Voltsillam',
      thumbnail: '/img/projects/project-02.jpeg',
      category: 'Branding',
      release_date: '01/01/2017',
      author: 'Budd Pray',
      website: 'newyorker.com',
      client: 'Rutherford, Tillman and Auer'
    },
    {
      id: 3,
      name: 'Transcof',
      thumbnail: '/img/projects/project-03.jpeg',
      category: 'Branding',
      release_date: '09/20/2017',
      author: 'Jennee Ales0',
      website: 'so-net.ne.jp',
      client: 'Torphy, Christiansen and Legros'
    },
    {
      id: 4,
      name: 'Lotlux',
      thumbnail: '/img/projects/project-04.jpeg',
      category: 'Branding',
      release_date: '05/02/2017',
      author: 'Linea Piaggia',
      website: 'dion.ne.jp',
      client: 'Walker Group'
    },
    {
      id: 5,
      name: 'Pannier',
      thumbnail: '/img/projects/project-05.jpeg',
      category: 'Branding',
      release_date: '06/24/2017',
      author: 'Marwin Hernik',
      website: 'sfgate.com',
      client: 'Carter, Conroy and Marvin'
    },
    {
      id: 6,
      name: 'Konklux',
      thumbnail: '/img/projects/project-06.jpeg',
      category: 'Illustration',
      release_date: '04/30/2017',
      author: 'Herculie Scone',
      website: 'hostgator.com',
      client: 'Kuphal, Waelchi and Grimes'
    },
    {
      id: 7,
      name: 'Pannier',
      thumbnail: '/img/projects/project-07.jpeg',
      category: 'Illustration',
      release_date: '07/28/2017',
      author: 'Emlen Giacobo',
      website: 'independent.co.uk',
      client: 'Homenick-Grady'
    },
    {
      id: 8,
      name: 'Voyatouch',
      thumbnail: '/img/projects/project-08.jpeg',
      category: 'Illustration',
      release_date: '11/29/2017',
      author: 'Vonnie Poytheras',
      website: 'hugedomains.com',
      client: 'Rodriguez-Prohaska'
    },
    {
      id: 9,
      name: 'Tresom',
      thumbnail: '/img/projects/project-09.jpeg',
      category: 'Illustration',
      release_date: '03/14/2017',
      author: 'Stacie Ledes',
      website: 'scribd.com',
      client: 'Pfannerstill-Feest'
    },
    {
      id: 10,
      name: 'Opela',
      thumbnail: '/img/projects/project-10.jpeg',
      category: 'Illustration',
      release_date: '10/04/2017',
      author: 'Thedrick Scading',
      website: 'w3.org',
      client: 'Wintheiser Inc'
    },
    {
      id: 11,
      name: 'Alphazap',
      thumbnail: '/img/projects/project-11.jpeg',
      category: 'Logo Design',
      release_date: '06/09/2017',
      author: 'Fredek Undrill',
      website: 'ameblo.jp',
      client: 'Hegmann LLC'
    },
    {
      id: 12,
      name: 'Tempsoft',
      thumbnail: '/img/projects/project-12.jpeg',
      category: 'Logo Design',
      release_date: '01/06/2017',
      author: 'Maury Rickeard',
      website: 'biglobe.ne.jp',
      client: 'Bergnaum, Botsford and Lueilwitz'
    },
    {
      id: 13,
      name: 'Aerified',
      thumbnail: '/img/projects/project-13.jpeg',
      category: 'Logo Design',
      release_date: '04/23/2017',
      author: 'Lindsy Fennessy',
      website: 'adobe.com',
      client: 'Abbott Inc'
    },
    {
      id: 14,
      name: 'Cardify',
      thumbnail: '/img/projects/project-14.jpeg',
      category: 'Logo Design',
      release_date: '03/20/2017',
      author: 'Vitia Cancellieri',
      website: 'lulu.com',
      client: 'Quitzon, Kohler and Cole'
    },
    {
      id: 15,
      name: 'Regrant',
      thumbnail: '/img/projects/project-15.jpeg',
      category: 'Logo Design',
      release_date: '01/08/2017',
      author: 'Glad Casarini',
      website: 'netlog.com',
      client: 'Altenwerth and Sons'
    },
    {
      id: 16,
      name: 'Toughjoyfax',
      thumbnail: '/img/projects/project-16.jpeg',
      category: 'Logo Design',
      release_date: '01/19/2017',
      author: 'Georgeanne Raatz',
      website: 'blog.com',
      client: 'Macejkovic-Murray'
    },
    {
      id: 17,
      name: 'Bitchip',
      thumbnail: '/img/projects/project-17.jpeg',
      category: 'Logo Design',
      release_date: '08/10/2017',
      author: 'Gerrard Kemer',
      website: 'typepad.com',
      client: 'Powlowski, Glover and Dach'
    },
    {
      id: 18,
      name: 'Bigtax',
      thumbnail: '/img/projects/project-18.jpeg',
      category: 'Video Production',
      release_date: '05/02/2017',
      author: 'Sammy Callander',
      website: 'upenn.edu',
      client: 'Cruickshank Group'
    },
    {
      id: 19,
      name: 'Solarbreeze',
      thumbnail: '/img/projects/project-19.jpeg',
      category: 'Video Production',
      release_date: '09/02/2017',
      author: 'Wright Downham',
      website: 'ucla.edu',
      client: 'Swaniawski-Ullrich'
    },
    {
      id: 20,
      name: 'Cardify',
      thumbnail: '/img/projects/project-20.jpeg',
      category: 'Video Production',
      release_date: '09/25/2017',
      author: 'Terrel Jacomb',
      website: 'soundcloud.com',
      client: "Jakubowski, O'Connell and Miller"
    }
  ]
}

export default config
