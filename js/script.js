console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    albums: [],
    genres: [],
    filter: "",
  },
  methods: {},
  created() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((res) => {
        this.albums = res.data.response;
        this.albums.sort((a, b) => a.year - b.year);
        this.albums.forEach((album) => {
          if (!this.genres.includes(album.genre)) {
            this.genres.push(album.genre);
          }
        });
      });
  },
});
