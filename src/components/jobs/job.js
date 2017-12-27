import React from "react";

const Job = ({
  description,
  responsibilities,
  alias,
  location,
  url,
  role,
  from,
  to,
}) => (
  <div>
    <h4>
      <span className="strong">
        <a href={url} target="_blank">
          {alias}
        </a>
      </span>{" "}
      · {role}
    </h4>
    <h4 className="strong">{responsibilities}</h4>
    <i>
      {location} · {from} to {to}
    </i>
    <p
      className="description"
      dangerouslySetInnerHTML={{ __html: description }}
    />
    <br />
  </div>
);

export default Job;
