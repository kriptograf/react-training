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
        isOpen: true
    }

    //Обязательный метод
    render(){
        const {article} = this.props
        const body = this.state.isOpen && <section className="card-text some">{article.body}</section>
        return (
            <div className='card'>
                <div className="card-header">
                    <h2>
                        {article.title}
                        <button className="btn btn-info btn-xs float-right" onClick={this.handleClose}>{this.state.isOpen ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>}</button>
                    </h2>
                </div>
               <div className="card-body">
                    <p className="card-subtitle text-muted">Created: {(new Date(article.created_at)).toDateString()}</p>
                    {body}
               </div>
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