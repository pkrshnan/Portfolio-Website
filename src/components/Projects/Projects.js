import React from 'react'
import { Section, Container, Heading, Card, Columns } from 'react-bulma-components'
import './style.css'

export default class Projects extends React.Component {
  render() {
    return (
      <Section id="projects" className="background-skyline">
        <Container>
          <Heading className="section-heading">Projects</Heading>
          <Card className="project-card-left">
            <Card.Content>
              <Heading size={5}>Personal Website</Heading>
              <ul className="project-subpoints">
                <li>Amet quia deleniti doloremque commodi id, incidunt, magni psam praesentium dignissimos labore repellat. Est earum explicabo?</li>
                <li>Lorem accusamus velit libero non labore illo facilis possiccusamus fugit vitae voluptates ipsum dolorum Tempora unde aliquid!</li>
                <li>Dolor ipsum labore a velit excepturi Voluptate aliquam quadit sed consectetur delectus officia. Et explicabo ab nesciunt?</li>
              </ul>
            </Card.Content>
          </Card>
          <Card className="project-card-right">
            <Card.Content>
              <Heading size={5}>Aggregate</Heading>
              <ul className="project-subpoints">
                <li>Amet quia deleniti doloremque commodi id, incidunt, magni psam praesentium dignissimos labore repellat. Est earum explicabo?</li>
                <li>Lorem accusamus velit libero non labore illo facilis possiccusamus fugit vitae voluptates ipsum dolorum Tempora unde aliquid!</li>
                <li>Dolor ipsum labore a velit excepturi Voluptate aliquam quadit sed consectetur delectus officia. Et explicabo ab nesciunt?</li>
              </ul>
            </Card.Content>
          </Card>
          <Card className="project-card-left">
            <Card.Content>
              <Heading size={5}>RemindMe!</Heading>
              <ul className="project-subpoints">
                <li>Amet quia deleniti doloremque commodi id, incidunt, magni psam praesentium dignissimos labore repellat. Est earum explicabo?</li>
                <li>Lorem accusamus velit libero non labore illo facilis possiccusamus fugit vitae voluptates ipsum dolorum Tempora unde aliquid!</li>
                <li>Dolor ipsum labore a velit excepturi Voluptate aliquam quadit sed consectetur delectus officia. Et explicabo ab nesciunt?</li>
              </ul>
            </Card.Content>
          </Card>
          <Card className="project-card-right">
            <Card.Content>
              <Heading size={5}>BudgetBuddy</Heading>
              <ul className="project-subpoints">
                <li>Amet quia deleniti doloremque commodi id, incidunt, magni psam praesentium dignissimos labore repellat. Est earum explicabo?</li>
                <li>Lorem accusamus velit libero non labore illo facilis possiccusamus fugit vitae voluptates ipsum dolorum Tempora unde aliquid!</li>
                <li>Dolor ipsum labore a velit excepturi Voluptate aliquam quadit sed consectetur delectus officia. Et explicabo ab nesciunt?</li>
              </ul>
            </Card.Content>
          </Card>
        </Container>
      </Section>
    )
  }
}
