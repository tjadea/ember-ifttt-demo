import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | if-feed-then-action', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:if-feed-then-action');
    assert.ok(route);
  });
});
