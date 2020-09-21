import React from 'react';
import './aside.css';
export function Aside() {
    return (
        <>
            <div className='navbars'>
                <h2>Quick Actions</h2>
                <input type='text' placeholder='Google Search' />
                <br /><br />
                <button type="submit" value='Google Search' class="btn btn-primary btn-sm">Go</button>
                <br /><br />
                <span className="Btn">
                    <a href="https://www.google.com/" target='_blank'>Frequently asked questions</a><br />
                    <a href='https://github.com/' target="_blank">GitHub Profile</a>
                </span>

            </div>

        </>
    )
}


