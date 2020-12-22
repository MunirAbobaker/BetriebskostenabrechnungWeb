import * as React from "react";
import {Route, RouteComponentProps} from "react-router-dom";
import DatePicker from "react-datepicker";
import {
    useCreateInvoiceMutation,
    useCreateHeizkostenabrechnungMutation,
    useCreateEinzelabrechnungMutation,
    useCreateBewohnerBetriebskostenMutation,
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

export interface SectionState {
    value: string;
    error: string;
}

const Display = () => (
    <Route path="/" render={(props) => <h1>hallo Display</h1>}/>
)

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
                const startDay = sDate.getDay();
                const startMonth = sDate.getMonth() + 1; // month starts with 0 (- _ -)
                const startYear = sDate.getFullYear();
                const startingDate = `${startYear}-${startMonth}-${startDay}`;
                console.log("s", startingDate);

                const eDate = new Date(endDate);
                const endDay = eDate.getDay() + 1;
                const endMonth = eDate.getMonth() + 1;
                const endYear = eDate.getFullYear();
                const endingDate = `${endYear}-${endMonth}-${endDay}`;
                console.log("e", endingDate);
                const monatliche_Abschlag: number = parseFloat(firstSection[0].value.replace(',', '.'));
                const Wohnflaeche: number = parseFloat(firstSection[1].value.replace(',', '.'));
                response = await createAbrechnung({
                    monatliche_Abschlag,
                    Wohnflaeche,
                    Start_Data: startingDate,
                    End_Data: endingDate,
                });

                if (response.data?.createAbrechnung.Abrechnungsdata) {
                    console.log(response.data.createAbrechnung.Abrechnungsdata);
                    setSection("Heizkosten");
                } else {
                    console.log("errors");
                    console.log(response.data?.createAbrechnung.errors);
                }
                break;
            case "Heizkosten":
                response = await createHeizkosten({
                    options: [
                        {
                            Kostenkonzept: "Heizungsgrundkosten",
                            Verteilschluessel: parseFloat(firstSection[1].value.replace(',', '.')),
                            Kosten_pro_Einheit: parseFloat(secondSection[0].value.replace(',', '.')),
                        },
                        {
                            Kostenkonzept: "Verbrauchgrundkosten",
                            Verteilschluessel: parseFloat(secondSection[1].value.replace(',', '.')),
                            Kosten_pro_Einheit: parseFloat(secondSection[2].value.replace(',', '.')),
                        },
                    ],
                });
                if (response.data?.createHeizkosten.Abrechnungsdata) {
                    setSection("Wasser");
                } else {
                    console.log("errors");
                    console.log(response.data?.createHeizkosten.errors);
                }
                break;
            case "Wasser":
                const WarmwasserResponse = await createHeizkosten({
                    options: [
                        {
                            Kostenkonzept: "Heizungsgrundkosten",
                            Verteilschluessel: parseFloat(firstSection[1].value.replace(',', '.')),
                            Kosten_pro_Einheit: parseFloat(thirdSection[0].value.replace(',', '.')),
                        },
                        {
                            Kostenkonzept: "Verbrauchgrundkosten",
                            Verteilschluessel: parseFloat(thirdSection[2].value.replace(',', '.')),
                            Kosten_pro_Einheit: parseFloat(thirdSection[1].value.replace(',', '.')),
                        },
                    ],
                });
                if (WarmwasserResponse.data?.createHeizkosten.Abrechnungsdata) {
                    console.log(WarmwasserResponse.data?.createHeizkosten);
                    setSection("Warmwasser/Abwasser");
                } else {
                    console.log("errors");
                    console.log(WarmwasserResponse.data?.createHeizkosten.errors);
                }
                break;
            case "Warmwasser/Abwasser":
                const AbwasserResponse = await createHeizkosten({
                    options: [
                        {
                            Kostenkonzept: "Heizungsgrundkosten",
                            Verteilschluessel: parseFloat(forthSection[0].value.replace(',', '.')),
                            Kosten_pro_Einheit: parseFloat(forthSection[1].value.replace(',', '.')),
                        },
                        {
                            Kostenkonzept: "Verbrauchgrundkosten",
                            Verteilschluessel: parseFloat(forthSection[0].value.replace(',', '.')),
                            Kosten_pro_Einheit: parseFloat(forthSection[2].value.replace(',', '.')),
                        },
                    ],
                });
                if (AbwasserResponse.data?.createHeizkosten.Abrechnungsdata) {
                    console.log(AbwasserResponse.data?.createHeizkosten);
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
                            Gesamte_Einheiten: parseFloat(fifthSection[0].value.replace(',', '.')), //13
                            Einheit_Anteil: 0, // rechnung in B.E -> heizkosten tabel
                            Gesamte_Kosten: parseFloat(fifthSection[0].value.replace(',', '.')),
                            Kosten_Anteil: 0, // rechnung in B.E -> heizkosten tabel
                            Nichtumlagekosten: 0,
                            Umlagekosten: 0, // circle with pen 892
                        },
                        {
                            Abrechnungsposition: "Hausreinigung",
                            verteilt_nach: "Wohnfläche",
                            Gesamte_Einheiten: parseFloat(fifthSection[1].value.replace(',', '.')), //14
                            Einheit_Anteil: parseFloat(firstSection[1].value.replace(',', '.')),
                            Gesamte_Kosten: parseFloat(fifthSection[2].value.replace(',', '.')), //15
                            Kosten_Anteil: 0, // rechnung in B.E
                            Nichtumlagekosten: 0, // 624,26
                            Umlagekosten: 0,
                        },
                        {
                            Abrechnungsposition: "Fahrstuhl",
                            verteilt_nach: "Wohnfläche",
                            Gesamte_Einheiten: parseFloat(fifthSection[1].value.replace(',', '.')),
                            Einheit_Anteil: parseFloat(firstSection[1].value.replace(',', '.')),
                            Gesamte_Kosten: parseFloat(fifthSection[3].value.replace(',', '.')), //16
                            Kosten_Anteil: 0, // rechnung in B.E
                            Nichtumlagekosten: 0,
                            Umlagekosten: 0,
                        },
                        {
                            Abrechnungsposition: "Strom",
                            verteilt_nach: "Wohnfläche",
                            Gesamte_Einheiten: parseFloat(fifthSection[1].value.replace(',', '.')),
                            Einheit_Anteil: parseFloat(firstSection[1].value.replace(',', '.')),
                            Gesamte_Kosten: parseFloat(fifthSection[4].value), //17
                            Kosten_Anteil: 0, // rechnung in B.E
                            Nichtumlagekosten: 0,
                            Umlagekosten: 0,
                        },
                        {
                            Abrechnungsposition: "Müllabfuhr",
                            verteilt_nach: "Wohnfläche",
                            Gesamte_Einheiten: parseFloat(fifthSection[1].value.replace(',', '.')),
                            Einheit_Anteil: parseFloat(firstSection[1].value.replace(',', '.')),
                            Gesamte_Kosten: parseFloat(fifthSection[5].value.replace(',', '.')), //18
                            Kosten_Anteil: 0, // rechnung in B.E
                            Nichtumlagekosten: 0,
                            Umlagekosten: 0,
                        },
                        {
                            Abrechnungsposition: "Versicherungs-gebäude",
                            verteilt_nach: "Wohnfläche",
                            Gesamte_Einheiten: parseFloat(fifthSection[1].value.replace(',', '.')),
                            Einheit_Anteil: parseFloat(firstSection[1].value.replace(',', '.')),
                            Gesamte_Kosten: parseFloat(fifthSection[6].value.replace(',', '.')), //19
                            Kosten_Anteil: 0, // rechnung in B.E
                            Nichtumlagekosten: 0,
                            Umlagekosten: 0,
                        },
                        {
                            Abrechnungsposition: "Niederschlagwasser",
                            verteilt_nach: "Eigentumsanteil",
                            Gesamte_Einheiten: parseFloat(sixthSection[0].value.replace(',', '.')), // 20
                            Einheit_Anteil: parseFloat(sixthSection[1].value.replace(',', '.')), // 21
                            Gesamte_Kosten: parseFloat(fifthSection[7].value.replace(',', '.')), //19
                            Kosten_Anteil: 0, // rechnung in B.E
                            Nichtumlagekosten: 0,
                            Umlagekosten: 0,
                        },
                        {
                            Abrechnungsposition: "Bankgebühren",
                            verteilt_nach: "Eigentumsanteil",
                            Gesamte_Einheiten: parseFloat(sixthSection[0].value.replace(',', '.')), // 20
                            Einheit_Anteil: parseFloat(sixthSection[1].value.replace(',', '.')), // 21
                            Gesamte_Kosten: parseFloat(sixthSection[4].value.replace(',', '.')), //25
                            Kosten_Anteil: 0, // rechnung in B.E
                            Nichtumlagekosten: 0,
                            Umlagekosten: 0,
                        },
                        {
                            Abrechnungsposition: "Verwalter",
                            verteilt_nach: "Einheiten",
                            Gesamte_Einheiten: parseFloat(sixthSection[2].value.replace(',', '.')), // 22
                            Einheit_Anteil: parseFloat(sixthSection[3].value.replace(',', '.')), // 23
                            Gesamte_Kosten: parseFloat(sixthSection[5].value.replace(',', '.')), //26
                            Kosten_Anteil: 0, // rechnung in B.E
                            Nichtumlagekosten: 0,
                            Umlagekosten: 0,
                        },
                        {
                            Abrechnungsposition: "Instandhaltung",
                            verteilt_nach: "Eigentumsanteil",
                            Gesamte_Einheiten: parseFloat(sixthSection[0].value.replace(',', '.')), // 20
                            Einheit_Anteil: parseFloat(sixthSection[1].value.replace(',', '.')), // 21
                            Gesamte_Kosten: parseFloat(sixthSection[6].value.replace(',', '.')), //26
                            Kosten_Anteil: 0, // rechnung in B.E
                            Nichtumlagekosten: 0,
                            Umlagekosten: 0,
                        },
                    ],
                });
                console.log(response.data!);
                if (response.data?.createEinzelabrechnung.Einzelabrechnungsdata) {
                    setSection("Bewohner/Eigentümer");
                } else {
                    console.log("errors");
                    console.log(response.data?.createEinzelabrechnung.errors);
                }

                break;
            case "Bewohner/Eigentümer":
                if (checked === true) {
                    setSection("Bewohner");
                } else {
                }
                break;
            case "Bewohner":

                response = await createBewohnerBetriebskosten({
                    Position: seventhSection[0].value,
                    Betrag: parseFloat(seventhSection[1].value)
                });
                if (response.data?.createBewohnerBetriebskosten) {
                    console.log(response.data?.createBewohnerBetriebskosten.BewohnerBetribskostendata);
                    props.history.push("/display");
                } else {
                    console.log("errors");
                    console.log(response.data?.createBewohnerBetriebskosten.errors);
                }
                break;
            case "gesamte Abrechnung":
            
                break;
        }
    };

    const onChangeHandler = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = {value: e.target.value, error: ""};
        let newArr = [...firstSection];
        newArr[index] = newValue;
        console.log(newArr);
        setFirstSection(newArr);
    };

    const onChangeSecondSecHandler = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = {value: e.target.value, error: ""};
        let newArr = [...secondSection];
        newArr[index] = newValue;
        console.log(newArr);
        setSecondSection(newArr);
    };

    const onChangeThirdSecHandler = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = {value: e.target.value, error: ""};
        let newArr = [...thirdSection];
        newArr[index] = newValue;
        console.log(newArr);
        setThirdSection(newArr);
    };

    const onChangeForthSecHandler = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = {value: e.target.value, error: ""};
        let newArr = [...forthSection];
        newArr[index] = newValue;
        console.log(newArr);
        setforthSection(newArr);
    };

    const onChangeFithSecHandler = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = {value: e.target.value, error: ""};
        let newArr = [...fifthSection];
        newArr[index] = newValue;
        console.log(newArr);
        setfifthSection(newArr);
    };

    const onChangeSixthSecHandler = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = {value: e.target.value, error: ""};
        let newArr = [...sixthSection];
        newArr[index] = newValue;
        console.log(newArr);
        setSixthSection(newArr);
    };

    const checkboxHandler = (name: string, value: boolean) => {
        setChecked(value);
        console.log(name, value);
    };
    const onChangeSeventhSecHandler = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = {value: e.target.value, error: ""};
        let newArr = [...seventhSection];
        newArr[index] = newValue;
        console.log(newArr);
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
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                onChangeHandler(index, e)
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
                    onChangeInputHandler={onChangeFithSecHandler}
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

/* setTimespan(prevState => (
            {...prevState, value: newValue, }
        )); */
