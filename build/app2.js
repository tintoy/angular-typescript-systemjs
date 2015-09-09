System.register(['aurelia-framework', 'aurelia-logging-console'], function(exports_1) {
    var aurelia_framework_1, aurelia_logging_console_1;
    function configure(aurelia) {
        aurelia.use
            .defaultBindingLanguage()
            .defaultResources()
            .history()
            .router()
            .eventAggregator()
            .plugin('custom-plugin');
        aurelia.start().then(function (app) { return app.setRoot('home', document.body); });
    }
    exports_1("configure", configure);
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_logging_console_1_1) {
                aurelia_logging_console_1 = aurelia_logging_console_1_1;
            }],
        execute: function() {
            aurelia_framework_1.LogManager.addAppender(new aurelia_logging_console_1.ConsoleAppender());
            aurelia_framework_1.LogManager.setLevel(aurelia_framework_1.LogManager.logLevel.debug);
        }
    }
});
