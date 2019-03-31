import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import {withStyles} from "@material-ui/core";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    item: {
        paddingTop: 4,
        paddingBottom: 4,
        color: 'rgba(255, 255, 255, 0.7)',
    },
    itemActionable: {
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
    },
    itemPrimary: {
        color: 'inherit',
        fontSize: theme.typography.fontSize,
    },
    updateDialog: {
        width: 500
    },
    fabUpdate: {
        width: 25,
        height: 25,
        minWidth: 25,
        minHeight: 25,
        marginLeft: 10,
        backgroundColor: '#282828',

        '&:hover': {
            backgroundColor: '#282828'
        }
    },
    update: {
        color: '#a6a6a6'
    },
    fabDelete: {
        width: 25,
        height: 25,
        minWidth: 25,
        minHeight: 25,
        marginLeft: 10,
        backgroundColor: '#282828',

        '&:hover': {
            backgroundColor: '#282828'
        }
    },
    delete: {
        color: '#a6a6a6'
    }
});

class Category extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <ListItem
                button
                key={this.props.key}
                className={classNames(
                    classes.item,
                    classes.itemActionable,
                )}
            >
                {/*Category name*/}
                <ListItemText
                    onClick={this.props.clickCategory}
                    classes={{
                        primary: classes.itemPrimary,
                    }}
                >
                    {this.props.name}
                </ListItemText>

            </ListItem>
        );
    }
}

Category.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Category);