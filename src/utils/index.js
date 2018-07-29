class MessageList {
  constructor() {
    this.events = {};
  }
  $emit(name, args) {
    let hasName = this.events[name];
    if (hasName) {
      this.events[name].forEach((fn) => {
        fn(args);
      });
    }
  }
  $on(name, fn) {
    let hasName = this.events[name];
    let self = this;
    if (hasName) {
      this.events[name].push(fn);
    } else {
      this.events[name] = [fn];
    }
    return {
      remove() {
        let index = null;
        let evts = self.events[name];
        for (let i = 0; i < evts.length; i++) {
          if (evts[i] == fn) {
            index = i;
            break;
          }
        }
        if (index != null) {
          evts.splice(index, 1);
        }
      }
    }
  }
}

export default MessageList;
export const ajax = {
  get(url) {
    return fetch(url).then(function(response) {
      return response.json();
    });
  },
  put(url, data) {
    return fetch({
      url: url,
      "headers": {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
  }
};



export function getPos(obj) {
  let height = obj.offsetHeight;
  var pos = {
    left: 0,
    top: 0
  };
  while (obj) {
    pos.left += obj.offsetLeft;
    pos.top += obj.offsetTop;
    obj = obj.offsetParent;
  }
  pos.bottom = pos.top + height;
  return pos;

}