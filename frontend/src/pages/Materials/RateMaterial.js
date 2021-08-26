import React, {useContext} from 'react';
import Ratings from 'react-ratings-declarative';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {UserContext} from "../../contexts";

export default function RateMaterial(props) {
  const userContext = useContext(UserContext);
  const {product, handleClose, materials, setMaterials} = props;
  const [rating, setRating] = React.useState(1);

  const submitRateHandle = () => {
    // if ()
    const url = 'http://localhost:3001/api/material/rate'
    fetch(url, {
      method: 'post',
      body: JSON.stringify({
        userEmail: userContext.email,
        materialId: product.id,
        rate: rating
        }
      ),
      headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
      }
    }).then((res) => {
      return res.json()
    }).then((data) => {
      if (!data.error){
        var newMaterials = []
        materials.forEach(element => {
          if (product.id === element.id) {
              element.status = 2
          }
          newMaterials.push(element);
        });
        setMaterials(newMaterials);
      }else{
        alert(data.error)
      }
    })
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