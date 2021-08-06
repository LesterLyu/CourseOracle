import React from "react";
import {Button, CircularProgress, Box} from "@material-ui/core";
import {styled} from "@material-ui/core";


const StyledButton = styled(Button)(() => ({
  backgroundColor: '#3b924a',
  '&:hover': {
    backgroundColor: '#219d3a',
  },
  '&:active': {
    backgroundColor: '#3b924a',
  },
}));

const StyledCircularProgress = styled(CircularProgress)((() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginTop: -12,
  marginLeft: -12,
})));


export default function SubmitButton({loading, children, noDefaultStyle, ...props}) {

  return (
    <Box sx={{
      position: 'relative',
      display: 'initial'
    }}>
      <StyledButton variant="contained"
               disabled={loading}
               {...props}>
        {children ? children : "Submit"}
      </StyledButton>
      {loading && <StyledCircularProgress size={24}/>}
    </Box>
  )
}
