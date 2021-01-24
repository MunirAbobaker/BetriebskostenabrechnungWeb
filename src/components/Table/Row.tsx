import React from "react";
import {TableRow, TableRowColumn} from "material-ui/Table";
import {TextField} from "material-ui";
import CheckIcon from "material-ui/svg-icons/navigation/check";
import EditIcon from "material-ui/svg-icons/image/edit";


 const row = (
     x,
     i,
     header,
     handleRemove,
     startEditing,
     editIdx,
     handleChange,
     stopEditing

) => {
    const currentlyEditing = editIdx === i;
    return (
        <TableRow key={`tr-${i}`} selectable={false}>
            {header.map((y, k) => (
                <TableRowColumn key={`trc-${k}`} style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>
                    {currentlyEditing ? (
                        <TextField
                            name={y.prop}
                            onChange={e => handleChange(e, y.prop, i)}
                            value={ x[y.prop]}
                        />
                    ) : (
                       
                         x[y.prop] === 0 ? '' : x[y.prop] && y.prop==="Kosten_Anteil" ? x[y.prop].toFixed(2) : x[y.prop]
                   
                    )}
                   
                </TableRowColumn>
            ))}
            <TableRowColumn>
                {currentlyEditing ? (
                    <CheckIcon onClick={() => stopEditing()} />
                ) : (
                    <EditIcon onClick={() => startEditing(i)} />
                )}
            </TableRowColumn>
            <TableRowColumn>
               
            </TableRowColumn>
        </TableRow>
    );
};

export default row;
