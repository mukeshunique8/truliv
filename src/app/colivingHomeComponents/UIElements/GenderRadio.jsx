import React from 'react'
import { Radio, RadioGroup,Stack } from '@chakra-ui/react'


export default function GenderRadio() {
    const [value, setValue] = React.useState('1')
    return (
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction='row'>
          <Radio colorScheme='orange' value='1'>Men</Radio>
          <Radio colorScheme='orange' value='2'>Women</Radio>
          <Radio colorScheme='orange' value='3'>Unisex</Radio>
        </Stack>
      </RadioGroup>
    )
  }