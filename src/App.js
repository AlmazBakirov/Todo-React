import React from 'react';
import './App.css';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      errorMessage: "",
      todoList: [],
      
    };  
  }

  onChange(e) {
    this.setState({
      inputValue: e?.target?.value, //it will not change todoList
      errorMessage: ""
    });
  }

  onSubmit() {
    //this.state.
    let value = this.state.inputValue;
    let list = [...this.state.todoList];
    
    
    if (value === "") {
      this.setState({
        errorMessage: "Shoudl not be empty string"
      })
      return;
    }
    if (list.indexOf(value) === -1) {
      this.setState({
        todoList: [...this.state.todoList, this.state.inputValue],
        inputValue: "",
        
      });
    } else {
      this.setState({
        errorMessage: "Already exist"
      })
    } 
    //alert(this.state.inputValue);
  } 
  changes = () => {
    this.setState({
      
    });
  }

  render() {
    return (
      <div>
        <h1>To Do App</h1>
        <section className="add-item">
          <h2>Add item</h2>
          <input
            onChange={this.onChange.bind(this)}
            value={this.state.inputValue}
            className="add-item_input"
          />
          <button onClick={this.onSubmit.bind(this)}>Add</button>
          {this.state.errorMessage !== "" && <p className="red-color">{this.state.errorMessage}</p>}
        </section>
        <section className="to-do-list">
          <h2>TODO</h2>
          <ul className=''>
            {this.state.todoList.map((item,index) =>{ 
                return (
                <>
                <div className='listed'>
                  <input type='checkbox' onChange={this.changes}></input>
                  <li key={index} className="checks">{item}</li>
                </div>
                </>
                )})
              
            }
          </ul>
        </section>
        <section className="completed-list">
          <h2>COMPLETED test</h2>
          <ul>
            {/* {this.state.todoList.map((item)=>{
              return(
                <>
                <input type='checkbox' onChange={this.changes.bind(this)}></input>
                <li key={item} className="checks">{item}</li>
                </>
              )
            })} */}
            
          </ul>
        </section>
      </div>
    );
  }
  
}
export default App;
