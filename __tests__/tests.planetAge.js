import { User } from "../src/js/planetAge";

describe("User", () => {

  test('should create a User class with name and age value', () => {
    const char = new User("Rave", 33);
    expect(char.name).toBe("Rave");
    expect(char.age).toBe(33);
  })

  test('should take User age and convert it to mercury age', () => {
    const char = new User("Rave", 33);
    let mercuryAge = char.mercuryAge();
    expect(mercuryAge).toBe(137.5);
  })

  test('should take User age and convert it to venus age', () => {
    const char = new User("Rave", 33);
    let venusAge = char.venusAge();
    expect(venusAge).toBe(33 / .62);
  })

  test('should take User age and covert it to mars age', () => {
    const char = new User("Rave", 33);
    let marsAge = char.marsAge();
    expect(marsAge).toBe(33 /1.88);
  })

  test('should take User age and covert it to jupiter age', () => {
    const char = new User("Rave", 33);
    let jupiterAge = char.jupiterAge();
    expect(jupiterAge).toBe(33 /11.86);
  })

  test('should determain how many yeaars have passed since a past birthday', () => {
    const char = new User("Rave", 33);
    let pastAge = char.pastAge();
    expect(pastAge).toBe(21);
  })
})

