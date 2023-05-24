// Record это тип который в качестве ключа примет строку а в качестве значения булик или строку
type Mods = Record<string, boolean | string>
export const classNames = (cls: string, additional: string[] = [], mods: Mods = {}): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, val]) => Boolean(val))
      .map(([key, _]) => key),
  ].join(' ');
};
