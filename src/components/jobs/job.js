import React from 'react';
import PropTypes from 'prop-types';

const Job = ({
	description = '',
	responsibilities = '',
	alias = '',
	location = '',
	url = '',
	role = '',
	from = '',
	to = ''
}) => (
	<div className="job" tabIndex={0}>
		<div className="item title">
			<span className="url">
				<a href={url} target="_blank" rel="noopener noreferrer">
					{alias}
				</a>
			</span>
			{' · '}
			<span className="role">{role}</span>
		</div>
		<div className="item secondary-title" tabIndex={0}>
			{location} · {from} to {to}
		</div>
		<div className="item content">
			{responsibilities}
			<ul>{description.map((item, index) => <li key={index}>{item}</li>)}</ul>
		</div>
	</div>
);

Job.displayName = 'Job';

Job.propTypes = {
	description: PropTypes.array,
	responsibilities: PropTypes.string,
	alias: PropTypes.string,
	location: PropTypes.string,
	url: PropTypes.string,
	role: PropTypes.string,
	from: PropTypes.string,
	to: PropTypes.string
};

export default Job;
