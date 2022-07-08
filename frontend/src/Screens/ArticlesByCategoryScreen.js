import React ,{ useEffect} from 'react'
import { useParams , Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import Loader from '../Componets/Loader'
import Message from '../Componets/Message'
import { getArticles } from '../Actions/articleAction';

const ArticlesByCategoryScreen = () => {
  let {cat} = useParams();
    
    const articlesByCategory = useSelector(state => state.articlesByCategory)
    const { articles , articlesLoading, articlesError } = articlesByCategory

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getArticles(cat))
    },[dispatch, cat])
  
  return (
    <div>
    {
      articlesLoading ?
      <Loader/> :
          articlesError ?
          <Message>{articlesError}</Message> :
          (
            articles.map((article) => (
                  <div key={article.id} className="m-10 border">
                      <Link to={`${article.id}`} className='text-xl'>{article.creator_name}</Link>
                      {article.creator_name}
                  </div>
              ))
          )
      }
    </div>
  )
}

export default ArticlesByCategoryScreen