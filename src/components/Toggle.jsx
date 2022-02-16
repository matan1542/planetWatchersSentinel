import React from 'react'

export default function Toggle({onToggle}) {
    return (
        <div>
            <label className="switch">
                <input type="checkbox" onClick={onToggle}/>
                    <span className="slider round"></span>
            </label>
        </div>
    )
}
