import Ember from 'ember';

export default Ember.Controller.extend({


			  init: function(){
					  $(document).ready(function() {
									 $('.ui.dropdown').on('click', function(){
									    	 
												$('.ui.dropdown').dropdown()
									    	 			
									    	 	})

					

 					$('.ui.form')
					  .form({

					  	 fields: {
					  	 			description: {
								        rules: [
								          {
								            type   : 'empty',
								            
								          }
								        ]
								     },

								    eyear: {
								        rules: [
								          {
								            type   : 'empty',
								            
								          }
								        ]
								      },
								      specialties: {
								        rules: [
								          {
								            type   : 'empty',
								            
								          }
								        ]
								      },
								       lname: {
								        rules: [
								          {
								            type   : 'empty',
								           
								          }
								        ]
								      },
								       crequirement: {
								        rules: [
								          {
								            type   : 'empty',
								           
								          }
								        ]
								      },
								       email: {
								        rules: [
								          {
								            type   : 'email',
								            prompt : '{name} cannot be empty'
								          }
								        ]
								      },
								       cname: {
								        rules: [
								          {
								            type   : 'empty',
								            prompt : '{name} cannot be empty'
								          }
								        ]
								      },
								       ctype: {
								        rules: [
								          {
								            type   : 'empty',
								            prompt : '{name} cannot be empty'
								          }
								        ]
								      },
								       ptype: {
								        rules: [
								          {
								            type   : 'empty',
								            prompt : '{name} cannot be empty'
								          }
								        ]
								      },

									caddress: {
								        rules: [
								          {
								            type   : 'empty',
								            prompt : '{name} cannot be empty'
								          }
								        ]
								      },
								      contact: {
								        rules: [
								          {
								            type   : 'empty',
								            prompt : '{name} cannot be empty'
								          }
								        ]
								      },
								      web: {
								        rules: [
								          {
								            type   : 'empty',
								            prompt : '{name} cannot be empty'
								          }
								        ]
								      }
								  }
					  })
								   
     })
					}


});

	
