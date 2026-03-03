import { MediaUpload } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { getBaseModelPath, getModel, getNestedValue } from "./Libs";
import "./style/admin.scss";

export default function Media(props) {
  const {
    edit,
    set,
    index,
    attributes,
    setAttributes,
    type,
    className,
    noDelete,
    mobile,
    model,
    children,
  } = props;

  const modelSet = model ? `${model}.${set}` : set;

  const getValue = getNestedValue(attributes, `${modelSet}.url`);
  const width = getNestedValue(attributes, `${modelSet}.width`);
  const height = getNestedValue(attributes, `${modelSet}.height`);

  const renderMedia = () => {
    if (type === "video") {
      const videoUrl = getNestedValue(attributes, modelSet);
      return (
        <div className="image-wrapper">
          <video
            width="320"
            height="240"
            controls
            src={videoUrl.default || videoUrl}
          />
        </div>
      );
    } else {
      return (
        <img
          src={getValue}
          width={width}
          height={height}
          alt="We Are Real"
          loading="lazy"
          decoding="async"
        />
      );
    }
  };

  if (edit) {
    const baseModel = getBaseModelPath(modelSet);
    const onSelect = (media) => {
      const clone = structuredClone(attributes);

      let updateSet = modelSet;

      if (clone.isMobile) {
        updateSet = mobile;
      }

      if (index !== undefined) {
        const model = getModel(updateSet);
        const copy = clone[baseModel];
        copy[index][model] = media;

        setAttributes({
          [baseModel]: copy.url,
        });
      } else {
        if (type === "video") {
          lodash.set(clone, updateSet, media.url);
        } else {
          lodash.set(clone, updateSet, media);
        }

        setAttributes({
          [baseModel]: clone[baseModel],
        });
      }
    };

    const deleteMedia = () => {
      if (index !== undefined) {
        const copy = structuredClone(attributes[baseModel]);
        copy.splice(index, 1);
        setAttributes({
          [baseModel]: copy,
        });
      }
    };

    const deleteButton = () => {
      if (!noDelete) {
        return (
          <Button
            isDestructive={true}
            onClick={() => {
              deleteMedia();
            }}
          ></Button>
        );
      }
    };

    return (
      <figure className={`${className} edit`}>
        <MediaUpload
          allowedTypes={["image"]}
          className="image-wrapper"
          onSelect={(media) => {
            console.log("media", media);
            onSelect(media);
          }}
          render={({ open }) => (
            <div className="wp-action__floating">
              <Button
                onClick={() => {
                  open();
                  setAttributes({
                    isMobile: false,
                  });
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
                    d="m14.264 15.938-1.668-1.655c-.805-.798-1.208-1.197-1.67-1.343a2 2 0 0 0-1.246.014c-.458.156-.852.563-1.64 1.379L4.045 18.28m10.22-2.342.341-.339c.806-.8 1.21-1.199 1.671-1.345a2 2 0 0 1 1.248.015c.458.156.852.565 1.64 1.383l.836.842m-5.736-.556 4.011 4.019m0 0c-.357.043-.82.043-1.475.043H7.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874 1.845 1.845 0 0 1-.174-.628m14.231 1.677a1.85 1.85 0 0 0 .633-.175 2 2 0 0 0 .874-.874C20 18.48 20 17.92 20 16.8v-.306M12.5 4H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 5.52 4 6.08 4 7.2v9.6c0 .658 0 1.122.044 1.48M20 11.5v4.994M14 10l2.025-.405c.177-.035.265-.053.347-.085a1 1 0 0 0 .207-.11c.072-.051.136-.115.264-.242L21 5a1.414 1.414 0 0 0-2-2l-4.158 4.158c-.127.127-.19.19-.241.263a1.002 1.002 0 0 0-.11.207c-.033.082-.05.17-.086.347L14 10Z"
                  />
                </svg>
              </Button>
              <div className="additional-button">{children}</div>
            </div>
          )}
        />

        {renderMedia()}
      </figure>
    );
  } else {
    return <figure className={className}>{renderMedia()}</figure>;
  }
}
