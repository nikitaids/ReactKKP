import React, {useState} from 'react';
import {text} from "node:stream/consumers";

type AccordionPropsType = {
    titleValue:string,
}

type AccordionTitleProps = {
    title: string;
}

export function UncontrolledAccordion(){
    return null;
}



export function Accordion(props: AccordionPropsType)  {
console.log('Accordion rendered')
    let [textBtn, setTextBtn] = useState('Свернуть');
    let [collapsed, setCollapsed] = useState(false);

    let onClickEvent = () =>{
        setCollapsed(!collapsed)
        !collapsed?setTextBtn('Развернуть'):setTextBtn('Свернуть')
    }
        return <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={()=>{onClickEvent()}} >{textBtn}</button>
            {!collapsed  && <AccordionBody/>}
        </div>

}

function AccordionTitle (props:AccordionTitleProps){
    console.log('AccordionTitle rendering')
    return <h3>{props.title}</h3>
}

function AccordionBody (){
    console.log('AccordionBody rendering')
    return <h3><ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul></h3>
}



