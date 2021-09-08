import React, {useContext} from 'react';
import Ratings from 'react-ratings-declarative';
import {Button, Grid} from '@mui/material';
import {UserContext} from "../../contexts";
import {rateMaterial} from "../../api/material"

export default function RateMaterial(props) {
  const userContext = useContext(UserContext);
  const {product, handleClose, materials, setMaterials} = props;
  const [rating, setRating] = React.useState(1);

  const submitRateHandle = async () => {
    const res = await rateMaterial(userContext.email, product.id, rating)
    if (!res.error){
      var newMaterials = []
      materials.forEach(element => {
        if (product.id === element.id) {
            element.status = 2
        }
        newMaterials.push(element);
      });
      setMaterials(newMaterials);
    }else{
      alert(res.error)
    }
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