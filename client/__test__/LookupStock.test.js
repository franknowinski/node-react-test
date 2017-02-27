import React from 'react';
import renderer from 'react-test-renderer';
import LookupStock from '../src/LookupStock/LookupStock';
import { shallow } from 'enzyme';

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});
