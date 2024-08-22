import React from 'react';

type AccordionPropsType = {
    titleValue:string,
    collapsed:boolean
}

type AccordionTitleProps = {
    title: string;
}



export function Accordion(props: AccordionPropsType)  {
console.log('Accordion rendered')
        return <div>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed  && <AccordionBody/>}
        </div>

}

function AccordionTitle (props:AccordionTitleProps){
    console.log('AccordionTitle rendering')
    return <h3>{props.title}</h3>
}

function AccordionBody (){
    console.log('AccordionBody rendering')
    return <h3>body</h3>
}



