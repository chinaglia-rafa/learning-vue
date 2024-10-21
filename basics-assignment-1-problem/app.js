const app = Vue.createApp({
  data() {
    return {
      name: "Rafael Araújo Chinaglia",
      age: 31,
      imageURL:
        "https://miro.medium.com/v2/resize:fit:1000/0*lAAzZwzRmq6bDpsT.png",
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
