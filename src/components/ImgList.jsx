import React from 'react'
import ImgPreview from './ImgPreview'
export default function ImgList({sentinelImgs}) {
  return (
    <div className="img-list-container">
        {sentinelImgs.map((imgUrl,idx)=>{
            return <ImgPreview key={idx} imgUrl={imgUrl}/>
        })}
    </div>
  )
}
