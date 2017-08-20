import Ember from 'ember';

export default Ember.Controller.extend({

  

  actions: {
          
  			   afterSignup() {
		          
		          //this.toggleProperty('isHome');
		             
		          // this.transitionToRoute('home')
		        },
			   
	 			cancelSignUp:function(){

	 				$('form').form('reset')
	 			
	 			}
			    

        },

 			 init: function(){


  						$(document).ready(function(){

  									$('.ui.form.signup')
												  .form({
												  	inline:true,
												    fields: {
												      fname: {
												        rules: [
												          {
												            type   : 'empty',
												            prompt : 'Please enter your full name'
												          }
												        ]
												      },
												      uname: {
												        rules: [
												          {
												            type   : 'empty',
												            prompt : 'Please enter your username'
												          }
												        ]
												      },
												      email: {
												        rules: [
												          {
												            type   : 'email',
												            prompt : 'Please enter valid e-mail address'
												          }
												        ]
												      },
												       password: {
												        rules: [
												          {
												            type   : 'empty',
												            prompt : 'Please enter your password'
												          }
												        ]
												      },  
												      cpassword: {
												        rules: [
												          {
												            type   : 'empty',
												            prompt : 'Please re-enter your password'
												          }
												        ]
												      }
												     
												    }})

											})

  }


});

