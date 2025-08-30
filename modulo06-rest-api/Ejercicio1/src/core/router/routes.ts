import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  createCharacter: string;
  editCharacter: string;
  viewCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  createCharacter: '/character/create',
  editCharacter: '/character/:id',
  viewCharacter: '/character/:id/:isReadOnly?'
};

type NavigationFunction = (id: number, isReadOnly: boolean) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editCharacter' | 'viewCharacter' > {
  editCharacter: NavigationFunction;
  viewCharacter: NavigationFunction
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
  viewCharacter: (id, isReadOnly) => generatePath(switchRoutes.viewCharacter, { id, isReadOnly:true }),
};
