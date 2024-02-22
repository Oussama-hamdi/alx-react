import { List, Map } from "immutable";

export const concatElements = (list1, list2) => {
  return [...List(list1), ...List(list2)];
};

export const mergeElements = (map1, map2) => {
  return Map(map1).merge(Map(map2));
};
