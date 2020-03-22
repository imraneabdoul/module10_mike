/**
 * @author:Imrane
 * Premier composant pure React
 */
import './css/PureCompo.css';
import React from 'react';

export const PureCompo = (props) =>{
    return(
        <div>
            <h6 className="monH6">{props.label}</h6>
        </div>
    )
}