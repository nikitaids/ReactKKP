import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Accordion, UncontrolledAccordion} from "./components/Accordion";
import {Rating} from "./components/Rating";
import OnOff from './components/OnOff/OnOff'


function App() {
    console.log('App rendering')
    // @ts-ignore
    return (
        <div>
            <Accordion titleValue={"Menu"}/>
            <Accordion titleValue={"Users"}/>
            {/* <Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/* <Rating value={1}/>*/}
            {/* <Rating value={2}/>*/}
            {/* <Rating value={2}/>*/}
            {/* <Rating value={4}/>*/}
            {/* <Rating value={5}/>*/}
            <UncontrolledAccordion/>
            <OnOff on={false}/>
        </div>
    )
        ;
}

type PageTitlePropsType = {
    title: string
}

const PageTitle = (props: PageTitlePropsType) => {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
