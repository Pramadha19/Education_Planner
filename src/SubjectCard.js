import React,{useState,useEffect} from 'react'
import './SubjectCard.css'

function SubjectCard(props) {
    const [time,setTime] = useState(props.time);

    useEffect(()=>{
      const updatedSubjectData=props.subjectData.map((elem,index)=>{
        if(props.id === index){
          elem.time = time;
        }
        return elem;
      })

      props.setSubjectData(updatedSubjectData)
    },[time])

    function incrementHandler(id){
      setTime(time + 1);
    }

    function decrementHandler(id){
      setTime(time - 1);
    }

  return (
    <div className='card-container'>
        <p>{props.subject}</p>
        <p>{time}</p>
        <button onClick={()=>{incrementHandler(props.id)}} className='btn' >+</button>
        <button onClick={()=>{decrementHandler(props.id)}} className='btn' >-</button>
    </div>
  )
}

export default SubjectCard;