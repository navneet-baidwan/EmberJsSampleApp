import Ember from 'ember';

export default Ember.Controller.extend({


			  init: function(){
					  $(document).ready(function() {



									 $('.ui.menu').on('click', function(){
									    	 
												$('.ui.menu').popup()
									    	 			
									    	 	})
					  				

					  				 $('.ui.dropdown').on('click', function(){
									    	 
												$('.ui.dropdown').dropdown()
									    	 			
									    	 	})
					  			

					  				 $('.ui.accordion').on('click', function(){
									    	 
												 $('.ui.accordion').accordion();
									    	 			
									    	 	})
					  				})




					 }


});

	
