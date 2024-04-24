import React from 'react'
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'

export default function Amenities() {
  return (
    <CheckboxGroup colorScheme='green' defaultValue={[]}>
      <Stack spacing={[5, 10]} direction={['column', 'row']}>

        {/* First column */}
        <Stack spacing={5} direction='column'>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='Wifi'>Wifi</Checkbox>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='Power Backup'>Power Backup</Checkbox>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='Comfort Beds'>Comfort Beds</Checkbox>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='Television'>Television</Checkbox>
        </Stack>

        {/* Second column */}
        <Stack spacing={5} direction='column'>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='Air Conditioning'>Air Conditioning</Checkbox>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='24 x 7 Security'>24 x 7 Security</Checkbox>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='Private Kitchen'>Private Kitchen</Checkbox>
          <Checkbox  sx={{color:"b.100"} } colorScheme='orange'   value='Dining Area'>Dining Area</Checkbox>
        </Stack>
        
      </Stack>
    </CheckboxGroup>
  )
}
