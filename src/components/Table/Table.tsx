import React from "react";
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from "material-ui/Table";
import EditIcon from 'material-ui/svg-icons/image/edit';
import CheckIcon from 'material-ui/svg-icons/navigation/check';
import TrashIcon from 'material-ui/svg-icons/action/delete';
import { TextField } from "material-ui";

const row = (
    x:  any ,
    i: any,
    header: any[],
    handleRemove: ((arg: any) => void),
    startEditing:  ((arg: any) => void),
    editIdex: any,
    handleChange: (arg: React.FormEvent<{}>, arg1: any, arg2: any) => void,
    stopEditing: (() => void)
) => {
    const currentlyEditing = editIdex === i;

    return(
        <TableRow key={`tr-${i}`} selectable={false}>
            {header.map((y, k) =>
                <TableRowColumn key={`trc-${k}`}>
                    { currentlyEditing ? <TextField
                        name={y.prop}
                        onChange={ e => handleChange(e, y.prop, i)}
                        value={x[y.prop]} /> : x[y.prop]}
                </TableRowColumn>
            )}
            <TableRowColumn>
                {currentlyEditing ? (
                    <CheckIcon onClick={() => stopEditing()} />
                ) : (
                    <EditIcon onClick={() => {
                        return startEditing(i)
                    }} />
                )}
            </TableRowColumn>
            <TableRowColumn>
                <TrashIcon onClick={() => handleRemove(i)}/>
            </TableRowColumn>
        </TableRow>
    )};

export default (
    {  data,
        header,
        handleRemove,
        startEditing,
        editIdex,
        handleChange,
        stopEditing
    }: any) =>
    <Table style={{width: '900px'}}>
        <TableHeader>
            <TableRow>
                {header.map((x: { name: React.ReactNode; }, i: any) =>
                    <TableHeaderColumn key={`thc-${i}`}>
                        {x.name}
                    </TableHeaderColumn>
                )}
                <TableHeaderColumn />
                <TableHeaderColumn />
            </TableRow>
        </TableHeader>
        <TableBody>
            {data.map((x: any , i: any) => row(x, i, header, handleRemove, startEditing, editIdex, handleChange, stopEditing ))}
        </TableBody>
    </Table>;
