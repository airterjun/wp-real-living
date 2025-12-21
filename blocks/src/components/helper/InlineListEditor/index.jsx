import ButtonSlider from "../ButtonSlider";

export const InlineListEditor = (props) => {
  const { className, set, defaultItem } = props;
  return (
    <div className={className}>
      {props.children}
      <ButtonSlider {...props} set={set} defaultItem={defaultItem} />
    </div>
  );
};
