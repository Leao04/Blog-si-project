<template>
  <div>
    <div>
      <div>
        <b-carousel
          id="carousel-fade"
          fade
          indicators
          img-width="1024"
          img-height="480"
        >
          <b-carousel-slide
            caption="First slide"
            img-src="../assets/img/logo.jpg"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Second Slide"
            img-src="https://picsum.photos/1024/480/?image=12"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Third Slide"
            img-src="https://picsum.photos/1024/480/?image=22"
          ></b-carousel-slide>
        </b-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
