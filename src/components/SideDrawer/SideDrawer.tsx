import * as React from "react";
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors'; 
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'; 
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
 

interface SideDrawerProps { 
    onUpdateTableHandler?:(e: React.FormEvent) => Promise<void>
    onClickHandler?:() => void 
    data?: any
}

const useStyles = makeStyles((theme: Theme) =>
        createStyles({
                root: {
                display: 'flex',
                '& > *': {
                margin: theme.spacing(1),
                },
                },
                orange: {
                color: theme.palette.getContrastText(deepOrange[500]),
                backgroundColor: deepOrange[500],
                },
                purple: {
                color: theme.palette.getContrastText(deepPurple[500]),
                backgroundColor: deepPurple[500],
                },
        }),
);

const SideDrawer: React.FC<SideDrawerProps> = (props) => {
    
    const [open, setOpen] = React.useState(false);

    const classes = useStyles();

    const onHandleDrawerOpen = () => {
        setOpen(true);
    };

    const onHandleDrawerClose = () => {
        console.log("hallo")
        setOpen(false);
    };
  return ( 
     <>                
    <div className={open ?'Panel Open': 'Panel Close'} > 
               
        <div>
            <div style={{cursor: 'pointer'}} onClick ={ onHandleDrawerClose}>
              <ChevronLeftIcon />
            </div>    
        
        </div>
        <br/>
        <div className={'AvatarStyle'}   >
            {props.data  ? <Avatar className={classes.orange}>{props.data.me.username.charAt(0)}</Avatar> : null}
        </div> 
        <br />
        <div>
               {props.children}
               
            </div>
     </div>  
            {!open ? 
                        <div 
                          style={{position: 'fixed',
                                top: '15px',
                                left: '4px',
                                cursor: 'pointer',
                                }}
                        
                        onClick={onHandleDrawerOpen}>
                           <img
                                className={"images"}
                                style={{width: '70px', height:'70px',  borderRadius: '50%'}}
                                alt={"settings"}
                                src={
                                window.location.origin + "/assets/settings2.png"
                                }
                            />
            
                         </div> : null
                        
                         } 
     </>    
                        
        )
}

export default SideDrawer;
