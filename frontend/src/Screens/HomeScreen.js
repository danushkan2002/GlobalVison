import React, {useEffect, useState} from 'react'
import { useNavigate , useLocation} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCategorySubjectsDetails, getSubjectsDetails } from '../Actions/subjectAction'

const HomeScreen = () => {
  const [ projects , setProjects] = useState(false)
  const [ about , setAbout] = useState(false)

  const [ poem , setPoem] = useState(false)
  const [ esay , setEsay] = useState(false)
  const [ story , setStory] = useState(false)

    useEffect(() => {
        setProjects(false)
        setAbout(false)
    },[setProjects,setAbout])

    
    const ProjectsHandler = () => {
      setProjects(!projects)
    }

    const AboutHandler = () => {
      setAbout(!about)
    }

    const PoemHandler = () => {
      if (story || esay )  {
        setStory(false)
        setEsay(false)
        setPoem(!poem)
      }  {
        setPoem(!poem)
      }
    }

    const EsayHandler = () => {
      if (story || poem )  {
        setStory(false)
        setPoem(false)
        setEsay(!esay)
      }  {
        setEsay(!esay)
      }
    }

    const StoryHandler = () => {
      if (esay || poem )  {
        setPoem(false)
        setEsay(false)
        setStory(!story)
      }  {
        setStory(!story)
      }
      
      
    }


  return (
    <div className='w-full h-fit mx-auto pt-75px'>
    
    <div className='bg-30 w-full  h-fit py-75px md:px-14 lg:px-28 xl:px-32'>
      <div className='flex'>
        <div className='h-fit w-1/2 '>
          <div className=''>
            <p className='text-m-title lg:text-w-super-title font-bold font-Heebo text-10 text-right border-b-4 border-t-4 mt-25px lg:mt-0 py-2'>Global  <span className='py-12.5px text-white text-m-simple-title lg:text-w-sub-title font-semibold text-right font-Heebo'>Vision</span></p>
          
            <p className='font-Qu text-m-text lg:text-w-text text-white text-right pt-5'>Producing balanced personalities to face the challenges successfully with self confidence through leanings</p>
          </div>
          <div className=''>
            <p className='py-12.5px text-white text-m-simple-title lg:text-w-sub-title font-semibold text-right mt-50px lg:mt-0'>Moto</p>
          
            <p className='font-Qu text-m-text lg:text-w-text text-white text-right '>Our dedication is our success</p>
          </div>
        </div>
        <div className='h-96  lg:h-80 w-1 bg-10 mx-2 lg:mx-25px'></div>
        <div className='h-60 w-1/2 my-auto'>
          <p className='py-12.5px text-white text-m-simple-title lg:text-w-sub-title font-semibold text-left mt-5 lg:mt-0'>Mission</p>
        
          <p className='font-Qu text-m-text lg:text-w-text text-white text-left'>Creating learning opportunities to experience the nature with attentive observation and applying all the collected experience practically in real life situations</p>          
        </div>


        
        
      </div>

    

      
    </div>
    

    <div className='mt-50px pt-50px w-full mx-0 h-fit bg-white'>
      
      <div className='w-full  h-fit'>
          <div className='py-12.5px mx-auto w-full flex items-center justify-center'>
              <p className='text-m-title lg:text-w-title font-bold font-Heebo'>Projects</p>
          </div>
          
          
          <div className={
            about ?
            (
              'h-full w-full grid md:grid-cols-2 xl:grid-cols-3  overflow-x-hidden '
            ) : (
              'h-80 w-full grid md:grid-cols-2 xl:grid-cols-3  overflow-hidden'
            )
          }>
            <div className='w-64 h-72  mx-auto shadow-m mb-16 bg-black overflow-hidden'>
                <img alt='sum' src='https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/Cover-image-of-Spain-in-August1.jpg' className='w-full h-full object-cover opacity-50 hover:scale-125'/>
                <p className='text-w-simple-title font-Heebo font-semibold -mt-75px relative ml-25px text-white'>Spain Times</p>
                <p className='ml-25px relative text-w-text font-Qu text-white'>2022-09-02</p>
            </div>
            <div className='w-64 h-72  mx-auto shadow-m mb-16 bg-black overflow-hidden'>
                <img alt='sum' src='https://media.timeout.com/images/105299605/750/422/image.jpg' className='w-full h-full object-cover opacity-50 hover:scale-125'/>
                <p className='text-w-simple-title font-Heebo font-semibold -mt-75px relative ml-25px text-white'>Spain Times</p>
                <p className='ml-25px relative text-w-text font-Qu text-white'>2022-09-02</p>
            </div>
            <div className='w-64 h-72  mx-auto shadow-m mb-16 bg-black overflow-hidden'>
                <img alt='sum' src='https://www.schengenvisainfo.com/news/wp-content/uploads/2021/12/Madrid-Spain-1.jpg' className='w-full h-full object-cover opacity-50 hover:scale-125'/>
                <p className='text-w-simple-title font-Heebo font-semibold -mt-75px relative ml-25px text-white'>Spain Times</p>
                <p className='ml-25px relative text-w-text font-Qu text-white'>2022-09-02</p>
            </div>
            <div className='w-64 h-72  mx-auto shadow-m mb-16 bg-black overflow-hidden'>
                <img alt='sum' src='https://montessori-ami.org/sites/default/files/images/countries/spain.jpg' className='w-full h-full object-cover opacity-50 hover:scale-125'/>
                <p className='text-w-simple-title font-Heebo font-semibold -mt-75px relative ml-25px text-white'>Spain Times</p>
                <p className='ml-25px relative text-w-text font-Qu text-white'>2022-09-02</p>
            </div>
            <div className='w-64 h-72  mx-auto shadow-m mb-16 bg-black overflow-hidden'>
                <img alt='sum' src='https://static.euronews.com/articles/stories/06/45/78/10/1000x563_cmsv2_7d0ce820-6759-5eb0-997c-6f63aa8f018a-6457810.jpg' className='w-full h-full object-cover opacity-50 hover:scale-125'/>
                <p className='text-w-simple-title font-Heebo font-semibold -mt-75px relative ml-25px text-white'>Spain Times</p>
                <p className='ml-25px relative text-w-text font-Qu text-white'>2022-09-02</p>
            </div>
          </div>
          <div className='flex justify-center items-center  '>
              <p onClick={AboutHandler} className='border-10 border px-12.5px py-2 rounded-xl text-10 mb-11'>{
                about ?
                (
                  'See less'
                ):(
                  'See More'
                )
              }</p>
          </div>
         


          
      </div>
      
    </div>

    <div className='h-full bg-white mt-50px py-50px md:px-14 lg:px-28 xl:px-32'>
      <div className='py-12.5px mx-auto w-full flex items-center justify-center'>
          <p className='text-m-title lg:text-w-title font-bold font-Heebo'>Articles</p>
      </div>
      
      <div className='flex justify-center items-center my-25px'>
          <Link to='/' onClick={PoemHandler} className={
            poem ?
            (
              'border-b-2 text-10 border-b-10 py-12.5px px-2 border-10 mx-2'
            ) :
            'border-b-2  border-b-white py-12.5px px-2  mx-2'
          }>
            <p className='font-Qu text-w-text'>Poem</p>
          </Link>
          <Link to='/' onClick={EsayHandler} className={
            esay ?
            (
              'border-b-2 text-10 border-b-10 py-12.5px px-2 border-10 mx-2'
            ) :
            'border-b-2  border-b-white py-12.5px px-2  mx-2'
          }>
            <p className='font-Qu text-w-text'>Esay</p>
          </Link>
          <Link to='/' onClick={StoryHandler} className={
            story ?
            (
              'border-b-2 text-10 border-b-10 py-12.5px px-2 border-10 mx-2'
            ) :
            'border-b-2  border-b-white py-12.5px px-2  mx-2'
          }>
            <p className='font-Qu text-w-text'>Story</p>
          </Link>
      </div>
      
      <div className='h-96 w-full mx-auto'>
                <div className='w-8vw lg:before:first:h-80 shadow-m lg:flex mx-auto'>
                    <div className='w-fit lg:w-2vw h-fit px-25px py-12.5px border-t-2 border-l-2'>
                      <p className='text-m-simple-title lg:text-w-sub-title font-semibold'>Danushkan</p>
                    </div>
                    <div className='w-fit lg:w-5.5vw h-full  flex items-end justify-end lg:mt-32'>
                      <div className='h-fit border-b-2 border-r-2 px-25px py-25px '>
                        <p className=' text-right text-m-text lg:text-w-text font-Qu '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </div>
                </div>             
      </div>

    </div>
   </div>
  )
}

export default HomeScreen