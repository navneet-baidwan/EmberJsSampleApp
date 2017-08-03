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
 	$('.ui.form')
					  .form({
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

					
				});



	
 }

        

			  	


});

