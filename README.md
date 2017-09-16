![Build Status](https://codeship.com/projects/fc7d8080-530d-0135-099b-129b825f4ead/status?branch=master)

# README
This repository contains the source code for the web application Ldyan (lid-ee-uhn).

## About

Ldyan is a collaborative music white-boarding app for communicating song structures without musical notation or recorded audio. Users can create songs, and add structure blocks to build out the songs. The blocks can also be configured to playback in real time, providing visual cues to the song structure.

## Demo

http://ldyan.herokuapp.com

#### Drag & Drop functionality
![](/images/Ldyan_demo_drag.gif)

#### Advanced stateful react forms
![](/images/Ldyan_demo_form.gif)

#### Dynamic virtual playback
![](/images/Ldyan_demo_playback.gif)

## Technology

The front end is built completely with React.js and utilizes React Router for a clean single page layout. React Sortable HOC is used for the interactive drag and drop of the song blocks.  Styling is primarily SASS with Foundation for responsive grid elements.

### Stack
* PostgreSQL
* Ruby, 2.4.1
* Rails, 5.1.2
* React, 15.6.1
* Foundation, 5.4.5
* Node, 7.9.0

### Libraries & Gems
* React Router, 4.1.2
* React Sortable HOC, 0.6.6
* Devise
* Serializer

### Testing
* Jasmine & Enzyme
* Capybara
* Rspec
* Factory Girl
* Pry

## Setup

To get started, clone and run the following in your terminal:
```
bundle install
rake db:create
rake db:migrate
rails s
```

In a separate terminal tab, run:
```
yarn install
yarn start
```

Navigate to: ```localhost:3000```

To run Ruby tests: ```rake```

To run Enzyme tests:```yarn test```
