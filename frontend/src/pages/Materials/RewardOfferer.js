import React, {useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {UserContext} from "../../contexts";
import {URL_PRIFIX} from "../../constants"

export default function RewardOfferer(props) {
  const userContext = useContext(UserContext);
  const {handleClose, product} = props;
  const [rewardAmount, setRewardAmount] = useState(0)

  function submitTipHandler(){
    //TODO: open wallet and send money
    const url = URL_PRIFIX + 'material/tip'
    fetch(url, {
      method: 'post',
      body: JSON.stringify({
        userEmail: userContext.email,
        materialId: product.id,
        tip: rewardAmount
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
            handleClose()
        }else{
            alert(data.error)
        }
    })
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