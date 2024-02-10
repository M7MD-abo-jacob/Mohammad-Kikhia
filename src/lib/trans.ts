import React, { ReactElement, ReactNode } from 'react';

export function trans(
  translation: string,
  components: { [key: string]: ReactElement },
) {
  const parts = translation.split(/({.*?}.*?{.*?})/g);
  return parts.map((part, i) => {
    if (part.startsWith('{') && part.endsWith('}')) {
      const [start, content, end] = part
        .split(/({.*?}|{.*?})/g)
        .filter(Boolean);
      const keyStart = start.slice(1, -1);
      const keyEnd = end.slice(1, -1);

      if (keyStart === keyEnd) {
        return React.cloneElement(components[keyStart], { key: i }, content);
      }
    }

    return part;
  });
}
