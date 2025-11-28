import { toId, updateAttributesData } from "../Libs";
import "./style.scss";

export default function (props) {
  const { edit, set } = props;

  const updateId = (input) => {
    updateAttributesData(set, toId(input.target.value), props);
  };

  if (edit) {
    return (
      <div className="editor-wrapper anchor-editor">
        <div className="button">#</div>
        <div className="editor">
          <input
            type="text"
            onInput={(val) => {
              updateId(val);
            }}
          />
        </div>
      </div>
    );
  }
}
