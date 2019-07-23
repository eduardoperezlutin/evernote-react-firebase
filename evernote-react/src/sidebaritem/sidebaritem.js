import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../helpers';

class SidebarItemComponent extends React.Component {

  render() {

    const { _note, _index, classes, selectedNoteIndex } = this.props;

    return (
      <div key={_index}>
        <ListItem
          className={classes.listItem}
          selected={this.selectedNoteIndex === _index}
          alignItems='flex-start'>
          
          <div 
            className={classes.textSection}
            onClick={() => this.selectNote(_note, _index)}>
              <ListItemText
                primary={_note.title}
                secondary={removeHTMLTags(_note.body.substring(0, 30)) + '...'}></ListItemText>
          </div>
        </ListItem>
      </div>
    );
  }

}

export default withStyles(styles)(SidebarItemComponent);