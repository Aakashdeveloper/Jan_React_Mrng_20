import React from 'react';
import Header from '../component/Header';
import {create} from 'react-test-renderer';

describe('Snapshot test', () => {
    test('testing my header component',() => {
        let tree = create(<Header/>)
        expect(tree.toJSON()).toMatchSnapshot()
    })
    
})  