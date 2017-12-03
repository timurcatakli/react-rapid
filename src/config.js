const config = {
  homepage: 'http://www.siteurl.com',
  siteLabel: 'ACME Corp',
  siteLogoUrl: 'https://react.semantic-ui.com/logo.png',
  copyrightYear: 2017,
  menuCallToAction: {
    active: true,
    message: 'CALL US 1.369.741.2580',
    icon: 'phone'
  },
  pages: {
    aboutus: {
      component: 'AboutUs',
      label: 'About Us',
      subTitle: 'LOREM IPSUM DOLOR SIT AMET CONSECTETUR',
      path: '/aboutus'
    },
    aboutus1: {
      component: 'AboutUs',
      label: 'About Us1',
      subTitle: 'LOREM IPSUM DOLOR SIT AMET CONSECTETUR1',
      path: '/subpage-a'
    },
    aboutus2: {
      component: 'AboutUs',
      label: 'About Us2',
      subTitle: 'LOREM IPSUM DOLOR SIT AMET CONSECTETUR2',
      path: '/subpage-b'
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
