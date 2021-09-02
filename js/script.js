console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    albums: [],
  },
  methods: {},
  created() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((res) => {
        this.albums = res.data.response;
        this.albums.sort((a, b) => a.year - b.year);
        console.log(this.albums[0]);
      });
  },
});
