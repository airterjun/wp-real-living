import ButtonSlider from "../ButtonSlider";

export const InlineListEditor = (props) => {
  const { className, set } = props;
  return (
    <div className={className}>
      {props.children}
      <ButtonSlider {...props} set={set} />
    </div>
  );
};
