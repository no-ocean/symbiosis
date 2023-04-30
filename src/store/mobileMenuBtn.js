import { observable } from 'mobx';

const store = observable({
  active: false,
  onClick() {
    this.active = !this.active;
  },
});

export default store;
