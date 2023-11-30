import { User } from "../src/js/planetAge";

describe("User", () => {

  test('should create a User class with name and age value', () => {
    const char = new User("Rave", 33);
    expect(char.name).toBe("Rave");
    expect(char.age).toBe(33);
  })

  test('should take User age and convert it to mercury age', () => {
    const char = new User("Rave", 33);
    char.mercuryAge();
    expect(char.age).toBe(137.5);
  })
})

