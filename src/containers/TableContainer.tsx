import * as React from "react";
import Table from "../components/Table/Table";
import { useGetGesamteAbrechnungQuery } from "../generated/graphql";
import {  RouteComponentProps } from "react-router-dom";
import Spinner from '../components/UI/Spinner'

export interface Data {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

interface TableContainerState {
  data: Data[];
  editIdex?: number;
}

const TableContainer: React.FC<RouteComponentProps> = (...props) => {
  const [dataState, setData] = React.useState([]);
  const [editIdex, setEditedIdex] = React.useState(-1);
  const [fetchedData, setFetchedData] = React.useState({});

  const [{ data, fetching }] = useGetGesamteAbrechnungQuery();

  let body = null;
  let Heizkosten = null;
  // data is loading
  if (fetching) {
    console.log("still fetching", fetching);
  } else if (!data?.getAllegemeinebrechnung) {
    console.log("there is no data");
    return null;
  } else {
    Heizkosten = data.getAllegemeinebrechnung.HeizkostenAbrechnungsdataArray;
    console.log("you got some data", data.getAllegemeinebrechnung);
  }

  const handleRemove = (i: any) => {
    const copyData = [...dataState];
    copyData.filter((_k: any, j: any) => j !== i);
    setData(copyData);
  };

  const startEditing = (i: number) => {
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
    const { value } = e.currentTarget;
    const copyData = [...dataState];

    copyData.map((row: any, j: any) =>
      j === i ? { ...row, [name]: value } : row
    );
    setData(copyData);
  };

  const renderHeizKosten = () => {
    let head = [];
    Heizkosten.forEach((el) => {
      const item = {
        name: el.Kostenkonzept,
        props: el.Kostenkonzept,
      };
      head.push(item);
    });

    return (
      <Table style={{width: '20vw'}}
        handleRemove={handleRemove}
        startEditing={startEditing}
        editIdex={editIdex}
        stopEditing={stopEditing}
        handleChange={handleChange}
        data={Heizkosten}
        header={[
          {
            name: "Kostenkonzept",
            prop: "Kostenkonzept",
          },
          {
            name: "Verteilschluessel_Einheit",
            prop: "Verteilschluessel_Einheit",
          },
          {
            name: "Verteilschluessel",
            prop: "Verteilschluessel",
          },
          {
            name: "Kosten_pro_Einheit",
            prop: "Kosten_pro_Einheit",
          },
          {
            name: "Betrag_in_Euro",
            prop: "Betrag_in_Euro",
          },
          {
            name: "Gesamt_in_Euro",
            prop: "Gesamt_in_Euro",
          },
        ]}
      />
    );
  };

  return (
    <div style={{width: '100%'}}>
      {Heizkosten != null ? renderHeizKosten() : <Spinner />}

      {/*  <Box my={0}>
                        <Form
                            onSubmit={(submission: any) =>
                                this.setState({
                                    data: [...this.state.data, submission]
                                })}
                        />
                    </Box>*/}
      <div  >
      </div>
    </div>
  );
};

export default TableContainer;
