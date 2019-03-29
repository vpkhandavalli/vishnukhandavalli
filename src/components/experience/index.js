import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Card, CardActionArea, CardContent } from '../card';

const CardActionAreaStyle = { marginLeft: '2rem', listStyle: 'bullet',  marginBottom: '1.5rem' };

export default function Experiences({ experiences }) {
	return (
		<Card>
			<CardActionArea style={CardActionAreaStyle}>
				{experiences.map((input, index) => (
					<CardContent key={index}>
						<ReactMarkdown linkTarget="_blank" source={input} />
					</CardContent>
				))}
			</CardActionArea>
		</Card>
	);
}
