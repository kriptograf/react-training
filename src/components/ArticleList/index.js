import React from 'react' /** Подключить реакт */
import Article from '../Article' /** Подключить компонент Статья */
import './styles.css' /** Подключить стили для статьи */

export default function ArticleList ({articles}) {
    /**Заполнить массив статьями */
    const articleElements = articles.map(
        article => <li key = {article.id}><Article article = {article} /></li>
    )
    /**Возвратить список статей */
    return (
        <ul className="list-unstyled">
            {articleElements}
        </ul>
    )
}