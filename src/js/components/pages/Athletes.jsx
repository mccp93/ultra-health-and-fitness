import React from 'react';
import DocumentTitle from 'react-document-title';

import AthletePanel from '../common/AthletePanel';

import '../../../styles/GymGroup.scss';

const athletes = [
  {
    name: 'John Doe',
    sport: 'Strongman',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non vestibulum justo. Nam imperdiet elementum diam et egestas. 
      Vivamus consequat nulla eu malesuada mattis. Nam et enim sed urna elementum ornare. Ut et convallis ante. Nullam eros ipsum, 
      scelerisque eget purus vel, feugiat suscipit enim. Mauris ultrices leo vitae ipsum feugiat, aliquet convallis nisl fermentum. 
      Sed id tempor nulla, eget hendrerit ligula. Cras elementum leo id ante faucibus, at rhoncus tellus mollis. Nunc hendrerit posuere metus.
       Phasellus in eleifend elit. `,
    workout: [['Squats', '3x5'], ['Deadlifts', '3x5'], ['Press', '3x5'], ['Weighted Dips', '3x5'], ['Shrugs', '3x5']],
    image: '/public/img/athletes/strongman.png',
  },
  {
    name: 'Matt Smith',
    sport: 'BMX Rider',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non vestibulum justo. Nam imperdiet elementum diam et egestas. 
      Vivamus consequat nulla eu malesuada mattis. Nam et enim sed urna elementum ornare. Ut et convallis ante. Nullam eros ipsum, 
      scelerisque eget purus vel, feugiat suscipit enim. Mauris ultrices leo vitae ipsum feugiat, aliquet convallis nisl fermentum. 
      Sed id tempor nulla, eget hendrerit ligula. Cras elementum leo id ante faucibus, at rhoncus tellus mollis. Nunc hendrerit posuere metus.
       Phasellus in eleifend elit. `,
    workout: [
      ['Bench Press', '3x12'],
      ['Hammer Curls', '3x12'],
      ['Goblet Squats', '3x8'],
      ['Weighted Pull Ups', '3x5'],
      ['Reverse Curls', '3x8'],
    ],
    image: '/public/img/athletes/bmx.png',
  },
  {
    name: 'Sarah Jones',
    sport: 'Olympic lifter',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non vestibulum justo. Nam imperdiet elementum diam et egestas. 
      Vivamus consequat nulla eu malesuada mattis. Nam et enim sed urna elementum ornare. Ut et convallis ante. Nullam eros ipsum, 
      scelerisque eget purus vel, feugiat suscipit enim. Mauris ultrices leo vitae ipsum feugiat, aliquet convallis nisl fermentum. 
      Sed id tempor nulla, eget hendrerit ligula. Cras elementum leo id ante faucibus, at rhoncus tellus mollis. Nunc hendrerit posuere metus.
       Phasellus in eleifend elit`,
    workout: [
      ['Power Cleans', '3x12'],
      ['Clean & Jerk', '3x3'],
      ['Shoulder Press', '3x5'],
      ['Front Squat', '3x5'],
      ['Overhead Squat', '3x5'],
    ],
    image: '/public/img/athletes/weightlifter.png',
  },
  {
    name: 'Jane McDonald',
    sport: 'Boxing',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non vestibulum justo. Nam imperdiet elementum diam et egestas. 
      Vivamus consequat nulla eu malesuada mattis. Nam et enim sed urna elementum ornare. Ut et convallis ante. Nullam eros ipsum, 
      scelerisque eget purus vel, feugiat suscipit enim. Mauris ultrices leo vitae ipsum feugiat, aliquet convallis nisl fermentum. 
      Sed id tempor nulla, eget hendrerit ligula. Cras elementum leo id ante faucibus, at rhoncus tellus mollis. Nunc hendrerit posuere metus.
       Phasellus in eleifend elit. `,
    workout: [
      ['Tricep Pushdowns', '3x12'],
      ['Bicep Curls', '3x12'],
      ['Split Squats', '3x12'],
      ['Pulldowns', '3x12'],
      ['Shrugs', '3x5'],
    ],
    image: '/public/img/athletes/boxing.png',
  },
  {
    name: 'Ruari Adams',
    sport: 'Martial Arts',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non vestibulum justo. Nam imperdiet elementum diam et egestas. 
      Vivamus consequat nulla eu malesuada mattis. Nam et enim sed urna elementum ornare. Ut et convallis ante. Nullam eros ipsum, 
      scelerisque eget purus vel, feugiat suscipit enim. Mauris ultrices leo vitae ipsum feugiat, aliquet convallis nisl fermentum. 
      Sed id tempor nulla, eget hendrerit ligula. Cras elementum leo id ante faucibus, at rhoncus tellus mollis. Nunc hendrerit posuere metus.
       Phasellus in eleifend elit. `,
    workout: [
      ['Front Squat', '3x12'],
      ['Deadlift', '3x12'],
      ['Power Cleans', '3x8'],
      ['Weighted Pull Ups', '3x5'],
      ['Dragonflies', '3x8'],
    ],
    image: '/public/img/athletes/mma.png',
  },
  {
    name: 'Aidan Magee',
    sport: 'Running',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non vestibulum justo. Nam imperdiet elementum diam et egestas. 
      Vivamus consequat nulla eu malesuada mattis. Nam et enim sed urna elementum ornare. Ut et convallis ante. Nullam eros ipsum, 
      scelerisque eget purus vel, feugiat suscipit enim. Mauris ultrices leo vitae ipsum feugiat, aliquet convallis nisl fermentum. 
      Sed id tempor nulla, eget hendrerit ligula. Cras elementum leo id ante faucibus, at rhoncus tellus mollis. Nunc hendrerit posuere metus.
       Phasellus in eleifend elit`,
    workout: [
      ['Hip Thrusts', '3x12'],
      ['Overhead Squat', '3x5'],
      ['Shoulder Press', '3x5'],
      ['Glute Bridge', '3x12'],
      ['Platform Deadlift', '3x5'],
    ],
    image: '/public/img/athletes/running.png',
  },
];

const Athletes = () => (
  <DocumentTitle title="Athletes - Ultra Health And Fitness">
    <div className="group-container">
      <div className="group-header-wrapper">
        <img className="page-banner" src="/public/img/athletes/athletes-banner.png" alt="Athletes banner" />
        <div className="group-header-text"> ATHLETES </div>
      </div>

      <AthletePanel athletes={athletes} size={3} />
    </div>
  </DocumentTitle>
);

export default Athletes;
