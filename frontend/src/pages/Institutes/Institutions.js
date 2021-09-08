import React from 'react';
import {
  Box, Grid, Container
} from "@mui/material";
import SchoolCard from './SchoolCard';

const schools = [{
  "web_pages": [
    "http://www.marywood.edu"
  ],
  "name": "Marywood University",
  "alpha_two_code": "US",
  "state-province": null,
  "domains": [
    "marywood.edu"
  ],
  "country": "United States"
},
  {
    "web_pages": [
      "https://www.cstj.qc.ca",
      "https://ccmt.cstj.qc.ca",
      "https://ccml.cstj.qc.ca"
    ],
    "name": "Cégep de Saint-Jérôme",
    "alpha_two_code": "CA",
    "state-province": null,
    "domains": [
      "cstj.qc.ca"
    ],
    "country": "Canada"
  }];
export default function InstitutionPage() {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{pt: 3}}>
          <Grid
            container
            spacing={3}
          >
            {schools.map((school) => (
              <Grid
                item
                key={school.id}
                lg={4}
                md={6}
                xs={12}
              >
                <SchoolCard school={school}/>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
        </Box>
      </Container>
    </Box>);
}
