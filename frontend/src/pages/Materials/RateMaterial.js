import React from 'react';
import Ratings from 'react-ratings-declarative';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default function RateMaterial(props) {
  const {product, handleClose, materials, setMaterials} = props;
  const [rating, setRating] = React.useState(0);

  const submitRateHandle = () => {
      var newMaterials = []
      materials.forEach(element => {
        if (product.id === element.id) {
            element.status = 2
        }
        newMaterials.push(element);
      });
      setMaterials(newMaterials);
  }

  return (
      <div>
          <Grid>
        <span>Rate this material!</span>
          </Grid>
          <Grid>
        <Ratings
        rating={rating}
        widgetRatedColors="orange"
        changeRating={(newRating) => setRating(newRating)}
        >
            <Ratings.Widget onClick={() => setRating(1)}/>
            <Ratings.Widget />
            <Ratings.Widget/>
            <Ratings.Widget />
            <Ratings.Widget />
        </Ratings>  
        <span>{rating} Stars</span>
        </Grid>
        <Grid>
            <Button variant="outlined" color="primary" onClick={handleClose}>
                skip
            </Button>

            <Button variant="contained" color="primary" onClick={submitRateHandle}>
                Submit
            </Button>
        </Grid>
    </div>
  );
}