/**
 * Created by david on 10/20/13.
 */

describe('filter', function(){
  "use strict";
  beforeEach(module('myApp'));

  describe('reverse'), function(){
    it('should reverse a string', inject(function(reverseFilter){
      expect(reverseFilter('ABCD')).toEqual('DCBA');
    }))
  }
})