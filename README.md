![Build Status](https://codeship.com/projects/fc7d8080-530d-0135-099b-129b825f4ead/status?branch=master)
![Code Climate](https://codeclimate.com/github/JesseChamberlain/ldyan.png)
![Coverage Status](https://coveralls.io/repos/github/JesseChamberlain/ldyan/badge.svg?branch=master)

# README
This repository contains the source code for the song mapping application Ldyan (lid-ee-uhn).

## Technologies
* Rails, 5.0.0.1
* React, 15.6.1
* React Router, 4.1.2
* React Sortable, 0.6.6
* Jasmine & Enzyme Testing, 3.6.1
* Node, 7.9.0

## Setup
To get started, clone and run the following in your terminal:
```
bundle
rake db:create
rails s
```

In a separate terminal tab, run:
```
yarn
yarn start
```

Navigate to: ```localhost:3000```

To run Ruby tests: ```rake```

To run Enzyme tests:```yarn test```
