import React, {Component} from 'react'

class Article extends Component{
    /*constructor(props){
        super(props)
        this.state = {
            isOpen = true
        }
    }*/

    //Экспериментальный синтаксис
    state = {
        isOpen: false
    }

    //Обязательный метод
    render(){
        const {article} = this.props
        const body = this.state.isOpen && <section>{article.text}</section>
        return (
            <div className='hello'>
                <h2>
                    {article.title}
                    <button onClick={this.handleClose}>{this.state.isOpen ? 'close' : 'open'}</button>
                </h2>
                {body}
                <h4>created: {(new Date(article.date)).toDateString()}</h4>
            </div>
        )
    }

    handleClose = () => {
        console.log('click');
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article