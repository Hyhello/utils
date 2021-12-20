import rtrim from './rtrim';

describe('#rtrim()', () => {
	test('remove right space', () => {
		expect(rtrim('   aaa   ')).toEqual('   aaa');
	});
});
