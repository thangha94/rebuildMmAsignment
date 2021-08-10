import { cleanup, render, waitFor } from '@testing-library/react';
import React from 'react';
import GifItem from '../GifItem';
describe("- GifItem Component", () => {
    beforeEach(() => cleanup());
    test('render GifItem', () => {
        const { getAllByTestId } = render(<GifItem />)
    })
})

