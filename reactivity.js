  function observe(obj) {
    Object.keys(obj).forEach(key => {
      let intialValue = obj[key];
      let dep = new Dep();

      Object.defineProperty(obj, key, {
        get() {
          dep.depend()
          return intialValue;
        }, set(newValue) {
          const changed = newValue !== intialValue
          intialValue = newValue
          if (changed) {
            dep.notify();
          }
        }
      })

    })

  }

  function autorun(update) {
    // Implement this!
    function wrapperUpdate() {
      activeUpdate = wrapperUpdate;
      update();
      activeUpdate = null;
    }
    wrapperUpdate()
  }


  class Dep {
    constructor() {
      this.subscribers = new Set()
    }
    depend() {
      if (activeUpdate) {
        this.subscribers.add(activeUpdate)
      }
    }
    notify() {
      this.subscribers.forEach(sub => sub())
    }
  }
