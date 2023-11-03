import { useState } from "react";
import { Link } from "react-router-dom";

export const Profile = () =>{

    const [fullName,setFullName] = useState('AKAN OTEBAY')
    const [age, setAge] = useState('21')
    const [isEdit, setIsEdit] = useState(false);
    const [university, setUniversity] = useState('KBTU');
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
            <img style={{width:'200px', height:'200px'}} src='https://media.licdn.com/dms/image/D4D03AQGN8iDa7kvdmw/profile-displayphoto-shrink_800_800/0/1674123690311?e=2147483647&v=beta&t=PS8aan2VC-CAj-NPPdbEsBLCbaEBoWfJzsyGkqWiOYg'/>
            <h2><Link to='https://www.linkedin.com/in/akan-otebay-44bb801b1/'>AUTHOR : {fullName} </Link></h2>
            <button onClick={()=>setIsEdit(!isEdit)}>{isEdit ? 'save' : 'edit'}</button>
            <p>FullName : {fullName}</p>
            {isEdit && <input type="text" value={fullName} onChange={(e)=>{
                setFullName(e.target.value);
            }}/>}
            <br />
            <p>Age : {age}</p> 
            {isEdit && <input type="text" value={age} onChange={(e)=>{
                setAge(e.target.value);
            }}/>}
            <br />
            <p>University : {university}</p> 
            {isEdit && <input type="text" value={university} onChange={(e)=>{
                setUniversity(e.target.value);
            }}/>}
        </div>
    )
}