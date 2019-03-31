import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';

const styles = ({
    inline: {
        display: 'inline',
        fontSize: 17
    },
    fabUpdate: {
        width: 35,
        height: 35,
        minWidth: 35,
        minHeight: 35,
        marginLeft: 10,
        backgroundColor: '#2980b9',

        '&:hover': {
            backgroundColor: '#20537d'
        }
    },
    update: {
        color: '#ffffff'
    },
    fabDelete: {
        width: 35,
        height: 35,
        minWidth: 35,
        minHeight: 35,
        marginLeft: 10,
        backgroundColor: '#c0392b',

        '&:hover': {
            backgroundColor: '#832a21'
        }
    },
    delete: {
        color: '#ffffff'
    }
});

class Todo extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <ListItem key={this.props.key}>
                {/*To do status*/}
                <Checkbox
                    checked={this.props.status}
                    onChange={this.props.checkboxOnChange}
                />
                {/*To do text*/}
                <ListItemText
                    primary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                className={classes.inline}
                                color="textPrimary">
                                {this.props.text}
                            </Typography>
                        </React.Fragment>
                    }
                />
                <Fab
                    aria-label="Edit"
                    className={classes.fabUpdate}>

                    <Icon
                        onClick={this.props.editOnClick}
                        className={classes.update}
                        fontSize="small">
                        edit_icon
                    </Icon>
                </Fab>

                <Fab
                    aria-label="Delete"
                    className={classes.fabDelete}>

                    <DeleteIcon
                        key={this.props.key}
                        onClick={this.props.deleteOnClick}
                        className={classes.delete}
                        fontSize="small"/>
                </Fab>
            </ListItem>
        );
    }
}

Todo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Todo);