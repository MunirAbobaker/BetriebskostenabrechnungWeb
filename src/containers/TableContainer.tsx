import * as React from "react";
import Table from "../components/Table/Table";
import {currencyFormatDE} from "../utils/currencyFormatDE";
import {convertArrayToArrOfObj} from "../utils/ConvertArrayToArrOfObj";
import DoughnutChart from "../components/DoughnutChart";
import {useEffect} from "react";
import SpanningTable, {ccyFormat} from "../components/Table/TableUi"; 
import Spinner from "../components/UI/Spinner"; 
import axios from 'axios';
import {convertToFloat} from "../utils/convertToFloat";
import {Einzelabrechnung, useUpdateTableMutation} from "../generated/graphql";
import Balkendiagram from "../components/UI/Balkendiagram";
import CustomizedButton from '../components/UI/CustomizedButton'
import { useLocation} from "react-router-dom";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { Link } from "react-router-dom";

export interface Data {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
} 


interface FetchedData {
    HeizkostenAbrechnungsdataArray?: any,
    AbrechnungsdataArray?: any;
    EinzelabrechnungsdataArray?: any;
    BewohnerBetribskostendata?: any;
    Nebenkostenvorrauszahlung: number;
    Grundsteuer: number;
    Rauchmelder: number;
    zuZahlendeKosten: number;
    wirdUeberwiesen: number;
    Betribskostenabrechnung: number;

}

