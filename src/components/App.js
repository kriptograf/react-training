import React, {Component} from 'react'
import ArticleList from './ArticleList'
//import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

class App extends Component{  

    constructor(props){
        super(props)
        this.state = {
            data: []
        }
        axios.get("http://lforum.loc/threads/api").then(response => {
             this.setState({
                 data: response.data
             })
         })
    }

    

    render(){

        const articles = this.state.data

        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">App name</h1>
                </div>
                <ArticleList articles = {articles} />
            </div>
        )
    }
    
}

export default App