import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './component/card-list/cardlist.component';
import { SearchBox } from './component/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
    this.state={name:"Hi Aniket here",
          members:[],
          searchField:''
    }
  }

  componentDidMount(){

    const getUserData = async ()=>{
      const userData = await fetch('https://jsonplaceholder.typicode.com/users')
      const userDataObject = await userData.json()
      this.setState({members:userDataObject})
    }
      getUserData()
  }

  /* changeLiPara(id) {
    let member= this.state.members.filter( (member)=> member.id=== id ) 
    member.name="Santosh";
  } */

  handleChange = (e)=>{
    this.setState({searchField: e.target.value})
  }
 
  render(){

    const {members , searchField} = this.state
    const filterArray = members.filter( member => member.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1> Monster card </h1> 
       <SearchBox placeholder="search member"  handleChange= {this.handleChange} />
       <CardList members={filterArray} />     
    </div>
    )
  }

 


}





export default App;
