import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Card, CardActionArea, CardContent } from '../card';

export default function Experiences({ experiences }) {
	return (
		<Card>
			<CardActionArea style={{ marginLeft: '2rem', listStyle: 'bullet' }}>
				{experiences.map((input, index) => (
					<CardContent key={index}>
						<ReactMarkdown linkTarget='_blank' source={input} />
					</CardContent>
				))}
			</CardActionArea>
		</Card>
	);
}
