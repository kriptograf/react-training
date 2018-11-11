import React from 'react'
import Article from '../Article'
import './styles.css'

export default function ArticleList ({articles}) {

    const articleElements = articles.map(
        article => <li key = {article.id}><Article article = {article} /></li>
    )
    return (
        <ul className="list-unstyled">
            {articleElements}
        </ul>
    )
}