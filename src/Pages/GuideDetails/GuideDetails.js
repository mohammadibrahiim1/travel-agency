import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ApiContext } from '../../DataContext.js/DataContext';
import './GuideDetails.css'

const GuideDetails = () => {

    const guideDetails = useLoaderData();
    console.log(guideDetails);
   
    return (
        <div>
            see guide details here
        </div>
    );
};

export default GuideDetails;