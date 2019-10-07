<template>
<div class="banner bg-dark">
<div class="container">

<div class="photo">

<!-- Carousel-Image -->
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="@/assets/images/unnamed.jpg" class="a-block w-30 h-25" alt="unnamed">
    </div>

	<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>

  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>

  </div>
 </div>
</div>

  <!-- Name Of The Movie -->

	  <div class="name text-left font-weight-bold pl-5">
      Fast & Furious:Hobbs And Shaw
    </div>

<!-- Buttons of Book Tickets and Play Later -->

      <div class="button text-left pl-5">
        <button type="button" class="btn btn-light btn-sm mx-2 my-2">Book Tickets</button>
        <button type="button" class="btn btn-light btn-sm mx-2 my-2">Play Later</button>
	    </div>


 </div>
 </div>

</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.banner {
	position: relative;

	.name {
		position: absolute;
		margin-top: -133px;
		margin-left: 14px;
		font-size: 20px;
		color: white;
	}
	.button {
		position: absolute;
		margin-left: 6px;
		margin-top: -94px;
	}
	// .myclass1 {
	// 	background-color: #e8e2e4;
	// }
	// .myclass {
	// 	background-image: url('/w3images/photographer.jpg');
	// 	background-position: center;

	// 	width: 100%;
	// 	height: 100vh;
	// 	opacity: 0.2;
	// 	position: relative;
	// }
	// .hero-image {
	// 	background-image: url('/assets/images/eve.jpeg');
	// 	background-position: center;
	// 	background-repeat: no-repeat;
	// 	background-size: cover;
	// 	position: absolute;

	// 	text-align: center;
	// 	z-index: 2;
	// 	top: 40%;
	// 	left: 50%;
	// 	transform: translate(-50%, -50%);
	// }
}
</style>
