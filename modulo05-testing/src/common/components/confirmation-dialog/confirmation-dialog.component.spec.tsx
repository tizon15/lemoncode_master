import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
describe('Confirm dialog component specs', () => {
  it('should display', () => {
    //Arrange
    const title = 'ConfirmationDialog'
    const children = 'Are you sure you want to close this file'
    const labels = { closeButton: 'No', acceptButton: 'Yes' }
    const isOpen = true
    //Act
    const { asFragment } = render(
      <ConfirmationDialogComponent
        isOpen={isOpen}
        labels={labels}
        onAccept={() => {}}
        onClose={() => {}}
        title={title}
        children={children}
      />
    );
    expect(asFragment).toMatchSnapshot();
  });
   it('should display', () => {
    //Arrange
    const title = 'ConfirmationDialog'
    const children = 'Are you sure you want to close this file'
    const labels = { closeButton: 'No', acceptButton: 'Yes' }
    const isOpen = true
    //Act
    render(
      <ConfirmationDialogComponent
        isOpen={isOpen}
        labels={labels}
        onAccept={() => {}}
        onClose={() => {}}
        title={title}
        children={children}
      />
    );
    expect(screen.getByText).toEqual('Hola');
  });
});
