import React, {useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../Actions/userAction'
import { getUserDetails } from '../Actions/userAction'
import Loader from './Loader'
import {IoLogoFirebase} from 'react-icons/io5'

import Message from './Message'
import {HiChartPie, HiMenu, HiUserCircle, HiSearch, HiX,HiOutlineChevronUp} from 'react-icons/hi'



const Navbar = ({children}) => {
    const [ menu , setMenu] = useState(false)
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo, error, loading } = userLogin 
        
    const history = useNavigate()
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
        history('/')
    }

    useEffect(() => {
        dispatch(getUserDetails())
        setMenu(false)

    },[dispatch, userInfo, setMenu])  

    const Navbarhandler = () => {
        setMenu(!menu)
    }

  return (
    <div>
    {
      menu?
      (
        <div className='h-10vh w-10vw '>
          <div className='fixed top-0 h-75px w-full bg-white shadow-base md:px-14 lg:px-28 xl:px-32 flex items-center'>
            <div className='h-full w-fit px-25px bg-30 flex items-center'>
              <IoLogoFirebase className='text-10 text-4xl'/>
              <div className='pl-12.5px hidden lg:flex'>
                <p className='font-Qu text-m-text lg:text-w-text text-10'>Global Vission</p>
              </div>
            </div>
            <div className='ml-auto px-25px text-w-sub-title'>
              <HiOutlineChevronUp onClick={Navbarhandler}/>
            </div>
          </div>
          <div className='10vh pt-75px'>
            <div className='bg-white w-full mt-50px md:px-14 lg:px-28 xl:px-32'>
              {
                userInfo ?
                (
                  (userInfo.is_admin && userInfo.is_superadmin) ?
                  (
                    <div>
                      <Link to={'/addResult'}  onClick={Navbarhandler} className='ml-25px text-m-text lg:text-w-text font-Qu text-gray-900 h-50px flex items-center border-l-2 px-25px border-l-white hover:border-l-2 hover:border-10'>
                        <p className=''>Add Result</p>
                      </Link>
                      <Link to={'/register'}  onClick={Navbarhandler} className='ml-25px text-m-text lg:text-w-text font-Qu text-gray-900 h-50px flex items-center border-l-2 px-25px border-l-white hover:border-l-2 hover:border-10'>
                        <p className=''>Create Account</p>
                      </Link>
                      <Link to={'/users'}  onClick={Navbarhandler} className='ml-25px text-m-text lg:text-w-text font-Qu text-gray-900 h-50px flex items-center border-l-2 px-25px border-l-white hover:border-l-2 hover:border-10'>
                        <p className=''>Users</p>
                      </Link>
                      <Link to={'/result'}  onClick={Navbarhandler} className='ml-25px text-m-text lg:text-w-text font-Qu text-gray-900 h-50px flex items-center border-l-2 px-25px border-l-white hover:border-l-2 hover:border-10'>
                        <p className=''>Result</p>
                      </Link>
                      <Link to={'/review'}  onClick={Navbarhandler} className='ml-25px text-m-text lg:text-w-text font-Qu text-gray-900 h-50px flex items-center border-l-2 px-25px border-l-white hover:border-l-2 hover:border-10'>
                        <p className=''>Review</p>
                      </Link>
                    </div>
                  ) : (
                    <div>
                      <Link to={'/learn'}  onClick={Navbarhandler} className='ml-25px text-m-text lg:text-w-text font-Qu text-gray-900 h-50px flex items-center border-l-2 px-25px border-l-white hover:border-l-2 hover:border-10'>
                        <p className=''>Learn</p>
                      </Link>
                      <Link to={'/result'}  onClick={Navbarhandler} className='ml-25px text-m-text lg:text-w-text font-Qu text-gray-900 h-50px flex items-center border-l-2 px-25px border-l-white hover:border-l-2 hover:border-10'>
                        <p className=''>Result</p>
                      </Link>
                      <Link to={'/review'}  onClick={Navbarhandler} className='ml-25px text-m-text lg:text-w-text font-Qu text-gray-900 h-50px flex items-center border-l-2 px-25px border-l-white hover:border-l-2 hover:border-10'>
                        <p className=''>Review</p>
                      </Link>
                      
                    </div>
                  )
                ): (
                  <Link to='/review'  onClick={Navbarhandler} className='ml-25px text-m-text lg:text-w-text font-Qu text-gray-900 h-50px flex items-center border-l-2 px-25px border-l-white hover:border-l-2 hover:border-10'>
                    <p className=''>Review</p>
                  </Link>
                )
              }


              <Link to={'/login'}  onClick={Navbarhandler} className='fixed bottom-25px right-25px left-25px md:right-14 md:left-14
              lg:right-28 lg:left-28 xl:right-32 xl:left-32 px-25px py-2 rounded-xl border-2 border-30 text-m-text lg:text-w-text font-Qu text-30 hover:text-white hover:bg-30'>
                  <p className=' '>Login</p>
                </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className='h-10vh w-10vw bg-60 text-black overflow-auto'>
          <div className='h-75px fixed w-full bg-white shadow-base md:px-14 lg:px-28 xl:px-32 flex items-center'>
            <Link to={'/'} className='h-full w-fit px-25px bg-30 flex items-center'>
              <IoLogoFirebase className='text-10 text-4xl'/>
              <div className='pl-12.5px hidden lg:flex'>
                <p className='font-Qu text-m-text lg:text-w-text text-10'>Global Vission</p>
              </div>
            </Link>
            {
                userInfo ? (
                    (userInfo.is_admin && userInfo.is_superadmin) ? (
                        <div className='lg:flex h-fit ml-auto hidden'>
                            <Link to={'/addResult'} className='ml-25px my-auto text-m-text lg:text-w-text font-Qu text-gray-900 py-2 border-b-2 border-b-white hover:border-b-2 hover:border-10'>
                                <p className=''>Add Result</p>
                            </Link>
                            <Link to={'/register'} className='ml-25px my-auto text-m-text lg:text-w-text font-Qu text-gray-900 py-2 border-b-2 border-b-white hover:border-b-2 hover:border-10'>
                                <p className=''>Create Account</p>
                            </Link>
                            <Link to={'/users'} className='ml-25px my-auto text-m-text lg:text-w-text font-Qu text-gray-900 py-2 border-b-2 border-b-white hover:border-b-2 hover:border-10'>
                                <p className=''>Users</p>
                            </Link>
                            <button onClick={logoutHandler} className='ml-25px px-25px py-2 rounded-xl border-2 border-30 text-m-text lg:text-w-text font-Qu text-30 hover:text-white hover:bg-30'>
                                <p className=' '>Logout</p>
                            </button>
                        </div>
                    ) : (
                        <div className='lg:flex h-fit ml-auto hidden'>
                            <Link to={'/learn'} className='ml-25px my-auto text-m-text lg:text-w-text font-Qu text-gray-900 py-2 border-b-2 border-b-white hover:border-b-2 hover:border-10'>
                                <p className=''>Learn</p>
                            </Link>
                            <div className='ml-25px my-auto text-m-text lg:text-w-text font-Qu text-gray-900 py-2 border-b-2 border-b-white hover:border-b-2 hover:border-10'>
                                <p className=''>Review</p>
                            </div>
                            <div onClick={logoutHandler} className='ml-25px px-25px py-2 rounded-xl border-2 border-30 text-m-text lg:text-w-text font-Qu text-30 hover:text-white hover:bg-30'>
                                <p className=' '>Logout</p>
                            </div>
                        </div>
                    )
                ):(
                    <div className='lg:flex h-fit ml-auto hidden'>
                        <div className='ml-25px my-auto text-m-text lg:text-w-text font-Qu text-gray-900 py-2 border-b-2 border-b-white hover:border-b-2 hover:border-10'>
                            <p className=''>About</p>
                        </div>
                        <div className='ml-25px my-auto text-m-text lg:text-w-text font-Qu text-gray-900 py-2 border-b-2 border-b-white hover:border-b-2 hover:border-10'>
                            <p className=''>Review</p>
                        </div>
                        <Link to={'/login'} className='ml-25px px-25px py-2 rounded-xl border-2 border-30 text-m-text lg:text-w-text font-Qu text-30 hover:text-white hover:bg-30'>
                            <p className=' '>Login</p>
                        </Link>
                    </div>
                )
                
            }
            <div className='lg:hidden ml-auto px-25px text-w-sub-title'>
              <HiMenu className='' onClick={Navbarhandler}/>
            </div>
          </div>
          <div className='h-fit w-full'>
          {children}
          </div>
        </div>
      )
    }
    </div>

  )
}

