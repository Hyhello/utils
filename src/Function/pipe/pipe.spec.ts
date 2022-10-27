import pipe from './pipe';

describe('#pipe()', () => {
	const addTest = async (str: string): Promise<string> => `test ${str} word`;
	const addTest1 = async (str: string): Promise<string> => `test ${str} word1`;
	const pipeline = pipe(addTest, addTest1);
	test('pipe test', async () => {
		const data = await pipeline('hello');
		expect(data).toBe('test hello word1');
	});
});
