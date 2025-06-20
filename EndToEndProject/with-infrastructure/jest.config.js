const config = {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'jsdom',
    testMatch: ['**/*.test.ts'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    // ����� jest �� ������������ ����� ��� ������
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    globals: {
        'ts-jest': {
            useESM: true,
        },
    },
};
export default config;
