import React from "react";
import { Box, Radio, Stack, Text } from "@chakra-ui/react";
const Radios = (props) => {
  return (
    <Box className="custom-control custom-radio" ml="1px">
      <Stack>
     <div style={{marginLeft:"1px",textAlign:"left"}}>
      <input
      
        type="radio"
        id={props.value}
        value={props.value}
        name="genderFilter"
        className="custom-control-input"
        onClick={props.onClick}
      />
     
     
        
      <label className="custom-control-label" htmlFor={props.value}>
        &nbsp;{props.label}
      </label>
      </div>
      </Stack>
      {/* <Stack>
      <Radio  colorScheme="red"  id={props.value} onClick={props.onClick} value={props.value}>
          <Text color="black">{props.label ? props.label : props}</Text>
        </Radio>

      </Stack> */}
    </Box>
  );
};

export default Radios;