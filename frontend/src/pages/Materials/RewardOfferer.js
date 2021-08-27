import React, {useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {UserContext} from "../../contexts";
import {postJson} from "../../api/helpers"

export default function RewardOfferer(props) {
  const userContext = useContext(UserContext);
  const {handleClose, product} = props;
  const [rewardAmount, setRewardAmount] = useState(0)

  async function submitTipHandler(){
    //TODO: open wallet and send money
    const url = '/api/material/tip';
    const data = {
        userEmail: userContext.email,
        materialId: product.id,
        tip: rewardAmount
        }
    const res = await postJson(url, data)
    if (!res.error){
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