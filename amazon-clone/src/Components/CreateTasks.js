import React, { Component } from 'react'
import TODOList from './ToDoList';

class CreateToDO extends Component {

    constructor() {
        super();
        this.state = {
            userInput: '',
            description: '',
            todoList: []
        }

        
    }
    appendTaskName=(event)=>{
        event.preventDefault();
       this.setState({userInput : event.target.value})
      
    }
    appendDescription=(event)=>{
        event.preventDefault();
        this.setState({description : event.target.value})
    }
    addTask=(event)=>{
        event.preventDefault();
        let obj = {taskName: this.state.userInput,description: this.state.description}
        this.state.todoList.push(obj)
        this.setState({todoList : this.state.todoList})
       let el = document.getElementsByTagName('input[type=text]')
      
        el.forEach(element => {
           element.target.value = ''
        });
    }
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <label className="control-label">Task Name:</label>
                        <input type="text" className="form-control" placeholder="Enter task summary here" onChange={this.appendTaskName} aria-label="Task name" id="taskName"/>
                    </div>
                    <div className="col">
                    <label className="control-label">Description:</label>
                        <input type="text" className="form-control" placeholder="Add short description about task" onChange={this.appendDescription} aria-label="Description" id="desc"/>
                    </div>
                </div>
                <button className="btn btn-primary pull-right" style={{margin:'20px 0px'}} onClick={this.addTask}>Add</button>
                <TODOList todoList={this.state.todoList} />
            </div>
            
        )
    }
}
export  default CreateToDO;