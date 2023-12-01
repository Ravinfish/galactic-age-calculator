import { User } from "../src/js/planetAge";
import { PastAge } from "../src/js/planetAge";

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
})

describe("PastAge", () => {

  test('should determain how many years have passed since a past birthday on Earth', () => {
    const char = new PastAge(33, 23, 10);
    char.earthPastAge();
    expect(char.time).toBe(char.current - char.past);
  })

  test('should determain how many years have passed in Mercury years', () => {
    const char = new PastAge(33, 23, 10);
    char.mercuryPastAge();
    expect(char.time).toBe((char.current - char.past) * .24);
  })

  test('should determain how many years have passed in Venus years', () => {
    const char = new PastAge(33, 23, 10);
    char.venusPastAge();
    expect(char.time).toBe((char.current - char.past) * .62);
  })

  test('should determain how many years have passed in Mars years', () => {
    const char = new PastAge(33, 23, 10);
    char.marsPastAge();
    expect(char.time).toBe((char.current - char.past) * 1.88);
  })

  test('should determain how many years have passed in Jupiter years', () => {
    const char = new PastAge(33, 23, 10);
    char.jupiterPastAge();
    expect(char.time).toBe((char.current - char.past) * 11.86);
  })

})

describe("FutureAge", () => {

  test('should determain how many years until futuer age on Earth', () => {
    const char = new FutureAge(33, 53, 20);
    char.earthFutureAge();
    expect(char.time).toBe(char.current + char.future);
  })
})
