import template from './template';

describe('#template()', () => {
    test('simple art template', () => {
        const value = '<a href="http://www.a.com">标题</a>';
        expect(template('<a href="{url}">{title}{ name }</a>', { url: 'http://www.a.com', title: '标题' })).toEqual(
            value
        );
    });
});
