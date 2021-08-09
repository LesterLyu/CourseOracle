import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import RateMaterial from './RateMaterial'
import RewardOfferer from './RewardOfferer'

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: 20, 
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: 2,
  },
}));

export default function Checkout(props) {
  const {product, handleClose, materials, setMaterials} = props;
  const classes = useStyles();

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
        <ListItem className={classes.listItem} key={product.id}>
        <ListItemText primary={product.school + ' ' + product.course + ' ' + product.year + ' ' + product.semester + ' ' + product.prof[0]} 
                    secondary={product.type} />
        <Typography variant="body1">{product.price}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            <span>{product.price}</span>
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleClose}>
                    Close          
                </Button>
            <Typography  className={classes.total}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={submitCheckoutHandle}>
                    Buy            
                </Button>
            </Typography>
      </ListItem>
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