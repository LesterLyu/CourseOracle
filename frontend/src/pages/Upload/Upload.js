import React, {useContext, useState} from "react";
import {useHistory} from 'react-router-dom';
import {Container, Divider, Paper, Typography, Box, Button} from "@material-ui/core";
import {UserContext} from "../../contexts";
import {styled} from "@material-ui/core/styles";
import {useDropzone} from 'react-dropzone';
import {USER_TYPE} from "../../constants";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const StyledPaper = styled(Paper)(({theme}) => ({
  padding: 40,
  [theme.breakpoints.down('sm')]: {
    margin: 0,
    padding: 14,
    marginTop: 10,
  }
}));


const StyledContainer = styled(Container)(({theme}) => ({
  // flex: 1;
  flexed: true,
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: '2px',
  borderRadius: '2px',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
}));


export default function UploadPage(props) {
  const history = useHistory();
  const userContext = useContext(UserContext);

  if (userContext.type == USER_TYPE.GUEST) {
    history.push('/login');
  }

  const [waiting, setWaiting] = useState(false);

  const submit = () => {
    setWaiting(true);
    // TODO
    console.log('aaaaaa', files)

  };


  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));


  return (
    <Container>

      <Container maxWidth="lg">
        <Box sx={{paddingTop: '40px', display: 'flex'}}/>
        <StyledPaper elevation={5}>
          <Typography variant="h4" sx={{
            color: 'rgb(0,32,81)',
            fontWeight: 400,
            marginBottom: 3,
            display: 'flex'
          }}>
            Upload Course Materials
          </Typography>

          <section className="container">
            <StyledContainer {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              <p>Drag some files here, or click to select files</p>
            </StyledContainer>
            <aside>
              <h4>Files</h4>
              <ul>{files}</ul>
            </aside>
          </section>


          <Divider/>
          <Button
            startIcon={<CloudUploadIcon fontSize="large"/>}
            color="info"
            variant="contained"
            sx={{
              // justifyContent: "flex-end",
              // alignItems: "flex-end",
              // marginRight: 2,
              marginTop: 3,
            }} onClick={submit} loading={waiting}>
            Upload
          </Button>

        </StyledPaper>
      </Container>
    </Container>
  )
}