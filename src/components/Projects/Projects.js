import React from 'react'
import { Section, Container, Heading, Card, Columns, Image } from 'react-bulma-components'

// CSS
import './style.css'

// Images
// TODO: Add the two images for RemindMe! and BudgetBuddy
import personalWebsite from '../../images/personal_website.png'
import aggregate from '../../images/aggregate.png'

export default class Projects extends React.Component {
  render() {
    return (
      <Section id="projects" className="background-skyline">
        <Container>
          <Heading className="section-heading">Projects</Heading>
          <Columns>
            <Columns.Column size="one-half">
              <a href="https://github.com/pkrshnan/personal-website" target="_blank">
                <Card className="project-card">
                  <Image src={personalWebsite} />
                  <Card.Content>
                    <Heading size={5}>Personal Website</Heading>
                    <p className="project-stack">React</p>
                    <p className="project-subpoints">
                      A single-page web portfolio built using Bulma CSS and React.
                    </p>
                  </Card.Content>
                </Card>
              </a>
            </Columns.Column>
            <Columns.Column size="one-half">
              <a href="https://github.com/pkrshnan/aggregate" target="_blank">
                <Card className="project-card">
                  <Image src={aggregate} />
                  <Card.Content>
                    <Heading size={5}>Aggregate</Heading>
                    <p className="project-stack">Vue, Heroku</p>
                    <p className="project-subpoints">
                      A news aggregator built using Vue and hosted on Heroku, collecting the latest articles from Google News, Hacker News and Reddit.
                    </p>
                  </Card.Content>
                </Card>
              </a>
            </Columns.Column>
          </Columns>
          <Columns>
            <Columns.Column size="one-half">
              <a href="https://github.com/pkrshnan/remindme" target="_blank">
                <Card className="project-card">
                  <Image src={personalWebsite} />
                  <Card.Content>
                    <Heading size={5}>RemindMe!</Heading>
                    <p className="project-stack">Java, Android Studio</p>
                    <p className="project-subpoints">
                      A reminders application that allows you to set a location for each reminder, and subsequently notifies you when you arrive at that location.
                    </p>
                  </Card.Content>
                </Card>
              </a>
            </Columns.Column>
            <Columns.Column size="one-half">
              <a href="https://github.com/pkrshnan/budgetbuddy-java" target="_blank">
                <Card className="project-card">
                  <Image src={personalWebsite} />
                  <Card.Content>
                    <Heading size={5}>BudgetBuddy</Heading>
                    <p className="project-stack">React Native, Java</p>
                    <ul className="project-subpoints">
                      A proactive budgeting application that personalizes a budget for you based on prior spending habits. Created at a hackathon and won a $1000 prize.
                    </ul>
                  </Card.Content>
                </Card>
              </a>
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
    )
  }
}
