/*!
 * AngularJS Chart.js Bar Directive
 *
 * Copyright 2013 Stephane Begaudeau
 * Released under the MIT license
 */
angular.module('angular.directives-chartjs-bar', []).directive('angChartjsBar', [function () {
  var getOptionsFromScope = function (scope) {
    var options = {};

    var potentialOptions = [
      {key:'chartjsScaleOverlay', value:'scaleOverlay', isBoolean: true},
      {key:'chartjsScaleOverride', value:'scaleOverride', isBoolean: true},
      {key:'chartjsScaleSteps', value:'scaleSteps', isNumber: true},
      {key:'chartjsScaleStepWidth', value:'scaleStepWidth', isNumber: true},
      {key:'chartjsScaleStartValue', value:'scaleStartValue', isNumber: true},
      {key:'chartjsScaleLineColor', value:'scaleLineColor'},
      {key:'chartjsScaleLineWidth', value:'scaleLineWidth', isNumber: true},
      {key:'chartjsScaleShowLabels', value:'scaleShowLabels', isBoolean: true},
      {key:'chartjsScaleLabel', value:'scaleLabel'},
      {key:'chartjsScaleFontFamily', value:'scaleFontFamily'},
      {key:'chartjsScaleFontSize', value:'scaleFontSize', isNumber: true},
      {key:'chartjsScaleFontStyle', value:'scaleFontStyle'},
      {key:'chartjsScaleFontColor', value:'scaleFontColor'},
      {key:'chartjsScaleShowGridLines', value:'scaleShowGridLines', isBoolean: true},
      {key:'chartjsScaleGridLineColor', value:'scaleGridLineColor'},
      {key:'chartjsScaleGridLineWidth', value:'scaleGridLineWidth', isNumber: true},
      {key:'chartjsBarShowStroke', value:'barShowStroke', isBoolean: true},
      {key:'chartjsBarStrokeWidth', value:'barStrokeWidth', isNumber: true},
      {key:'chartjsBarValueSpacing', value:'barValueSpacing', isNumber: true},
      {key:'chartjsBarDatasetSpacing', value:'barDatasetSpacing', isNumber: true},
      {key:'chartjsAnimation', value:'animation', isBoolean: true},
      {key:'chartjsAnimationSteps', value:'animationSteps', isNumber: true},
      {key:'chartjsAnimationEasing', value:'animationEasing'}
    ];

    for (var i = 0; i < potentialOptions.length; i++) {
      if (scope.hasOwnProperty(potentialOptions[i].key) && scope[potentialOptions[i].key] !== undefined) {
        options[potentialOptions[i].value] = scope[potentialOptions[i].key];
      }
    }

    return options;
  };

  var chartjsBar = {
    restrict: 'E',
    //compile: compilationFunction,
    template: '<canvas class="ang-chartjs-bar"></canvas>',
    scope: {
      chartjsModel: '=',
      chartjsWidth: '=',
      chartjsHeight: '=',
      chartjsScaleOverlay: '=',
      chartjsScaleOverride: '=',
      chartjsScaleSteps: '=',
      chartjsScaleStepWidth: '=',
      chartjsScaleStartValue: '=',
      chartjsScaleLineColor: '=',
      chartjsScaleLineWidth: '=',
      chartjsScaleShowLabels: '=',
      chartjsScaleLabel: '=',
      chartjsScaleFontFamily: '=',
      chartjsScaleFontSize: '=',
      chartjsScaleFontStyle: '=',
      chartjsScaleFontColor: '=',
      chartjsScaleShowGridLine: '=',
      chartjsScaleGridLineColor: '=',
      chartjsScaleGridLineWidth: '=',
      chartjsBarShowStroke: '=',
      chartjsBarStrokeWidth: '=',
      chartjsBarValueSpacing: '=',
      chartjsBarDatasetSpacing: '=',
      chartjsAnimation: '=',
      chartjsAnimationSteps: '=',
      chartjsAnimationEasing: '='
    },
    link: function (scope, elements, attributes) {
      scope.$watch('chartjsModel', function (newValue) {
        if (newValue !== undefined) {
          var options = getOptionsFromScope(scope);

          if (scope.chart !== undefined) {
            scope.chart.Bar(newValue, options);
          } else {
            var width = scope.chartjsWidth || '400';
            var height = scope.chartjsHeight || '400';

            var canvas = elements[0].children[0];
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);

            var chart = new Chart(canvas.getContext('2d'));
            chart.Bar(newValue, options);
            scope.chart = chart;
          }
        }
      }, true);
    }
  };
  return chartjsBar;
}]);
