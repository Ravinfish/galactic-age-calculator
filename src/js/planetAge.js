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

  mercuryPastAge() {
    this.time = (this.current - this.past);
    this.time = this.time * .24
    return this.time;
  }

  venusPastAge() {
    this.time = (this.current - this.past);
    this.time = this.time * .62
    return this.time;
  }

  marsPastAge() {
    this.time = (this.current - this.past);
    this.time = this.time * 1.88
    return this.time;
  }

  jupiterPastAge() {
    this.time = (this.current - this.past);
    this.time = this.time * 11.86
    return this.time;
  }

}

export class FutureAge {
  constructor(current, future, time) {
    this.current = current;
    this.future = future;
    this.time = time;
  }

  earthFutureAge() {
    this.time = (this.future - this.current);
    return this.time;
  }

  mercuryFutureAge() {
    this.time = (this.future - this.current);
    this.time = this.time * .24
    return this.time;
  }

  venusFutureAge() {
    this.time = (this.future - this.current);
    this.time = this.time * .62
    return this.time;
  }

  marsFutureAge() {
    this.time = (this.future - this.current);
    this.time = this.time * 1.88
    return this.time;
  }
}