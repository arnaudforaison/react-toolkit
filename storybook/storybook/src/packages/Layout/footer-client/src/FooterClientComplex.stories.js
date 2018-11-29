import React from 'react';
import { action } from '@storybook/addon-actions';

import addToStorie from '@axa-fr/storybook-addons';
import {
  FooterClient,
  FooterClientItem,
  FooterClientList,
  SocialNetwork,
  LanguageSelection,
} from '@axa-fr/react-toolkit-layout-footer-client';

const readme = require('@axa-fr/react-toolkit-layout-footer-client/dist/README.md');

const stories = [];

const columns = [
  {
    title: 'Languages',
    links: [
      {
        text: 'Lorem',
        path: '/9',
      },
      {
        text: 'Young driver insurance',
        path: '/8',
      },
      {
        text: 'Home insurance',
        path: '/7',
      },
    ],
  },
  {
    title: 'Axa & You',
    links: [
      {
        text: 'Call us',
        path: '/6',
      },
      {
        text: 'Policy documents',
        path: '/5',
      },
      {
        text: 'Xtra by AXA',
        path: '/4',
      },
    ],
  },
  {
    title: 'Useful links',
    links: [
      {
        text: 'About us',
        path: '/3',
      },
      {
        text: 'Careers',
        path: '/2',
      },
      {
        text: 'Blog',
        path: '/1',
      },
    ],
  },
];

const languages = [
  {
    name: 'English',
    value: 'en',
  },
  {
    name: 'Chinese',
    value: 'cn',
  },
];

const currentLanguage = 'en';

const socialNetworkList = {
  facebook: '#',
  linkedin: '#',
  youtube: '#',
  instagram: '#',
  twitter: '#',
};

const onClick = e => {
  e.event.preventDefault();
  e.event = {};
  action('onClick')(e);
};

const ComponentLanguageSelection = () => (
  <LanguageSelection
    onClick={onClick}
    languages={languages}
    currentLanguage={currentLanguage}
  />
);

stories.push({
  desc: 'Complex',
  component: () => (
    <FooterClient
      bottomComponent={ComponentLanguageSelection()}
      copyright="Policy Privacy © 2016 AXA All Rights Reserved">
      {columns &&
        columns.map(column => (
          <FooterClientList title={column.title} key={column.title}>
            {column.links.map(link => (
              <FooterClientItem
                onClick={onClick}
                path={link.path}
                key={link.path}>
                {link.text}
              </FooterClientItem>
            ))}
          </FooterClientList>
        ))}
      <FooterClientList title="Follow AXA">
        <SocialNetwork onClick={onClick} list={socialNetworkList} />
      </FooterClientList>
    </FooterClient>
  ),
});

const storyData = {
  name: 'Layout.FooterClient',
  desc: readme,
  stories,
};

addToStorie(storyData, module);
