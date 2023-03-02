function morph<
	ALL extends Record<
		KEY,
		(...args: Parameters<ALL[KEY]>) => ReturnType<ALL[KEY]>
	>,
	KEY extends keyof ALL
>(
	mapping: ALL,
	casts: KEY,
	...input: Parameters<ALL[KEY]>
): ReturnType<ALL[KEY]> {
	return mapping[casts](...input)
}

export const makeMorph =
	<T>(map: T) =>
	// @ts-ignore
	<K extends keyof T>(key: K, ...input: Parameters<T[K]>) =>
		// @ts-ignore
		morph(map, key, ...input)
