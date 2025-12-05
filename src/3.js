function calculateAge3(name, birthYear, currentYear) {
  const age = currentYear - birthYear;
  console.log(name + " is " + age + " years old.");
}

calculateAge3("Alice", 1990, 2025);

try {
  module.exports = {
    calculateAge3,
  };
} catch (e) {}
