const TailwindConverter = require('./build/TailwindConverter');
const converter = new TailwindConverter();
module.exports = function(bsmarkup){
    return converter.setContent(bsmarkup).convert().get()
}