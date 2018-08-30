const createRouteFor = name => ({
  url = '', folderName = '', entryFile = '', props = Object.create(null),
}) => (
  Object.freeze(({
    name,
    url,
    pagePath: `${folderName}/${entryFile}`,
    props,
  }))
);

export default createRouteFor;
