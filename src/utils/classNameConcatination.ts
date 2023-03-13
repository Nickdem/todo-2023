interface IObj {
  [key: string]: string;
}

export const classNameConcatination = (
  stylesObj: IObj,
  classNames: Array<string>,
) => {
  let resultStr = "";

  for (const cls of classNames) {
    resultStr += stylesObj[cls] + " ";
  }

  return resultStr.trimEnd();
};
