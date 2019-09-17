import React from 'react'
import { Section, Container, Heading, Box, Image } from 'react-bulma-components'

// CSS
import './style.css'

// Images
import opslevel from '../../images/opslevel.png'

export default class Experience extends React.Component {
  render() {
    return (
      <Section id="experience" className="background-coding">
        <Container>
          <Heading className="section-heading">Experience</Heading>
          <Box className="experience-item">
            <div className="experience-heading">
              <Image 
                size={24}
                src={opslevel}
              />
              <Heading 
                className="experience-title"
                subtitle
                size={4}
              >
                OpsLevel
              </Heading>
            </div>
            <p className="experience-stack">Ruby on Rails, Vue.js, JavaScript, SQL</p>
            <ul className="experience-subpoints">
              <li>
                Re-built the continuous integration pipeline to run tests and linting, using Gitlab CI runners and a DigitalOcean
                droplet, effectively reducing pipeline runtimes by nearly 300%
              </li>
              <li>
                Built a Slack Integration in Ruby on Rails that allowed clients to quickly query for their microservices stored in a
                database directly from Slack
              </li>
              <li>
                Engineered a notification system that alerts users when a service is failing certain checks, directly in the designated
                team’s Slack channel
              </li>
              <li>
                Created a system that authorized and processed webhooks sent by users through their continous deployment software,
                enabling users to easily update relevant microservice data
              </li>
            </ul>
          </Box>
        </Container>
      </Section>
    )
  }
}
