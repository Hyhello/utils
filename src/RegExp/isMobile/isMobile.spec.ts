import isMobile from './isMobile';

describe('#isMobile', () => {
	test('isMobile', () => {
		expect(isMobile('+8613455667788')).toBeTruthy();
		expect(isMobile(13455667788)).toBeTruthy();
		expect(isMobile('0271022312')).toBeFalsy();
		expect(isMobile('027-1022312')).toBeFalsy();
	});
});
