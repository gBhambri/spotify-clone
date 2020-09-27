import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
function Footer() {
    return (
        <div className='footer'>
            <div className='footer__left'>
               <img className='footer__albumLogo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Grey_headed_flying_fox_-_skimming_water_-_AndrewMercer_-_DSC00530.jpg/1000px-Grey_headed_flying_fox_-_skimming_water_-_AndrewMercer_-_DSC00530.jpg' alt=''></img>
               <div className='footer__songInfo'>
                    <h4>Wajah</h4>
                    <p>Piyush Bhisekar</p>
               </div>
            </div>
            <div className='footer__center'>
            <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
       
          <PlayCircleOutlineIcon
            fontSize="large"
            className="footer__icon"></PlayCircleOutlineIcon>
          
        
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
            </div>
            <div className='footer__right'>
            <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
            </div>
        </div>
    )
}

export default Footer
