'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

    //  it('should define a birthdaytext in the scope', inject(function($controller) {
    //   //spec body
    //   var mockScope={},
    //       BirthdayCtrl = $controller('View1Ctrl',{$scope:mockScope});
    //   expect(mockScope.birthdaytext).toBeDefined();
    // }));
  });
});