import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
// Import css file
import "./Menu.css"
// Import images
import one from "../assets/Menu/1.jpeg";
import two from "../assets/Menu/2.jpeg";
import three from "../assets/Menu/3.jpeg";
import four from "../assets/Menu/4.jpeg";
import five from "../assets/Menu/5.jpeg";
import six from "../assets/Menu/6.jpeg";
import seven from "../assets/Menu/7.jpeg";
import eight from "../assets/Menu/8.jpeg";
import nine from  "../assets/Menu/9.jpeg";
import ten from "../assets/Menu/10.jpeg";
import eleven from  "../assets/Menu/11.jpeg";
import twel from "../assets/Menu/12.jpeg";

const MENU = () => {
    const Menudata = [
        {
            name:"Bean | Qalaba beans with oil/ghee",
            image:one,
            price: 7
        },
        {
            name:"Fresh sheep liver | Fresh sheep liver",
            image:two,
            price: 27
        },
        {
            name:"Muqalqal Meat | My flesh is disturbed",
            image:three,
            price: 41
        },
        {
            name:"Hamsa Moqalqal",
            image:four,
            price: 49
        },
        {
            name:"Adas | Qalaba lentils",
            image:five,
            price: 9
        },
        {
            name:"Arika with ghee and honey",
            image:six,
            price: 62
        },
        {
            name:"Machghouta ghee and honey",
            image:seven,
            price: 60
        },
        {
            name:"Adani Bean | Adani beans",
            image:eight,
            price: 13
        },
        {
            name:"Oven bread",
            image:nine,
            price: 25
        },
        {
            name:"Egg | fried eggs",
            image:ten,
            price: 10
        },
        {
            name:"Fried Eggs",
            image:eleven,
            price: 10
        },
        {
            name:"Oven Egg | Oven eggs",
            image:twel,
            price: 13
        },

    ]
  return (
    
  <div>
       <h1 className='h1'>Menu Items...</h1>
    {
        Menudata.map(({name,image,price})=>{
            return(
                <Card sx={{ maxWidth: 545 ,
                marginLeft:'400px',
                marginTop:'30px'}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="400"
                    image = {image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  Price : {price} SR
                </CardActions>
              </Card>
            )
        })
    }
  </div>

  )
}

export default MENU
