import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Box } from "@mui/material";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import LinkedCameraIcon from "@mui/icons-material/LinkedCamera";

export default function imageListComponent() {
  const listImages = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://img.freepik.com/free-photo/beautiful-natural-view-landscape_23-2150787996.jpg",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtg6SNRxoTBGTHMxnV59khl2t1dAS0oynUMg&s",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },

    {
      img: "https://wallpapers.com/images/hd/natural-pictures-5vom1y4g9va1uvn8.jpg",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Tomato basil",
    },
    {
      img: "https://static.vecteezy.com/system/resources/thumbnails/009/398/082/small/tree-growth-on-globe-glass-in-nature-concept-eco-earth-day-free-photo.jpg",
      title: "Sea star",
    },
    {
      img: "https://cdn.pixabay.com/photo/2024/05/08/17/45/animal-8748794_640.jpg",
      title: "Bike",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
  ];

  const secondListImages = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
      cols: 2,
      rows: 4,
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
  ];

  const thirdListImages = [
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
      subtitle: "Fern Fern",
      icon: <InfoIcon />,
      actionPosition: "left",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
      subtitle: "Bike Bike",
      icon: <TwoWheelerIcon />,
      actionPosition: "right",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
      subtitle: "Basketball Basketball",
      icon: <SportsBasketballIcon />,
      actionPosition: "left",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
      subtitle: "Camera Camera",
      icon: <LinkedCameraIcon />,
      actionPosition: "right",
    },

    {
      img: "https://cdn.pixabay.com/photo/2014/10/03/08/33/nature-471179_640.jpg",
      title: "Fern",
      subtitle: "Fern Fern",
      icon: <InfoIcon />,
      actionPosition: "left",
      position: "below",
    },
    {
      img: "https://keralakaumudi.com/web-news/en/2023/05/NMAN0413506/image/tiger.1.559435.jpg",
      title: "Bike",
      subtitle: "Bike Bike",
      icon: <TwoWheelerIcon />,
      actionPosition: "right",
      position: "top",
    },
  ];
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>ImageList </h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "50rem",
            height: "25rem",
            border: "2px solid gray",
            overflowY: "scroll",
            borderRadius: "2px",
          }}
        >
          <ImageList cols={4} gap={25} rowHeight={200} variant="woven">
            {listImages.map((item) => {
              return (
                <ImageListItem key={item.img}>
                  <img src={item.img} loading="lazy" />
                </ImageListItem>
              );
            })}
          </ImageList>
        </Box>
      </Box>
      <hr />

      <h1 style={{ textAlign: "center" }}>ImageListItem </h1>

      <Box sx={{ width: 700, height: 450, overflowY: "scroll" }}>
        <ImageList cols={3}>
          {secondListImages.map((el) => {
            return (
              <ImageListItem key={el.img} cols={el.cols} rows={el.rows}>
                <img src={el.img} loading="lazy" />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>

      <hr />
      <h1 style={{ textAlign: "center" }}>ImageListItemBar </h1>

      <Box sx={{ width: 700, height: 450, overflowY: "scroll" }}>
        <ImageList>
          {thirdListImages.map((el) => {
            return (
              <ImageListItem key={el.img}>
                <img src={el.img} loading="lazy" />
                <ImageListItemBar
                  title={el.title}
                  subtitle={el.subtitle}
                  actionPosition={el.actionPosition as any}
                  position={el.position as any}
                  actionIcon={
                    <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }}>
                      {el.icon}
                    </IconButton>
                  }
                ></ImageListItemBar>
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>
    </div>
  );
}
