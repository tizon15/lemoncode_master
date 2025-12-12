import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('mapEmployeeSumaryFromApiToVM specs', () => {
  it.each<apiModel.Project[]>([[viewModel.createEmptyProject()]])(
    'should return array one mapped item when it feed array with one item',
    (project) => {
      //Arrange

      // Act
      const result = mapProjectFromApiToVm(project);

      // Assert
      const expectedResult: viewModel.Project = viewModel.createEmptyProject();
      expect(result).toEqual(expectedResult);
    }
  );

  it.each<apiModel.Project[]>([[viewModel.createEmptyProject()]])(
    'should map project with empty employees',
    (project) => {
      // Arrange
      // Act
      const result = mapProjectFromApiToVm(project);

      // Assert
      expect(result).toEqual({
        ...project,
        employees: [],
      });
      expect(result.employees).toHaveLength(0);
    }
  );
  it.each<apiModel.Project[]>([[viewModel.createEmptyProject()]])(
    'should return a empty project it feeds empty object',
    (project) => {
      //Arrange
      const mockEmployees: apiModel.EmployeeSummary[] = [
        { id: '1', employeeName: 'John Doe', isAssigned: false },
        { id: '2', employeeName: 'Jane Smith', isAssigned: true },
      ];
      // Act
      const result = mapProjectFromApiToVm({
        ...project,
        employees: mockEmployees,
      });

      // Assert
      expect(result.employees).toHaveLength(2);
      expect(result.employees[0]).toEqual(mockEmployees[0]);
      expect(result.employees[1]).toEqual(mockEmployees[1]);
    }
  );
});
