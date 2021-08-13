import formatTimeString from "./formatTimeString";

test('00:00', () => {
  expect(formatTimeString(0)).toBe('00:00')
});

test('00:01', () => {
  expect(formatTimeString(1)).toBe('00:01')
});

test('00:09', () => {
  expect(formatTimeString(9)).toBe('00:09')
});

test('00:10', () => {
  expect(formatTimeString(10)).toBe('00:10')
});

test('00:59', () => {
  expect(formatTimeString(59)).toBe('00:59')
});

test('01:00', () => {
  expect(formatTimeString(60)).toBe('01:00')
});

test('01:01', () => {
  expect(formatTimeString(61)).toBe('01:01')
});

test('02:00', () => {
  expect(formatTimeString(120)).toBe('02:00')
});

test('59:59', () => {
  expect(formatTimeString(3599)).toBe('59:59')
});