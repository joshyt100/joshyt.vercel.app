import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';

const CodeBlock = ({ code, language, children }) => {
  // Prefer code prop; fallback to children if code is undefined
  let raw = code;
  if (typeof raw !== 'string' || !raw.trim()) {
    // If code prop is empty or not provided, use children
    if (typeof children === 'string') {
      raw = children;
    } else if (Array.isArray(children)) {
      raw = children.join('');
    } else {
      raw = '';
    }
  }

  const snippet = raw.trim();

  return (
    <Highlight theme={themes.shadesOfPurple} code={snippet} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} p-4 rounded-lg overflow-x-auto`} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              <span className="text-gray-500 select-none pr-4">{i + 1}</span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;

