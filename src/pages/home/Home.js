import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <Link to="/subpage-a">SubPage A</Link>
    &nbsp; &nbsp; &nbsp;
    <Link to="/subpage-b">SubPage B</Link>
    <p>This is the Home Page</p>
  </div>
)

export default Home
