import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Iframe = ({ source }) => {

    if (!source) {
        return <Spinner/>;
    }

    const src = source;     
    return (
        <div className="col-md-12">
            <div style={{height: '66vh'}}>
                <iframe src={src} title='gameLoader' style={{height:'66vh',width:'100%'}}></iframe>
            </div>
        </div>
    );
};

export default Iframe;