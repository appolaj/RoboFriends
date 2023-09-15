import React,{Component} from "react";
import Cardlist from "../components/Cardlist";
import Scroll from "../components/Scroll";
import Searchbox from '../components/Searchbox';
import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots:[],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            return response.json();
        })
        .then(users=>{
            this.setState({robots:users})
        })
        
    }

    onSearchChange = (event) => {
       this.setState({searchfield:event.target.value})
       
       
    }


    render(){
        const filteredrobots = this.state.robots.filter(
            robots =>{ return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());

            }
        )
    
        if(!this.state.robots.length)
        {return <h1 className="tc">Loading</h1>}
        else{
            return(
    <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <Searchbox SearchChange={this.onSearchChange}/>
        <Scroll>
            <ErrorBoundry>    
                <Cardlist robots={filteredrobots}/>
            </ErrorBoundry>    
        </Scroll>

    </div>
        

    );
            }
}
}
export default App;