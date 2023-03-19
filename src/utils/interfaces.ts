export interface IStringObj {
  [key: string]: string;
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

export interface ITagListProps {
  itemsList: Array<string>;
  clickHandler: Function;
  cls: string;
  selected?: string;
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

export interface IButtonProps {
  text: string;
  clickHandler: Function;
  cls: string;
  testid: string;
}

export interface IModalProps {
  children: JSX.Element | JSX.Element[];
}
