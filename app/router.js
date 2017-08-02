import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about')

  // this.route('about', path:);
  this.route('contact');
  this.route('home');
  this.route('landing',{path:'/'});
  this.route('editprofile');
  this.route('companyform');
  this.route('results');
});

export default Router;
