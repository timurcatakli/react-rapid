const config = {
  homepage: 'http://www.siteurl.com',
  siteLabel: 'ACME Corp',
  siteLogoUrl: 'https://react.semantic-ui.com/logo.png',
  footer: {
    message:
      'Extra space for a call to action inside the footer that could help re-engage users.',
    copyrightYear: 2017
  },
  pages: {
    aboutus: {
      component: 'AboutUs',
      label: 'About Us',
      subTitle:
        'About Us unc gravida tellus eget odio molestie eleifend feugiat non lorem.',
      path: '/aboutus'
    },
    portfolio: {
      component: 'Portfolio',
      label: 'Portfolio',
      subTitle:
        'Portfolio Nunc gravida tellus eget odio molestie eleifend feugiat non lorem.',
      path: '/portfolio'
    },
    services: {
      component: 'Services',
      label: 'Services',
      subTitle:
        'Services Nunc gravida tellus eget odio molestie eleifend feugiat non lorem.',
      path: '/services'
    },
    contactus: {
      component: 'ContactUs',
      label: 'Contact Us',
      subTitle:
        'Contact Us Nunc gravida tellus eget odio molestie eleifend feugiat non lorem.',
      path: '/contact'
    }
  },
  // Web analytics settings
  analytics: {
    google: { trackingID: 'UA-XXXXX-Y' }
  },
  // Deployment settings
  deployment: {
    repository: 'https://github.com/kriasoft/react-app.git',
    branch: 'gh-pages'
  }
}

export default config
