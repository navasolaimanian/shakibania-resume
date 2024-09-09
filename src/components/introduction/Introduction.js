import React from 'react';
import image from '../../../public/images/bgImage.png';
import DetaiIntroduction from './DetaiIntroduction';
import ImageIntroduction from './ImageIntroduction';
import { getData } from '../../../lib/getData';
import MobileIntroduction from './MobileImageIntroduction';

const Introduction = async () => {
    const educationData = getData('educations.json');

    return (
        <div className="relative 3xl:bg-cover bg-no-repeat grid md:grid-cols-2 pt-[4.5rem]" style={{
            "backgroundImage": `linear-gradient(rgb(255 255 255 / 92%), rgb(255 255 255 / 92%)), url(${image.src})`,
        }}>
            <MobileIntroduction />
            <DetaiIntroduction educationData={educationData} />
            <ImageIntroduction />
        </div>
    );
};

export default Introduction;