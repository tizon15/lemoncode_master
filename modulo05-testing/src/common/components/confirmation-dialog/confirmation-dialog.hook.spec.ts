import { act } from 'react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { renderHook, waitFor } from '@testing-library/react';
import { Lookup } from '#common/models';

describe('Confirm dialog hook specs', () => {
  it('should dialog be closed by default', () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).not.toBeTruthy();
  });
  it('should open dialog', async () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());

    // Act
    const defaultValue: Lookup = { id: 'id-1', name: 'test' };
    act(() => {
      result.current.onOpenDialog(defaultValue);
    });

    // Assert
    expect(result.current.isOpen).toBeTruthy();
  });
  it('should close dialog', () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());

    // Act
    act(() => {
      result.current.onOpenDialog({ id: 'id-1', name: 'test' });
    });
    act(() => {
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).not.toBeTruthy();
  });
  it('should accept dialog', async () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    const emptyLookup: Lookup = { id: '', name: '' };
    // Act
    act(() => {
      result.current.onOpenDialog({ id: 'id-1', name: 'test' });
    });

    expect(result.current.isOpen).toBeTruthy();

    act(() => {
      result.current.onAccept();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual(emptyLookup);
  });
});
