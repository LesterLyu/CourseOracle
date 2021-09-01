import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {Container, Typography} from "@material-ui/core";

export default function Prof() {
  const {name} = useParams();
  return <Container>
    <Typography variant="h4">
      Professor: {name}
    </Typography>
  </Container>
}