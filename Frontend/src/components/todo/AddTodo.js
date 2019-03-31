import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: 55,
        marginRight: theme.spacing.unit,
    },
    addButton: {
        backgroundColor: '#404854',
        color: '#ffffff',
        margin: theme.spacing.unit,
        marginLeft: 65,

        '&:hover': {
            backgroundColor: '#343443'
        }
    },
    cancelButton: {
        backgroundColor: '#c0392b',
        color: '#ffffff',
        margin: theme.spacing.unit,

        '&:hover': {
            backgroundColor: '#832a21'
        }
    },
});

class AddTodo extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <ListItem>
                    <ListItemText
                        primary={
                            <form
                                onSubmit={this.props.onSubmit}
                                className={classes.container}
                                noValidate
                                autoComplete="off">

                                <TextField
                                    value={this.props.textFieldValue}
                                    onChange={this.props.textFieldOnChange}
                                    id="standard-name"
                                    className={classes.textField}
                                    margin="normal"
                                    fullWidth={true}
                                    error={this.props.error}
                                />
                            </form>
                        }
                    />
                </ListItem>
                {/*AddTodo Button*/}
                <Button
                    onClick={this.props.addOnClick}
                    variant="outlined"
                    className={classes.addButton}>
                    Add
                </Button>
                {/*Cancel button*/}
                <Button
                    onClick={this.props.cancelOnClick}
                    variant="outlined"
                    className={classes.cancelButton}>
                    Cancel
                </Button>
            </React.Fragment>
        );
    }
}

AddTodo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddTodo);