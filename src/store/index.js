import MessageList from '@/utils'

class Store {
  constructor() {
    this.state = {};
    this.messageList = new MessageList();
  }
  setData(name, data) {
    let self = this;
    if (!this.state[name]) {
      Object.defineProperty(this.state, name, {
        set(newValue) {
          self.messageList.$emit(name, newValue);
        },
        enumerable: true,
        configurable: true
      });
    }
    this.state[name] = data;
  }
  on(name, fn) {
    return this.messageList.$on(name, fn);
  }
}

export default Store;