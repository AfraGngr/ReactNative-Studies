import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import { jobItem } from '../styles';

const SavedJobItem = (props) => {
  return (
      <TouchableOpacity
        style={jobItem.container}
        onPress={props.onSelect}
        onLongPress ={props.onRemove}
      >
          <Text style={jobItem.jobname}>{props.job.title}</Text>
          <Text>{props.job.type} / {props.job.location}</Text>
      </TouchableOpacity>
    );
};

export {SavedJobItem};