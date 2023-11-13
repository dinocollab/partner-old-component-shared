import { Close } from '@mui/icons-material'
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { Component } from 'react'
import * as SubCommon from 'component-shared/Components/SubComponent'
import * as SubLocal from "local-lib/SubComponents";
import { getErrorMessage } from 'component-shared/Components/Helper';
import { IContactInfo } from 'component-shared/Components/Models';
interface ContactInfoFormProps extends SubCommon.FormBase<IContactInfo> {
    onClose: () => void
}
export default class ContactInfoForm extends Component<ContactInfoFormProps> {
    renderEdit = () => {
        return this.props.Model ? <>
            <input name='Id' hidden defaultValue={this.props.Model.Id} />
        </> : <></>
    }
    render() {
        return (
            <Box sx={{ height: '100%', background: 'white' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={this.props.onClose}>
                        <Close />
                    </IconButton>
                </Box>
                <SubCommon.WrapFrom Id={this.props.IdForm} IsForm={this.props.IsForm} onSubmit={this.props.onSubmit}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: "500px" }}>
                            {this.renderEdit()}
                            <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                                <SubLocal.InputOutline
                                    MaxLength={250}
                                    Title="Name"
                                    maxRows={1}
                                    minRows={1}
                                    onBlur={() => this.props.onBlur && this.props.onBlur("Name")}
                                    {...getErrorMessage(this.props.MessageError, "Name")}
                                    inputProps={{
                                        multiline: false,
                                        name: "Name"
                                    }}
                                    defaultValue={this.props.Model?.Name}
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                                <SubLocal.InputOutline
                                    MaxLength={250}
                                    Title="Link"
                                    maxRows={1}
                                    minRows={1}
                                    onBlur={() => this.props.onBlur && this.props.onBlur("Link")}
                                    {...getErrorMessage(this.props.MessageError, "Link")}
                                    inputProps={{
                                        multiline: false,
                                        name: "Link",
                                    }}
                                    defaultValue={this.props.Model?.Link}
                                />
                            </FormControl>
                            <Box sx={{ m: 1, flex: 1, display: 'flex', justifyContent: 'flex-end' }} >
                                <Button variant='contained' type='submit' color={this.props.Model ? 'info' : 'success'}>
                                    {this.props.Model ? 'Update' : 'Create'}
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </SubCommon.WrapFrom>
            </Box>
        )
    }
}
