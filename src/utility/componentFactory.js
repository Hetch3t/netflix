export default function componentFactory({ children, ...restProps }) {
  const TagName = tagName
  return <TagName {...restProps}>{children}</TagName>
}
