const generateUniqueId = require('../../src/utils/generateUniqueId');

descrive('Generate Unique ID', () =>{
    it('should generate an unique ID', () => {
        const id = generateUniqueId();
        expect(id).toHaveLength(8)
    });
});