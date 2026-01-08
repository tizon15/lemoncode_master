import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import userEvent from '@testing-library/user-event';

describe('Confirm dialog component specs', () => {
  it('should dialog be closed by default', () => {
    // Arrange
    const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
      isOpen: false,
      labels: { closeButton: 'No', acceptButton: 'Yes' },
      onAccept: () => {},
      onClose: () => {},
      title: 'ConfirmationDialog',
      children: 'Are you sure you want to close this file',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const dialogElement = screen.queryByRole('dialog');
    // Assert
    expect(dialogElement).not.toBeInTheDocument();
  });

  it('should display dialog when it feeds isOpen equals true', () => {
    //Arrange
    const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
      isOpen: true,
      labels: { closeButton: 'No', acceptButton: 'Yes' },
      onAccept: () => {},
      onClose: () => {},
      title: 'ConfirmationDialog',
      children: 'Are you sure you want to close this file',
    };

    //Act
    render(<ConfirmationDialogComponent {...props} />);
    const dialogElement = screen.queryByRole('dialog');
    expect(dialogElement).toBeInTheDocument();
  });
  it('should display the title', () => {
    // Arrange
    const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
      isOpen: true,
      labels: { closeButton: 'No', acceptButton: 'Yes' },
      onAccept: () => {},
      onClose: () => {},
      title: 'ConfirmationDialog',
      children: 'Are you sure you want to close this file',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(screen.getByText('ConfirmationDialog')).toBeInTheDocument();
  });
  it('should display the content children', () => {
    // Arrange
    const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
      isOpen: true,
      labels: { closeButton: 'No', acceptButton: 'Yes' },
      onAccept: () => {},
      onClose: () => {},
      title: 'ConfirmationDialog',
      children: 'Are you sure you want to close this file',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(
      screen.getByText('Are you sure you want to close this file')
    ).toBeInTheDocument();
  });
  it('should call onAccept when it clicks on "Yes" button', async () => {
    // Arrange
    const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
      isOpen: true,
      labels: { closeButton: 'No', acceptButton: 'Yes' },
      onAccept: () => {},
      onClose: () => {},
      title: 'ConfirmationDialog',
      children: 'Are you sure you want to close this file',
    };
    vi.spyOn(props, 'onAccept');

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    const buttonElement = screen.getByRole('button', { name: 'Yes' });
    await userEvent.click(buttonElement);

    // Assert
    expect(props.onAccept).toHaveBeenCalled();
  });
  it('should call onClose when it clicks on "No" button', async () => {
    // Arrange
    const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
      isOpen: true,
      labels: { closeButton: 'No', acceptButton: 'Yes' },
      onAccept: () => {},
      onClose: () => {},
      title: 'ConfirmationDialog',
      children: 'Are you sure you want to close this file',
    };
    vi.spyOn(props, 'onClose');

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const buttonElement = screen.getByRole('button', {
      name: 'No',
    });

    expect(screen.queryByRole('dialog')).toBeInTheDocument();

    await userEvent.click(buttonElement);

    // Assert
    expect(props.onClose).toHaveBeenCalled();
  });
});
