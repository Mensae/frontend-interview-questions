const isPalindrome = require('../isPalindrome');

describe('isPalindrome', () => {
  it('should return "true"', () => {
    expect(isPalindrome('')).toBe(true);
  });

  it('should return "true"', () => {
    expect(isPalindrome('abcdcba')).toBe(true);
  });

  it('should return "false"', () => {
    expect(isPalindrome('abcd')).toBe(false);
  });

  it('should return "true"', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
  });
});
