import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class CourseList extends Component {
    constructor(){
        super()
        this.state={
            courseList : [],
            isWaiting:false
        }
    }
   
    render(){
      const  renderList= this.state.courseList.map((item,index)=>{
         
                    return(
                        <div className='col' key={index}>
                            <div className="card">
                                <img src={item.img} className="card-img-top" alt="..." width="297" height = "175" />
                        <div className="card-body">
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                            <Link type="button" className="btn btn-outline-success" to= {`/courses/enquire/${item.title}?courseId=${item.id}`}>Enquire</Link>
                        </div>
                        </div>
                        </div>
                    )
                })
            
        
        return(
            <div className="container" >
                <div className='row'>
                    {this.state.isWaiting ? 'Data is loading. Please wait...' : renderList}
                </div>

            </div>
        )
    }
    componentDidMount(){
        let url = 'http://localhost:4200/courses'
        this.setState({isWaiting : true})
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            setTimeout(()=>{
                this.setState({isWaiting:false,courseList:data})
            },5000)
          
        })
    }
}
export default CourseList