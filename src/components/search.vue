<template>
  <div class="container">
    <div class="search pt-3 mr-2 mt-2 mb-2">
      <input
        class="form-control border-0 rounded-0"
        type="text"
        v-model="searchText"
        @input="viewMovieSearch(1)"
        placeholder="Search..."
        @change="viewMovieSearch(1)"
      />
      <!-- <button class="btn btn-outline-success" v-on:click="onSubmit(searchText)">Search</button> -->
    </div>

    <!-- Search Movie Details  -->
    <div class="row">
      <div class="col-md-3 pic" v-for="movie in allMovies" v-bind:key="movie.title">
        <div class="w-100 picture pt-3">
          <div>
            <img :src="movie.poster_path" class="card-img" alt />
          </div>

          <!-- Title: Movie Name -->
          <div class="toptitle">
            <h5 class="text-left font-weight-bold movie-heading">{{movie.title}}</h5>

            <!-- Contents-->
            <div class="demo">
              <div>{{movie.release_date}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import movieapi from "@/service/movieapi.js";

export default {
  name: "search",
  data() {
    return {
      viewMovie: "",
      searchText: "",
      page: 0,
      formData: {},
      allMovies: ""
    };
  },
  created() {
    console.log("in method");
    this.viewMovieSearch(this.page);
    // this.onSubmit(this.searchText);
  },
  methods: {
    viewMovieSearch(pageNo) {
      this.allMovies = [];
      this.formData.page = pageNo - 1;
      this.formData.search = this.searchText;
      console.log("searchhhhhhhhhhh", this.searchText);
      this.formData.limit = this.perPage;
      movieapi.getAllMovies(this.formData, data => {
        console.log("dataaaaaaaaaa", data);
        if (data.code != 200) {
          this.allMovies = data.results;
          _.each(this.allMovies, n => {
            n.poster_path = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${n.poster_path}`;
          });
          console.log("moviesssss", this.allMovies);
          this.totalCount = data.result.length;
        } else {
          this.dataFound = true;
        }
      });
    }
    //
    // onSubmit(searchText) {
    //   this.formData.search = this.searchText;
    //   console.log("Search", searchText);
    // }
    //
  }
};
</script>
<style lang="scss" scoped>
</style>


