import { useEffect } from "react"
import { login,getJobs,remove} from "../../redux/action"
import { useDispatch,useSelector} from "react-redux"
import Button from '@mui/material/Button';
import { useState } from "react";
import {useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import './HomePage.css'
export const Homepage=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const search = useLocation().search;
    const page = new URLSearchParams(search).get('page')||1
    const pagesize=new URLSearchParams(search).get('pagesize')||4
    const [pages,setPages]=useState([])
    useEffect(()=>{
          dispatch(login({email:'tushar@gmail.com',password:'12345678'}))  
          dispatch(getJobs({page,pagesize}))
    },[page])

    const Data=useSelector(store=>store)
    useEffect(()=>{
        let pages=[]
        for(var i=1;i<=Data.jobs.total_pages;i++){
            pages.push(i)
        }
        setPages(pages)
    },[Data])
    return (
        <div className="AllPagesMainDiv">
            <div className="JobsMainDiv">
            {Data.jobs.jobs? Data.jobs.jobs.map((ele)=>{
                    return (<div className="JobDesDiv" key={ele._id}>
                        <p>Profile: {ele.profile}</p>
                        <p>Location: {ele.location}</p>
                        <Button onClick={async()=>{
                             let res=await fetch("https://expertia-assignment.herokuapp.com/getcart/carts",{
                                method:"POST",
                                body:JSON.stringify({userID:Data.user._id,jobID:ele._id}),
                                headers: {
                                    'Content-Type': 'application/json'
                                   
                                  },
                             })

                             let data=await res.json()
                            
                           return  alert(`${data.message}`)
                        }}  variant="contained">Apply</Button>
                    </div>)
            }):<CircularProgress color="success" />}
            </div>
            <div className="Pages">
            {pages.length>0?pages.map((ele)=>{
                  return  <Button onClick={()=>{
                             dispatch(remove([]))
                        return navigate(`/?pagesize=${4}&page=${ele}`)
                  }} key={ele} disabled={ele===+page?true:false} variant="contained">{ele}</Button>
            }):null}
            </div>
        </div>
    )
}