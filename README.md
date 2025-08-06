# String Calculator TDD Kata

This repository demonstrates the implementation of a String Calculator using **Test-Driven Development (TDD)** principles as part of the Incubyte assessment.

## 🎯 Overview

The String Calculator kata showcases clean code practices, thorough testing, and incremental development through the Red-Green-Refactor cycle. Each feature was built step-by-step with corresponding tests, showing the evolution of the codebase through frequent commits.

## 🚀 Features Implemented

### ✅ Core Requirements
- **Empty String Handling**: Returns 0 for empty input
- **Single Number**: Returns the number itself
- **Multiple Numbers**: Handles comma-separated numbers of any count
- **Flexible Delimiters**: Supports newlines as delimiters (`"1\n2,3"` → `6`)
- **Custom Delimiters**: Supports user-defined delimiters (`"//;\n1;2"` → `3`)
- **Negative Number Validation**: Throws exceptions for negative inputs with detailed error messages

### 📋 Test Cases Covered
1. Empty string input → Returns 0
2. Single number input → Returns the number
3. Two comma-separated numbers → Returns sum
4. Any amount of numbers → Returns sum
5. Mixed delimiters (newlines + commas) → Returns sum
6. Custom delimiter support → Returns sum
7. Negative number exception → Throws descriptive error

## 🛠️ Technology Stack
- **Language**: JavaScript (Node.js)
- **Testing Framework**: Jest
- **Development Approach**: Test-Driven Development (TDD)

## 📁 Project Structure
```
string-calculator-kata/
├── src/
│   └── stringCalculator.js    # Main implementation
├── test/
│   └── stringCalculator.test.js    # Test suite
├── package.json
├── package-lock.json
└── README.md
```

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/RitikaFulwani/string-calculator-tdd.git

# Navigate to project directory
cd string-calculator-tdd

# Install dependencies
npm install
```

### Running Tests
```bash
# Run all tests
npm test

# Run tests with verbose output
npm test -- --verbose

# Run tests in watch mode
npm test -- --watch
```

## 🔄 TDD Process Followed

Each feature was developed using the **Red-Green-Refactor** cycle:

1. **🔴 Red**: Write a failing test
2. **🟢 Green**: Write minimal code to make the test pass
3. **🔵 Refactor**: Improve code quality while keeping tests green
4. **📝 Commit**: Document progress with meaningful commit messages

## 📊 Usage Examples

```javascript
const { add } = require('./src/stringCalculator');

// Basic usage
add("");           // Returns: 0
add("1");          // Returns: 1
add("1,5");        // Returns: 6
add("1,2,3,4");    // Returns: 10

// Advanced features
add("1\n2,3");     // Returns: 6 (mixed delimiters)
add("//;\n1;2");   // Returns: 3 (custom delimiter)

// Error handling
add("1,-2,3");     // Throws: "negative numbers not allowed: -2"
```

## 🧪 Test Coverage

All core functionalities are thoroughly tested with comprehensive test cases covering:
- Edge cases (empty strings)
- Basic functionality (single/multiple numbers)
- Advanced features (custom delimiters, mixed delimiters)
- Error scenarios (negative numbers)

## 📈 Commit History

The repository demonstrates clean development practices with:
- Frequent, atomic commits
- Descriptive commit messages
- Clear progression from simple to complex features
- Evidence of TDD workflow

## 🏆 Key Learnings

This kata demonstrates:
- **Test-First Development**: Writing tests before implementation
- **Incremental Design**: Building features step by step
- **Clean Code**: Readable, maintainable code structure
- **Error Handling**: Proper exception management
- **Version Control**: Meaningful commit history showing development process

## 👨‍💻 Developer

**Ritika Fulwani**
- GitHub: [@RitikaFulwani](https://github.com/RitikaFulwani)

---

*This project was created as part of the Incubyte TDD Assessment to demonstrate software craftsmanship and test-driven development skills.*
