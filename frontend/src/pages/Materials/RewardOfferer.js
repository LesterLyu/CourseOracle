import React, {useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {UserContext} from "../../contexts";
import {tipMaterial} from "../../api/material"

export default function RewardOfferer(props) {
  const userContext = useContext(UserContext);
  const {handleClose, product} = props;
  const [rewardAmount, setRewardAmount] = useState(0)

  async function submitTipHandler(){
    const res = await tipMaterial(userContext.email, product.id, rewardAmount)
    if (!res.error){
        alert('You tip offerer ' + rewardAmount + ' CFX')
        handleClose()
    }else{
        alert(res.error)
    }
  }

  return (
      <div>
          <Grid>Reward Offerer</Grid>
          <Grid>
            <input
            type='number'
            placeholder={rewardAmount}
            onChange={(e) => {
                if (e.target.value < 0){
                    alert('You should type a positive number')
                }else{
                    setRewardAmount(e.target.value)
                }
            }}
            />
          </Grid>
          <Grid>
            <Button variant="outlined" color="primary" onClick={handleClose}>
                Cancel
            </Button>

            <Button variant="contained" color="primary" onClick={submitTipHandler}>
                Submit
            </Button>
        </Grid>
    </div>
  );
}