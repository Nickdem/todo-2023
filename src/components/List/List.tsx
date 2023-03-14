import { createElement, ReactNode } from "react";
import { IItem } from "../Header/Header";

interface IListProps {
  itemsList: IItem;
}

const List = ({ itemsList }: IListProps) => {
  function createChildren(childrens: IItem[]): ReactNode {
    return childrens.map((children) => {
      return createElement(
        children.tag,
        children.attr,
        children.childrens ? createChildren(children.childrens) : children.text,
      );
    });
  }
  return createElement(
    itemsList.tag,
    itemsList.attr,
    createChildren(itemsList.childrens!),
  );
};

export default List;
