import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Home from './Components/Home'
import Header from './Components/Header'
import NotfoundComponent from './Components/NotFound'
import CourseList from './Components/CourseList'
import Enquire from './Components/enquiry-form'
import FAQs from './Components/Faq'
const Routing = () =>{
    return(
    <BrowserRouter>
    <Header/>
    <div className="container" style={{'marginTop':'40px'}}>
    <Switch>
    
        <Route path='/' exact component={Home}></Route>
        <Route path='/courses' exact component={CourseList}></Route>
        <Route path='/courses/enquire/:topic'  component={Enquire}></Route>
        <Route path='/faqs' exact component={FAQs}></Route>
        
        <Route  component={NotfoundComponent}></Route>
    </Switch>
    </div>
    </BrowserRouter>
    )
}

export default Routing