# EDU Everywhere
EDU Everywhere is a platform that globalizes high-quality, accessible education through providing an all-in-one learning platform that leverages AI technology to eliminate language barriers. This project was made as part of the DeltaHacks 9 Hackathon. Details are available on Devpost at [https://devpost.com/software/edu-everywhere](https://devpost.com/software/edu-everywhere)

## Inspiration
Many of our friends who are international students are forced to pay four times the amount for education than of local students. As such, getting an education abroad is inaccessible for many international students, limiting their opportunities for learning and professional growth. Education is not accessible to many regions of the world. 95% of illiterate people worldwide are from developing countries (Verner, 2005). A lack of capital within these regions stunts local opportunities for accessible education, but what if education didn't have to be local?

## What it does
At EDU Everywhere, **our goal is to globalize high-quality, accessible education through providing an all-in-one learning platform that leverages AI technology to eliminate language barriers. Essentially, it is a platform that allows people from anywhere to partake in education remotely**. Our service offers access to teachers that do not speak the same language as the user and vice versa, allowing effective cross-language teaching. It includes features such as handwriting translation [(of which we have a working prototype)](https://youtu.be/pUDBVPf7b1Q), automatically translated voice-overs during online lectures, and more! These AI-powered features combine to create a cohesive learning platform in the user's native language. All in all, EDU Everywhere brings countless life-changing opportunities that were once far out of reach right to the fingertips of eager learners all around the world.

## How we built it
We first designed [our online platform in Figma](https://www.figma.com/file/4dPOZGHRbGgogbarMWnyos/DeltaHacks9?node-id=0%3A1&t=a8DjyiW7qSnKeJp6-1), honouring a simple and intuitive design making it approachable for students. At the same time, we began developing an [AI-powered tool in Python](https://youtu.be/pUDBVPf7b1Q), which leverages the [Google Cloud Translation API](https://cloud.google.com/translate) and [Google Cloud Vision API](https://cloud.google.com/vision) to accurately and authentically translate hand-written assignments that may include diagrams, footnotes etc. This tool is a prototype of one of the many features in our platform which supports cross-language learning. We then developed the [front end of our web app](https://youtu.be/FL3L-R1_7os) in [React](https://reactjs.org/), programming interactive components in Javascript and implementing styling using CSS. Lastly, we began developing the backend server using [Flask](https://palletsprojects.com/p/flask/) to access our AI translation tools from the React web app. All in all, our web app immersively illustrates our client's perspectives when using our platform.

## Challenges we ran into, Things we learned and Accomplishments that we're proud of
For most of us, it was our first time using many of the tools, libraries and languages we did while creating this project. It was our first time using Google Cloud APIs, making a server in Flask and using React! A lot of learning, trial and error and error and error... We were under a tight time crunch, and although we could not complete some of our final components, we made it through and are proud of what we have created! Additionally, we got comfortable using essential tools that support collaboration, including GitHub, VS Live Sharing and Figma. We took the opportunity to learn to form each other's experiences and strengths to become better developers for positive change!

## What's next for EDU Everywhere
There is plenty of more tools to implement to fulfil a complex cross-language educational platform! We are super pround of our written notes assignment translation functionality so far, but here are a few features we would like to develop for the future:
- Transcribing, translating and overdubbing live lectures in real-time
- Translating all communication in chat, feedback and annotations
- Developing translation models to be more realistic and context-specific to numerous educational topics

## Built With
- css
- flask
- github
- google-cloud
- google-cloud-translation-api
- google-cloud-vision-api
- javascript
- python
- react
