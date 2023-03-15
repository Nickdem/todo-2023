export interface IStringObj {
  [key: string]: string;
}

export interface IItemForList {
  tag: string;
  attr: {
    className: string;
    href?: string;
    key: string;
    onClick?: Function;
    "data-testid"?: string;
  };
  text?: string;
  childrens?: Array<IItemForList>;
}

export interface ITodoObj {
  title: string;
  description: string;
  tag: string;
  id: number;
}

export interface ITodoObjWrapper {
  title: string;
  items: Array<ITodoObj>;
}

export interface IMockTodoObj {
  [key: string]: ITodoObjWrapper;
}

export interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}

export interface IListProps {
  items: IItemForList;
}

export interface ITagListProps {
  itemsList: Array<string>;
  clickHandler: Function;
  cls: string;
}

export interface ISelectValueProps {
  clickHandler: Function;
  cls: string;
  color: string;
  container?: boolean;
}

export interface ITagProps {
  color: string;
}

export interface IColumnProps {
  name: string;
}

export interface ITodoProps {
  item: ITodoObj;
}
