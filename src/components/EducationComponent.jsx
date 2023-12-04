import React from 'react';

const EducationComponent = () => {
    return(
        <section className='container'>
            <div className='main-education'>
                <div className='dot'>
                    <div className='dot-custom'></div>
                    <div className='dot-custom'></div>
                </div>
                    <div className='progress'></div>
                <div className='text-education-sma'>
                    <h3> SMA NEGERI 1 CISAAT </h3>
                    <h4>Science</h4>
                    <p>2016-2019</p>
                    </div>
                <div className='text-education-univ'>
                    <h3> Universitas Muhammadiyah Sukabumi </h3>
                    <h4>Informatic Engineering</h4>
                    <p>2019-2023</p>
                    </div>
            </div>
        </section>
    )
}

export default EducationComponent;