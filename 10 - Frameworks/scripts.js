new Vue({
  el: "#app",
  data: {
    name: "",
    list: [{ name: "javascript" }, { name: "vue" }],
  },
  methods: {
    insert: function () {
      this.list.push({ name: this.name });
      this.name = "";
    },
  },
});
