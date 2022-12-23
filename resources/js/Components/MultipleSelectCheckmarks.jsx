import React from 'react';
import {Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select} from "@mui/material";
import * as PropTypes from "prop-types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default class MultipleSelectCheckmarks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.values,
            onChange: this.props.onChange
        }
    }
    render() {
        const updateTitle = (event) => {
            const {target: {value}} = event;
            this.setState({
                name: typeof value === 'string' ? value.split(',') : value
            });
            this.state.onChange(event)
        };

        return (
            <FormControl sx={{minWidth: 1}} className="bg-content flex flex-row justify-start mb-2 ">
                <InputLabel id="skills-box">Skills</InputLabel>
                <Select
                    labelId="skills-box"
                    name={this.props.name}
                    required
                    multiple
                    value={this.state.name}
                    onChange={updateTitle}
                    input={<OutlinedInput label="Tag"/>}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {
                        this.props.data.map((i) => {
                            return (
                                <MenuItem key={i['id']} value={i['id']}>
                                    <Checkbox checked={this.state.name.indexOf(i['id']) > -1}/>
                                    <ListItemText primary={i['name']}/>
                                </MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        );
    }
}

MultipleSelectCheckmarks.propTypes = {
    data: PropTypes.any,
    required: PropTypes.bool,
    label: PropTypes.any,
    values: PropTypes.arrayOf(PropTypes.any)
}

MultipleSelectCheckmarks.defaultProps = {required: false, values: []}
