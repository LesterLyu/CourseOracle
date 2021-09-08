import React, {useContext} from 'react';
import {Typography, List, ListItem, ListItemText, Button, styled} from '@mui/material';
import RateMaterial from './RateMaterial'
import RewardOfferer from './RewardOfferer'
import {UserContext} from "../../contexts";
import {purchaseMaterial} from "../../api/material"

const StyledListItem = styled(ListItem)(() => ({
    padding: 20, 
  }));

export default function Checkout(props) {
  const userContext = useContext(UserContext);
  const {product, handleClose, materials, setMaterials} = props;

  const submitCheckoutHandle = async (e) => {
    const res = await purchaseMaterial(userContext.email, product.id)
    // const url = '/api/material/purchase';
    // const data = {
    //     userEmail: userContext.email,
    //     materialId: product.id,
    //     price: product.price,
    //   }
    // const res = await postJson(url, data)
    // TODO: Download the file
    if (!res.error){
      var newMaterials = []
      materials.forEach(element => {
        if (product.id === element.id) {
            element.status = 1
        }
        newMaterials.push(element);
      });
      setMaterials(newMaterials);
    }else{
      alert(res.error)
    }
}

  return (
    <React.Fragment>
    {product.status === 0 &&
        <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List >
        <StyledListItem key={product.id}>
        <ListItemText primary={product.school + ' ' + product.course + ' ' + product.year + ' ' + product.semester + ' ' + product.prof[0]} 
                    secondary={product.type} />
        <Typography variant="body1">{product.price}</Typography>
        </StyledListItem>
        <StyledListItem>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={{fontWeight: 700}}>
            <span>{product.price}</span>
          </Typography>
        </StyledListItem>
        <StyledListItem>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleClose}>
                    Close          
                </Button>
            <Typography  style={{fontWeight: 700}}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={submitCheckoutHandle}>
                    Buy            
                </Button>
            </Typography>
      </StyledListItem>
      </List>
    </React.Fragment>
    }

    {product.status === 1 && 
    <RateMaterial 
        product={product} handleClose={handleClose} 
        materials={materials} setMaterials={setMaterials}
    />
    }

    {product.status === 2 && 
    <RewardOfferer 
        product={product} handleClose={handleClose}
        materials={materials} setMaterials={setMaterials}
    />
    }
    </React.Fragment>
  );
}