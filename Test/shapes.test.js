const { Circle, Triangle, Square } = require('../lib/shapes');


test('render should be the expected string.', () => {
  // Arrange
  const circle = new Circle(50, 50, 30, 'blue');
  const expected = '<circle cx="50" cy="50" r="30" fill="blue" />';
  
  // Act
  const result = circle.render();
  
  // Assert
  expect(result).toEqual(expected);
});

test('render should return the expected string.', () => {
  // Arrange
  const square = new Square(50, 50, "red");
  const expected = '<rect width="50" height="50" fill="red" />';
  
  // Act
  const result = square.render();
  
  // Assert
  expect(result).toEqual(expected);
});

test('render should return the expected string.', () => {
  // Arrange
  const triangle = new Triangle(150, 150, 100, 'green');
  const expected = '<polygon points="150" fill="150" />';
  
  // Act
  const result = triangle.render();
  
  // Assert
  expect(result).toEqual(expected);
});