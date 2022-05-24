// components/If.tsx
import React, { Children } from "react";
function If({ condition, children }) {
  const childrenArray = Children.toArray(children);
  if (condition)
    return /* @__PURE__ */ React.createElement(React.Fragment, null, childrenArray.filter((child) => child.type.name !== "Else"));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, childrenArray.filter((child) => child.type.name === "Else")[0]);
}

// components/Else.tsx
import React2 from "react";
function Else({ children }) {
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, children);
}

// components/Switch.tsx
import { Children as Children2 } from "react";
function Switch({ condition, children }) {
  const child = Children2.toArray(children).filter((child2) => child2.type.name === "Case" && child2.props.condition === condition)[0];
  if (child)
    return child;
  const default_ = Children2.toArray(children).filter((child2) => child2.type.name === "Default")[0];
  if (default_)
    return default_;
}

// components/Case.tsx
import React4 from "react";
function Case({ condition, children }) {
  return /* @__PURE__ */ React4.createElement(React4.Fragment, null, children);
}

// components/Default.tsx
import React5 from "react";
function Default({ children }) {
  return /* @__PURE__ */ React5.createElement(React5.Fragment, null, children);
}

// components/For.tsx
function For({ collection, map, filter }) {
  if (filter)
    collection = collection.filter(filter);
  return collection.map(map);
}
export {
  Case,
  Default,
  Else,
  For,
  If,
  Switch
};
//# sourceMappingURL=index.js.map
