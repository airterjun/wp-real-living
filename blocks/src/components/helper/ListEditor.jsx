import {
  getBaseModelPath,
  getModelId,
  getNestedValue,
  setNestedValue,
} from "./Libs";

const ListEditor = (props) => {
  const { edit, template, set, attributes, nested, model, title } = props;
  if (edit) {
    const listModel = model ? `${model}.${set}` : set;

    // get oject data
    let slides = getNestedValue(attributes, listModel);

    const deleteItem = (index) => {
      const clonedAttr = structuredClone(attributes);
      const lists = getNestedValue(clonedAttr, listModel);
      lists.splice(index, 1);
      const rootPath = getBaseModelPath(listModel);
      props.setAttributes({
        ...attributes,
        [rootPath]: getNestedValue(clonedAttr, rootPath),
      });
    };

    const addItems = () => {
      const newSlides = structuredClone(slides);
      const cloneItem = structuredClone(newSlides[0]);

      if (title) cloneItem[title] = `Cloned : ${cloneItem[title]}`;

      if (nested) {
        const newAttr = structuredClone(attributes);
        newSlides.push(cloneItem);
        const rootPath = getBaseModelPath(listModel);
        setNestedValue(newAttr, listModel, newSlides);

        props.setAttributes({
          ...attributes,
          [rootPath]: getNestedValue(newAttr, rootPath),
        });
      } else {
        newSlides.push(cloneItem);
        let setData = null;

        if (set) {
          setData = structuredClone(attributes);
          setNestedValue(setData, listModel, newSlides);
        }

        props.setAttributes({
          ...(set ? attributes : slides),
          [set ? set : listModel]: set ? setData[set] : newSlides,
        });
      }
    };

    if (template) {
      const getList = getNestedValue(attributes, getModelId(set, props));
      const templateRender = () =>
        getList.map((item, index) => {
          const listTitle = title ? item[title] : `Item ${index}`;
          return (
            <details className="list-item-wrapper">
              <summary className="list-item-wrapper-header">
                <div className="list-item-wrapper-header-list-title">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m4 7 6 6 6-6"
                      />
                    </svg>
                  </div>
                  <div className="title-wrapper">{listTitle}</div>
                </div>
                <div className="list-item-wrapper-header-buttons">
                  {/* <div className="button-disabled button-container">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path d="M12.001 5C7.524 5 3.733 7.943 2.46 12c1.274 4.057 5.065 7 9.542 7 4.478 0 8.268-2.943 9.542-7-1.274-4.057-5.064-7-9.542-7Z" /></g></svg>
                            </div> */}
                  <div
                    className={`button-container list-item-button-delete ${
                      getList.length === 1 && "disabled-delete"
                    }`}
                    onClick={() => {
                      deleteItem(index);
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
                        stroke-width="2"
                        d="M18 6v10.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C15.72 21 14.88 21 13.2 21h-2.4c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C6 18.72 6 17.88 6 16.2V6M4 6h16m-4 0-.27-.812c-.263-.787-.394-1.18-.637-1.471a2 2 0 0 0-.803-.578C13.938 3 13.524 3 12.694 3h-1.388c-.829 0-1.244 0-1.596.139a2 2 0 0 0-.803.578c-.243.29-.374.684-.636 1.471L8 6"
                      />
                    </svg>
                  </div>
                </div>
              </summary>
              {template(index)}
            </details>
          );
        });

      return (
        <div className="listing-list">
          {templateRender()}
          <div className="button-wrapper">
            <div
              className="button"
              onClick={() => {
                addItems();
              }}
            >
              Add More
            </div>
          </div>
        </div>
      );
    }

    return <div>No template</div>;
  }
};

export default ListEditor;
