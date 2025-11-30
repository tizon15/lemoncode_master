import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('mapEmployeeSumaryFromApiToVM specs', () => {
  it.each<apiModel.Project[]>([
    [undefined],
    [null],
    [],
  ])('should return array one mapped item when it feed array with one item', (project) => {
    //Arrange

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    const expectedResult: viewModel.Project = viewModel.createEmptyProject();
    expect(result).toEqual(expectedResult);
  });
  it.each<apiModel.Project[]>([
    [undefined],
    [null],
    [],
  ])('should return empty array when it feeds projects equals $project', (project) => {
    //Arrange
    // const project: apiModel.Project = null;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    const expectedResult: viewModel.Project[] = []
    expect(result).toEqual(expectedResult);
  });
  
  it('should return a empty project it feeds empty object', () => {
    //Arrange
    const mockEmployees: apiModel.EmployeeSummary[] = [
      { id: '1', employeeName: 'John Doe', isAssigned: false },
      { id: '2', employeeName: 'Jane Smith', isAssigned: true },
    ];
    const mockProject: apiModel.Project = {
      id: '1',
      isActive: true,
      name: 'Project 1 Test',
      employees: mockEmployees,
      comments: '',
      externalId: '1',
    };
    // Act
    const result = mapProjectFromApiToVm(mockProject);

    // Assert
    const expectedResult: viewModel.Project = {
      ...mockProject,
      employees: mockEmployees,
    };
    expect(result).toEqual(expectedResult);
    expect(result.employees).toHaveLength(2);
    expect(result.employees[0]).toEqual(mockEmployees[0]);
    expect(result.employees[1]).toEqual(mockEmployees[1]);
  });
  it('should map project with empty employees', () => {
    // Arrange
    const mockProject: apiModel.Project = {
      id: '1',
      isActive: true,
      name: 'Project 1 Test',
      employees: [],
      comments: '',
      externalId: '1',
    };
    // Act
    const result = mapProjectFromApiToVm(mockProject);

    // Assert
    expect(result).toEqual({
      ...mockProject,
      employees: [],
    });
    expect(result.employees).toHaveLength(0);
  });
});

