function calculateAge4(name, birthYear, currentYear) {
  const age = currentYear - birthYear;
  console.log(name + " is " + age + " years old.");
}

calculateAge4("Alice", 1990, 2025);

try {
  module.exports = {
    calculateAge4,
  };
} catch (e) {}
