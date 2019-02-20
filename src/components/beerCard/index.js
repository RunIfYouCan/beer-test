import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';

import "./style.scss"

const classes = {
  checkbox: {
    checked: "checked"
  }
}

const BeerCard = ({ beer }) => {
  return (
    <Card onClick={() => console.log("card click")} className="BeerCard">
      <CardMedia
        className="BeerCard__image"
        image={beer.image_url}
        title={beer.name}
      />
      <CardContent>
        <Typography className="BeerCard__title" variant="h5" component="h2" gutterBottom>
          {beer.name}
        </Typography>
        <Typography component="p">
          {beer.tagline}
        </Typography>
      </CardContent>
      <CardActions className="BeerCard__favorite">
        <Checkbox
          classes={classes.checkbox}
          onChange={() => console.log("favorite button click")}
          icon={<StarBorder />}
          checkedIcon={<Star />} />
      </CardActions>
    </Card>
  )
}

export default BeerCard
