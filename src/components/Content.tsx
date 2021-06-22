import ImageOne from '../images/egg.jpg';
import ImageTwo from '../images/egg-2.jpg';
import React from 'react';
const Content:React.FC = () => {
    return(
        <>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:grid-cols-1 gap-4">
            <div className='menu-card'>
            <img src={ImageOne} alt='egg' className='h-full rounded mb-20 shadow' />
            <div className='center-content'>
                <h2 className='text-2xl mb-2'>Egg Muffins</h2>
                <p className='mb-2'>Cripsy, delicious, and nutritious</p>
                <span>$16</span>
            </div>
            </div>
            <div className='menu-card'>
            <img src={ImageTwo} alt='egg' className='h-full rounded mb-20 shadow' />
            <div className='center-content'>
                <h2 className='text-2xl mb-2'>Egg Salad</h2>
                <p className='mb-2'>Cripsy, delicious, and nutritious</p>
                <span>$18</span>
            </div>
            </div>
            <div className='menu-card'>
            <img src={ImageOne} alt='egg' className='h-full rounded mb-20 shadow' />
            <div className='center-content'>
                <h2 className='text-2xl mb-2'>Egg Muffins</h2>
                <p className='mb-2'>Cripsy, delicious, and nutritious</p>
                <span>$16</span>
            </div>
            </div>
            <div className='menu-card'>
            <img src={ImageTwo} alt='egg' className='h-full rounded mb-20 shadow' />
            <div className='center-content'>
                <h2 className='text-2xl mb-2'>Egg Salad</h2>
                <p className='mb-2'>Cripsy, delicious, and nutritious</p>
                <span>$18</span>
            </div>
            </div>
            <div className='menu-card'>
            <img src={ImageOne} alt='egg' className='h-full rounded mb-20 shadow' />
            <div className='center-content'>
                <h2 className='text-2xl mb-2'>Egg Muffins</h2>
                <p className='mb-2'>Cripsy, delicious, and nutritious</p>
                <span>$16</span>
            </div>
            </div>
            <div className='menu-card'>
            <img src={ImageTwo} alt='egg' className='h-full rounded mb-20 shadow' />
            <div className='center-content'>
                <h2 className='text-2xl mb-2'>Egg Salad</h2>
                <p className='mb-2'>Cripsy, delicious, and nutritious</p>
                <span>$18</span>
            </div>
            </div>
        </div>
        </>
    );
    
}

export default Content