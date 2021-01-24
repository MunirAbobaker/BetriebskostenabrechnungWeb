import * as React from "react";
import {Route, RouteComponentProps} from "react-router-dom";
import DatePicker from "react-datepicker";
import {
    useCreateInvoiceMutation,
    useCreateHeizkostenabrechnungMutation,
    useCreateEinzelabrechnungMutation,
    useCreateBewohnerBetriebskostenMutation, useGetGesamteAbrechnungQuery,
} from "../../generated/graphql";
import CustomizedButton from "../UI/CustomizedButton";
import StyledForm from "./StyledForm";
import Input from "./Input";
import Section from "./Section";
import Checkbox from "./Checkbox";
import {
    QUESTIONS,
    EINZELABRECHNUNGT1,
    HEIZKOSTEN,
    WASSER,
    WARMWASSER_ABWASSER,
    EINZELABRECHNUNGT2,
    PERSON,
    BEWOHNER,
} from "../../utils/constants";
import {convertToFloat} from "../../utils/convertToFloat";

export interface SectionState {
    value: string;
    error: string;
}

const Form: React.FC<RouteComponentProps> = React.memo((props) => {
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());
    const [, createAbrechnung] = useCreateInvoiceMutation();
    const [, createHeizkosten] = useCreateHeizkostenabrechnungMutation();
    const [, createEinzelabrechnung] = useCreateEinzelabrechnungMutation();
    const [
        ,
        createBewohnerBetriebskosten,
    ] = useCreateBewohnerBetriebskostenMutation();
    const [section, setSection] = React.useState("Allgemeine Fragen");
    const [firstSection, setFirstSection] = React.useState<SectionState[]>([]);
    const [secondSection, setSecondSection] = React.useState<SectionState[]>([]);
    const [thirdSection, setThirdSection] = React.useState<SectionState[]>([]);
    const [forthSection, setforthSection] = React.useState<SectionState[]>([]);
    const [fifthSection, setfifthSection] = React.useState<SectionState[]>([]);
    const [sixthSection, setSixthSection] = React.useState<SectionState[]>([]);
    const [seventhSection, setSeventhSection] = React.useState<SectionState[]>([]);
    const [checked, setChecked] = React.useState(false);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        let response;
        switch (section) {
            case "Allgemeine Fragen":
                const sDate = new Date(startDate);
                const startDay = 1;
                const startMonth = sDate.getMonth() + 1;  
                const startYear = sDate.getFullYear();
                const startingDate = `${startYear}-${startMonth}-${startDay}`;

                const eDate = new Date(endDate);
                const endMonth = eDate.getMonth() + 1;
                const endYear = eDate.getFullYear();
                const endDay = new Date(endYear, endMonth, 0).getDate();
                const endingDate = `${endYear}-${endMonth}-${endDay}`;
                const monatliche_Abschlag: number = convertToFloat(firstSection[0].value);
                const Wohnflaeche: number =  convertToFloat(firstSection[1].value);
                
                response = await createAbrechnung({
                    monatliche_Abschlag,
                    Wohnflaeche,
                    Start_Data: startingDate,
                    End_Data: endingDate,
                });

                if (response.data?.createAbrechnung.Abrechnungsdata) {
                    setSection("Heizkosten");
                } else {
                    console.log("errors");
                    console.log(response.data?.createAbrechnung.errors);
                }
                break;
            case "Heizkosten":
                setSection("Wasser");
                break;
            case "Wasser":
                setSection("Warmwasser/Abwasser");
                break;
            case "Warmwasser/Abwasser":
                const AbwasserResponse = await createHeizkosten({
                    options: [
                        {
                            Kostenkonzept: "Heiz-Grundkosten",
                            Verteilschluessel: convertToFloat(firstSection[1].value),
                            Kosten_pro_Einheit: convertToFloat(secondSection[0].value),
                        },
                        {
                            Kostenkonzept: "Heiz-Verbrauchskosten",
                            Verteilschluessel: convertToFloat(secondSection[1].value),
                            Kosten_pro_Einheit: convertToFloat(secondSection[2].value),
                        },
                        {
                            Kostenkonzept: "Wasser-Grundkosten",
                            Verteilschluessel: convertToFloat(firstSection[1].value),
                            Kosten_pro_Einheit: convertToFloat(thirdSection[0].value),
                        },
                        {
                            Kostenkonzept: "Wasser-Verbrauchskosten",
                            Verteilschluessel: convertToFloat(thirdSection[2].value),
                            Kosten_pro_Einheit: convertToFloat(thirdSection[1].value),
                        },
                        {
                            Kostenkonzept: "Warmwasser-Grundkosten",
                            Verteilschluessel: convertToFloat(forthSection[0].value),
                            Kosten_pro_Einheit: convertToFloat(forthSection[1].value),
                        },
                        {
                            Kostenkonzept: "Warmwasser-Verbrauchskosten",
                            Verteilschluessel: convertToFloat(forthSection[0].value),
                            Kosten_pro_Einheit: convertToFloat(forthSection[2].value),
                        },
                    ],
                });
                if (AbwasserResponse.data?.createHeizkosten.Abrechnungsdata) {
                    setSection("Einzelabrechnung Teil1");
                } else {
                    console.log("errors");
                    console.log(AbwasserResponse.data?.createHeizkosten.errors);
                }
                break;
            case "Einzelabrechnung Teil1":
                setSection("Einzelabrechnung Teil2");
                break;
            case "Einzelabrechnung Teil2":
                response = await createEinzelabrechnung({
                    options: [
                        {
                            Abrechnungsposition: "Heizkosten/Wasser",
                            verteilt_nach: "Ext. Heizung",
                            Gesamte_Einheiten: convertToFloat(fifthSection[0].value), //13
                            Einheit_Anteil: 0, // rechnung in B.E -> heizkosten tabel
                            Gesamte_Kosten: convertToFloat(fifthSection[0].value),
                            Kosten_Anteil: 0, // rechnung in B.E -> heizkosten tabel
                        },
                        {
                            Abrechnungsposition: "Hausreinigung",
                            verteilt_nach: "Wohnfläche",
                            Gesamte_Einheiten: convertToFloat(fifthSection[1].value), //14
                            Einheit_Anteil: convertToFloat(firstSection[1].value),
                            Gesamte_Kosten: convertToFloat(fifthSection[2].value), //15
                            Kosten_Anteil: 0, // rechnung in B.E
                        },
                        {
                            Abrechnungsposition: "Fahrstuhl",
                            verteilt_nach: "Wohnfläche",
                            Gesamte_Einheiten: convertToFloat(fifthSection[1].value),
                            Einheit_Anteil: convertToFloat(firstSection[1].value),
                            Gesamte_Kosten: convertToFloat(fifthSection[3].value), //16
                            Kosten_Anteil: 0, // rechnung in B.E 
                        },
                        {
                            Abrechnungsposition: "Strom",
                            verteilt_nach: "Wohnfläche",
                            Gesamte_Einheiten: convertToFloat(fifthSection[1].value),
                            Einheit_Anteil: convertToFloat(firstSection[1].value),
                            Gesamte_Kosten: convertToFloat(fifthSection[4].value), //17  // 
                            Kosten_Anteil: 0, // rechnung in B.E 
                        },
                        {
                            Abrechnungsposition: "Müllabfuhr",
                            verteilt_nach: "Wohnfläche",
                            Gesamte_Einheiten: convertToFloat(fifthSection[1].value),
                            Einheit_Anteil: convertToFloat(firstSection[1].value),
                            Gesamte_Kosten: convertToFloat(fifthSection[5].value), //18
                            Kosten_Anteil: 0, // rechnung in B.E 
                        },
                        {
                            Abrechnungsposition: "Versicherung-Gebäude",
                            verteilt_nach: "Wohnfläche",
                            Gesamte_Einheiten: convertToFloat(fifthSection[1].value),
                            Einheit_Anteil: convertToFloat(firstSection[1].value),
                            Gesamte_Kosten: convertToFloat(fifthSection[6].value), //19
                            Kosten_Anteil: 0, // rechnung in B.E 
                        },
                        {
                            Abrechnungsposition: "Niederschlagswasser",
                            verteilt_nach: "Eigentumsanteil",
                            Gesamte_Einheiten: convertToFloat(sixthSection[0].value), // 20
                            Einheit_Anteil: convertToFloat(sixthSection[1].value), // 21
                            Gesamte_Kosten: convertToFloat(fifthSection[7].value), //19
                            Kosten_Anteil: 0, // rechnung in B.E 
                        },
                        {
                            Abrechnungsposition: "Bankgebühren",
                            verteilt_nach: "Eigentumsanteil",
                            Gesamte_Einheiten: convertToFloat(sixthSection[0].value), // 20
                            Einheit_Anteil: convertToFloat(sixthSection[1].value), // 21
                            Gesamte_Kosten: convertToFloat(sixthSection[4].value), //25
                            Kosten_Anteil: 0, // rechnung in B.E 
                        },
                        {
                            Abrechnungsposition: "Verwalter",
                            verteilt_nach: "Einheiten",
                            Gesamte_Einheiten: convertToFloat(sixthSection[2].value), // 22
                            Einheit_Anteil: convertToFloat(sixthSection[3].value), // 23
                            Gesamte_Kosten: convertToFloat(sixthSection[5].value), //26
                            Kosten_Anteil: 0, // rechnung in B.E 
                        },
                        {
                            Abrechnungsposition: "Instandhaltung",
                            verteilt_nach: "Eigentumsanteil",
                            Gesamte_Einheiten: convertToFloat(sixthSection[0].value), // 20
                            Einheit_Anteil: convertToFloat(sixthSection[1].value), // 21
                            Gesamte_Kosten: convertToFloat(sixthSection[6].value), //26
                            Kosten_Anteil: 0, // rechnung in B.E 
                        },
                    ],
                });
                console.log(response.data?.createEinzelabrechnung)
                if (response.data?.createEinzelabrechnung.Einzelabrechnungsdata) {
                   //props.history.push("/display");
                   props.history.push({
                    pathname: "/display", 
                    state: "update"
                    });
                } else {
                    console.log("errors");
                    console.log(response.data?.createEinzelabrechnung.errors);
                }

                break;
            case "Bewohner/Eigentümer":
                if (checked === true) {
                    setSection("Bewohner");
                } else {
                    props.history.push({
                        pathname: "/display", 
                        state: "update"
                        });
                }
                break;
            case "Bewohner":

                response = await createBewohnerBetriebskosten({
                    Position: seventhSection[0].value,
                    Betrag: convertToFloat(seventhSection[1].value)
                });
                if (response.data?.createBewohnerBetriebskosten) {
                    props.history.push("/display");
                } else {
                    console.log("errors");
                    console.log(response.data?.createBewohnerBetriebskosten.errors);
                }
                break
        }
    };

    const change = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>,
        useSetState : (value: React.SetStateAction<SectionState[]>) => void,
        state:  SectionState[]
) => {
        const newValue = {value: e.target.value, error: ""};
        let newArr = [...state];
        newArr[index] = newValue;
        useSetState(newArr);
    };

    const onChangeHandler = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = {value: e.target.value, error: ""};
        let newArr = [...firstSection];
        newArr[index] = newValue;
        setFirstSection(newArr);
    };

    const onChangeSecondSecHandler = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = {value: e.target.value, error: ""};
        let newArr = [...secondSection];
        newArr[index] = newValue;
        setSecondSection(newArr);
    };

    const onChangeThirdSecHandler = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = {value: e.target.value, error: ""};
        let newArr = [...thirdSection];
        newArr[index] = newValue;
        setThirdSection(newArr);
    };

    const onChangeForthSecHandler = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = {value: e.target.value, error: ""};
        let newArr = [...forthSection];
        newArr[index] = newValue;
        setforthSection(newArr);
    };

    const onChangeFifthSecHandler = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = {value: e.target.value, error: ""};
        let newArr = [...fifthSection];
        newArr[index] = newValue;
        setfifthSection(newArr);
    };

    const onChangeSixthSecHandler = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = {value: e.target.value, error: ""};
        let newArr = [...sixthSection];
        newArr[index] = newValue;
        setSixthSection(newArr);
    };

    const checkboxHandler = (name: string, value: boolean) => {
        setChecked(value);
    };
    const onChangeSeventhSecHandler = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = {value: e.target.value, error: ""};
        let newArr = [...seventhSection];
        newArr[index] = newValue;
        setSeventhSection(newArr);
    };

    let body;
    let childs;

    switch (section) {
        case "Allgemeine Fragen":
            childs = QUESTIONS.data.map((question, index) => {
                return (
                    <>
                        <Input
                            id={index}
                            text={question.text}
                            value={
                                firstSection.length > index ? firstSection[index].value : ""
                            }
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => change(index, e,setFirstSection, firstSection )
                            }
                            error={
                                firstSection.length > index ? firstSection[index].error : ""
                            }
                            placheholder={question.placeholder}
                        />

                        <br/>
                    </>
                );
            });

            body = (
                <>
                    <div style={{marginBottom: "40px"}}>
                        <h1>{section}</h1>
                    </div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <p style={{marginRight: "10px"}}>
                            1- Zu welchem Zeitraum möchten Sie Ihre Abrechnung erstellen
                        </p>
                        <br/>

                        <div style={{display: "flex", flexDirection: "row"}}>
              <span style={{marginRight: "10px", marginLeft: "10px"}}>
                von
              </span>

                            <DatePicker
                                selected={startDate}
                                onChange={(date: Date) => setStartDate(date)}
                                dateFormat="MM/yyyy"
                                showMonthYearPicker
                                showFullMonthYearPicker
                            />
                            <span style={{marginRight: "10px", marginLeft: "10px"}}>
                bis
              </span>
                            <DatePicker
                                selected={endDate}
                                onChange={(date: Date) => setEndDate(date)}
                                dateFormat="MM/yyyy"
                                showMonthYearPicker
                                showFullMonthYearPicker
                            />
                        </div>
                    </div>
                    <br/>

                    {childs}
                </>
            );
            break;

        case "Heizkosten":
            body = (
                <Section
                    sectionMetaData={HEIZKOSTEN.data}
                    section={section}
                    sectionBody={secondSection}
                    onChangeInputHandler={onChangeSecondSecHandler}
                />
            );
            break;

        case "Wasser":
            body = (
                <Section
                    sectionMetaData={WASSER.data}
                    section={section}
                    sectionBody={thirdSection}
                    onChangeInputHandler={onChangeThirdSecHandler}
                />
            );
            break;

        case "Warmwasser/Abwasser":
            body = (
                <Section
                    sectionMetaData={WARMWASSER_ABWASSER.data}
                    section={section}
                    sectionBody={forthSection}
                    onChangeInputHandler={onChangeForthSecHandler}
                />
            );
            break;

        case "Einzelabrechnung Teil1":
            body = (
                <Section
                    sectionMetaData={EINZELABRECHNUNGT1.data}
                    section={section}
                    sectionBody={fifthSection}
                    onChangeInputHandler={onChangeFifthSecHandler}
                />
            );
            break;
        case "Einzelabrechnung Teil2":
            body = (
                <Section
                    sectionMetaData={EINZELABRECHNUNGT2.data}
                    section={section}
                    sectionBody={sixthSection}
                    onChangeInputHandler={onChangeSixthSecHandler}
                />
            );
            break;
        case "Bewohner/Eigentümer":
            body = PERSON.data.map((p) => {
                return (
                    <Checkbox
                        id={p.id}
                        name={p.name}
                        checkboxHandler={(name: string, value: boolean) =>
                            checkboxHandler(name, value)
                        }
                    />
                );
            });
            break;
        case "Bewohner":
            body = (
                <Section
                    sectionMetaData={BEWOHNER.data}
                    section={section}
                    sectionBody={seventhSection}
                    onChangeInputHandler={onChangeSeventhSecHandler}
                />
            );
            break;
    }

    return (
        <StyledForm>
            {body}
            <CustomizedButton class={"Next"} type="submit" onClick={onSubmit}>
                Next
            </CustomizedButton>
        </StyledForm>
    );
});

export default Form;