interface TableContainerProps {
    fetchedData?: FetchedData;
    Aktion?: any;
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const TableContainer: React.FC<TableContainerProps> = ({...props}) => {
    const [Nebenkostenberechnung, setNebenkostenberechnung] = React.useState<any[]>([]);
    const [Heizkosten, setHeizkosten] = React.useState<any[]>([]);
    const [Abrechnung, setAbrechnung] = React.useState<any>(); 
    const [EinzelAbrechnung, setEinzelAbrechnung] = React.useState<any[]>([]);
    const [BewohnerBetriebskosten, setBewohnerBetriebskosten] = React.useState<any[]>([]);
    const [prediction, setPrediction] = React.useState<number>(-1);
    const [flag, setFlag ] = React.useState(true);
    const [, updateTable] = useUpdateTableMutation();
    let location = useLocation();
    const [AktionType, setAktionType] = React.useState("update");
    const [open, setOpen] = React.useState(false);
    let umlagekosten;
    useEffect(() => {
        initilaizeStatessFromProps(
            props.fetchedData.AbrechnungsdataArray,
            props.fetchedData.HeizkostenAbrechnungsdataArray,
            props.fetchedData.EinzelabrechnungsdataArray,
            props.fetchedData.BewohnerBetribskostendata,
            props.fetchedData.Nebenkostenvorrauszahlung,
            props.fetchedData.Grundsteuer,
            props.fetchedData.Rauchmelder,
            props.fetchedData.zuZahlendeKosten,
            props.fetchedData.wirdUeberwiesen,

            );
            setAktionType(props.Aktion); //Aktion
    }, [props.fetchedData]);

    const initilaizeStatessFromProps  = (
        AbrechnungProps?: any, 
        HeizkosenProps?:any, 
        EinzelabrechnungProps?: any,
        BewohnerBetriebskostenProps?: any,
        NebenkostenvorrauszahlungProp?: number,
        GrundsteuerProp?: number,
        RauchmelderProp?: number,
        zuZahlendeKostenProp?: number,
        wirdUeberwiesenProps?: number

        ) => {

        setHeizkosten(HeizkosenProps) 
        setAbrechnung(AbrechnungProps); 
        setEinzelAbrechnung(EinzelabrechnungProps);
        const copy = [];
        copy.push(BewohnerBetriebskostenProps)
        setBewohnerBetriebskosten(copy);
        const allKosten = [] // "Zwischensumme umlagfähige Kosten"
        umlagekosten = props.fetchedData.EinzelabrechnungsdataArray ? props.fetchedData.EinzelabrechnungsdataArray.find(item => item.Abrechnungsposition === "Summe Kosten") : 0;
        allKosten.push(
            {Position: "Nebenkostenvorrauszahlung", Betrag: NebenkostenvorrauszahlungProp},
            {Position: "Grundsteuer", Betrag: GrundsteuerProp},
            {Position: "Rauchmelder", Betrag: RauchmelderProp},
            {Position: "zuZahlendeKosten", Betrag: zuZahlendeKostenProp},
            {Position: "wirdUeberwiesen", Betrag: wirdUeberwiesenProps},
            {Position: "Betriebskosen", Betrag: umlagekosten.Kosten_Anteil},
        );
        setNebenkostenberechnung(allKosten)
    }
    const onClickHandler = async () => {
        const Heizkosten = EinzelAbrechnung.find(abrechnung => abrechnung.Abrechnungsposition === "Heizkosten/Wasser" );
        const Muellabfuhr = EinzelAbrechnung.find(abrechnung => abrechnung.Abrechnungsposition === "Müllabfuhr");
        const Versicherung = EinzelAbrechnung.find(abrechnung => abrechnung.Abrechnungsposition === "Versicherung-Gebäude" );
        try {
            const res = await axios.post("http://localhost:4000/api/wml/score", {
                    Heizkosten: Heizkosten.Kosten_Anteil * 2, 
                    Muellabfuhr: Muellabfuhr.Kosten_Anteil * 2,
                    Versicherung: Versicherung.Kosten_Anteil * 2
                },
                {withCredentials: true}
            );
            const data = res.data; 
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    var value = data[key];
                    console.log("here are pecdictions data", value)
                    setPrediction(value);
                    setFlag(false);
                }
            }
        } catch (err) {
            console.log(err)
        }

    };

    const handleRemove = (i: any) => {
        setHeizkosten(prevState => prevState.filter((row: any, j: number) => j !== i))

    };

    const onChangeHeizkostenHandler = (
        e: React.FormEvent<HTMLInputElement>,
        name: string,
        i: number,
    ) => {
        const {value} = e.currentTarget;
        setHeizkosten(prevState => prevState.map((row: any, j: any) =>
            j === i ? {...row, [name]: value} : row
        ));
    };

    const onChangeAbrechnungHandler = (
        e: React.FormEvent<HTMLInputElement>,
        name: string,
        i: number,
    ) => {
        const {value} = e.currentTarget;
        setAbrechnung(prevState => prevState.map((row: any, j: any) =>
            j === i ? {...row, [name]: value} : row
        ));

    };

    const onChangeEinzelAbrechnungHandler = (
        e: React.FormEvent<HTMLInputElement>,
        name: string,
        i: number,
    ) => {
        const {value} = e.currentTarget;
          setEinzelAbrechnung(prevState => prevState.map((row: any, j: any) =>
            j === i ? {...row, [name]: value} : row
        )); 
    };

    const onChangeBewohnerkostenHandler = (
        e: React.FormEvent<HTMLInputElement>,
        name: string,
        i: number,
    ) => {
        const {value} = e.currentTarget;
        setBewohnerBetriebskosten(prevState => prevState.map((row: any, j: any) =>
            j === i ? {...row, [name]: value} : row
        ));
    };

   

     const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    const onUpdateHanler = async (e: React.FormEvent) => {
      setAktionType("update");
      console.log(props.Aktion)
        e.preventDefault();
        let updatedHeizkosten = [];
            Heizkosten.forEach(el => {
                const kostenkonzept = el.Kostenkonzept.split(" ");
                if (kostenkonzept[0] !== "Gesamte") {
                    const input = {
                        Kostenkonzept: el.Kostenkonzept,
                        Verteilschluessel: convertToFloat(el.Verteilschluessel.toString()),
                        Kosten_pro_Einheit: convertToFloat(el.Kosten_pro_Einheit.toString()),
                    }
                    updatedHeizkosten.push(input);
                }
            });
          let updatedEinzelAbrechung = [];
           EinzelAbrechnung.map(abrechnung => {
               if(abrechnung.Abrechnungsposition === "Zwischensumme umlagfähige Kosten" ||
                  abrechnung.Abrechnungsposition === "Zwischensumme nicht umlagfähige Kosten" ||
                 abrechnung.Abrechnungsposition === "Summe Kosten" 
            ) {
                 }else{
                   const input = {
                    Abrechnungsposition: abrechnung.Abrechnungsposition,
                    verteilt_nach: abrechnung.verteilt_nach,
                    Gesamte_Einheiten: convertToFloat(abrechnung.Gesamte_Einheiten.toString()),
                    Einheit_Anteil: convertToFloat(abrechnung.Einheit_Anteil.toString()),
                    Gesamte_Kosten: convertToFloat(abrechnung.Gesamte_Kosten.toString()),
                    Kosten_Anteil:  convertToFloat(abrechnung.Kosten_Anteil.toString()),
               }
              delete input["typename"]
              updatedEinzelAbrechung.push(input)
            }
       });
         
        try{ 
        const response = await updateTable({
            Aktion: AktionType,
            AbrechnungsInput: {
                monatliche_Abschlag: parseFloat(Abrechnung[0].monatliche_Abschlag),
                Wohnflaeche: parseFloat(Abrechnung[0].Wohnflaeche), 
                Start_Data: Abrechnung[0].Start_Data,  
                End_Data: Abrechnung[0].End_Data,  
            },
            HeizkostenAbrechnungsInputArray: updatedHeizkosten,
            EinzelabrechnungsInputArray: updatedEinzelAbrechung,
            BewohnerBetribsInputdata:{Position:  "Position", Betrag: 0}
        });
        
        if (response.data?.updateTable.HeizkostenAbrechnungsdataArray) {
            setOpen(true);
            setAktionType("update");
            let updatedAbrechnung = [];
            response.data?.updateTable.AbrechnungsdataArray.forEach(abrechnung => {
                delete abrechnung["typename"];
                updatedAbrechnung.push(abrechnung);
            } )
           let r = response.data?.updateTable.AbrechnungsdataArray[0]; 
           initilaizeStatessFromProps(
                updatedAbrechnung,
                response.data?.updateTable.HeizkostenAbrechnungsdataArray,
                response.data?.updateTable.EinzelabrechnungsdataArray,
                response.data?.updateTable.BewohnerBetribskostendata,
                response.data?.updateTable.Nebenkostenvorrauszahlung,
                response.data?.updateTable.Grundsteuer,
                response.data?.updateTable.Rauchmelder,
                response.data?.updateTable.zuZahlendeKosten,
                response.data?.updateTable.wirdUeberwiesen,
                );
        } else {
            console.log("response error:", response)
            console.log(response.data?.updateTable.errors);
        }
        }catch(err) {
            console.log(err)
        }

    };

    const renderAbrechnung = () => { 
        const header = convertArrayToArrOfObj(props.fetchedData.AbrechnungsdataArray);
        return (
            <div style={{padding: '15px', margin: '10px'}}>
                <h2>Abrechnung für das Jahr    {new Date(props.fetchedData.AbrechnungsdataArray[0].Start_Data).getFullYear()}/ 
                  {new Date(props.fetchedData.AbrechnungsdataArray[0].End_Data).getFullYear()}</h2>
                <Table style={{width: '100%', marginBottom: '10px'}}
                       data={Abrechnung}
                       handleChange={onChangeAbrechnungHandler}
                       header={
                           header
                       }
                />
            </div>
        );
    };


    const renderHeizKosten = () => {
        const header = convertArrayToArrOfObj(Heizkosten);
        return (
            <div style={{padding: '15px', margin: '10px'}}>
                <h2>Heizkosten für das Jahr {new Date(props.fetchedData.AbrechnungsdataArray[0].Start_Data).getFullYear()}/
                 {new Date(props.fetchedData.AbrechnungsdataArray[0].End_Data).getFullYear()}</h2>
                <Table style={{width: '100%', marginBottom: '10px'}}
                       data={Heizkosten}
                       handleRemove={handleRemove}
                       handleChange={onChangeHeizkostenHandler}
                       header={
                           header
                       }
                />
            </div>
        );
    };


    const renderEinzelabrechnung = () => {
        EinzelAbrechnung.forEach((el) => {    
        });
        const header = convertArrayToArrOfObj(EinzelAbrechnung);
        return (
            <div style={{padding: '15px', margin: '10px'}}> 
                <h2>Einzelabrechnung für das Jahr {new Date(props.fetchedData.AbrechnungsdataArray[0].Start_Data).getFullYear()}/
                 {new Date(props.fetchedData.AbrechnungsdataArray[0].End_Data).getFullYear()}</h2>
                <Table style={{width: '100%', marginBottom: '10px'}}
                       data={EinzelAbrechnung}
                       handleChange={onChangeEinzelAbrechnungHandler}
                       header={
                           header
                       }
                />
            </div>
        );
    };

    
    const renderErgebnisse = () => {
             
            const umlagekosten = EinzelAbrechnung ? EinzelAbrechnung.find(item => item.Abrechnungsposition === "Summe Kosten") : 0;
            const Start = Abrechnung ? Abrechnung[0].Start_Data : 0;
            const End = Abrechnung ? Abrechnung[0].End_Data : 0;
            let months = Abrechnung ?  (new Date(End).getFullYear() - new Date(Start).getFullYear()) * 12 : 0;
             
              const bezahlt = Abrechnung ? months  * Abrechnung[0].monatliche_Abschlag : 0;
                const zSumme =  umlagekosten ? (umlagekosten.Kosten_Anteil +    props.fetchedData.Grundsteuer +
                          props.fetchedData.Rauchmelder): (props.fetchedData.Betribskostenabrechnung + props.fetchedData.Grundsteuer +
                          props.fetchedData.Rauchmelder);
              {/* props.fetchedData.Nebenkostenvorrauszahlung */}
      return (
           <>
            <div
                      style={{ padding: "20px", marginLeft: "5px", width: "100%" }}
                    >
                      <SpanningTable
                        Nebenkostenberechnung={Nebenkostenberechnung}
                        Nebenkostenvorrauszahlung={
                          bezahlt
                          
                        }
                        Grundsteuer={props.fetchedData.Grundsteuer}
                        Rauchmelder={props.fetchedData.Rauchmelder}
                        zuZahlendeKosten={props.fetchedData.zuZahlendeKosten}
                        wirdUeberwiesen={props.fetchedData.wirdUeberwiesen}
                        Betriebskosten={umlagekosten ? umlagekosten.Kosten_Anteil : props.fetchedData.Betribskostenabrechnung }
                      />
                    </div>
              
                    <div
                      style={{
                        position: "relative",
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                        marginTop: "10px",
                        width: "50%",
                        left: "30%",
                      }}
                    >
                  {/*   props.fetchedData.wirdUeberwiesen */}
                      <Balkendiagram
                        Zwischensumme={
                        zSumme
                        }
                        Nebenkostenvorrauszahlung={
                          bezahlt
                        }
                        Differenz={
                          zSumme -
                          bezahlt
                          }
                      />
                    </div>
                    {prediction > 0 ? (
                <h2>your prediction {ccyFormat(prediction)}</h2>
              ) : null}
              {!flag ? (
                <div
                  style={{ padding: "20px", marginLeft: "5px", width: "100%" }}
                >
                  <SpanningTable
                    Nebenkostenberechnung={Nebenkostenberechnung}
                    Nebenkostenvorrauszahlung={
                      bezahlt
                    }
                    Grundsteuer={props.fetchedData.Grundsteuer}
                    Rauchmelder={props.fetchedData.Rauchmelder}
                    zuZahlendeKosten={props.fetchedData.zuZahlendeKosten}
                    wirdUeberwiesen={props.fetchedData.wirdUeberwiesen}
                    Betriebskosten={prediction}
                    Datum={props.fetchedData.AbrechnungsdataArray[0].End_Data}
                  />
                </div>
              ) : null}
           </>
      );
  };


    const renderBewohnerBetriebskosten = () => { 
        return (
            <div style={{padding: '15px', margin: '10px'}}>
                <h2>Bewhonerbetriebskosten für das Jahr 2019</h2>
                <Table style={{width: '100%'}}
                       data={BewohnerBetriebskosten}
                       handleChange={onChangeBewohnerkostenHandler}
                       header={[
                           {
                               name: "Betrag",
                               prop: "Betrag",
                           }
                       ]}
                />
            </div>
        );
    };
    return (
      <div>
         <SideDrawer>
         <ul className={'PanelList'}   >
         <li className={'PanelListItem'}> 
                            <CustomizedButton 
                                type="submit"
                                onClick={onUpdateHanler}
                                >
                                   <Link  to={"/"}  >
                                      Home
                                   </Link>
                              
                                </CustomizedButton>
                            </li>

                            <li className={'PanelListItem'}> 
                            <CustomizedButton 
                                type="submit"
                                onClick={onUpdateHanler}
                                >
                                Update Table
                                </CustomizedButton>
                            </li>
                            {
                          
                           new Date(props.fetchedData.AbrechnungsdataArray[0].Start_Data).getFullYear() !== 
                           new Date(props.fetchedData.AbrechnungsdataArray[0].End_Data).getFullYear() ?

                            <li className={'PanelListItem'}> 
                            <CustomizedButton 
                                type="submit"
                                onClick={onClickHandler}
                            >
                            make Prediction
                            </CustomizedButton>
                            </li> : null
                           }
                    </ul>

         </SideDrawer >
         {
           open ? 
            <div style={{position:"fixed", top: '20px', left:"5px"}}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                 <Alert onClose={handleClose} severity="success">
                 Die Tablle ist erfolgreich geupdated!
                </Alert>
          </Snackbar> </div> : null 
         }
    
        {props.fetchedData ? (
          <div style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "80%",
                paddingLeft: "30%",
                marginTop: "20px",
              }}
            >
              <DoughnutChart
                data={[
                  props.fetchedData.Betribskostenabrechnung / 100,
                  props.fetchedData.Grundsteuer / 100,
                  props.fetchedData.Nebenkostenvorrauszahlung / 100,
                  (props.fetchedData.Nebenkostenvorrauszahlung +
                    props.fetchedData.Grundsteuer +
                    props.fetchedData.Rauchmelder) /
                    100,
                  (props.fetchedData.Betribskostenabrechnung +
                    props.fetchedData.Grundsteuer +
                    props.fetchedData.Rauchmelder -
                    props.fetchedData.Nebenkostenvorrauszahlung) /
                    100,
                ]}
                Betriebskosten={EinzelAbrechnung}
              />
            </div>
            {Abrechnung != null ? renderAbrechnung() : <Spinner />}
            {Heizkosten != null ? renderHeizKosten() : null}
            {EinzelAbrechnung != null ? renderEinzelabrechnung() : null}
            <div></div>
          
            <div style={{ marginBottom: "20px" }}>
            
                 {EinzelAbrechnung != null ?  renderErgebnisse(): null}  
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    );
};

export default TableContainer;

