function calculateAge2(name, birthYear, currentYear) {
  const age = currentYear - birthYear;
  console.log(name + " is " + age + " years old.");
}

calculateAge2("Alice", 1990, 2025);

try {
  module.exports = {
    calculateAge2,
  };
} catch (e) {}
