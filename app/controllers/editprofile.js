import Ember from 'ember';





export default Ember.Controller.extend({



  actions: {
          
  			getCompanyForm(){
  				this.transitionToRoute('companyform')
  			},

  			getRegistred(){
		  		window.scrollTo(0,document.body.scrollHeight);		
					  
  			}

}
 , init: function(){

 


 	$(document).ready(function(){

 		 $('.ui.menu').find('.item').tab()



		     $('.ui .menu.item').on('click', function() {


		        $('.ui.menu.item').removeClass('active');
		        $(this).addClass('active');

		        $('.ui.menu').find('.item').tab()

		        
		      
		    });


		     $('.ui.dropdown').on('click', function(){
									    	 
					$('.ui.dropdown').dropdown()
			 })


 	$('.ui.form.profile')
					  .form({
					  	inline: true,
					    fields: {
					      username: {
					        rules: [
					          {
					            type   : 'empty'
					          }
					        ]
					      },
					      fname: {
					        rules: [
					          {
					            type   : 'empty',
					            prompt : '{name} cannot be empty'
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
					       contact: {
					        rules: [
					          {
					            type   : 'empty',
					            prompt : '{name} cannot be empty'
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
					       jobtitle: {
					        rules: [
					          {
					            type   : 'empty',
					            prompt : '{name} cannot be empty'
					          }
					        ]
					      },
					       expereince: {
					        rules: [
					          {
					            type   : 'empty',
					            prompt : '{name} cannot be empty'
					          }
					        ]
					      },
					      summary: {
					        rules: [
					          {
					            type   : 'empty',
					            prompt : '{name} cannot be empty'
					          }
					        ]
					      }

					    }
					  });



					  $('.ui.form.company')
					  .form({
					  	inline: true,
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
								      speciality: {
								        rules: [
								          {
								            type   : 'empty',
								            
								          }
								        ]
								      },
								     
								       cemail: {
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

									
								      ccontact: {
								        rules: [
								          {
								            type   : 'empty',
								            prompt : '{name} cannot be empty'
								          }
								        ]
								      },
								      url: {
								        rules: [
								          {
								            type   : 'empty',
								            prompt : '{name} cannot be empty'
								          }
								        ]
								      }
								  }
					  })

					
				});






	
 }

        

			  	


});

 