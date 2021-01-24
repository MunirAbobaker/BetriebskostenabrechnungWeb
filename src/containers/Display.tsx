import * as React from "react";
import {useGetGesamteAbrechnungQuery} from "../generated/graphql";
import Spinner from '../components/UI/Spinner'
import TableContainer from "./TableContainer";
import {RouteComponentProps, useLocation} from "react-router-dom";

interface DisplayProps {
   data?: any;
   Aktion?:string;
   state?: RouteComponentProps; 
}

const Display: React.FC<DisplayProps> = ({...props}) => {
    console.log(props.Aktion)
    const [{data, fetching}] = useGetGesamteAbrechnungQuery();
    let location = useLocation();
    console.log("location", location)
    let body= null;
    let fetchedData = null;
    if (fetching) {
        body = <Spinner /> 
    } else if (!data?.getAllegemeinebrechnung) {
        body = <Spinner /> 
    } else {
        fetchedData =  data.getAllegemeinebrechnung;
        body=(<TableContainer  fetchedData={fetchedData} Aktion={location.state ? location.state :"update"}/>)
    }

    return (
        <>
            {body}
          
        </>
    );
};

export default Display;
