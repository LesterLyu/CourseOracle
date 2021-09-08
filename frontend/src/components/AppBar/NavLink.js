import * as React from "react";
import {Link} from "@mui/material";
import {useHistory} from "react-router-dom";

export default function NavLink({children, href}) {
  const history = useHistory();
  return (
    <Link
      href={href}
      variant="h6"
      color="inherit"
      underline="none"
      sx={{paddingRight: 4, fontSize: 17}}
      onClick={e => {
        e.preventDefault();
        history.push(href)
      }}>
      {children}
    </Link>
  )
}
