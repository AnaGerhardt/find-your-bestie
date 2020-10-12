/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.svg" {
  // import React = require("react");
  // export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  // const src: string;
  // export default src;
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}
