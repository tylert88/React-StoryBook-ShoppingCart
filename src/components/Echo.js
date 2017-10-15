import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'


const EchoInput = ({ text, handler }) => (
  <div className="container">
    <p> <b>Type Below</b>
      <input
        value={ text }
        onChange={ handler }
        />
    </p>
    { text }
  </div>
)

class Echo extends React.Component {

  constructor(props) {
    super(props)
    this.state = { greeting: props.original }
  }

  inputWasChanged = (e) => {
    this.setState({greeting: e.target.value})
  }

  render() {
    return <EchoInput text={ this.state.greeting } handler={ this.inputWasChanged } />
  }

}

export default Echo
