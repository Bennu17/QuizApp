import React from "react";
import './quiz.css'
import { useState } from "react";
import { data } from "../../Assets/data";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";



const Quiz=()=>{
    var gotdata=data
    const[index,setindex]=useState(1)
    const[question,setquestion]=useState("")
    const[option1,setoption1]=useState("")
    const[option2,setoption2]=useState("")
    const[option3,setoption3]=useState("")
    const[option4,setoption4]=useState("")
    const[gotanswer,setgotanswer]=useState("")
    const[score,setscore]=useState(0)
    const navigate = useNavigate()
//    setscore(0)
const nextquestion = () => {
    if (index <= gotdata.length && gotanswer === gotdata[index - 1].ans) {
        // Use the function form of setState to ensure you're working with the most up-to-date state
        setscore(prevScore => prevScore + 1);
    }
    setgotanswer(0)
    newfun();
};

const newfun = () => {
    if (index < gotdata.length) {
        setindex(index + 1);
        setquestion(gotdata[index].question);
        setoption1(gotdata[index].option1);
        setoption2(gotdata[index].option2);
        setoption3(gotdata[index].option3);
        setoption4(gotdata[index].option4);
    }
    setgotanswer(0);
    if (index === gotdata.length) {
        console.log("Hey, I am navigating");
        console.log(score);
        
        // Ensure navigation happens after updating the score
        navigate('/score', { state: score });
    }
};

        
        
    
    useEffect(()=>{
        // console.log("page refreshed")
        // console.log(gotanswer)
        // console.log(score)
    },[index,gotanswer])



    // const setans=async (e,id)=>{
    //     if(gotanswer!=0){
    //         setgotanswer(0)
    //     }
    //     await setgotanswer(id)
    //     console.log("The answer got is"+gotanswer)
    // }
    var col1=document.getElementsByClassName('one')[0]
    var col2=document.getElementsByClassName('two')[0]
    var col3=document.getElementsByClassName('three')[0]
    var col4=document.getElementsByClassName('four')[0]
    if(gotanswer===1){
        
        col1.style.backgroundColor='aqua'
        col2.style.backgroundColor='white'
        col3.style.backgroundColor='white'
        col4.style.backgroundColor='white'

    }
    else if(gotanswer===2){
        
        col1.style.backgroundColor='white'
        col2.style.backgroundColor='aqua'
        col3.style.backgroundColor='white'
        col4.style.backgroundColor='white'

    }
    else if(gotanswer===3){
        
        col1.style.backgroundColor='white'
        col2.style.backgroundColor='white'
        col3.style.backgroundColor='aqua'
        col4.style.backgroundColor='white'

    }
    else if(gotanswer===4){
        
        col1.style.backgroundColor='white'
        col2.style.backgroundColor='white'
        col3.style.backgroundColor='white'
        col4.style.backgroundColor='aqua'

    }
    else if(gotanswer===0){
        col1.style.backgroundColor='white'
        col2.style.backgroundColor='white'
        col3.style.backgroundColor='white'
        col4.style.backgroundColor='white'

    }
    return(
        <div className="container">
            <div className="h1box"><center><h1>The Mega Quiz!!</h1></center>
        <hr></hr></div>
        
        <h2>{index}. {gotdata[index-1].question}</h2>
        <ul>
            <li className="one"  onClick={(e)=>setgotanswer(1)}>{gotdata[index-1].option1}</li>
            <li className="two"  onClick={(e)=>setgotanswer(2)}>{gotdata[index-1].option2}</li>
            <li className="three" onClick={(e)=>setgotanswer(3)}>{gotdata[index-1].option3}</li>
            <li className="four" onClick={(e)=>setgotanswer(4)}>{gotdata[index-1].option4}</li>
        </ul>
        <button onClick={nextquestion}>Next</button>
        <div className="index">{index} of 5 questions</div>
        </div>
    )

}
export default Quiz