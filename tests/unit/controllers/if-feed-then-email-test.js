import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | if-feed-then-email', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:if-feed-then-email');
    assert.ok(controller);
  });
});
