const Engineer = require("../lib/engineer");
// const Fs = require("fs");

test("Can create a github.", () => {
  const testGithub = "Andrew";
  const employeeInstance = new Engineer(
    "Andrew",
    2,
    "towers.a@gmail.com",
    testGithub
  );
  expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
  const testGithub = "Andrew";
  const employeeInstance = new Engineer(
    "Andrew",
    2,
    "towers.a@gmail.com",
    testGithub
  );
  expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
  const returnValue = "Engineer";
  const employeeInstance = new Engineer(
    "Andrew",
    2,
    "towers.a@gmail.com",
    returnValue
  );
  ("Andrew");
  expect(employeeInstance.getRole()).toBe(returnValue);
});
