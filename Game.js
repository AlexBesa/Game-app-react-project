class Game extends React.Component {
    constructor(props) {
      super(props)

    }
    render() {
      return (
        <div id={this.props._id} className="games">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          <img alt='photo' src ={this.props.imageUrl}/>
        </div>
      )
    }
  }
  