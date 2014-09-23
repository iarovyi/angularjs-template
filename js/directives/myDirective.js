'use strict';

app.directive('mySample', function($compile){
	return {
		//replace: true, replace or insert nested
		restrict: 'E', // E- element,  A-attribute, C -class, M - comment
		//template: "<input type='text' ng-model='sampleData'/> {{sampleData}} <br/>",   template or link
		//templateUrl: "/templates/directives/sampledataTemplate.html", download template
		link: function(scope, element, attrs, controller){
			var markup = "<input type='text' ng-model='sampleData'/> {{sampleData}} <br/>";
			angular.element(element).html($compile(markup)(scope));
		},

		//CONTROLLER: - can be used for connunication betaean few directives
		//1) controller: 'MyController',  we can use controller for directive
		//2) controller: '@', name: 'ctrl'    <my-sample ctrl="MyController"/>
		controller: function($scope){
			this.controlExtraMethod = function(){  }
		}

		//scope: { sampleData: ''} use local object as scope
		/*scope: {
			upvote: "&",             we can pass from outer scope to this scope (bind one scope var to other scope var):
			downvote: "&",           <my-sample upvote="outerScopeFn(someOuterVar) count="count"/>
			count: "=",
			foo: "@"                 @ - means that we expect the string to be passed (toString())
		}*/
	};
})
.directive('mySampleExtension', function(){
	return {
		restrict: 'A',
		priority: 9999, //we can specify priority in order of execution of extra directives
		//terminal: true, //do not execute anything what is less then 9999		
		require: 'mySample', //in order to use this directive we need specify some othe directives
		link: function(scope, element, attrs, controller){
			controller.controlExtraMethod();
		}
	};
});


app.directive('onlyNumbersInput', function($compile){
	return {
		restrict: 'A',
		link: function(scope, element, attrs, controller){
			element.on('keydown', function(e){
				//cancel if incorrect key pressed
			});
		}
	};
});

app.directive('fooDirective', function($compile){
	return {
		compile: function(element, attributes){
			//using compile instead link => element will be compiled automatically
		}
	};
});