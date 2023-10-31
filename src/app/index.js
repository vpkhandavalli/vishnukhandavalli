import React, { Component } from 'react';

import Jobs from '../components/jobs';
import Experience from '../components/experience';
import PersonalProjects from '../components/personal-projects';

import experiences from '../constants/experiences';
import jobs from '../constants/jobs';
import { Card, CardActionArea, CardContent } from '../components/card';

import './app.scss';

class App extends Component {
	render() {
		return (
			<div className="app">
				<h1 className="title" tabIndex={0}>
					Vishnu
				</h1>
				<section className="outlinks">
					<Card style={{ alignItems: 'flex-end' }}>
						<CardContent style={{ listStyle: 'none' }}>
							<a
								href="https://www.github.com/azz0r"
								rel="noopener noreferrer"
								target="_blank"
								tabIndex={0}
							>
								Github
							</a>
							{' · '}
							<a
								href="https://www.linkedin.com/in/aaron-lote/"
								rel="noopener noreferrer"
								target="_blank"
								tabIndex={0}
							>
								LinkedIn
							</a>
						</CardContent>
						<CardContent style={{ listStyle: 'none' }}>
							<a href="mailto:aaron.lote@gmail.com" tabIndex={0}>
								Email me
							</a>
						</CardContent>
					</Card>
				</section>
				<section className="content">
					<Card>
						<CardActionArea>
							<CardContent style={{ marginBottom: '1.5rem' }}>
								I'm a London based web developer with 15 years commercial experience working
								companies of all sizes to deliver high quality web experiences to millions of customers.
							</CardContent>
							<CardContent style={{ marginBottom: '1.5rem' }}>
								With my varied experience I have a valuable ability to understand a task from the
								perspective of a front or backend developer, a product owner or a scrum master.
							</CardContent>
							<CardContent style={{ marginBottom: '1.5rem' }}>
								I’m experienced with implementing standards and processes to improve workflows and
								productivity for both developers and web dev leaders.
							</CardContent>
						</CardActionArea>
					</Card>
					<br />
					<Experience experiences={experiences} />
					<PersonalProjects />
				</section>
				<section className="jobs">
					<Jobs jobs={jobs} />
				</section>
			</div>
		);
	}
}

export default App;
