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
  editCharacter: '/character/edit/:id',
  viewCharacter: '/character/:id'
};

type NavigationFunction = (id: number) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editCharacter' | 'viewCharacter' > {
  editCharacter: NavigationFunction;
  viewCharacter: NavigationFunction
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
  viewCharacter: (id) => generatePath(switchRoutes.viewCharacter, { id }),
};
