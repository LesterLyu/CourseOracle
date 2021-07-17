import * as React from "react";
import {Link} from "@material-ui/core";

export default function NavLink({children, href}) {
  return (
    <Link href={href} variant="h6" color="inherit" underline="none" sx={{paddingRight: 4, fontSize: 17}}>
      {children}
    </Link>
  )
}
