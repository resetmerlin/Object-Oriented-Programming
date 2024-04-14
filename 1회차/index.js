const EssentialObject = class {
  #name = "";
  #screen = null;
  // hide state 객체 지향에서는 객체를 사용한다. 객체를 사용한다는건 객체를 노출하지 않는 것이다.
  // 객체를 노출하면 객체가 값 컨텍스트로 인해 객체 지향이 아니게 된다.

  constructor(name) {
    this.#name = name;
  }

  camouflage() {
    this.#screen = (Math.random() * 10).toString(16).replace(".", "");
  }

  // enscapsulation: 캡슐화는 매소드에 해당하는 말이다. 바깥 쪽에서는 name으로 인식한다. 외부에서 메소드 내 겍체를 모른다.
  get name() {
    return this.#screen || this.#name;
  }
};

// 변화에 대한 격리가 매우 중요하다
