import React from 'react'

function Article(props){
    const {article} = props
    const body = <section>{article.text}</section>
    return (
        <div className='hello'>
            <h2>{article.title}</h2>
            {body}
            <h4>created: {(new Date(article.date)).toDateString()}</h4>
        </div>
    )
}

export default Article