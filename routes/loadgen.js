var maxSessions = 16;

var express = require('express');
var router = express.Router();
var os = require('os');


var shouldRun = true;
var runningInstances = 0;

function blockCpuFor(ms) {
        var now = new Date().getTime();
        var result = 0
        while(shouldRun) {
                result += Math.random() * Math.random();
                if (new Date().getTime() > now +ms)
                        return;
        }
}


router.get('/', function(req, res) {
	var responseText = "Max concurrent jobs reached on " + os.hostname();
	if (runningInstances < maxSessions) {
		var blockInterval = setInterval(function() { blockCpuFor(250) }, 1000);
		runningInstances++;
		setTimeout(function() { clearInterval(blockInterval); runningInstances--; }, 60000);
	  	responseText = 'Requests active on ' + os.hostname() + ': ' + runningInstances;
	}

	res.send(responseText);
});

router.get('/health', function(req, res) {
	var responseText = "Max concurrent jobs reached on " + os.hostname();
        if (runningInstances < maxSessions) {
                responseText = 'Requests active on ' + os.hostname() + ': ' + runningInstances;
        }

        res.send(responseText);
});

module.exports = router;
