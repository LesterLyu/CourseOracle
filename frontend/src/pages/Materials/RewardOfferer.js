import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default function RewardOfferer(props) {
  const {handleClose} = props;
  const [rewardAmount, setRewardAmount] = useState(0)

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

            <Button variant="contained" color="primary" onClick={() => {console.log(rewardAmount)}}>
                Submit
            </Button>
        </Grid>
    </div>
  );
}