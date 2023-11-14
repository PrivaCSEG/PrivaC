

const cloudName = "demo"; 

const myGallery = cloudinary.galleryWidget({
  container: "#my-gallery",
  cloudName: cloudName,
  mediaAssets: [
    {  },
    { tag: "electric_car_product_gallery_demo" }, // by default mediaType: "image"
    { tag: "electric_car_product_gallery_demo", mediaType: "video" },
    { tag: "electric_car_360_product_gallery_demo", mediaType: "spin" }
  ],
  aspectRatio: "4:3", // if most assets are in landscape orientation
  // imageBreakpoint: 200,  // responsive resize images to closest step in 200px increments
  //carouselStyle: "indicators", // displays thumbnails by default
  //indicatorProps: { color: "red" },   // only relevant if CarouselStyle is set to indicators
  // carouselLocation: "right",  // "left" by default
  borderColor: '#ccc',  // color is transparent by default
  borderWidth: 5, // border width is 0 by default
  // transition: "fade",  // "slide" by default
  zoom: false,
});

myGallery.render();