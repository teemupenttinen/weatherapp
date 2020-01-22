***Settings***
Library         SeleniumLibrary
Suite Setup     Go to homepage
Suite Teardown  Close All Browsers

***Variables***
${HOMEPAGE}     http://localhost:8000
${BROWSER}      Chrome
${WEATHER_IMAGE_CLASS}  _39kE1TTBOGVSVFZ0_Tk1cN

***Test Cases***
Check that CurrentWeatherWidget contains Espoo, 3.5°C and 14:00
    Check CurrentWeatherWidget
Check that ForecastList contains temperatures 1°C, 2°C, 3°C, 4°C, 5°C
    Check ForecastList
***Keywords***
Check CurrentWeatherWidget
    Page Should Contain Image   class:${WEATHER_IMAGE_CLASS}
    Wait Until Page Contains    Espoo
    Wait Until Page Contains    3.5°C
    Wait Until Page Contains    14:00

Check ForecastList
    Page Should Contain Element     //li  limit=5
    Wait Until Page Contains  //li   1°C
    Wait Until Page Contains  //li   2°C
    Wait Until Page Contains  //li   3°C
    Wait Until Page Contains  //li   4°C
    Wait Until Page Contains  //li   5°C


Go to homepage
    Open Browser    ${HOMEPAGE}     ${BROWSER}