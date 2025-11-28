const { registerBlockType } = wp.blocks;

import pages from "./pages/**/*.jsx";

pages.forEach((page) => {
  console.log("page", page);
  const { pageAttr } = page;
  const name = pageAttr.name;
  const templateId = `nolsis/${name}`;

  const className = `nolsis-${name} section-wrapper`;

  registerBlockType(templateId, {
    apiVersion: 3,
    title: pageAttr.title,
    icon: "universal-access-alt",
    category: "design",
    edit: (props) => {
      props = { ...props, edit: true };
      return <section className={className}>{page.default(props)}</section>;
    },
    save: (props) => {
      return <section className={className}>{page.default(props)}</section>;
    },
    attributes: pageAttr.data,
  });
});
