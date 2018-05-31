const assert = require('assert');
const TailwindConverter = require('./../build/TailwindConverter');
const converter = new TailwindConverter();
describe('Bootstrap Markup <div class="col-md-1">.col-md-1</div>', function() {
  describe('#TailwindConverter()', function() {
    it('should return <div class="md:w-1/6 pr-4 pl-4">.col-md-1</div>', function() {
      assert.equal(converter.setContent('<div class="col-md-1">.col-md-1</div>').convert().get(), '<div class="md:w-1/6 pr-4 pl-4">.col-md-1</div>');
    });
  });
});