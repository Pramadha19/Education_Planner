import './HomeScreen.css'
import {useState,useEffect} from 'react'
import SubjectCard from './SubjectCard.js'

function HomeScreen(){

    const [subjectData, setSubjectData] = useState(()=>{
        const savedData = localStorage.getItem("subjectData");
        const parsedData = JSON.parse(savedData);
        return parsedData || [];
    })


    useEffect(()=>{
        localStorage.setItem("subjectData",JSON.stringify(subjectData));
        
    },[subjectData])

    function clickHandler(e){
        e.preventDefault();


        const subjectName = document.querySelector("#subject-name");

        const subjectTime = document.querySelector("#subject-time");

        const newSub = {
            subject : subjectName.value,
            time : Number(subjectTime.value)
        }

        subjectName.value = "";
        subjectTime.value = "";

        setSubjectData([...subjectData,newSub])
    }

    return(
        <div id='container'>
            <h1>Subject Planner</h1>
            <form id='input-form'>
                <input type='text' id='subject-name' placeholder='Enter subject'required/>
                <input type='number' id='subject-time' placeholder='Enter time req' required/>
                <button onClick={clickHandler}>Add</button>
            </form>
            <div id='subject-cards'>
                {
                     subjectData.map((elem,index)=>{
                        return <SubjectCard key={index} subject = {elem.subject} time = {elem.time} id={index} setSubjectData = {setSubjectData} subjectData ={subjectData} />
                    })
                }
            </div>
        </div>
    )
}

export default HomeScreen;