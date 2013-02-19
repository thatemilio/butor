//
//    butor 0.0.1
//
//    Super simple Bootstrap Tutor plugin that utitlizes the
//    existing Bootstrap popover plugin to create a single
//    page tour.
//
//    https://github.com/emilioTe/butor
//    http://getbootstrap.com
//


function Tutor () {
  this._defaultOptions = {
    placement: 'bottom',
    trigger: 'manual',
    html: true,
    element: '',
    title: '',
    content: ''
  };
  this._steps = [];
  this._currentStep = 0;
}


Tutor.prototype.addStep = function(obj) {
  //
  // Update our default options with any
  // user supplied ones
  var obj = $.extend({}, this._defaultOptions, obj);

  //
  // Append a button to close the popover
  obj.title = obj.title + '<button type="button" class="close">&times;</button>';
  
  //
  // Add the new step to the list
  this._steps.push(obj);

  //
  // Return the object so that we can chain methods
  return this;
};


Tutor.prototype._next = function() {
  var stepLen = this._steps.length - 1;

  if (this._currentStep <= stepLen) {
    var obj = this._steps[this._currentStep];
    
    //
    // Show the next .popover
    this._open(obj);
  } else {
    //
    // The tour is over so we need to reset the counter
    // in order to run the tour again if needed
    this._currentStep = 0;
  }
};


Tutor.prototype._open = function(obj) {
  var self = this;

  //
  // Define the options we want for the popover
  $(obj.element).popover(obj);
  
  $(obj.element).popover('show');
  
  //
  // Listen for a click event on our popover's
  // close button
  $('.popover').on('click', 'button.close', function() {
    self._currentStep++;
    
    //
    // We're done with this step so destroy it
    $(obj.element).popover('destroy');

    //
    // I have an irrational fear of leaving unused
    // event handlers around so let's get rid of
    // the one we were just listening to.
    $('.popover').off('click');

    //
    // Open the next popover, if any
    self._next();
  });
};


Tutor.prototype.teach = function() {
  var obj = this._steps[0];
  
  //
  // Time for launch
  this._open(obj);
};
