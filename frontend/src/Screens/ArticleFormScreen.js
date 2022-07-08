import React,{useState, useEffect} from 'react'
import { createArticle } from '../Actions/articleAction'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Componets/Loader'
import Message from '../Componets/Message'
import { getArticleCategory } from '../Actions/getAction'

const ArticleFormScreen = () => {
    const [creator_name, setCreator_name] = useState('')
    const [category, setCategory] = useState('')

    const dispatch = useDispatch()

    const articleCreateData = useSelector(state => state.articleCreateData)
    const {articleLoading, articleError, articleSuccess } = articleCreateData

    const articleCategory = useSelector(state => state.articleCategory)
    const { articlesCategories, articlesCategoriesLoading, articlesCategoriesError } = articleCategory

    useEffect(() => {
      dispatch(getArticleCategory())
    }, [dispatch]);

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createArticle(creator_name, category)) 
    } 

  return (
    <div className='font-ms'>
    <p className='text-4xl px-5 mt-10'>Add Project</p>
    {articleLoading && <Loader/>}
    {articleError && <Message>{articleError}</Message>}
    {articleSuccess && <Message>Submit Success</Message>}
    {
      articlesCategoriesLoading ?
      <Loader/> :
      articlesCategoriesError?
        <Message>{articlesCategoriesError}</Message> :
          <form onSubmit={submitHandler}>

              <input type={'text'} className='border my-5 mx-2' value={creator_name} placeholder={'creator_name'} onChange={(e) => setCreator_name(e.target.value) }></input>


              <select className='border my-5 mx-2' value={category} onChange={(e) => setCategory(e.target.value) }>
                          <option defaultValue={true}>select somethio</option>
                          { 
                            articlesCategories.map((articlesCategory) => (
                              <option key={articlesCategory.id} value={articlesCategory.category_name}>{articlesCategory.category_name}</option>))
                          }
                        </select>
                  

              <button className='border px-4 bg-black text-white ' type={'submit'}>submit</button>
            </form>

    }
  </div>
  )
}

export default ArticleFormScreen