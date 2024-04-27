import React from 'react'
import { Input } from '@chakra-ui/react'

export default function TimePicker(props) {
  return (
    <div className=''>
        <label className={`${props.weight}`}  htmlFor="">{props.label}</label>
     <Input sx={{color:"b.100"}} className='mt-2 cursor-pointer'  placeholder=' ' size='md' type='time' />

    </div>
  )
}
