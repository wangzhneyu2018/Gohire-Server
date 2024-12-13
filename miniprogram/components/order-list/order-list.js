Component({
  properties: {
    orders: {
      type: Array,
      value: [],
      observer(newVal) {
        console.log('Orders data:', newVal);
      }
    },
  },
  data: {},
  methods: {},
});