import React from 'react';
import '../style/loader.css';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="relative">
                <div className="flex flex-col items-center">
                    <h1 className="loader-title">
                        𝒌𝒉𝒖𝒔𝒉𝒂𝒍 𝒑𝒐𝒓𝒕𝒇𝒐𝒍𝒊𝒐
                    </h1>

                    <div className="spinner-container">
                        <div className="spinner-circle spinner-outer"></div>
                        <div className="spinner-circle spinner-middle"></div>
                        <div className="spinner-circle spinner-inner"></div>
                    </div>

                    <div className="loading-text">
                        Loading
                        <span className="loading-dot">.</span>
                        <span className="loading-dot">.</span>
                        <span className="loading-dot">.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
