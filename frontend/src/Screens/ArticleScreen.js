import React,{ useEffect} from 'react'
import { getArticle } from '../Actions/articleAction'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import Loader from '../Componets/Loader'
import { useParams  } from 'react-router-dom'
import Message from '../Componets/Message'

const ArticleScreen = () => {
  const {cat} = useParams()
  const {id} = useParams()
  const dispatch = useDispatch()

  const articleByCategory = useSelector(state => state.articleByCategory)
  const { article, articleLoading, articleError } = articleByCategory

  useEffect(() => {
    dispatch(getArticle(cat,id))
  },[cat, dispatch, id])
  return (
    <div>
    {
      articleLoading ?
      <Loader/> :
      articleError ?
          <Message>{articleError}</Message> :
          (
            article.creator_name
          )
    }
    </div>
  )
}

export default ArticleScreen 