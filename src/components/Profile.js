import React, {useState} from 'react'
import Button from './Button';

export const Profile = () => {
    const [dugme, setDugme] = useState(false)
    const mm=dugme ? 112 :555;
    return (
        <div className="container">
        <div className="flex1">
            <img src={`https://api.hello-avatar.com/adorables/285/${mm}`} alt="avatar" width="285" height="285"></img>
        </div>
        <div className="flex2">
            <h3>Marina Miletic</h3>
            <h5>2020marinamiletic@gmail.com</h5>
            <h5>https://github.com/2021GK</h5>
        </div>
        <div className="flex3">
        <Button color={dugme ? 'steelblue' : '#C01F9E'} onClick={()=>setDugme(!dugme)}/>  
        </div>
        </div>
    )
}
