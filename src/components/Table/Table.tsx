import React, {useEffect} from "react";
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow, TableRowColumn,
} from "material-ui/Table";
import {TableCell, TableContainer} from '@material-ui/core';
import row from "./Row";

interface TableProps {
    data,
    header: any[],
    handleRemove?: (arg: any) => void,
    startEditing?: (arg: any) => void,
    editIdex?: any,
    handleChange?: (arg: React.FormEvent<{}>, arg1: any, arg2: any, arg3: any) => void,
    stopEditing?: () => void,
    style: any;
}


const CustomTable: React.FC<TableProps> = ({...props}) => {
    const [data, setData] = React.useState([]);
    const [editIdex, setEditedIdex] = React.useState(-1);
    React.useEffect( () => {
        setData(props.data);
    }, [props])


    const startEditing = (i: number) => {
        console.log("start")
        setEditedIdex(i);
    };

    const stopEditing = () => {
        setEditedIdex(-1);
    };

    const handleChange = (
        e: React.FormEvent<HTMLInputElement>,
        name: any,
        i: any
    ) => {
       props.handleChange(e, name, i, data)
    };
    return (
        <div style={...props.style}>
            <TableContainer style={{overflowX: 'auto', paddingLeft: '12px', width: '90vw'}}>
                <Table > 
                    <TableHeader >
                        <TableRow>
                            {props.header.map((x: { name: React.ReactNode }, i: any) => (
                                <TableHeaderColumn key={`thc-${i}`}>{x.name}</TableHeaderColumn>
                            ))}
                            <TableHeaderColumn/>
                            <TableHeaderColumn/>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        { Array.isArray(data ) ?  data.map((x, i) => row(x, i, props.header,  props.handleRemove,  startEditing, editIdex,  handleChange,  stopEditing)) : null}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};


export default CustomTable
