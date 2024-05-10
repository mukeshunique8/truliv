import React from 'react';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useFilterContext } from '../../../providers/FilterContext';

export default function GenderRadio() {
  const { gender, setGender } = useFilterContext();

  const handleGenderChange = (value) => {
    setGender(value);
  };

  return (
    <RadioGroup  onChange={handleGenderChange} value={gender}>
      <Stack spacing={8} direction='row'>
        <Radio colorScheme='orange' value='Male'>
          Men
        </Radio>
        <Radio colorScheme='orange' value='Female'>
          Women
        </Radio>
        <Radio colorScheme='orange' value='Unisex'>
          Unisex
        </Radio>
      </Stack>
    </RadioGroup>
  );
}
