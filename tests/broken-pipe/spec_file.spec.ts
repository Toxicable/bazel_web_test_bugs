import {myFn } from './source_file';

describe('myFn', () => {
    it('should od something', () => {
        expect(myFn('some work')).toEqual('some work13')
    })
})