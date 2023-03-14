import { IStringObj } from "./interfaces";

export const classNameConcatination = (
  stylesObj: IStringObj,
  classNames: Array<string>,
) => {
  let resultStr = "";

  for (const cls of classNames) {
    resultStr += stylesObj[cls] + " ";
  }

  return resultStr.trimEnd();
};
