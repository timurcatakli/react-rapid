import React from 'react'
import PropTypes from 'prop-types'
import {
  Segment
} from 'semantic-ui-react'

const propTypes = {
  siteLabel: PropTypes.string.isRequired,
  copyrightYear: PropTypes.string.isRequired
}

const PageMainFooter = (props) => {
  const {siteLabel, copyrightYear} = props
  return (
    <div className="subpage-footer">
      <Segment vertical textAlign="center">
        © {copyrightYear} - {siteLabel}
      </Segment>
    </div>
  )
}

PageMainFooter.propTypes = propTypes
export default PageMainFooter
