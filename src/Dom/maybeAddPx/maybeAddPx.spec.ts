import maybeAddPx from './maybeAddPx';

describe('#maybeAddPx()', () => {
	test('maybeAddPx', () => {
		expect(maybeAddPx('auto')).toEqual('auto');
		expect(maybeAddPx('100')).toEqual('100px');
		expect(maybeAddPx(100)).toEqual('100px');
		expect(maybeAddPx('100%')).toEqual('100%');
	});
});
