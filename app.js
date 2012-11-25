
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// JADE Configuration ////////////////////////////////////////////////////////////////
	app.configure(function(){
	  app.set('views', __dirname + '/views');
	  app.set('view engine', 'jade');
	  app.use(express.bodyParser());
	  app.use(express.methodOverride());
	  app.use(app.router);
	  app.use(express.static(__dirname + '/public'));
	});

	app.configure('development', function(){
	  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
	});

	app.configure('production', function(){
	  app.use(express.errorHandler()); 
	});

// Jade Routes ////////////////////////////////////////////////////////////////////////
	
	app.get('/', routes.index);
    app.get('/example1', routes.example1);
	app.get('/example2', routes.example2);
	app.get('/example3', routes.example3);

app.listen(process.env.PORT || 3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);