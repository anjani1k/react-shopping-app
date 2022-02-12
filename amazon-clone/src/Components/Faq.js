import React, { Component, Fragment } from "react";
import { Accordion } from "react-bootstrap";
class FAQs extends Component {
    constructor(){
        super();
        this.state={
            isWaiting : true,
            enquiryList:[]
        }
    }
    waitingMsg =()=>{
        return(
            <Accordion.Item eventKey="0" >
            <Accordion.Header>
            <i className="fa fa-spinner fa-spin text-text-info"></i>&nbsp;&nbsp;
                Data is loading. Please wait...
            </Accordion.Header>
                
            </Accordion.Item>
        )
    }
    renderQueries=()=>{
        return this.state.enquiryList.map((item,index)=>{
          let id = item.id.toString()
            return(

                <Accordion.Item eventKey={id} key={item.id}>
            <Accordion.Header>Ticket No: #{item.id}</Accordion.Header>
            <Accordion.Body>
                <div>Owner:  <span className="text text-primary">{item.firstName}{item.lastName}</span> </div>
                <br/>
                <div className="row"> <span className="col-md-1">Summary: </span> <span className="col-md-10">{item.summary}</span></div>
                <div className="text text-warning"> {item.description}</div>
            </Accordion.Body>
            </Accordion.Item>
            )
           
        })
    }
  render() {
    return (
      <Fragment>
      <h1>Your Tickets</h1>
        <Accordion defaultActiveKey="0">
        {this.state.isWaiting ? this.waitingMsg() : this.renderQueries()}
          
        </Accordion>
      </Fragment>
    );
  }
  componentDidMount(){
    let url = 'http://localhost:4200/enquiries'
    this.setState({isWaiting : true})
    fetch(url,{method:'GET'})
    .then((res)=>res.json())
    .then((data)=>{
        setTimeout(()=>{
            this.setState({isWaiting:false,enquiryList:data})
        },5000)
      
    })
  }
}
export default FAQs;
