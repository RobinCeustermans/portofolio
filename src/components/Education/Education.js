import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css'
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData'

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className={'timeLineContainer'} id={'education'} style={{backgroundColor: theme.secondary}}>
            <div className={'education--header'}>
                <h1 style={{color:theme.primary}}>Opleidingen en ervaring</h1>
            </div>
            <div className={'timeline'}>
                {educationData.map(e => (
                    <EducationCard
                        key={e.id}
                        id={e.id}
                        institution={e.institution}
                        course={e.course}
                        startYear={e.startYear}
                        endYear={e.endYear}
                        link={e.link}
                    />
                ))}
            </div>
        </div>

    )
}

export default Education
