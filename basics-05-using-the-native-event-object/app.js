const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
    outputFullName() {
      if (this.name === "") return "";
      return this.name + " " + "Chinaglia";
    },
  },
  watch: {
    // o nome do método indica qual propriedade de data deve
    // ser observada
    counter(value) {
      if (value > 50) this.counter = 0;
    },
    /*name(value) {
      if (value === "") this.fullname = "";
      else this.fullname = value + " " + this.lastName;
    },
    lastName(value) {
      if (value === "") this.fullname = "";
      else this.fullname = this.name + " " + value;
    },*/
  },
  computed: {
    // Faz um cache do valor retornado por fullname e só
    // recalcula ele quando as propriedades internas (this.name, por exemplo)
    // mudarem.
    fullname() {
      if (this.name === "") return "";
      return this.name + " " + this.lastName;
    },
  },
});

app.mount("#events");
