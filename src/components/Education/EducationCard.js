import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
// import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
import './Education.css'

function EducationCard({ id, institution, course, startYear, endYear }) {

    const { theme } = useContext(ThemeContext);


    return (
        <Fade bottom>
            <div className={id % 2 === 0 ? 'container right': 'container left'}>
                    <div className="content" style={{backgroundColor: theme.primary30}}>
                        <div className="educard-img" style={{backgroundColor: theme.primary}}>
                            <img src={eduImgWhite} alt="" />
                        </div>
                        <h2>{startYear}-{endYear}</h2>
                        <h2 style={{color : theme.primary}}>{course}</h2>
                        <p>{institution}</p>
                    </div>
            </div>

        </Fade>
    )
}

export default EducationCard
