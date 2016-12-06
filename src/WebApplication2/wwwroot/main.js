module.exports = {
    sayHelloInEnglish: function (callback) {
        callback(/* error */ null, "Hello");
    },

    sayHelloInSpanish: function (callback) {
        callback(/* error */ null, "Hola");
    },

    addNumbers: function(callback, a, b){
        var result = a + b;
        callback(/* error */ null, result);
    }
};