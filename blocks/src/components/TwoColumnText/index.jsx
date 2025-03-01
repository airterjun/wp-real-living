import Text from "../helper/Text";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { LinkSchmea } from "../Schema/linkSchema";
import { TextSchema } from "../Schema/text";
import "./style.scss";

const attributes = {
   excerpt: TextSchema,
   title: TextSchema,
   link: LinkSchmea
}

const TwoColumnText = (props) => {

   return (
      <section className="two-column-text">
         <div className="container content">
            <Text tag="h2" set="title" {...props} className="t1 content-a" />
            <div className="content-b">
               <Text tag="div" className="content-b-a" set="excerpt" {...props} />
               <PrimaryButton {...props} />
            </div>
         </div>
      </section>
   )
}

export default TwoColumnText
export {
   attributes
};

