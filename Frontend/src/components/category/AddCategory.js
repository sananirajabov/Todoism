import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        backgroundColor: '#a6a6a6',
        marginLeft: theme.spacing.unit,
        paddingLeft: 1,
        marginRight: theme.spacing.unit,
    },
    addButton: {
        backgroundColor: '#404854',
        color: '#ffffff',
        margin: theme.spacing.unit,
        width: 110,

        '&:hover': {
            backgroundColor: '#708097'
        }
    },
    cancelButton: {
        backgroundColor: '#c0392b',
        color: '#ffffff',
        margin: theme.spacing.unit,
        width: 110,

        '&:hover': {
            backgroundColor: '#df4131'
        }
    },
});

class AddCategory extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <List>
                    <form
                        onSubmit={this.props.onSubmit}
                        className={classes.container}
                        noValidate
                        autoComplete="off">

                        <TextField
                            value={this.props.textFieldValue}
                            onChange={this.props.textFieldOnChange}
                            className={classes.textField}
                            margin="normal"
                            fullWidth={true}
                            error={this.props.error}
                        />
                    </form>
                </List>
                <List>
                    <Button
                        onClick={this.props.addOnClick}
                        variant="outlined"
                        className={classes.addButton}>
                        Add
                    </Button>
                    <Button
                        onClick={this.props.cancelOnClick}
                        variant="outlined"
                        className={classes.cancelButton}>
                        Cancel
                    </Button>
                </List>
            </React.Fragment>
        );
    }
}

AddCategory.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddCategory);