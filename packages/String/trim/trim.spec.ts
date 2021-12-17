import trim from './trim';

describe('#trim()', () => {
	test('remove both space', () => {
		expect(trim('   aaa   ')).toEqual('aaa');
	});
});
