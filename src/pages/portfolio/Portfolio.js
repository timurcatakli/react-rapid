import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Segment,
  Container,
  Card,
  Image,
  Divider,
  Button
} from 'semantic-ui-react'
import config from '../../config'

const propTypes = {}

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedCategory: 'All' }
  }

  renderProjectsHeader = () => {
    const projects = this.countProjects(config.projects)
    const { selectedCategory } = this.state
    const activeColor = 'olive'
    const deActiveColor = 'linkedin'
    let categoryCount = 0
    const result = Object.keys(projects).map(category => {
      categoryCount += projects[category]
      const buttonColor =
        category === selectedCategory ? activeColor : deActiveColor
      return (
        <Button
          key={category}
          onClick={this.handleProjectSelect}
          color={buttonColor}
        >
          {category}
        </Button>
      )
    })

    result.unshift(
      <Button
        key={'All'}
        color={selectedCategory === 'All' ? activeColor : deActiveColor}
        onClick={this.handleProjectSelect}
      >
        All
      </Button>
    )
    return result
  }

  renderProjects = (category, projects) => {
    let results = [...projects]
    if (this.state.selectedCategory !== 'All') {
      results = projects.filter(project => {
        return project.category === category
      })
    }
    return results.map((project) => {
      return (
        <Card color="olive" key={project.id}>
          <Image src={project.thumbnail} />
          <Card.Content>
            <Card.Header>{project.name}</Card.Header>
          </Card.Content>
          <Card.Content extra>{project.category}</Card.Content>
        </Card>
      )
    })
  }

  render() {
    const { selectedCategory } = this.state
    const { projects } = config
    return (
      <div>
        <Segment basic>
          <Container textAlign="center">
            {this.renderProjectsHeader()}
            <Divider />
            <Card.Group textAlign="center" itemsPerRow="3">
              {this.renderProjects(selectedCategory, projects)}
            </Card.Group>
          </Container>
        </Segment>
      </div>
    )
  }

  handleProjectSelect = (event, data) => {
    this.setState({ selectedCategory: data.children })
  }

  countProjects = projects => {
    const results = {}
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i]
      const { category } = project
      if (results[category] === undefined) {
        results[category] = 1
      } else {
        results[category] += 1
      }
    }
    return results
  }
}

Portfolio.propTypes = propTypes
export default Portfolio
