const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  watch: {
    text() {
      setTimeout(() => {
        this.number = 0;
      }, 5000);
    },
  },
  computed: {
    text() {
      if (this.number === 37) return 37;
      else if (this.number > 37) return "Too much!";
      else return "Not there yet";
    },
  },
  methods: {
    add(ammount) {
      this.number += ammount;
    },
  },
});

app.mount("#assignment");
