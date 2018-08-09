import React from "react"

import Job from "./job"
import JSON from "./jobs.json"

const Jobs = () =>
  JSON.map(job => [<Job key={job.id} {...job} />, <hr key={job.id + 'break'} className="job-break" />])

export default Jobs
