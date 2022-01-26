import React, { useRef } from 'react';
import './FeatureFlag.css';
import Switch from "../switch/Switch";

const toggleChild = (ref) => {
    if(ref.current.style.display === 'block') {
        ref.current.style.display = 'none';
    } else {
        ref.current.style.display = 'block';
    }
}

const FeatureFlag = ({config, type="default"}) => {
    return <div className='feature-flag'>
        <div className='title'>{config.title}</div>
        <div className={`flags-wrapper-${type}`}>
            {config.flags.map((flag, index) => <Container key={index} flag={flag} />)}
        </div>
    </div>
}

export default FeatureFlag;

export const Container = ({flag: {field, text}}) => {
    const ref = useRef();    
    return <><div className='container'> 
        <input type='checkbox' />
        <div className='checkmark'></div>
        <div>{text}</div>
        <div className='switch'>
            <Switch onColor='#609beb' id={field.id} />
            {field?.fields?.length &&
                <button className="toggle-child-group" onClick={()=>toggleChild(ref)}>^</button>
            }
        </div>
    </div>
    {field?.fields?.length && <div className='child-group' ref={ref}>
        {field?.fields.map((flag, index) => <Container key={index} flag={flag} />)}
    </div>}
    </>
};
