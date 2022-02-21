import { filter } from 'lodash'
import React from 'react'

export default function ImgPreview({imgUrl,brightness}) {
    console.log('brightness',brightness);
    return (
        <div className="img-preview-container">
            <img src={imgUrl} alt="satellite image" style={{filter:`brightness(${brightness})`}} />
        </div>
    )
}
