import Media from "../Media";
import Text from "../Text";

export default function (props) {
  const { type, className, tag, set } = props;

  if (type === "text") {
    return (
      <>
        <Text
          {...props}
          tag={tag}
          set={set}
          className={`${className ? className : ""} desktop`}
        />
        <Text
          {...props}
          tag={tag}
          set={`${set}Mobile`}
          className={`${className ? className : ""} mobile`}
        />
      </>
    );
  }

  if (type === "image") {
    return (
      <>
        <Media
          {...props}
          set={set}
          className={`${className ? className : ""} desktop`}
        />
        <Media
          {...props}
          set={`${set}Mobile`}
          className={`${className ? className : ""} mobile`}
        />
      </>
    );
  }
}
