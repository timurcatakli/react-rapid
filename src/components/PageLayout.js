import React from 'react'
import PropTypes from 'prop-types'
import config from '../config'
import PageMainFooter from '../components/PageMainFooter'
import PageMainHeader from '../components/PageMainHeader'
import PageMainNav from '../components/PageMainNav'
import PageMobileNav from '../components/PageMobileNav'
import PageRoutes from '../components/PageRoutes'
import {
  Sidebar,
  Segment,
  Menu
} from 'semantic-ui-react'

const propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}

class PageLayout extends React.Component {
  render() {
    const { pages, siteLabel, siteLogoUrl, footer, socialMediaLinks, email, phone } = config
    const { copyrightYear } = footer
    const footerMessage = footer.message
    const { path } = this.props.match
    const activePage = this.findActivePage(pages)
    const { visible } = this.state
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            width="thin"
            visible={visible}
            icon="labeled"
            vertical
            inverted
          >
            <PageMobileNav subpages={pages} />
          </Sidebar>
          <Sidebar.Pusher>
            <PageMainNav
              subpages={pages}
              siteLabel={siteLabel}
              siteLogoUrl={siteLogoUrl}
              toggleVisibility={this.toggleVisibility}
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
              socialMediaLinks={socialMediaLinks}
              email={email}
              phone={phone}
            />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
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
  state = { visible: false }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })
}

PageLayout.propTypes = propTypes
export default PageLayout
