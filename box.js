import React from 'react';

export default function Box(props){

    const styles = {
        backgroundColor: props.condition?"black":"white",
        color:props.condition?"white":"black"
    }
    
    return(
        <div style={styles} className={props.classname} onClick = {()=>props.handleClick(props.keyy)}>{props.condition?"OFF":"ON"}</div>
    )
}