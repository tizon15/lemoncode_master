import { render, screen } from '@testing-library/react';
import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import { SpinnerComponent } from './spinner.component';

vi.mock('react-promise-tracker'); // mock of react-promise-tracker

describe('Spinner component specs', () => {
  it('do not display loader when promiseInProgress is false', () => {
    // ARRANGE. Prepare the scene
    vi.mocked(usePromiseTracker).mockReturnValue({
      promiseInProgress: false,
    } as any);

    // ACT. Execute the test
    render(<SpinnerComponent />);

    // ASSERT. Verify the result
    expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
  });

  it('display loader when promiseInProgress is true', () => {
    // ARRANGE. Prepare the scene
    vi.mocked(usePromiseTracker).mockReturnValue({
      promiseInProgress: true,
    } as any);

    // ACT. Execute the test
    render(<SpinnerComponent />);

    // ASSERT. Verify the result
    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });
});
