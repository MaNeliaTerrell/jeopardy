import {useState} from 'react'


const QuestAns = ({props}) => {

    return ( 

       
        <div>
        
            
            <h1> Category: {props[0].category.title}</h1>
            <h1>Question: {props[0].question}</h1>
            <h1> Points: {props[0].value}</h1>
            
        
        </div>
        
    )
}
export default QuestAns

 {/* <h2 className = 'question'>Question: {question == null ? '' : question[0].question}</h2>
        <h2>Category: {question == null ? '' : question[0].category.title}</h2>
        <h2>Points: {question == null ? '' : question[0].value}</h2> */}