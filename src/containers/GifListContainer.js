import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


// // https://api.giphy.com/v1/gifs/search?q=`Query`&api_key=dc6zaTOxFJmzC&rating=g


class GifListContainer extends React.Component {

    state = {
        gifs: [],
    }

    renderGifs = query => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
          .then(res => res.json())
          .then(({data}) => {this.setState({ 
              gifs: data.map( x => ({ url: x.images.original.url }) ) })
          })
      }

    componentDidMount() {
        this.renderGifs()
    }

    render() {
       console.log(this.state.gifs)
        return(
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch renderGifs={this.renderGifs}/>
            </div>
        )
    }
}

export default GifListContainer