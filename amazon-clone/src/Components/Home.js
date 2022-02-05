import React,{Component} from "react";
import CreateToDO from '../Components/CreateTasks'
class Home extends Component{
    render(){
        return(
            <div className='container' style={{margin:'40px'}}>
                <p className='text text-muted' style={{'fontSize':'16px','textAlign':'left'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                    </p>
                
                <h3 className="text text-primary">
                        Add New Task
                </h3>
                <CreateToDO/>
            </div>
        )
    }
}
export default Home