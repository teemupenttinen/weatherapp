# Weatherapp

## Prerequisite

#### Open Weather Api Key
Create **secret.yml** to the root and add an field: APPID containing your Open Weather API key. 

For testing purposes this key may be used: **a0cf72411f1982712f19b222bfd31f4c**

## Running containers 

### **Development**

You can build and run the development environment with hot reload using command:

*docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build*

### **Testing**

#### Robot Framework tests


To test the weatherapp with Robot Framework, you need to install Robot Framerwork (https://pypi.org/project/robotframework/) and following libraries;

Selenium library

https://github.com/robotframework/SeleniumLibrary#installation

RESTInstance

https://github.com/asyrjasalo/RESTinstance


To run the tests with Chrome you also need to install Chromedriver

https://chromedriver.chromium.org/


**Steps**

1. Run the test compose with following command:

```bash
docker-compose -f docker-compose.yml -f docker-compose.test.yml up
```

2. Wait until all docker containers are running

3. Navigate to robot-tests folder and execute this command

```bash
robot -d out tests/test.robot
```
4.  Results can be found within **/out** folder.

#### Unit testing
You can run unit tests directly inside both frontend and backend folders with *npm test* command or with the following docker-compose command (note that this starts also the containers for Robot framework testing):

```bash
docker-compose -f docker-compose.yml -f docker-compose.test.yml up
```


### Production
You can simulate production environment with the following command:

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
```
