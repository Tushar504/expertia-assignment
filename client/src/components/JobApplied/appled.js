import { useEffect } from "react"
import {getCart} from "../../redux/action"
import { useDispatch,useSelector} from "react-redux"
import Button from '@mui/material/Button';
import { useState } from "react";
import {useLocation} from "react-router-dom";
import { useNavigate,useParams } from "react-router-dom";

export const Applied=()=>{
    const Data=useSelector(store=>store)
    const id=useParams().id
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const search = useLocation().search;
    const page = new URLSearchParams(search).get('page')||1
    const pagesize=new URLSearchParams(search).get('pagesize')||5
    const [pages,setPages]=useState([])
    useEffect(()=>{ 
      
          
          dispatch(getCart({page,pagesize,id}))
    },[page])

   
    useEffect(()=>{
        let pages=[]
        for(var i=1;i<=Data.cart.total_pages;i++){
            pages.push(i)
        }
        setPages(pages)
    },[Data])
  
    return (
        <div className="AllPagesMainDiv">
            <div className="JobsMainDiv">
            {Data.cart.cart? Data.cart.cart.map((ele)=>{
                    return (<div className="JobDesDiv" key={ele._id}>
                        <p>Profile: {ele.jobID.profile}</p>
                        <p>Location: {ele.jobID.location}</p>
                     </div>)
            }):null}
            </div>
            <div className="Pages">
            {pages.length>0?pages.map((ele)=>{
                  return  <Button onClick={()=>{
                     
                        return navigate(`/applied/62c41607f4341b168384482c?pagesize=${5}&page=${ele}`)
                  }} key={ele} disabled={ele===+page?true:false} variant="contained">{ele}</Button>
            }):null}
            </div>
        </div>
    )
}