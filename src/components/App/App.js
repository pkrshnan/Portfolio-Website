import React from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Heading, Container, Hero } from 'react-bulma-components'

import NavigationBar from '../NavigationBar/NavigationBar'
import Experience from '../Experience/Experience'
import Projects from '..//Projects/Projects'

import './App.css';

function App() {
  return (
    <div className="site">
    <div className="background-toronto">
      <NavigationBar />
      <Hero 
        size="large" 
        color="primary"
        style={{backgroundColor: 'rgba(0,0,0,0)'}}
        id="home"
      >
        <Hero.Body>
          <Container>
            <Heading subtitle size={6}>Hi, my name is</Heading>
            <Heading size={1}>Pranav Krishnan</Heading>
            <Heading subtitle size={4}>
              I'm a Computer Science student at the University of Waterloo. I have a passion for data science, e-sports, and creating awesome software.
            </Heading>
          </Container>
        </Hero.Body>
      </Hero>
    </div>
    <Experience />
    <Projects />
  </div>
  );
}

export default App;
