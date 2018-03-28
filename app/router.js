import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('lists', function() {});
  this.route('actions', function() {});
  this.route("four-oh-four", { path: "*path"});
  this.route('if-feed', function() {});
  this.route('if-feed-then');
  this.route('if-feed-then-action');
  this.route('if-email');
  this.route('if-feed-config');
  this.route('if-feed-then-email');
  this.route('summary');
});

export default Router;
