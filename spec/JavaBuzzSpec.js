describe('Javabuzz', function() {
  let javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('when playing, says', function() {
    it('"Java" when a number is divisible by 3', function() {
      expect(javabuzz.says(3)).toEqual('Java');
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(javabuzz.says(5)).toEqual('Buzz');
    });

    it('"JavaBuzz" when a number is divisible by 15', function() {
      expect(javabuzz.says(15)).toEqual('JavaBuzz');
    });

    it('the original number if it is not divisible by 3 or 5', function() {
      expect(javabuzz.says(4)).toEqual(4);
    });
  });
});
