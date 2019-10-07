<template>
  <div class="gallery pt-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <!-- Heading Now Showing For First Section -->

          <div class="mr-auto font-weight-normal now-showing text-white text-left pt-4">NOW SHOWING</div>

          <!-- Options For Genre,Format and Language -->

          <div class="d-flex format-options pb-5">
            <!-- Genre -->
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Genre</a>
            <!-- Format -->
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Format</a>
            <!-- Language -->
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Language</a>
          </div>
        </div>
      </div>

      <!-- Images Of Movies List In Now Showing -->

      <div class="row">
        <div
          class="col-md-3 pic"
          v-for="cardcontent in cardcontents"
          v-bind:key="cardcontent.title"
        >
          <div class="w-100 picture pt-3">
            <div>
              <img :src="cardcontent.poster_path" class="card-img" alt />
            </div>

            <!-- TopTitle Latest Release -->
            <div class="toptitle">
              <!-- <div class="latest-release badge-warning">Latest Release</div> -->

              <!-- Image contents of Genre,Format and Language -->

              <!-- Title: Movie Name -->

              <h5 class="text-left font-weight-bold movie-heading">{{cardcontent.title}}</h5>

              <!-- Contents of Genre,Format and Language  -->
              <div class="demo">
                <div>{{cardcontent.release_date}}</div>
              </div>
              <!-- <span>Hindi</span> -->
              <!-- <span>(U)</span>
              <span>Drama</span>-->
            </div>
          </div>
        </div>
      </div>

      <!-- SubHeading View All -->

      <div class="view-all mt-5 mb-3 text-white view-all">VIEW ALL ></div>

      <!-- Heading Coming Soon For Next Section -->

      <div class="text-left font-weight-normal text-white coming-soon">COMING SOON</div>

      <!-- List Of Movie Images for Coming Soon Section -->
      <div class="photo-image">
        <div class="row">
          <div
            class="col-md-3 pic"
            v-for="cardcontent in cardcontents"
            v-bind:key="cardcontent.title"
          >
            <div class="w-100 py-2">
              <div>
                <img :src="cardcontent.poster_path" class="card-img" alt />
              </div>

              <!-- TopTitle Latest Release -->
              <div class="toptitle">
                <!-- Image contents of Genre,Format and Language -->

                <!-- Title: Movie Name -->

                <h5 class="text-left font-weight-bold movie-heading">{{cardcontent.title}}</h5>

                <!-- Contents of Genre,Format and Language  -->
                <div class="dem">
                  <div>{{cardcontent.release_date}}</div>
                </div>
                <!-- <span>Hindi</span>
			<span>(U)</span>
                <span>Drama</span>-->
              </div>
            </div>
          </div>
        </div>

        <!-- SubHeading View All -->
        <div class="view-all mt-5 text-white view-all">VIEW ALL ></div>

        <!-- Heading Trailers And Videos For Last Section -->

        <div class="trailers-and-videos text-white text-left mb-4 mt-5 mx-3">TRAILERS AND VIDEOS</div>

        <!-- Images of Movie's Trailers List -->
        <div class="trailers bg-dark">
          <div class="row">
            <div class="col-md-3">
              <div class="w-100">
                <div class="css-overflow px-2">
                  <img src="@/assets/images/paris.jpeg" alt="image5" class="w-100" />
                  <img src="@/assets/images/garden.jpeg" alt="image5" class="w-100 py-1 pt-2" />
                  <img src="@/assets/images/paris.jpeg" alt="image5" class="w-100 pt-2" />
                  <img src="@/assets/images/garden.jpeg" alt="image5" class="w-100 py-1 pt-2" />
                  <img src="@/assets/images/paris.jpeg" alt="image5" class="w-100 py-1 pt-2" />
                  <img src="@/assets/images/paris.jpeg" alt="image5" class="w-100 py-1 pt-2" />
                  <img src="@/assets/images/paris.jpeg" alt="image5" class="w-100 py-1 pt-2" />
                  <img src="@/assets/images/paris.jpeg" alt="image5" class="w-100 py-1 pt-2" />
                  <img src="@/assets/images/paris.jpeg" alt="image5" class="w-100 py-1 pt-2" />
                  <img src="@/assets/images/paris.jpeg" alt="image5" class="w-100 py-1 pt-2" />
                  <img src="@/assets/images/paris.jpeg" alt="image5" class="w-100 py-1 pt-2" />
                  <img src="@/assets/images/garden.jpeg" alt="image5" class="w-100 py-1 pt-2" />
                  <img src="@/assets/images/paris.jpeg" alt="image5" class="w-100 py-1 pt-2" />
                  <img src="@/assets/images/garden.jpeg" alt="image5" class="w-100 py-1 pt-2" />
                  <img src="@/assets/images/garden.jpeg" alt="image5" class="w-100 py-1 pt-2" />
                  <img src="@/assets/images/garden.jpeg" alt="image5" class="w-100 py-1 pt-2" />
                  <img src="@/assets/images/garden.jpeg" alt="image5" class="w-100 py-1 pt-2" />
                  <img src="@/assets/images/garden.jpeg" alt="image5" class="w-100 py-1 pt-2" />
                </div>
              </div>
            </div>

            <!-- Video Content For This Section -->

            <div class="video col-md-9">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embed-responsive-item"
                  src="https://www.youtube.com/embed/VS6UOyTb5eU"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import movieapi from "@/service/movieapi.js";
