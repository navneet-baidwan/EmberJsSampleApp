import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
// import Base from 'semantic-ui-ember/mixins/base';
// import uiButtonBase from '../mixins/ui-button-base';
// import layout from '../templates/components/ui-button';

const App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,

});






loadInitializers(App, config.modulePrefix);

export default App;
