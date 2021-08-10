import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import RateMaterial from './RateMaterial'
import RewardOfferer from './RewardOfferer'
import { styled } from '@material-ui/core'

const StyledListItem = styled(ListItem)(() => ({
    padding: 20, 
  }));

export default function Checkout(props) {
  const {product, handleClose, materials, setMaterials} = props;

  const submitCheckoutHandle = (e) => {
    var newMaterials = []
    materials.forEach(element => {
      if (product.id === element.id) {
          element.status = 1
      }
      newMaterials.push(element);
    });
    setMaterials(newMaterials);
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