"use strict";
// ! Enumeration
var LoadingState;
(function (LoadingState) {
    LoadingState["beforeLoad"] = "beforeLoad";
    LoadingState["loading"] = "loading";
    LoadingState["loaded"] = "loaded";
})(LoadingState || (LoadingState = {}));
const englishLoadingStates = {
    [LoadingState.beforeLoad]: "Before Load"
};
const isLoading = (state) => state === LoadingState.loading;
console.log(isLoading(LoadingState.beforeLoad));
// ! Literal Types
function rollDice(dice) {
    let pip = 0;
    for (let i = 0; i < dice; i++) {
        pip += Math.floor(Math.random() * 5) + 1;
    }
    return pip;
}
console.log(rollDice(3));
function sendEvent(name, data) {
    console.log(`${name}: ${JSON.stringify(data)} `);
}
sendEvent("addToCart", { productId: 123245 });
sendEvent("checkout", { cartCount: 232424 });
