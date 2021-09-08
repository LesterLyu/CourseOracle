import React from "react";
import {Link as MuiLink} from "@mui/material";
import {useHistory} from "react-router-dom";

export default function Link({children, href}) {
  const history = useHistory();
  return (
    <MuiLink
      href={href}
      color="inherit"
      underline="none"
      sx={{
        ':hover': {
          textDecoration: 'underline'
        }
      }}
      onClick={e => {
        e.preventDefault();
        history.push(href)
      }}>
      {children}
    </MuiLink>
  )
}
