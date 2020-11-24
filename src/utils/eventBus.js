class eventBus {
  constructor() {
    this.cbObj = {}
  }

  $on(name, cb) {
    this.cbObj[name] = this.cbObj[name] || []
    this.cbObj[name].push(cb)
  }

  $emit(name, args) {
    if (this.cbObj[name] || this.cbObj[name].length) {
      this.cbObj[name].forEach(item => {
        item(args)
      })
    }
  }
}

export default eventBus
