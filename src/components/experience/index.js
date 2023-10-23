import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Card, CardActionArea, CardListStyled } from '../card';

const CardActionAreaStyle = { marginLeft: '2rem', listStyle: 'bullet',  marginBottom: '1.5rem' };

export default function Experiences({ experiences }) {
	return (
		<Card>
			<CardActionArea style={CardActionAreaStyle}>
				{experiences.map((input, index) => (
					<CardListStyled key={index}>
						<ReactMarkdown linkTarget="_blank" source={input} />
					</CardListStyled>
				))}
			</CardActionArea>
		</Card>
	);
}
