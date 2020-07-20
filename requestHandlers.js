function index(){
    console.log("Request handler for index was called.")
}
function portfolio (){
    console.log("Request for handler for portflio was called.")

}
exports.index = index;
exports.portfolio = portfolio;
