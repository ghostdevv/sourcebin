declare module '@sourcebin/linguist' {
	// oxlint-disable-next-line typescript/consistent-type-imports
	const linguist: Record<string, import('./types').SourcebinLinguistItem>;
	const languages: Record<string, number>;
}
