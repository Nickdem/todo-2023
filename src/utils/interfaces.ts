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
  };
  text?: string;
  childrens?: Array<IItemForList>;
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
