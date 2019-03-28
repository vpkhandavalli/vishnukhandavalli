import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Card, CardActionArea, CardContent } from '../card';

const overrideStyle = [
	{
		CardActionArea: {
			backgroundColor: '#503e73',
			color: 'white'
		},
		CardContent: {}
	},
	{
		CardActionArea: {
			backgroundColor: '#a8a6a6',
			color: 'white'
		}
	},
	{
		CardActionArea: {
			backgroundColor: 'transparent',
			color: 'black'
		}
	}
];

export default function Jobs({ jobs }) {
	return (
		<ul className="jobs">
			{jobs.map(
				({
					description = '',
					responsibilities = '',
					alias = '',
					location = '',
					url = '',
					role = '',
					from = '',
					to = ''
				}) => {
					return (
						<Card>
							<CardActionArea style={overrideStyle[0].CardActionArea}>
								<CardContent>
									<a href={url} target="_blank" rel="noopener noreferrer">
										{alias}
									</a>{' '}
									· {role}
								</CardContent>
							</CardActionArea>
							<CardActionArea style={overrideStyle[1].CardActionArea}>
								<CardContent>
									{location} · {from} to {to}
								</CardContent>
							</CardActionArea>
							<CardActionArea style={overrideStyle[2].CardActionArea}>
								<CardContent>
									{responsibilities}
									<ul>
										{description.map((input, index) => (
											<li key={index}>
												<ReactMarkdown linkTarget='_blank' source={input} />
											</li>
										))}
									</ul>
								</CardContent>
							</CardActionArea>
						</Card>
					);
				}
			)}
		</ul>
	);
}
