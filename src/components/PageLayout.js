import React from 'react'
import PropTypes from 'prop-types'
import config from '../config'
import PageMainFooter from '../components/PageMainFooter'
import PageMainHeader from '../components/PageMainHeader'
import PageMainNav from '../components/PageMainNav'
import PageMobileHeader from '../components/PageMobileHeader'
import PageMobileNav from '../components/PageMobileNav'
import PageRoutes from '../components/PageRoutes'
import {
  Grid,
  Sidebar,
  Segment
} from 'semantic-ui-react'

const propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}

class PageLayout extends React.Component {
  render() {
    const { pages, siteLabel, siteLogoUrl, copyrightYear } = config
    const { path } = this.props.match
    const { visible } = this.state
    const activePage = this.findActivePage(pages)

    return (
      <div style={{ backgroundColor: '#f9f9f9' }}>
        <Sidebar.Pushable as={Segment}>
          <PageMobileNav visible={visible} subpages={pages} />
          <Sidebar.Pusher>
            <Grid>
              <Grid.Row only="mobile">
                <Grid.Column>
                  <PageMobileHeader siteLabel={siteLabel} siteLogoUrl={siteLogoUrl} toggleVisibility={this.toggleVisibility} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <PageMainNav subpages={pages} siteLabel={siteLabel} siteLogoUrl={siteLogoUrl} />
            <PageMainHeader activePage={activePage} />
            <PageRoutes path={path} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <PageMainFooter siteLabel={siteLabel} copyrightYear={copyrightYear} />
      </div>
    )
  }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  findActivePage = pageList => {
    const activePageMatch = Object.keys(pageList).filter(page => {
      return pageList[page].path === this.props.match.path
    })
    const activePage = pageList[activePageMatch[0]]
    return activePage
  }
  state = { visible: false }
}

PageLayout.propTypes = propTypes
export default PageLayout
