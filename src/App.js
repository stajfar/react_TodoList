import React, {Component} from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class  App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      items: [],
      id:uuid(),
      title:"",
      isEditItem: false
    }
  }
  handlechange = (e) =>{
    this.setState({
      title: e.target.value
    })    
  }

  handleSubmit= (e) =>{
    e.preventDefault();

    const newItem={
      title: this.state.title,
      id: this.state.id
    }
    const updatedItems=[...this.state.items,newItem];
    
    this.setState({
      items: updatedItems,
      title:"",
      id: uuid(),
      isEditItem:false
    })
  }
  handleClearList= (e) =>{
    this.setState({
      items: []
    })
  }

  handleDelete= (id) => {    
    const filteredItems= this.state.items.filter(item => item.id !== id)    
    this.setState({
      items: filteredItems
    })
  }

  handleEdit = (id) =>{
    const selectedItem= this.state.items.find(item => item.id === id)
    this.setState({
      isEditItem: true,
      title: selectedItem.title
    })
    this.handleDelete(id);
  }

  render(){     
  return (
     <div className="container">
       <div className="row">
         <div className="col-10 mx-auto col-md-8 mt-8">
           <h3 className="text-capitalize text-center">todo input</h3>
          <TodoInput editItemMode={this.state.isEditItem} handlechange={this.handlechange}  title={this.state.title} handleSubmit={this.handleSubmit}></TodoInput>
          <TodoList items={this.state.items} 
            handleClearList={this.handleClearList} 
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}>
          </TodoList>
         </div>         
       </div>
     </div>    
  );
  }
}

export default App;
