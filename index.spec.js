const index = require('./index');

describe('pending firebase connections after firebae.app().delete()', function () {
    it('should terminate connections', () => {
        index();
    })
});