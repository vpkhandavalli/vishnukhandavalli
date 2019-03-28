import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Experiences({ experiences }) {
	return (
		<ul>
			{experiences.map((input, index) => (
				<li key={index} tabIndex={0}>
					<ReactMarkdown linkTarget='_blank' source={input} />
				</li>
			))}
		</ul>
	);
}
