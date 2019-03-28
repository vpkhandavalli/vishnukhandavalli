import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Card, CardActionArea, CardContent } from '../card';

const overrideStyle = {
	Card: {
		fontSize: 'inherit',
		marginBottom: '1.5rem',
		boxShadow: '3px -1px 6px 3px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.1) inset',
		justifyContent: 'center',
		flexDirection: 'column'
	},
	JobRows: [
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
	]
};

export default function Jobs({ jobs }) {
	return (
		<>
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
						<Card style={overrideStyle.Card}>
							<CardActionArea style={overrideStyle.JobRows[0].CardActionArea}>
								<CardContent>
									<a href={url} target="_blank" rel="noopener noreferrer">
										{alias}
									</a>{' '}
									· {role}
								</CardContent>
							</CardActionArea>
							<CardActionArea style={overrideStyle.JobRows[1].CardActionArea}>
								<CardContent>
									{location} · {from} to {to}
								</CardContent>
							</CardActionArea>
							<CardActionArea style={overrideStyle.JobRows[2].CardActionArea}>
								<CardContent>
									{responsibilities}
									<ul>
										{description.map((input, index) => (
											<li key={index} tabIndex={0}>
												<ReactMarkdown linkTarget="_blank" source={input} />
											</li>
										))}
									</ul>
								</CardContent>
							</CardActionArea>
						</Card>
					);
				}
			)}
		</>
	);
}
