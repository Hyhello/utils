import kebabCase from './kebabCase';

describe('#kebabCase()', () => {
	test('kebabCase test', () => {
		expect(kebabCase('Foo Bar')).toEqual('foo-bar');
		expect(kebabCase('fooBar')).toEqual('foo-bar');
		expect(kebabCase('__FOO_BAR')).toEqual('foo-bar');
	});
});
