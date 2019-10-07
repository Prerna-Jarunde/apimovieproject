<template>
<div class="look mt-5 ml-5 pl-5">
  <div class="container">
    <div class="row">

                      <!-- Footer Top -->

      <!-- First Column Section for General heading -->
        <div class="col-md-4">
          <div class="ft-heading text-left font-weight bold title ">GENERAL</div>
            <div class="d-flex">
      <!-- Contents Under General Section -->
           <div class="general text-left">
            <div>
              <a href="#">ABOUT US</a>
            </div>

           <div>
            <a href="#">FAQ'S</a>
          </div>

         <div>
           <a href="#">INVESTOR'S SECTION</a>
         </div>

        <div>
          <a href="#">CAREER</a>
        </div>
  </div>

      <!-- News Section -->
      <div class="news text-left ml-5 pl-5">

       <!-- Options Under News Section -->

      <div>
        <a href="#">NEWS</a>
      </div>

      <div>
         <a href="#">FEEDBACK</a>
      </div>

      <div>
        <a href="#">EVENTS</a>
      </div>

      <div>
        <a href="#">NVSP</a>
      </div>

</div>
</div>

</div>

    <!-- Second Column For Our Brands Section -->

        <div class="col-md-4">
          <div class="ft-heading text-left font-weight bold title">OUR BRANDS</div>
            <div class="d-flex">
               <div class="our-brands text-left">

    <!-- Options Under Our Brands Section -->

        <div>
          <a href="#">PVR DIRECTOR'S CUT</a>
       </div>

      <div>
        <a href="#">PVR PICTURES</a>
     </div>

      <div>
        <a href="#">PVR IMAX</a>
     </div>

      <div>
        <a href="#">PVR 4DX </a>
     </div>
 </div>

      <!-- Options For PlayHouse Option -->

      <div class="playhouse ml-5">

      <div>
        <a href="#">PLAY HOUSE</a>
     </div>

      <div>
        <a href="#">PVR GOLD</a>
     </div>

      <div>
        <a href="#">PVR P[XL] </a>
     </div>

      <div>
        <a href="#">PVR ONYX</a>
     </div>
</div>

      <!-- PVR Nest Option -->
        <div class="pvr-nest ml-5">
          <div>
            <a href="#">PVR NEST</a>
          </div>
      </div>
    </div>
  </div>

      <!-- Third Column Section For Cinemas Section -->
         <div class="col-md-4">
            <div class="ft-heading text-left font-weight bold title">CINEMAS</div>
              <div class="d-flex">
                <div class="cinemas text-left">

      <!-- Options under Cinemas Section -->
        <div>
          <a href="#">CINEMAS</a>
        </div>

        <div>
          <a href="#">UPCOMING</a>
        </div>

        <div>
          <a href="#">ADVERTISE</a>
        </div>

        <div>
          <a href="#">BEYOND MOVIES</a>
        </div>
 </div>

        <!-- Last Section Of Birthday Request and Subscribe to NewsLetter Option -->
            <div class="birthday-request text-left">
              <div>
                <a href="#">BIRTHDAY REQUEST</a>
              </div>

              <div>
                <a href="#">SUBSCRIBE TO NEWSLETTER</a>
              </div>
        </div>
    </div>
</div>

 </div>

                 <!-- Footer End -->
      <div class="privacy mt-5 text-white">
        <span class="mx-5 ">PRIVACY POLICY</span>
        <span class="mx-5 ">TERMS AND CONDITIONS</span>
        <span class="mx-5 ">TERMS OF USE</span>
      </div>

    <!-- Last Section Of Footer CopyRight  -->
        <div class="title text-center col-md-12 pt-4 text-white d-flex">
          <div class="text-uppercase copy">© Copyright 2014 Pvt Ltd.All rights reserved</div>
        </div>

    <!-- Font-Awesome Icons -->
      <div class="font-images d-flex">
     <!-- Facebbok -->
      <div class="mr-4">
        <font-awesome-icon :icon="['fab', 'facebook-square']" class="fa-1x text-white" />
      </div>
      <!-- Google-Plus_G -->
      <div class="mr-4">
       <font-awesome-icon :icon="['fab', 'google-plus-g']" class="fa-1x text-white" />
      </div>
      <!-- Youtube -->
      <div class="mr-4">
        <font-awesome-icon :icon="['fab', 'youtube']" class="fa-1x text-white" />
      </div>
      <!-- Twitter -->
      <div class="mr-4">
        <font-awesome-icon :icon="['fab', 'twitter']" class="fa-1x text-white" />
      </div>
      <!-- Instagram -->
    <div class="mr-4">
      <font-awesome-icon :icon="['fab', 'instagram']" class="fa-1x text-white" />
    </div>
    <!-- LinkeIn -->
    <div class="mr-4">
      <font-awesome-icon :icon="['fab', 'linkedin']" class="fa-1x text-white" />
    </div>

    </div>
      </div>
  </div>
</div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
@import '~@/scss/import';
.look {
	// background-image: url('../assets/images/beauty.jpg');
	.title {
		color: $footer-text;
		font-size: 10px;
	}

	.privacy {
		font-size: 12px;
		margin-left: -187px;
	}

	a {
		color: grey;
		font-size: 10px;
	}
	.copy {
		color: grey;
		margin-left: 329px;
	}
	.font-images {
		padding-left: 810px;

		margin-top: -22px;
	}
}
</style>
