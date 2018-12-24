import React, {Component} from 'react' /**Подключить реакт */
import ArticleList from './ArticleList' /**Подключить компонент Список статей */
import 'bootstrap/dist/css/bootstrap.css' /**Подключить стили */
import axios from 'axios' /** Подключить библиотеку аякс */

class App extends Component{  

    constructor(props){

        super(props)
        this.state = {
            reverted: false,
            data: []
        }
        /** Плучить данные по rest api */
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
                    <h1 className="display-3">
                    App name
                    <button className="btn btn-warning float-right" onClick={this.revert}>Revert</button>
                    </h1>
                </div>
                <ArticleList articles = {this.state.reverted ? articles.reverse() : articles} />
            </div>
        )
    }

    /** Сортировка статей в обратном порядке*/
    revert = () => this.setState({
        reverted: !this.state.reverted
    })
    
}

export default App