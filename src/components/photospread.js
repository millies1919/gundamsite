import React from 'react'
import Gallery from "react-photo-gallery";
 
const photos = [
    {
      src: '/images/1.jpg',
      width: 4,
      height: 5
    },
    {
      src: '/images/2.jpg',
      width: 6,
      height: 6
    },
    {
        src: '/images/3.jpg',
        width: 4,
        height: 5,
      },
      {
        src: '/images/4.jpg',
        width: 6,
        height: 8
      },
      {
        src: '/images/5.jpg',
        width: 4,
        height: 5
      },
      {
        src: '/images/6.jpg',
        width: 6,
        height: 7
      },
      {
        src: '/images/7.jpg',
        width: 4,
        height: 3
      },
      {
        src: '/images/8.jpg',
        width: 6,
        height: 7
      },
      {
        src: '/images/9.jpg',
        width: 4,
        height: 6
      },
      {
        src: '/images/10.jpg',
        width: 6,
        height: 7.5
      },
      {
        src: '/images/11.jpg',
        width: 6,
        height: 6.5
      },
      {
        src: '/images/12.jpg',
        width: 6,
        height: 6
      }
  ];
   
  const BasicColumns = () => <Gallery photos={photos} direction={"column"} />;

  export default BasicColumns

  