import { useEffect, useRef } from "@wordpress/element";
import { v4 as uuidv4 } from "uuid";
import StyleClassEditor from "./StyleClassEditor";

const BlockEditor = (props) => {
  const { edit, tabs, tabEditor, setAttributes } = props;

  if (edit) {
    const id = uuidv4();
    const contentRef = useRef();
    const blockClass = `editor-${id}`;
    const mainContainerWrapper = useRef(null);
    const handleDrag = useRef(null);
    const containerRef = useRef(null);
    const isDragging = useRef(false);
    const offsetX = useRef(0);
    const offsetY = useRef(0);

    const closePanel = () => {
      mainContainerWrapper.current.style.display = "none";
    };

    const setTabActive = (index) => {
      document.body.style.overflow = "hidden";
      const tabs = contentRef.current.querySelectorAll(
        `.${blockClass} .tab-item`
      );
      const tabsButton =
        mainContainerWrapper.current.querySelectorAll(`.tab-buttons .button`);

      if (tabs) {
        tabs.forEach((item) => {
          item.classList.remove("active");
        });

        tabsButton.forEach((item) => {
          item.classList.remove("active");
        });

        tabs[index].classList.add("active");
        tabsButton[index].classList.add("active");
      }
    };

    const buttonTab = () => {
      if (tabEditor || tabs) {
        return (
          <div className="tab-buttons">
            <div
              className="button active"
              onClick={() => {
                setTabActive(0);
              }}
            >
              Desktop
            </div>
            <div
              className="button"
              onClick={() => {
                setTabActive(1);
              }}
            >
              Mobile
            </div>
          </div>
        );
      }
    };

    useEffect(() => {
      const dragBox = containerRef.current;

      const handleMouseMove = (e) => {
        if (!isDragging.current || !dragBox) return;
        dragBox.style.left = `${e.clientX - offsetX.current}px`;
        dragBox.style.top = `${e.clientY - offsetY.current}px`;
      };

      const handleMouseUp = () => {
        isDragging.current = false;
      };

      if (!mainContainerWrapper.current) return () => {};

      handleDrag.current.addEventListener("mousemove", handleMouseMove);
      handleDrag.current.addEventListener("mouseup", handleMouseUp);

      return () => {
        if (handleDrag.current) {
          handleDrag.current.removeEventListener("mousemove", handleMouseMove);
          handleDrag.current.removeEventListener("mouseup", handleMouseUp);
        }
      };
    }, []);

    const startDragging = (e) => {
      const iframeWidth = document.querySelector("#editor iframe");

      if (iframeWidth.clientWidth < 800) return;

      const dragBox = containerRef.current;
      if (!dragBox) return;
      isDragging.current = true;
      offsetX.current = e.clientX - dragBox.offsetLeft;
      offsetY.current = e.clientY - dragBox.offsetTop;
    };

    console.log("tabs", tabs);

    const tabsEditor = () => {
      if (tabs) {
        if (tabs && tabs.length === 0) tabs[0] = <></>;

        return tabs.map((tab, index) => (
          <div className={`tab-item ${index === 0 ? "active" : ""}`}>
            {tab} {index === 0 && <StyleClassEditor {...props} />}
          </div>
        ));
      }

      return null;
    };

    return (
      <div className="block-editor-pannel-wrapper" ref={mainContainerWrapper}>
        <div className={`block-editor-pannel ${blockClass}`} ref={containerRef}>
          <div
            className="header-panel"
            onMouseDown={startDragging}
            ref={handleDrag}
          >
            <div className="header-panel-title">Section Settings </div>
            <div
              className="button-close"
              onClick={() => {
                closePanel();
              }}
            >
              x
            </div>
          </div>
          {buttonTab()}
          <div className="content-scroll" ref={contentRef}>
            {props.children}
            {tabsEditor()}
          </div>
        </div>
      </div>
    );
  }
};

export default BlockEditor;
