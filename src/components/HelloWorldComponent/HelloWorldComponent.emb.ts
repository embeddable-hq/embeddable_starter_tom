import { EmbeddedComponentMeta, defineComponent } from '@embeddable.com/react';

import Component from './index';

export const meta : EmbeddedComponentMeta = {
  name: 'HelloWorldComponent',
  label: 'Hello World',
  inputs: [
    {
      name: 'title',
      type: 'string',
      label: 'Title',
      description: 'The title for the chart'
    },
    {
      name: 'body',
      type: 'string',
      label: 'Body',
      description: 'The text content'
    },
  ]
};

type Inputs = {
  title: string;
  body: string;
}

export default defineComponent<Inputs>(Component, meta, {
  props: (inputs) => {
    return {
      title: inputs.title,
      body: inputs.body
    };
  }
});