import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  details: string;
  sitcomList: string;
  sitcomDetails:string
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  details: "/detail/:id",
  sitcomList: "/sitcom-list",
  sitcomDetails:"/sitcom-detail/:id"

};

interface Routes extends Omit<SwitchRoutes, "details" | "sitcomDetails"> {
  details: (id: string) => string;
  sitcomDetails: (id: number)=>string
}

export const routes: Routes = {
  ...switchRoutes,
  details: (id) => generatePath(switchRoutes.details, { id }),
  sitcomDetails: (id) => generatePath(switchRoutes.sitcomDetails, {id}),
};