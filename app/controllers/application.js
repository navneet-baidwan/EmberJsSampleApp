import Ember from 'ember';

export default Ember.Controller.extend({
  //initializing values
  firstSentence: 'Welcome to',
  lastSentence: 'TutorialsPoint!',

  arrayOFgroup:['apple','pineapple','banana'],

  actions: {
    getLogin() {
      $('#login.tiny.modal')
  		.modal('show')
		;
    },
     getRegister() {
      $('#signup.tiny.modal')
  		.modal('show')
		;
    }
  }
});