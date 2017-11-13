const config = {

  homepage: 'htts://www.siteurl.com',
  siteLabel: 'Site Label Goes Here',
  pages: [
    {label: 'Home'},
    {label: 'Subpage A'},
    {label: 'Subpage B'},
    {label: 'Site Map'},
    {label: 'Contact Us'},
    {label: 'Terms and Conditions'},
    {label: 'Privacy Policy'}
  ],
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
