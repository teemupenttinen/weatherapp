import epochConverter from './utils';

describe('Epoch converter Test', () => {
    it('should return value 17:00', () => {
        expect(epochConverter(1579712400)).toBe("17:00");
    });
});