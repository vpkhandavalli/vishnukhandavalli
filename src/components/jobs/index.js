import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Card, CardListStyled, CardActionArea, CardContent } from '../card';

const CardStyle = {
	fontSize: 'inherit',
	marginBottom: '2rem',
	boxShadow: '3px -1px 6px 3px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.1) inset',
	justifyContent: 'center',
	flexDirection: 'column'
};
const Rows = [
	{
		CardActionArea: {
			backgroundColor: '#333',
			color: 'white',
			padding: '0 2rem'
		},
		CardContent: {}
	},
	{
		CardActionArea: {
			backgroundColor: '#585858',
			color: 'white',
			padding: '0 2rem'
		}
	},
	{
		CardActionArea: {
			backgroundColor: 'transparent',
			color: 'black',
			padding: '0 2rem'
		}
	}
];

export default function Jobs({ jobs }) {
	return (
		<React.Fragment>
			{jobs.map(
				({
					id = null,
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
						<Card key={id} style={CardStyle}>
							<CardActionArea style={Rows[0].CardActionArea}>
								<CardContent>
									<a href={url} target="_blank" rel="noopener noreferrer">
										{alias}
									</a>{' '}
									· {role}
								</CardContent>
							</CardActionArea>
							<CardActionArea style={Rows[1].CardActionArea}>
								<CardContent>
									{from} to {to} · {location}
								</CardContent>
							</CardActionArea>
							<CardActionArea style={Rows[2].CardActionArea}>
								<ReactMarkdown linkTarget="_blank" source={responsibilities} />
								<CardContent>
									<ul>
										{description.map((input, index) => (
											<CardListStyled key={index} tabIndex={0}>
												<ReactMarkdown linkTarget="_blank" source={input} />
											</CardListStyled>
										))}
									</ul>
								</CardContent>
							</CardActionArea>
						</Card>
					);
				}
			)}
		</React.Fragment>
	);
}
