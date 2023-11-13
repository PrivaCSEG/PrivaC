

const cloudName = "demo"; // replace with your own cloud name

// Remove the comments from the code below to add
// additional functionality.
// Note that these are only a few examples, to see
// the full list of possible parameters that you
// can add see:
//   https://cloudinary.com/documentation/product_gallery_reference

const myGallery = cloudinary.galleryWidget({
  container: "#my-gallery",
  cloudName: cloudName,
  mediaAssets: [
    { tag: "electric_car_product_gallery_demo" }, // by default mediaType: "image"
    { tag: "electric_car_product_gallery_demo", mediaType: "video" },
    { tag: "electric_car_360_product_gallery_demo", mediaType: "spin" }
  ],
  //displayProps: { mode: "expanded", columns: 2 }, // multi column display
  aspectRatio: "4:3", // if most assets are in landscape orientation
  // imageBreakpoint: 200,  // responsive resize images to closest step in 200px increments
  //carouselStyle: "indicators", // displays thumbnails by default
  //indicatorProps: { color: "red" },   // only relevant if CarouselStyle is set to indicators
  // carouselLocation: "right",  // "left" by default
  borderColor: '#ccc',  // color is transparent by default
  borderWidth: 5, // border width is 0 by default
  // transition: "fade",  // "slide" by default
  zoom: false,    // deactivate the zoom feature
});

myGallery.render();