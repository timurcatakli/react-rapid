import React from 'react'
import { Link } from 'react-router-dom'

const SubPageNavigation = () => (
  <div>
    <Link to="/">Home</Link>
    &nbsp; &nbsp; &nbsp;
    <Link to="/subpage-a">Subpage A</Link>
    &nbsp; &nbsp; &nbsp;
    <Link to="/subpage-b">Subpage B</Link>
  </div>
)

export default SubPageNavigation
