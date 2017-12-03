import React from 'react'
import PropTypes from 'prop-types'
import config from '../config'
import PageMainFooter from '../components/PageMainFooter'
import PageMainHeader from '../components/PageMainHeader'
import PageMainNav from '../components/PageMainNav'
import PageRoutes from '../components/PageRoutes'
const propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}

class PageLayout extends React.Component {
  render() {
    const { pages, siteLabel, siteLogoUrl, footer } = config
    const { copyrightYear } = footer
    const footerMessage = footer.message
    const { path } = this.props.match
    const activePage = this.findActivePage(pages)

    return (
      <div>
        <PageMainNav
          subpages={pages}
          siteLabel={siteLabel}
          siteLogoUrl={siteLogoUrl}
        />
        <PageMainHeader activePage={activePage} />
        <PageRoutes path={path} />
        <PageMainFooter
          subpages={pages}
          siteLabel={siteLabel}
          siteLogoUrl={siteLogoUrl}
          siteLabel={siteLabel}
          copyrightYear={copyrightYear}
          message={footerMessage}
        />
      </div>
    )
  }

  findActivePage = pageList => {
    const activePageMatch = Object.keys(pageList).filter(page => {
      return pageList[page].path === this.props.match.path
    })
    const activePage = pageList[activePageMatch[0]]
    return activePage
  }
}

PageLayout.propTypes = propTypes
export default PageLayout
