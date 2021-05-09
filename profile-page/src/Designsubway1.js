import React, { useEffect, useState } from 'react';
import pag1 from './pag1';

const Designsubway = ()=> {

    const [data,setData] = useState({});

     useEffect(()=>{
        fetch('https://sample-profile-page-api.herokuapp.com/DESIGNSUBWAY',{
            method: 'post'
        }).then(respo => respo.json())
        .then(d => {
            setData(d)
        })
     },[]);

    return pag1(data);

  }
  
export default Designsubway;