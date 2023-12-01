export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };

  mercuryAge() {
    return this.age / .24;
  };

  venusAge() {
    return this.age / .62
  };

  marsAge() {
    return this.age / 1.88
  };

  jupiterAge() {
    return this.age / 11.86
  };
}

export class PastAge {
  constructor(current, past, time) {
    this.current = current;
    this.past = past;
    this.time = time;
  }

  earthPastAge() {
    this.time = (this.current - this.past);
    return this.time;
  }

}