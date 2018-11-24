import React, {Component} from 'react'
import Header from './Header'
import BlogList from './BlogList'
import Footer from './Footer'

class App extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Header />
                <BlogList />
                <Footer />
            </div>
        )
    }
}



export default App