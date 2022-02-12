import React,{Component} from "react";

class Enquire extends Component{

  constructor(props){
    super(props)
    this.state={
      firstName:'',
      lastName:'',
      mailId:'',
      courseId : props.location.search.split('=')[1],
      summary:"",
      description: ''
  }
  this.statusState = {
    status:''
  }
  }
    

    
     appendTaskName=(event)=>{
      switch(event.target.name){
        case 'fname':
          this.setState({firstName:event.target.value})
          break;
          case 'lname':
          this.setState({lastName:event.target.value})
          break;
          case 'mail':
          this.setState({mailId:event.target.value})
          break;
          case 'summary':
          this.setState({summary:event.target.value})
          break;
          case 'desc':
          this.setState({description:event.target.value})
          break;
          default:
            break;

      }
     
    }
    
    addTask=(event)=>{
      event.preventDefault();
     console.log(this.state)
     let url = 'http://localhost:4200/enquiries'
     fetch(url, 
      {method:'POST',headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(this.state)})
     .then((res)=>res.json())
     .then((data)=> 
     this.setState({status:'success'})
     
     )
     .catch((err)=>{
      this.setState({status:'failed'})
     })
  }
  successNote = () =>{
    return(
      <div className="alert alert-success" >
      <span><i className="fa fa-check-circle" style={{marginRight:10,fontSize:'18px'}}></i> Your Request Successfully Submitted</span>
   </div>
    )
  }
    render(){
  
      
        return(
            <div className="container">
             {this.statusState.status ? this.successNote() : ''}
            <h4>Write Us</h4>
            <hr/>
            <form className="row g-3 needs-validation" >
              <div className="col-md-4">
                <label  className="form-label">First name</label>
                <input type="text" className="form-control" id="validationCustom01" name="fname" onChange={this.appendTaskName} required/>
                
              </div>
              <div className="col-md-4">
                <label  className="form-label">Last name</label>
                <input type="text" className="form-control" id="validationCustom02" name="lname" onChange={this.appendTaskName} required/>
              
              </div>
              <div className="col-md-4">
                <label  className="form-label">Mail Id</label>
                <div className="input-group">
                  <span className="input-group-text" id="inputGroupPrepend">@</span>
                  <input type="text" className="form-control" id="validationCustomUsername" name="mail" aria-describedby="inputGroupPrepend" onChange={this.appendTaskName} required/>
                 
                </div>
              </div>
              <div className="col-md-4">
                <label  className="form-label">Course</label>
                <input className="form-control disabled" id="validationCustom03" name='course' value={this.props.match.params.topic}  disabled required/>
              </div>
              <div className="col-md-4">
                <label  className="form-label">Summary</label>
                <input className="form-control" id="validationCustom03" name= 'summary' onChange={this.appendTaskName} required/>
              </div>
              <div className="col-md-6">
                <label  className="form-label">Description</label>
                <textarea className="form-control" id="validationCustom03" name='desc' onChange={this.appendTaskName} required></textarea>
               
              </div>
              
            
              <div className="col-12">
                <button className="btn btn-primary" onClick={this.addTask}>Submit</button>
              </div>
            </form>
        </div>
        )
    }
  }

export default Enquire