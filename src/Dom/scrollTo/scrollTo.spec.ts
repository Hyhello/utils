import scrollTo from './scrollTo';

describe('#scrollTo()', () => {
	const $body = document.body,
		bodyHeight = getComputedStyle($body).getPropertyValue('height');
	beforeAll(function () {
		$body.style.height = '10000px';
	});
	test('scrollTo() should return true', function (done) {
		scrollTo($body, 100).then(() => {
			expect((document.documentElement || $body).scrollTop === 100);
			done();
		});
	});

	test('scrollTo() should return truee', function (done) {
		scrollTo($body).then(() => {
			expect((document.documentElement || $body).scrollTop === 0);
			done();
		});
	});
	afterAll(function () {
		$body.scrollTop = 0;
		$body.style.height = bodyHeight;
	});
});
