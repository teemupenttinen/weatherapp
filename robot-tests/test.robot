***Settings***
Library         SeleniumLibrary
Library         REST    http://localhost:9001
Suite Setup     Go to homepage
Suite Teardown  Close All Browsers

***Variables***
${HOMEPAGE}     http://localhost:8000
${BROWSER}      Chrome
${IMAGE}        xpath=//img[@src='/img/04.svg']

***Test Cases***
Check that CurrentWeatherWidget contains texts Espoo, 3.5°C, 12:00 and a image.
    Check CurrentWeatherWidget
    
Check that ForecastList contains temperatures 1°C, 2°C, 3°C, 4°C, 5°C
    Check ForecastList

GET /api/weather -> check name and temp from response object
    GET         /api/weather
    Output schema   response body
    Object      response body             
    String     response body name         Espoo
    Number      response body main temp   3.5
    [Teardown]  Output schema            

GET /api/forecast -> check that it contains list of forecasts with minimum length of 5 items
    GET         /api/forecast
    Output schema   response body
    Object      response body             
    Array     response body list    minItems=5
    [Teardown]  Output schema     

***Keywords***
Check CurrentWeatherWidget
    Wait Until Page Contains Element    ${IMAGE} 
    Wait Until Page Contains            Espoo
    Wait Until Page Contains            3.5°C
    Wait Until Page Contains            12:00

Check ForecastList
    Page Should Contain Element         //li  limit=5
    Wait Until Page Contains            1°C
    Wait Until Page Contains            2°C
    Wait Until Page Contains            3°C
    Wait Until Page Contains            4°C
    Wait Until Page Contains            5°C

Go to homepage
    Open Browser    ${HOMEPAGE}     ${BROWSER}