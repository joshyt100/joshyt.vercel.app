import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from './CodeBlock';

// Map the `code` tag to use `CodeBlock`
const components = {
  pre: (props) => <div {...props} />, // Optional: Wrap the pre block
  code: ({ children, className }) => {
    // Extract the language from the className (e.g., "language-python")
    const language = className?.replace(/language-/, '') || 'code';
    return <CodeBlock code={children} language={language} />;
  },
};

const MDXProviderWrapper = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MDXProviderWrapper;

