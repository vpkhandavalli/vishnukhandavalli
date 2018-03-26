import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import Flip from "react-reveal/Flip"

import withToggle from "../hoc/withToggle"

const noop = () => {}

const Job = ({
  description = "",
  responsibilities = "",
  alias = "",
  location = "",
  url = "",
  role = "",
  from = "",
  to = "",
  toggle = noop,
  toggleState = false,
}) => (
  <div className="job">
    <h3 onClick={toggle} tabIndex={0}>
      <span className="url">
        <a href={url} target="_blank">
          {alias}
        </a>
      </span>
      {" · "}
      <span className="role">{role}</span>
      {" · "}
      <span className="toggle pointer">
        <i
          className={classnames(
            "far",
            { "fa-minus-square": toggleState },
            { "fa-plus-square": !toggleState },
          )}
        />
      </span>
    </h3>
    <h4>
      {location} · {from} to {to}
    </h4>
    <div className={classnames("toggle", { open: toggleState })}>
      {toggleState ? (
        <Flip duration={450} bottom>
          <p tabIndex={0}>{responsibilities}</p>
          <p tabIndex={0} dangerouslySetInnerHTML={{ __html: description }} />
        </Flip>
      ) : null}
    </div>
  </div>
)

Job.displayName = "Job"

Job.propTypes = {
  description: PropTypes.string,
  responsibilities: PropTypes.string,
  alias: PropTypes.string,
  location: PropTypes.string,
  url: PropTypes.string,
  role: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  toggle: PropTypes.func,
  toggleState: PropTypes.bool,
}

export default withToggle(Job)
