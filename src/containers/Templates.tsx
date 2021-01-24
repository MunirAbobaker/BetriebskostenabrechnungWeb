import * as React from "react"; 
import Spinner from '../components/UI/Spinner' 
import {RouteComponentProps} from "react-router-dom";
import { useGetAllUserAbrechnungenQuery } from "../generated/graphql";
import TemplateBody from './TemplateBody';

 interface TemplatesProps {
   Aktion?:string;
   data?: any ;
   RouteComponentProps?: RouteComponentProps;
} 

const Templates: React.FC<TemplatesProps> =  ({...props})  => {
     let HTMLBody = null;
      const [{data, fetching}] = useGetAllUserAbrechnungenQuery();

      if(fetching) {
        console.log(fetching) 
        return null;
    } else if (!data?.getAllUserAbrechnungen) { 
        console.log("no Data")
    //return null;
    } else {
      HTMLBody = data!.getAllUserAbrechnungen.AbrechnungsdataArray 
    } 

    return (
        <div className={"grid"}>
             {HTMLBody != null  ? <TemplateBody data={HTMLBody} /> : null} 
              
        </div>
    );
};

export default Templates;
 
