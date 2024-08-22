import React from "react";

type RatingPropsType = {
    value: 1|2|3|4|5;
}

type StarPropsType = {
    selected:boolean
}


export function Rating(props: RatingPropsType) {
    console.log('Rating rendered')

    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>

        </div>
    )
}

function Star(props: StarPropsType) {
    console.log('Star rendering')

    if (props.selected) {
        return <span><b>star</b></span>
    } else {
        return <span>star</span>
    }
}



