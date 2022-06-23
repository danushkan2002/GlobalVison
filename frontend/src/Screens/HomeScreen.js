import React, {useEffect} from 'react'
import { useNavigate , useLocation} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const HomeScreen = () => {
  const location = useLocation()
    const history = useNavigate()
    const dispatch = useDispatch()



    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(()=> {
      if (userInfo) {
        
      } else{
        history('/login')
      }
    }, [history, userInfo])

  return (
    <div>
      This is home page

    </div>
  )
}

export default HomeScreen