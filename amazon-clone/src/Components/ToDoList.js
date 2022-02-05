import React, { Component, Fragment } from 'react'

const TODOList = (props)=> {

    const renderToDOList = props.todoList.map((item,index) => {

        return (
            <div key={index}>
                <a href="#" className="list-group-item list-group-item-action" aria-current="true" >
                    <div className="col-lg-12" style={{padding:'10px'}}>
                       <input type="checkbox" style={{margin:'opx 20px'}} checked={index===0 || index===2 ? true : false}/> <b className="mb-1">{item.taskName}</b>
                       <small style={{float:'right',color:'green'}}><i>{index===0 || index===2 ? 'checked' : ''}</i></small>
                       <br/>
                       <p className="mb-1 text-muted" style={{color:'slategray'}}>{item.description}</p>
                    </div>
                   
                    
                </a>
            </div>

        );
    })
 
        return (
            <Fragment>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                TODO List
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="list-group">
                                    {renderToDOList}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        )
    
}
export default TODOList