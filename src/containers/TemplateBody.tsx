import * as React from "react"; 
import Wrapper from './Cards/Card/Wrapper'
import {RouteComponentProps, useHistory} from "react-router-dom";
import { useGetAllUserAbrechnungenQuery, useSetAbrechnungIdMutation } from "../generated/graphql";

 interface TemplateBodyProps {
   data?: any[] ;
   RouteComponentProps?: RouteComponentProps;
} 

const TemplateBody: React.FC<TemplateBodyProps> =  ({...props})  => {
    const [, setAbrechnungsId] = useSetAbrechnungIdMutation();
     let history = useHistory();

    const onClickHandler = async (Abrechnung:any ) => {
        try{  
        const response = await setAbrechnungsId({AbrechnungsId: Abrechnung.AbrechnungsId});
        if(response.data?.setAbrechnungId) {
          console.log("abrechnung")
            history.push({
                pathname: '/display',
                state: "create"
                 /* {
                  Aktion:"create",
                } */
              });
        } else {
            console.log(response.data)
        }
        }catch(err) {
            console.log(err)
        }
      }
 

    return (
        < >
          {props.data.map((Abrechnung, index) => {
            return (
                <div style={{width: "500px"}}>
              <Wrapper>
                <div
                  key={"temp" + index}
                  onClick={() => onClickHandler(Abrechnung)}
                >
                  <h1>{index + 1}</h1>
                  <p> from {Abrechnung.Start_Data}</p>
                  <p> to {Abrechnung.End_Data} </p>
                </div>
              </Wrapper>
              </div>
            );
        })}
        </>
    );
};

export default TemplateBody;
