import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import currencyFormatDE from "../../../utils/currencyFormatDE";

const TAX_RATE = 0.07;

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export function ccyFormat(num: number) {
    return `${num.toFixed(2)}`;
}


function createRow(desc: string, Betrag: number) {
    return {desc, unit: "€", Betrag};
}
export function createZwischensumme(Betriebskosten: number, Grundsteuer: number,Rauchmelder: number ){
    return  ( Betriebskosten +   Grundsteuer +  Rauchmelder)
}

export const calculateWirdUeberwiesen = (Betriebskosten:  number, Grundsteuer: number, 
    Rauchmelder: number, Nebenkostenvorrauszahlung: number) => {
        const Ergebnisse = ( Betriebskosten +   Grundsteuer +  Rauchmelder -  Nebenkostenvorrauszahlung) ;
    return Ergebnisse.toFixed(2)
}

interface Row {
    Beschreibung: string;
    Position: string;
    unit: number;
    Betrag: number;
}

const rows = [
    createRow('Betriebskostenabrechnung der Hausverwaltung', 55),
    createRow('Grundsteuer', 45.99),
    createRow('Rauchmelder', 17.99),
];


interface SpanningTableProps {
    Nebenkostenberechnung: any[],
    Nebenkostenvorrauszahlung?: any,
    Grundsteuer?: any,
    Rauchmelder?: any,
    zuZahlendeKosten?: any,
    wirdUeberwiesen?: any;
    Betriebskosten: number;
    Datum?: any;
}
const SpanningTable: React.FC<SpanningTableProps> = ({...props}) => {
    const classes = useStyles();


  const  renderRows = () => {
      let tempRows = [];
      let r;
      // @ts-ignore
      r = createRow('Betriebskostenabrechnung der Hausverwaltung', props.Betriebskosten.toFixed(2));
      tempRows.push(r);
      r = createRow('Grundsteuer', props.Grundsteuer.toFixed(2)),
          tempRows.push(r);
      r = createRow('Rauchmelder', props.Rauchmelder),
          tempRows.push(r);
      return tempRows.map((row) => (
          <TableRow key={row.position}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{"€"}</TableCell>
              <TableCell align="right">
                  { row.Betrag}

              </TableCell>
          </TableRow>
      ));
    }
    const getZwischensumme = () => {
        const Ergebnisse =    props.Betriebskosten +    props.Grundsteuer +   props.Rauchmelder;
        return Ergebnisse.toFixed(2)
    }
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                    <TableRow key="Nebenkosten">
                        <TableCell align="center" colSpan={3}>
                            Nebenkosten
                        </TableCell>
                        <TableCell align="right">{new Date(props.Datum).getFullYear()|| ''}</TableCell>
                    </TableRow>
                    <TableRow key="Beschreibung">
                        <TableCell>Beschreibung</TableCell>
                        <TableCell align="right">Unit</TableCell>
                        <TableCell align="right">Betrag</TableCell>
                        <TableCell align="right">Summe</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.Nebenkostenberechnung != null ? renderRows(): null}
                    <TableRow  key="2">
                        <TableCell rowSpan={3}/>
                        <TableCell colSpan={2}>Zwischensumme</TableCell>
                        <TableCell align="right">{ getZwischensumme()}</TableCell>
                    </TableRow>
                    <TableRow  key="3">
                    </TableRow>
                    <TableRow  key="4">
                        <TableCell colSpan={2}>Nebenskostenvorauszahlung</TableCell>
                        <TableCell align="right">{`- ${props.Nebenkostenvorrauszahlung.toFixed(2)}`}</TableCell>
                    </TableRow>
                    <TableRow  key="5">
                        <TableCell colSpan={2}>wird überwiesen</TableCell>
                        <TableCell align="right">{''}</TableCell>
                      <TableCell align="right"> {calculateWirdUeberwiesen( props.Betriebskosten ,  props.Grundsteuer, props.Rauchmelder, props.Nebenkostenvorrauszahlung)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default SpanningTable;
