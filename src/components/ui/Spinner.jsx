import React from 'react';

const Spinner = () => {
    return (
        <div>
             <div className='min-h-screen flex justify-center items-center'>
            <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin border-primary"></div>
        </div>
        </div>
    );
};

export default Spinner;