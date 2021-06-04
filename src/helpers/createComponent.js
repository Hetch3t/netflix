export const createComponent =
  TagName =>
  ({ children, ...restProps }) =>
    <TagName {...restProps}>{children}</TagName>

export const createComponentChildfree = TagName => props =>
  <TagName {...props} />
