import { useState } from "react";
import { getModelValue } from "../Libs";
import LinkEditor from "../LinkEditor";
import "./style.scss";

export default function (props) {
  const { edit, className, set } = props;
  const value = getModelValue(set, props);

  if (edit) {
    const [open, setOpen] = useState(false);

    return (
      <div className="link-editor-wrapper">
        <a
          className={className}
          onClick={() => {
            setOpen(true);
          }}
        >
          {props.children}
        </a>
        {open && (
          <div className="editor">
            <div
              className="click-area"
              onClick={() => {
                setOpen(false);
              }}
            ></div>
            <LinkEditor {...props} set={set} label="Link Editor" />
          </div>
        )}
      </div>
    );
  }

  return (
    <a href={value?.url} className={className}>
      {props.children}
    </a>
  );
}
