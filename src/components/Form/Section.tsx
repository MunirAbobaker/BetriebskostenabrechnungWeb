import * as React from "react";
import Input from "./Input";

interface SectionProps {
  section: string;
  sectionBody?: any;
  sectionMetaData: any;
  onChangeInputHandler: (index: number, e: any) => void;
}

const Section: React.FC<SectionProps> = React.memo((props) => {

  const onChangeHandler = ( e: any, index: number ) => {
   props.onChangeInputHandler(index, e);
  };
  let body;

  body = props.sectionMetaData.map((question: { text: string; placeholder: string; }, index: number) => {
    return (
      <>
        <Input
          id={index}
          text={question.text}
          placheholder={question.placeholder}
          value={props.sectionBody.length > index ? props.sectionBody[index].value : ""}
          onChange={( e: any) => onChangeHandler(e, index)}
        />
        <br />
      </>
    );
  });

  return (
    <>
      <div style={{ marginBottom: "40px" }}>
        <h1>{props.section}</h1>
      </div>
      {body}
    </>
  );
});

export default Section;
