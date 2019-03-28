import React from 'react';

import useEndpoint from '../../helpers/useEndpoint';

import Job from './job';

import './jobs.scss';

export const apiUrl = '/content/jobs.json';

export default function Jobs() {
	const jobs = useEndpoint({
		method: 'GET',
		url: apiUrl
	});
	if (jobs.error) {
		return <h2>Error</h2>;
	}
	if (jobs.pending) {
		return <h2>Loading...</h2>;
	}
	if (!jobs.data) {
		return <h2>No jobs</h2>;
	}
	return (
		<section className="jobs">
			{jobs.data.map((job) => {
				return <Job key={job.id} {...job} />;
			})}
		</section>
	);
}
