const app = Vue.createApp({
  data() {
    return {
      currentText: "",
      confirmedText: "",
    };
  },
  methods: {
    showAlert() {
      alert("This is an alert!");
    },

    updateText(event) {
      this.currentText = event.target.value;
    },

    consolidate() {
      this.confirmedText = this.currentText;
    },
  },
});

app.mount("#assignment");
