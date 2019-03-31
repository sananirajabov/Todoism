import React from 'react';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const styles = ({
    updateDialog: {
        width: 500
    },
});

class Modal extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <Dialog
                open={this.props.open}
            >
                <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                <DialogContent>
                    <TextField
                        value={this.props.textAreaValue}
                        onChange={this.props.textAreaOnChange}
                        autoFocus
                        margin="dense"
                        id="name"
                        className={classes.updateDialog}
                        error={this.props.error}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.saveOnClick} color="primary">
                        Save
                    </Button>
                    <Button onClick={this.props.cancelOnClick} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}


Modal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Modal);