const config = {

  homepage: 'htts://www.siteurl.com',
  siteLabel: 'Site Label Goes Here',
  pages: [
    {label: 'About Us'},
    {label: 'Subpage A'},
    {label: 'Subpage B'},
    {label: 'Site Map'},
    {label: 'Contact Us'},
    {label: 'Terms and Conditions'},
    {label: 'Privacy Policy'}
  ],
  pages2: {
    aboutus: {
      label: 'About Us',
      path: '/aboutus'
    },
    aboutus1: {
      label: 'About Us1',
      path: '/subpage-a'
    },
    aboutus2: {
      label: 'About Us2',
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
