import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const propTypes = {
  label: PropTypes.string.isRequired
}


const SubPageBreadCrumb = ({label}) => (
  <Breadcrumb>
    <Breadcrumb.Section link name="home" as={NavLink} exact to="/">Home</Breadcrumb.Section>
    <Breadcrumb.Divider icon="right angle" />
    <Breadcrumb.Section link name="home" as={NavLink} exact to="/aboutus">{label}</Breadcrumb.Section>
  </Breadcrumb>
)


SubPageBreadCrumb.defaultProps = {
  label: 'Page Label Goes Here'
}
SubPageBreadCrumb.propTypes = propTypes
export default SubPageBreadCrumb
