const app = Vue.createApp({
  data() {
    return {
      name: "",
      confirmedName: "",
      counter: 2,
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },

    remove(num) {
      this.counter -= num;
    },

    confirmName() {
      this.confirmedName = this.name;
    },

    inputEvent(lastName, event) {
      this.name = event.target.value + " " + lastName;
    },

    submitForm(event) {
      console.log(event);
    },
  },
});

app.mount("#events");
