import { createElement, ReactNode } from "react";
import { IItemForList, IListProps } from "../../utils/interfaces";

const List = ({ items }: IListProps) => {
  function createChildren(childrens: IItemForList[]): ReactNode {
    return childrens.map((children) => {
      return createElement(
        children.tag,
        children.attr,
        children.childrens ? createChildren(children.childrens) : children.text,
      );
    });
  }

  return createElement(items.tag, items.attr, createChildren(items.childrens!));
};

export default List;
