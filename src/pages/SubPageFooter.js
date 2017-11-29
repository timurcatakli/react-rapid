import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import config from '../config'

export default class SubPageNavigation extends Component {
  render() {
    return (
      <div className="subpage-footer">
        <Segment vertical textAlign="center">
          © {config.copyrightYear} - {config.siteLabel}
        </Segment>
      </div>
    )
  }
}
