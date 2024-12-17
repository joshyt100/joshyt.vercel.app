
import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';

const CodeBlock = ({ code, language }) => {
  return (
    <Highlight theme={themes.dracula} code={code.trim()} language={language}>
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