export default Navbar




// <div className='flex font-bold text-xl px-5 py-5 bg-slate-200'>
//         <div className='flex justify-start'>
//             { 
//                 loading ?
//                 <Loader/> :
//                     error ?
//                     <Message>{error}</Message> :
                
//                 userInfo ? (
//                     (userInfo.is_admin && userInfo.is_superadmin) ? (
//                         <div>
//                             <button className='px-2' onClick={logoutHandler}> Logout</button>
//                             <span>|</span>
//                             <Link className='px-2' to={'/profile/'}>Profile </Link>
//                             <span>|</span>
//                             <Link className='px-2' to={'/users/'}>UsersList </Link>
//                             <span>|</span>
//                             <Link className='px-2' to={'/profile/'}>Notifications </Link>
//                             <span>|</span>
//                             <Link className='px-2' to={'/register/'}> Register</Link>
//                             <span>|</span>
//                             <Link className='px-2' to={'/applications/'}> applications</Link>
//                             <span>|</span>
//                             <Link className='px-2' to={'/inbox/'}> Inbox</Link>
//                             <span>|</span>
//                             <Link className='px-2' to={'/results/'}> results</Link>
//                             <span>|</span>
//                             <Link className='px-2' to={'/add_course/'}> Add course</Link>
//                             <span>|</span>
//                             <Link className='px-2' to={'/add_project/'}> Add Project</Link>
//                             <span>|</span>
//                             <Link className='px-2' to={'/add_article/'}> Add Article</Link>
//                         </div>
//                     ) : (
//                         <div>
//                             <button className='px-2' onClick={logoutHandler}> Logout</button>
//                             <span>|</span>
//                             <Link className='px-2' to={'/profile/'}>Profile</Link>
//                             <span>|</span>
//                             <Link className='px-2' to={'/learn/'}>Learn</Link>
//                             <span>|</span>
//                             <Link className='px-2' to={'/review/'}>review</Link>
//                             <span>|</span>
//                             <Link className='px-2' to={'/articles/'}>Article</Link>
                            
//                         </div>
//                     )
//                 ) : (
//                 <div>
//                 <Link className='px-2' to={'/login/'}>Login</Link>
//                 <span>|</span>
//                 <Link className='px-2' to={'/application/'}>Application</Link>
//                 <span>|</span>
//                 <Link className='px-2' to={'/courses/'}>Courses</Link>
//                 <span>|</span>
//                 <Link className='px-2' to={'/projects/'}>projects</Link>
//                 <span>|</span>
//                 <Link className='px-2' to={'/articles/'}>Article</Link>
//                 </div>
                
                
//             )}
//         </div>
//         <div className='ml-auto'>
//                 <Link to={'/'} className='font-bold text-xl '>Global vision</Link>
//         </div>

        
//     </div>








