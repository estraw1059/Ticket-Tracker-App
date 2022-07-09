import React from 'react'
import { ParentCardProps } from '../Types'
import editButton from '../../assets/editIcon.png';
import './ParentCard.css';

export default function ParentCard(props: ParentCardProps) {
    const {title, component} = props;
    return (
        <div className='parentCard'>
            <div className = 'titleBar'>
                <div className = 'title'>{title}</div>
                <div className = 'editButton'>
                    <button>
                        <img src={editButton} alt='edit'/>
                    </button>
                </div>
            </div>
            {component}
        </div>
    )
}
