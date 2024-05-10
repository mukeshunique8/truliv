import React, { useState, useContext } from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  Flex,
  VStack,
  Text,
} from "@chakra-ui/react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { useFilterContext } from "../../../providers/FilterContext"; // Import the FilterContext

export default function PriceRange() {
  const { priceRange, setPriceRange } = useFilterContext(); // Access priceRange state and setPriceRange function from FilterContext
  const [sliderValues, setSliderValues] = useState(priceRange); // Initialize sliderValues state with priceRange from context

  const handleChange = (newValues) => {
    setSliderValues(newValues);
    setPriceRange(newValues); // Update priceRange in the context
  };

  return (
    <VStack width={"full"} spacing={4} mb={8}>
      <RangeSlider
        aria-label={["min", "max"]}
        colorScheme="orange"
        defaultValue={sliderValues}
        onChange={handleChange}
        min={0}
        max={20000}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <Flex align="item-center" justify="space-between" w="full">
        <Text>Min: ₹ {sliderValues[0]}</Text>
        <Text>Max: ₹ {sliderValues[1]}</Text>
      </Flex>
    </VStack>
  );
}
