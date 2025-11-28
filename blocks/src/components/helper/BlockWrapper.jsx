import { useRef } from "@wordpress/element";
import { getBaseModelPath, getNestedValue, setNestedValue } from "./Libs";
import "./style/BlockEditor.scss";

const BlockWrapper = (props) => {
  const { edit, setAttributes, attributes, model } = props;
  let classStyle = "";

  if (props.className !== undefined) {
    classStyle = props.className;
  }

  const customClassKey = model ? `${model}.section_class` : "section_class";
  const customClass = getNestedValue(attributes, customClassKey);
  if (customClass) {
    classStyle = `${props.className} ${customClass}`;
  }

  const sectionClass = `section-block-wrapper ${
    edit ? "edit-mode" : "live"
  } ${classStyle}`;

  const disabledKey = model ? `${model}.disabled` : "disabled";
  let isDisabled = getNestedValue(attributes, disabledKey);

  if (edit) {
    const mainContainer = useRef(null);

    const buttonEditor = () => {
      const disabledSection = () => {
        const path = getBaseModelPath(disabledKey);
        const copy = structuredClone(attributes);

        setNestedValue(copy, disabledKey, !isDisabled);

        setAttributes({
          [path]: copy[path],
        });
      };

      const openPanelEditor = () => {
        const pannel = mainContainer.current.querySelector(
          ".block-editor-pannel-wrapper"
        );
        pannel.style.display = "block";
      };

      const inputSectionId = () => {};

      return (
        <div className="button-edit-section">
          <div className="button">#</div>
          <div
            className="button hide"
            onClick={() => {
              disabledSection();
            }}
          >
            {isDisabled ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m2.999 3 18 18M9.843 9.914a3 3 0 0 0 4.265 4.22M6.5 6.646A10.024 10.024 0 0 0 2.457 12c1.274 4.057 5.065 7 9.542 7 1.99 0 3.842-.58 5.4-1.582m-6.4-12.369c.329-.032.663-.049 1-.049 4.478 0 8.268 2.943 9.542 7a9.954 9.954 0 0 1-1.189 2.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <g
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path d="M12.001 5C7.524 5 3.733 7.943 2.46 12c1.274 4.057 5.065 7 9.542 7 4.478 0 8.268-2.943 9.542-7-1.274-4.057-5.064-7-9.542-7Z" />
                </g>
              </svg>
            )}
          </div>
          <div
            className="button settings"
            onClick={() => {
              openPanelEditor();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.242 20h5.334M4.485 16.5l11.34-11.244a1.932 1.932 0 0 1 2.619-.093v0c.844.725.902 2.011.128 2.81L7.394 19.5 4 20l.485-3.5Z"
              />
            </svg>
            <div>Edit Section</div>
          </div>
        </div>
      );
    };

    return (
      <section className={sectionClass} ref={mainContainer}>
        {buttonEditor()}
        {props.children}
      </section>
    );
  }

  return !isDisabled ? (
    <section className={sectionClass}>{props.children}</section>
  ) : (
    <></>
  );
};

export default BlockWrapper;
