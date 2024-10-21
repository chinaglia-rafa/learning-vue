const app = Vue.createApp({
  // Tudo que é retornado pela função data() fica acessível para
  // o elemento ligado ao Vue via .mount() e seus filhos.
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue",
      courseGoalB: "<i>Master Vue and be very happy</i>",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
