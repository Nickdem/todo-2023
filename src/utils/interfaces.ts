export interface IStringObj {
  [key: string]: string;
}

export interface ITodoObj {
  title: string;
  description: string;
  tag: string;
  id: string;
  status: string;
}

// export interface ITodoObjWrapper {
//   title: string;
//   items: Array<ITodoObj>;
// }

// export interface IMockTodoObj {
//   [key: string]: Array<ITodoObj>;
// }

export interface ITodosObj {
  [key: string]: Array<ITodoObj>;
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
  item: string;
  container?: boolean;
}

export interface ITagProps {
  color: string;
}

export interface IColumnProps {
  name: string;
}

export interface ILoaderProps {
  size: string;
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

export interface IFormProps {
  children: JSX.Element | JSX.Element[];
  text: string;
  title: string;
  clickHandler: Function;
  deleteHandler?: Function;
}

export interface IFormFieldProps {
  name: string;
  label: string;
  value: string;
  changeHandler: Function;
  type: string;
}

export interface ISelectProps {
  label: string;
  item: string;
  items: IStringObj;
  changeSelect: Function;
  all: boolean;
}
