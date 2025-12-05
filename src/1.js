function calculateAge1(name, birthYear, currentYear) {
  const age = currentYear - birthYear; 
  console.log(name + " is " + age + " years old.");
}

calculateAge1("Alice", 1990, 2025);

try {
  module.exports = {
    calculateAge1,
  };
} catch (e) {
}
