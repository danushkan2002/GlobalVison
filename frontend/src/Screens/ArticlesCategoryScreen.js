import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { Link } from 'react-router-dom'
import { getArticleCategory } from '../Actions/getAction'
import Loader from '../Componets/Loader'
import Message from '../Componets/Message'

const ArticlesCategoryScreen = () => {
  const dispatch = useDispatch()

    const articleCategory = useSelector(state => state.articleCategory)
    const { articlesCategories, articlesCategoriesLoading, articlesCategoriesError } = articleCategory

    useEffect(()=> {
        dispatch(getArticleCategory())
      }, [dispatch])
  return (
    <div>
    {
      articlesCategoriesLoading ?
      <Loader/> :
      articlesCategoriesError ?
          <Message>{articlesCategoriesError}</Message> :
          (
            articlesCategories.map((articlesCategory) => (
                  <div key={articlesCategory.id} className="m-10 border">
                      <Link to={`/articles/${articlesCategory.category_name}`} className='text-xl'>{articlesCategory.category_name}</Link>
                  </div>
              ))
          )
    }
    </div>
  )
}

export default ArticlesCategoryScreen
