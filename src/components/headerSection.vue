<template>
  <div class="header pt-2">
    <div class="bg-look">
      <div class="container">
        <div class="row">
          <!--Logo -->
          <!-- <div class="mr-auto pvr">PVR Cinemas</div> -->

          <!-- Search Bar -->
          <div class="d-flex search">
            <b-form-input
              size="sm"
              class="col-md-9 search-movie"
              placeholder="Search movies or theatres"
            >
              <!-- <div class="searching">
     			 <font-awesome-icon :icon="['fas', 'search']" class="fa-1x text-danger" />
              </div>-->
            </b-form-input>
            <!-- Arrow Down1 -->
            <div class="arrow-down1"></div>

            <!-- Delhi-NCRM Bar		 -->
            <b-form-input
              size="sm"
              class="col-md-3 ml-2 delhi-ncrm"
              placeholder="   Delhi-NCRM|   "
            ></b-form-input>
            <!-- Arrow-Up -->
            <div class="arrow-up"></div>
            <!-- Arrow-Down2	 -->
            <div class="arrow-down2"></div>
          </div>

          <!-- Bars Icon -->
          <div class="ml-5 pl-5 mt-1">
            <font-awesome-icon :icon="['fas', 'bars']" class="fa-1.5x bar text-warning" />
          </div>
        </div>

        <!-- Options-List -->
        <div class="row">
          <div class="option d-flex">
            <b-nav class="float-left pr-5 ml-4">
              <b-nav-item>IMAX</b-nav-item>
              <b-nav-item>4DX</b-nav-item>
              <b-nav-item>Play House</b-nav-item>
              <b-nav-item>GOLD</b-nav-item>
              <b-nav-item>P[XL]</b-nav-item>
              <b-nav-item>ONYX</b-nav-item>
              <b-nav-item>Director's Cut</b-nav-item>
            </b-nav>

            <div class="float-right pr-5">
              <b-nav>
                <b-nav-item>Vkaao</b-nav-item>
                <b-nav-item>Magazines</b-nav-item>
                <b-nav-item>Cinemas</b-nav-item>
                <b-nav-item>Offers</b-nav-item>
                <b-nav-item>Advertise</b-nav-item>
                <b-nav-item>Gift Cards</b-nav-item>
                <b-nav-item>Bulk Bookings</b-nav-item>
              </b-nav>
            </div>
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
@import "~@/scss/import";
.bg-look {
  margin-left: 160px;
  .pvr {
    color: $pvr-text;
    margin-left: -70px;
    font-size: 20px;
  }
  .search {
    position: relative;
  }
  .search-movie {
    width: 678px;
  }
  // .searching {
  // 	position: absolute;
  // }
  .arrow-down1 {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid black;
    margin-left: 679px;
    margin-top: 13px;
  }
  .delhi-ncrm {
    position: relative;
    width: 245px;
  }
  .arrow-up {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid black;
    margin-top: 13px;
    margin-left: 709px;
  }
  .arrow-down2 {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid black;
    margin-left: 921px;
    margin-top: 13px;
  }
  .row {
    .option {
      font-size: 9px;
      margin-left: -40px;
    }
  }
  .nav-link {
    color: white;
  }
  .bar {
    margin-left: 56px;
  }
}
</style>
