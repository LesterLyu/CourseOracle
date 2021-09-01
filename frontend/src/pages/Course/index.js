import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {Container, Box, Tab, Tabs, Typography} from "@material-ui/core";
import {styled} from "@material-ui/core/styles";
import Link from "../../components/Link";

const StyledTab = styled(Tab)({
  textTransform: 'none',
});

export default function Course() {
  const {course, institute} = useParams();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (e, newValue) => {
    setTabValue(newValue);
  }

  return (
    <Container>
      <Typography variant={"h3"} sx={{pt: 1}}>
        {course}
      </Typography>
      <Typography variant={"h5"} color={"textSecondary"} sx={{pt: 1, pb: 1}}>
        Institute: <Link href={`/institute/${institute}`}>{institute}</Link>
      </Typography>
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
          <StyledTab label="Course Rating"/>
          <StyledTab label="Materials"/>
        </Tabs>
      </Box>
    </Container>
  );
}