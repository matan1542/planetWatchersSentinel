import React from 'react'

export default function ImgPreview({imgUrl}) {
    return (
        <div className="img-preview-container">
            <img src={imgUrl} alt="satellite image" />
        </div>
    )
}
