Module.register("iseeyou", {
    // Default module config.
    defaults: {

        // Pointless for a mirror, not currently implemented
        /* 
		dueMax: "2040-07-11T18:30:00.000Z", // RFC 3339 timestamp 
		dueMin: "1970-07-11T18:30:00.000Z", // RFC 3339 timestamp 
		completedMax: "2040-07-11T18:30:00.000Z", //only if showCompleted true (RFC 3339 timestamp)
		completedMin: "1970-07-11T18:30:00.000Z", //only if showCompleted true (RFC 3339 timestamp)
		 */
    },

    // Define required scripts
    getScripts: function() {
        return [];
    },

    // Define required scripts.
    getStyles: function() {
        return ["iseeyou.css"];
    },

    // Define start sequence
    start: function() {

        this.container = document.createElement("div");
        this.container.setAttribute("class", "overlay");
        this.container.style.height = "0%";
        document.body.appendChild(this.container);
    },

    notificationReceived: function(notification, payload, sender) {
       // payload is the config
       if (notification === "FULLSCREEN_MSG") {
           this.showMsg(payload);
       } 
    },

    socketNotificationReceived: function (notification, payload) {

        if (notification === "FULLSCREEN_MSG") {
        } 
    },

    getDom: function() {
        return;
	},
    
    showMsg: function(texts, lag) {
	console.log('@@@' + texts);
        this.container.innerHTML = '';
        for (let t of texts){
            let line = document.createElement("div");
            line.setAttribute("class", "overlay-content");
            let para = document.createElement("p");
            let content = document.createTextNode(t);
            para.appendChild(content);
            line.appendChild(para);
            this.container.append(line);
        }    
        setTimeout(() => this.container.style.height = "100%", 1);
        setTimeout(() => this.container.style.height = "0%", lag?lag*1000:5000);
    }

});
