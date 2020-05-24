class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          gameList:[]
      }
    }
    componentDidMount(){
        fetch('https://games-app-siit.herokuapp.com/games')
            .then(response =>{
                return response.json();
            })
            .then(games =>{
                console.log('gamesaici',{gameList:games})
                this.setState({gameList:games})
            })       
    }
    render() {
        console.log("aici e render    ",this.state.gameList)
        const listGames= this.state.gameList.map((game,i) =>{
            return(
                <Game
                    key={game.toString()}
                    title={game.title}
                    description={game.description}
                    imageUrl ={game.imageUrl}
                />
            )
        })
        return ( 
        <div>
          {listGames}
          {/* <Game /> */}
        </div>
      )
    }
  }

//   return(<div>
//     title={game.title}
//     description={game.description}
//     imageUrl ={game.imageUrl}
// </div>)

// title={game.title}
// description={game.description}
// imageUrl ={game.imageUrl}

 //   const games = [
    //     { id:'1' ,title: 'title1', content: 'content1' },
    //     { id:'2',title: 'title2', content: 'content2' },
    //     { id:'3',title: 'title3', content: 'content3' },
    //     { id:'4',title: 'title4', content: 'content4' },
    //   ]
    //   const listGames = games
    //     .map(game => (
    //       <Game
    //         title={game.title}
    //         description={game.description}
    //         imageUrl ={game.imageUrl}
    //       />));
