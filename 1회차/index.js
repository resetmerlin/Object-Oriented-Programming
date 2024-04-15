const Worker = class {
  run() {
    console.log("working");
  }
  print() {
    this.run();
  }
};

const HardWorker = class extends Worker {
  run() {
    console.log("hardWorking");
  }
};

const Manager = class {
  #workers;
  constructor(...workers) {
    if (workers.every((w) => w instanceof Worker)) this.#workers = workers;
    else throw "invalid workders";
  }
  doWork() {
    this.#workers.forEach((w) => w.run());
  }
};

// 제어 역전

const Renderer = class {
  #view = null;
  #base = null;
  constructor(baseElemet) {
    this.#base = baseElemet;
  }

  set view(v) {
    if (v instanceof View) this.#view = v;
    else throw `invalid view: ${v}`;
  }

  render(data) {
    const base = this.#base,
      view = this.#view;
    if (!base || !view) throw "no base or view";
  }
};
