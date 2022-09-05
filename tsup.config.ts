import type { Options } from 'tsup';

export const tsup: Options = {
    splitting: false,
    sourcemap: false,
    clean: false,
    dts: true,
    keepNames: true,
    target: 'esnext',
    format: ['esm', 'cjs'],
    entryPoints: ['src/index.ts'],
    shims: true,
};
