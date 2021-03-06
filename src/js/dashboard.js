const remote 	= require('electron').remote;			// accessing remote library
const main		= remote.require('./main.js');			// accessing stuff from main.js
var $ 				= require('jquery');					// basic jquery

var basic_data  = {};									// title, description, github link
var setup_points;
var num_of_topics;
var topic_current_info = [[],[]];

/*
 *	Function: 	 get_basic_data()
 * 	Description: gets the basic information about the project from the json file
 */
function get_basic_data() {

	setup_points = remote.getGlobal('json_path').setup_points;		// gets setup points

	for(var i = 0; i < setup_points.length; i++) {					// goes through them
		var current_output = main.read_db(setup_points[i]);			// gets the current state of them
		if(i == 0) {
			current_output = "Project: " + current_output;			// just to make it prettier ;)
		}
		$("#" + String(setup_points[i])).text(current_output);		// sets the output of them
	}
}

/*
 *	Function: 	 check_for_topics()
 * 	Description: check how many topics are there, if not create a null one
 */
function check_for_topics() {
	if(main.has_db('num_of_topics')) {
		// read how many topics/ideas there are and generate navigation
		num_of_topics = main.read_db('num_of_topics');
		console.log(num_of_topics);
	} else {
		// create num_of_topics and put it on 0 and generate navigation
		num_of_topics = 0;
		main.update_db('num_of_topics',0);
	}
}

/*
 *	Function: 	 topic_nav_new(name, id, callback_function)
 * 	Description: check how many topics are there, if not create a null one
 */
function topic_nav_new(name, id, callback_function) {
	if(document.getElementById(name) == null) {
		var ul = document.getElementById("topic_nav");
		var li = document.createElement("li");
		var a  = document.createElement("a");
		li.setAttribute("id", id);
		a.setAttribute("href","#");
		a.appendChild(document.createTextNode(name));
		li.appendChild(a);
		ul.appendChild(li);
		if(callback_function != null) {
			$("#" + id).click(function() {
				callback_function();
			});
		}
	}
}

/*
 *	Function: 	 update_topic_nav()
 * 	Description: goes through the num of topics and information and sets them up
 */
function update_topic_nav() {

	for(var i = 0;i<num_of_topics;i++) {
		// loop and create "buttons"

	}

	// for last one create "create new"
	//topic_nav_new("Create a topic", "topic_new", topic_new);
}

/*
 *	Function: 	 topic_new()
 * 	Description: callback for topic_new, it sets the iframe to topic new
 */
function topic_new() {
	dashboard_fill("topic_new.html");
}

function dashboard_fill(url) 	{ $("#dashboard").load(url);  }	// fill the dashboard with a file (html)
function dashboard_empty() 		{ $("#dashboard").html('');   }	// empty the dashboard, fill it with nothing

get_basic_data();
check_for_topics();

document.getElementById("topic_new").addEventListener("click", topic_new);
