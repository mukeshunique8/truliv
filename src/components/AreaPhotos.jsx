import React from 'react'
import Image from "next/image";

export default function AreaPhotos(props) {
  return (
    <div>
        <Image
          src={props.urlImage} alt={props.altimg} width={391}    height={215}
        />
    </div>
  )
}