import img1 from "../assets/images/image5.jpg";
import img2 from "../assets/images/image6.jpg";
import img3 from "../assets/images/image5.jpg";
import img4 from "../assets/images/image6.jpg";
import img5 from "../assets/images/image5.jpg";
import img6 from "../assets/images/image6.jpg";
import img7 from "../assets/images/image5.jpg";
import img8 from "../assets/images/image6.jpg";

export default {
  data() {
    return {
      cardcontent: "",
      cardcontents: [],
      callback: ""

      // cardcontents: [
      // 	{
      // 		image: img1,
      // 		// title: 'SUPER 30',
      // 	},
      // 	{
      // 		image: img2,
      // 		// title: 'JACKPOT',
      // 	},
      // 	{
      // 		image: img3,
      // 		// title: 'SUPER 30',
      // 	},
      // 	{
      // 		image: img2,
      // 		// title: 'JACKPOT',
      // 	},
      // 	{
      // 		image: img1,
      // 		// title: 'SUPER 30'',
      // 	},
      // 	{
      // 		image: img2,
      // 		// title: 'JACKPOT',
      // 	},
      // 	{
      // 		image: img1,
      // 		// title: 'SUPER 30',
      // 	},
      // 	{
      // 		image: img2,
      // 		// title: 'JACKPOT',
      // 	},
      // ],
    };
  },
  created() {
    this.getapi();
  },
  methods: {
    getapi() {
      movieapi.getmovies(data => {
        console.log("this is imagesdemo", data.results);
        _.each(data.results, n => {
          n.poster_path = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${n.poster_path}`;
        });
        this.cardcontents = data.results;
        console.log("card contents", this.cardcontents);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  padding-top: 5rem !important;
  .now-showing {
    margin-left: -8px;
    margin-bottom: -43px;
  }
  .format-options {
    margin-left: 812px;
    margin-top: 2px;
    margin-bottom: -30px;
  }
  .view-all {
    font-size: 10px;
  }
  .coming-soon {
    margin-left: -11px;
  }
  .pic {
    padding: 5px;
  }

  .nav-link {
    color: white;
  }

  .css-overflow {
    margin-left: 10px;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 462px;
  }
  .video {
    width: 100%;
    height: 85%;
    margin-left: -20px;
  }
  .picture {
    position: relative;
  }
  .toptitle {
    position: absolute;
    margin-left: 5px;
    margin-top: -61px;
    color: white;

    .latest-release {
      position: absolute;
      top: -146px;
      left: -5px;
      padding: 3px;
      border-radius: 0px 18px 18px 2px;
      font-size: 12px;
    }
    .movie-heading {
      font-size: 14px;
      margin-top: 13px;
    }
  }
}
</style>
