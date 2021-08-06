import React from 'react';
import {MenuList, MenuItem, ListItemIcon, ListItemText, Paper, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";

export default function NavPanel({config}) {
  const history = useHistory();
  return (
    <Paper variant="outlined" sx={{marginTop: 4, marginRight: 2}}>
      <MenuList dense>
        <Typography sx={{fontWeight: 500, paddingLeft: 2, paddingBottom: 1, pt: 1}}>
          Dashboard
        </Typography>
        {config.map(({label, Icon, path}) =>
          <MenuItem
            key={label}
            onClick={() => history.push(path)}>
            <ListItemIcon>
              <Icon fontSize="small"/>
            </ListItemIcon>
            <ListItemText>{label}</ListItemText>
          </MenuItem>
        )}
      </MenuList>
    </Paper>
  )
}
