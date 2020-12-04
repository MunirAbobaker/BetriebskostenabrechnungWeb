import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Table from "../components/Table/Table";
import { Box, Container } from "@material-ui/core";


export interface Data {
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
}

interface TableContainerState {
    data: Data[];
    editIdex?: number
}

class TableContainer extends Component<{}, TableContainerState> {
    state = {
        data: [],
        editIdex: -1
    };

    constructor(props: any) {
        super(props);
        this.handleChange.bind(this);
        this.startEditing.bind(this);
    }

    handleRemove = (i: any) => {
        this.setState(state => ({
            data: state.data.filter((_k: any, j: any) => j !==i )
        }));
    }

    startEditing = (i: number) => {
        this.setState({editIdex: i});

    }

    stopEditing = () => {
        this.setState({editIdex: -1});
    }

    handleChange = (e: React.FormEvent<HTMLInputElement> , name: any, i: any) => {
        const {value}  = e.currentTarget;
        this.setState(state => ({
            data: state.data.map(
                (row: any, j: any) => (j === i ? { ...row, [name]: value } : row)
            )
        }));
    };
    render() {
        return (

            < MuiThemeProvider>
                <Container maxWidth="lg">
                  {/*  <Box my={0}>
                        <Form
                            onSubmit={(submission: any) =>
                                this.setState({
                                    data: [...this.state.data, submission]
                                })}
                        />
                    </Box>*/}
                    <Box my={10}>
                        <Table
                            handleRemove={this.handleRemove}
                            startEditing={this.startEditing}
                            editIdex={this.state.editIdex}
                            stopEditing={this.stopEditing}
                            handleChange={this.handleChange}
                            data={this.state.data}
                            header={[
                                {
                                    name: "firstName",
                                    prop: "firstName"
                                },
                                {
                                    name: "lastName",
                                    prop: "lastName"
                                },
                                {
                                    name: "username",
                                    prop: "username"
                                },
                                {
                                    name: "email",
                                    prop: "email"
                                }
                            ]}
                        />
                    </Box>
                </Container>

            </MuiThemeProvider>
        );
    }
}

export default TableContainer;
