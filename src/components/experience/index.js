import React from 'react';
import ReactMarkdown from 'react-markdown';

import useEndpoint from '../../helpers/useEndpoint';

export const apiUrl = '/content/experience.json';

export default function results() {
	const results = useEndpoint({
		method: 'GET',
		url: apiUrl
	});
	if (results.error) {
		return <h2>Error</h2>;
	}
	if (results.pending) {
		return <h2>Loading...</h2>;
	}
	if (!results.data) {
		return <h2>No results</h2>;
	}
	return (
		<ul>
			{results.data.map((input) => (
				<li tabIndex={0}>
					<ReactMarkdown linkTarget='_blank' source={input} />
				</li>
			))}
		</ul>
	);
}
