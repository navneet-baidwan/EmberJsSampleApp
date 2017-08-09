import Ember from 'ember';

export default Ember.Controller.extend({
			isHome: false,

	setupController: function(controller, model){
	    this._super(controller, model);
	    controller.setProperties({isHome:false});
  	}
  		,		
	actions: {

				dropDown(){
					$('.ui.dropdown').dropdown()
				},
						    
				getLogin() {
           

		            $('#login.tiny.modal')
		            .modal('show');
		        
		          },
		           getRegister() {
		            $('#signup.tiny.modal')
		            .modal('show')
		          ;
		         },

		         getLogout(){
		         		  this.transitionToRoute('')
		         },
		         getEditProfile(){
		         		this.transitionToRoute('editprofile')
		         },

			    afterLogin() {
           

		            $('#login.tiny.modal')
		            	.modal('hide');
			           this.toggleProperty('isHome');
			           this.transitionToRoute('home')
          		},
		         
		        afterSignup() {
		            $('#signup.tiny.modal')
		            .modal('hide')
		          ;
		          this.toggleProperty('isHome');
		             
		           this.transitionToRoute('home')
		        },
			   
			    
			  

			  }
			  ,


			init: function(){

				this.addObserver('currentRouteName', function(r) {

					console.log(r.currentPath
						)

					switch(r.currentPath){

						case 'landing':
							this.setProperties({isSearch:false});	
							this.setProperties({isLanding:true});
							this.setProperties({isLoggedIn:false});

						break;

						case 'home':
							this.setProperties({isSearch:false});
							this.setProperties({isLanding:false});
							this.setProperties({isLoggedIn:true});

						break;

						case 'about':
							this.setProperties({isSearch:false});
							this.setProperties({isLanding:false});
							this.setProperties({isLoggedIn:true});

						break;

						case 'contact':
							this.setProperties({isSearch:false});
							this.setProperties({isLanding:false});
							this.setProperties({isLoggedIn:true});

						break;

						case 'editprofile':
							this.setProperties({isSearch:false});
							this.setProperties({isLanding:false});
							this.setProperties({isLoggedIn:true});
							
						break;

						case 'results':
							this.setProperties({isSearch:true});
							this.setProperties({isLanding:false});
							this.setProperties({isLoggedIn:true});
							
						break;

						case 'details':
							
							this.setProperties({isSearch:false});
							this.setProperties({isLanding:false});
							this.setProperties({isLoggedIn:true});
							
						break;

						case 'companyform':
							this.setProperties({isSearch:false});
							this.setProperties({isLanding:false});
							this.setProperties({isLoggedIn:true});

			



					}

						$(document).ready(function(){
							 				$('.ui.form.login')
												  .form({
												  	inline:true,
												    fields: {
												      email: {
												        rules: [
												          {
												            type   : 'empty',
												            prompt : 'Invalid username or email'
												           
												          }
												        ]
												      },
												       password: {
												        rules: [
												          {
												            type   : 'empty',
												            prompt : 'Invalid password'
												          
												          }
												        ]
												      }
												    }})

											$('.ui.form.signup')
												  .form({
												  	inline:true,
												    fields: {
												      fname: {
												        rules: [
												          {
												            type   : 'empty',
												            prompt : '{name} cannot be empty'
												          }
												        ]
												      },
												      uname: {
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
												            type   : 'empty',
												            prompt : '{name} cannot be empty'
												          }
												        ]
												      },
												       password: {
												        rules: [
												          {
												            type   : 'empty',
												            prompt : '{name} cannot be empty'
												          }
												        ]
												      },  
												      cpassword: {
												        rules: [
												          {
												            type   : 'empty',
												            prompt : '{name} cannot be empty'
												          }
												        ]
												      }
												     
												    }})

								$('.ui.dropdown').on('click', function(){
				    	 

						    	 		if(close){
						    	 			$('.ui.dropdown').dropdown()
						    	 			close = false
						    	 		}
						    	 		else{
						    	 			close = true
						    	 		}
						    	})


						})
				
					   
								
				
				   

				});



			  	 
			  function onScroll(event){
			    var minus = (window.innerHeight/22)
			    var scrollPos = $(document).scrollTop()+minus;


			    $('.item').each(function () {
			        var currLink = $(this);
			        var refElement = $(currLink.attr("href"));
			         console.log(refElement.position())
			        if(refElement.position()){
			          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
			              $('.item').removeClass("active");
			              currLink.addClass("active");
			          }
			          else{
			              currLink.removeClass("active");
			          }
			      }
			    });
				}









			    $(document).ready(function() {

			    	

			      // $(document).on("scroll", onScroll);
			         
			        //  const menuNav = $('.item');
			        //   menuNav.on('click', function (item) {
			        
			        //   menuNav.removeClass('active');
			        //   $(this).addClass('active');
			     
			        //    var target = this.hash,
			        //     menu = target;
			        // $target = $(target);
			        // $('html, body').stop().animate({
			        //     'scrollTop': $target.offset().top+2
			        // }, 500, 'swing', function () {
			        //     window.location.hash = target;
			        //     $(document).on("scroll", onScroll);
			        // });
			   
			 




			     // });
			});
    
    
  }


 


});

