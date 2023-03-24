import {
  getUserLC,
  setUserLC,
  regUserLC,
  logoutUserLC,
} from "../utils/toLocalStorage";

export function getUser() {
  return getUserLC();
}

export function setUser(name: string) {
  return setUserLC(name);
}

export function regUser(name: string) {
  return regUserLC(name);
}

export function logoutUser() {
  return logoutUserLC();
}
