import Ember from 'ember';

export default Ember.Controller.extend({

			actions: {
				getResults(){
					 this.transitionToRoute('results')
				}
			},

			  init: function(){
			
  				}

});

	
