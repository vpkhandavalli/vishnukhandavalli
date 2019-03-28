import React from 'react';

import Job from './job';

import './jobs.scss';

export default function Jobs({ jobs }) {
	return (
		<ul className="jobs">
			{jobs.map((job) => {
				return <li key={job.id} className="job-container"><Job {...job} /></li>;
			})}
		</ul>
	);
}
