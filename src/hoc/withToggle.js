import React from "react"

const withToggle = PassedComponent =>
  class WithToggle extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        toggleState: false,
      }
    }
    toggle = () => {
      this.setState({
        toggleState: !this.state.toggleState,
      })
    }
    render() {
      return (
        <PassedComponent
          {...this.props}
          toggle={this.toggle}
          toggleState={this.state.toggleState}
        />
      )
    }
  }

export default withToggle
