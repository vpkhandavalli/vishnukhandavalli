import React from "react";

import Job from "./job";
import JSON from "./jobs.json";

const Jobs = () => (
  <div id="jobs">{JSON.reverse().map(job => <Job {...job} />)}</div>
);

export default Jobs;
