import React from 'react'
import ImgPreview from './ImgPreview'
export default function ImgList({sentinelImgs,brightness}) {
  return (
    <div className="img-list-container">
        {sentinelImgs.map((imgUrl,idx)=>{
            return <ImgPreview key={idx} brightness={brightness} imgUrl={imgUrl}/>
        })}
    </div>
  )
}
