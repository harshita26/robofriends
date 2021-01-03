import React, { Component } from 'react';
import {robots} from './robots';
import CardList from './CardList';
import Searchbox from './Searchbox';
import './App.css';
import Scroll from './Scroll';

class App extends Component{
   constructor(){
      super()
      this.state={
         robots:[],
         searchfield:''
      }
   }

   componentDidMount(){
      fetch('http://jsonplaceholder.typicode.com/users')
      .then(response=>{
         return response.json();
      })
      .then(users=> {this.setState({robots:users})});
      // this.setState({robots:robots});
   }

   onsearchchange=(event)=>{
      this.setState({searchfield:event.target.value})
      
   }

   render(){
      const filterrobot= this.state.robots.filter(robots=>{
         return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      })
      if (this.state.robots.length===0){
         return <h1>Loading...</h1>
      }else{
         return (
            <div>
               <h1 className='tc f1'>RoboFriend</h1>
               <Searchbox searchchange={this.onsearchchange}/>
               <Scroll>
                  <CardList robots={filterrobot}/>
               </Scroll>
            </div>
         );
      }
   };
}

export default App;