import cssObjToStr from './cssObjToStr';

test('basic css - background: red;', () => {
  expect(cssObjToStr({
    background: 'red'
  })).toBe('background:red;')
});