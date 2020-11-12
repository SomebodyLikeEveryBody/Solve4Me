/*******************************************************************************************
 * MAIN
 * */
$(function () {
    let translater = new Translater(g_dictReplace);
    let solver = new Solver();
    let inputScreen = new InputScreen();
    let outputScreen = new OutputScreen(translater);
    let controller = new Controller(inputScreen, outputScreen, solver);
    
    inputScreen.focus();
    controller.setkeyAndMouseEvents();
    controller.synchronizeInputScreenAndOutputScreen();
});