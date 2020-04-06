import React from 'react'

class GifSearch extends React.Component {

    state = {
      testing: "",
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.renderGifs(this.state.testing)
      }
    
      render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit} >
              <input type="text" name="testing" value={this.state.testing} onChange={event => this.setState({testing: event.target.value})} />
            </form>
          </div>
        )
      }
    
    }
    
    export default GifSearch
    
    