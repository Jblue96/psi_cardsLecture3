var myApp= angular.module('myApp', []);

//set up the controller
myApp.controller('InventoryController', function(){
  console.log('NG');

  //variable global to the controller
  var vm = this;

  //array attached to the controller
  vm.items = [];

  //vm stands for 'view model'

  vm.addItem = function(){
    console.log('in add item click NG');

    //create the object from user input
    var newItem = {
      name: vm.nameIn,
      description : vm.descriptionIn
    };
    console.log('New Item =', newItem);

    //push it real good into the array
    vm.items.push (newItem);
    console.log( 'all items:' , vm.items);

    //empty inputs
    vm.name ='';
    vm.description ='';
  };//end add item
}); // end inventory controller
