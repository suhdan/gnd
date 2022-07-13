import { PATHS } from "./constants";

export const getTextColor = (currentPath) => {
  if (PATHS.HOME.includes(currentPath)) {
    return "#000";
  }
  if (PATHS.DETAILS.includes(currentPath)) {
    return "#fff";
  }
  if (PATHS.REGISTRY.includes(currentPath)) {
    return "#fff";
  }
  if (PATHS.RSVP.includes(currentPath)) {
    return "#000";
  }
};
