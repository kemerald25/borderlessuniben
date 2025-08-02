// This declaration allows TypeScript to recognize the <w3m-button> custom element.
// Custom elements are a feature of Web Components, and Web3Modal uses them for its UI.
// By declaring it in a .ts or .d.ts file included in the project's tsconfig,
// we can use it in our JSX without TypeScript errors.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'w3m-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

// This empty export is important. It tells TypeScript to treat this file as a module,
// which is required for augmenting a global module.
export {};
