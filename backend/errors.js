

var validateError = function(error) {
    var finalError = '';

    if(error.code == 11000) {
      finalError = error.message;
    } else {
        getError = Object.values(errorString);
        var finalError = '';
        for(var k= getError.length-1; k>=0 ; k--) {
          finalError = finalError + getError[k].message + ',' + ' ';
        }
    }

    var custom_error = {
      Response: finalError,
    }

    console.log(custom_error);
    return custom_error;
}


module.exports = {
    validateError,
}
