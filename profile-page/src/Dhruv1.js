import React, {useEffect, useState} from'react';
import pag1 from './pag1';

const Dhruv = () => {

    const [data,setData] = useState({});

    useEffect(()=>{
        fetch('https://sample-profile-page-api.herokuapp.com/DHRUV',{
        method: 'post'
        }).then(respo => respo.json())
        .then(d => {
            setData(d)
        })
    },[]);

    return pag1(data);

}

export default Dhruv;