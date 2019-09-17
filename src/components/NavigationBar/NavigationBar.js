import React from 'react'
import { Navbar } from 'react-bulma-components'

export default class NavigationBar extends React.Component {
  state = { active: false }

  handleOpen = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  }

  render() {
    return (
      <Navbar 
        color="primary"
        active={this.state.active}
        transparent={true}
        className="is-spaced"
        style={{backgroundColor: 'rgba(0,0,0,0)'}}
      >
        <Navbar.Brand>
          <Navbar.Item href="#home">Pranav Krishnan</Navbar.Item>
          <Navbar.Burger 
            active={this.state.active}
            onClick={this.handleOpen} 
          />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container position="end">
            <Navbar.Item href="#home">About</Navbar.Item>
            <Navbar.Item href="#experience">Experience</Navbar.Item>
            <Navbar.Item href="#projects">Projects</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    )
  }
}
