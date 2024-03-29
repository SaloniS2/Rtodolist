import React,{Component} from 'react';
import './mystyles.css'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }

//function for local storage
updateInput(key,value){
  //update react state
  this.setState({
    [key]:value
  });
}

//Creating addItem function
addItem(){
  //create item with unique id
  const newItem={
    id:1+Math.random(),
    value:this.state.newItem.slice()
  };

  //copy of the current list using spread operator
  const list=[...this.state.list];

  //add newitem to the list
  list.push(newItem);

  //update state with new list and reset newItem input
  this.setState({
    list,
    newItem:""
  });
}

//Delete an item
deleteItem(id){
  //copy current list of items
  const list=[...this.state.list];

  //filter out item being deleted
  const updatedList=list.filter(item=>item.id!==id);

  this.setState({list:updatedList});
}


  render(){
    return (
    <div className="App">
      <div className="main-block">
      <h1>TO-DO LIST</h1>
      <br/>
      <input id="textbox"
      type="text"
      placeholder="Type input here..."
      value={this.state.newItem}//takes new items from user
      //e is the event,uodateInput is a function
      onChange={e=>this.updateInput("newItem",e.target.value)}
      />
      <button className="btn" id="btn-add"
      onClick={()=>this.addItem()}
      >Add 
      </button>
      <br/>
      <ul className="unorderedlist">
      {this.state.list.map(item =>{
        return(
          <li key={item.id}>
          {item.value}
          <button id="btn-del"
          onClick={()=>this.deleteItem(item.id)}
          >
          X
          </button>
          </li>
        )
      })}
      </ul>
      </div>
    </div>
  );
}
}
export default App;
