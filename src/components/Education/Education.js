import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css'
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData'

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className={'timeLineContainer'} style={{backgroundColor: theme.secondary}}>
            <div className={'titleContainer'}>
                <h2 style={{color:theme.primary}}>Opleidingen</h2>
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
                    />
                ))}
            </div>
        </div>

    )
}

export default Education
