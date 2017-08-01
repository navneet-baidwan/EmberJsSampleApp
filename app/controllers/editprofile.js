import Ember from 'ember';

export default Ember.Controller.extend({

  

  actions: {
          
  			getCompanyForm(){
  				this.transitionToRoute('companyform')
  			}
 

        }


});

