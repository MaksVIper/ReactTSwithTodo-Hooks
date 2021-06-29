import React,{FC,useState} from 'react';


export enum CardVariant
{
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps
{
    width?:string;
    height?:string;
    variant?:CardVariant;
    onClick: (num:number) => void;
}

const Test:FC<CardProps> = ({width,height,variant,children,onClick}) => {
    const [state,useStates] = useState(0);
    return (
        <div style={{width,height,border: variant === CardVariant.outlined ? '3px solid gray':'none',
        background: variant === CardVariant.primary? 'lightgray' : ''}} onClick={()=>onClick(state)}>
            {children}
        </div>
    );
};

export default Test;