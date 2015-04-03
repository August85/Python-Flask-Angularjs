(function(angular) {
	angular.module("angularTreeview", []).directive("treeModel", function($compile) {
        return {
            restrict: "A",
            link: function(scope, g, c) {
                var e = c.treeModel,
                    h = c.nodeLabel || "label",
                    d = c.nodeChildren || "children",
                    k = '<ul><li data-ng-repeat="node in ' + e + '"><i class="collapsed" data-ng-show="node.' + d + '.length && node.collapsed" data-ng-click="selectNodeHead(node, $event)"></i><i class="expanded" data-ng-show="node.' + d + '.length && !node.collapsed" data-ng-click="selectNodeHead(node, $event)"></i><input type="checkbox"></input><span data-ng-class="node.selected" data-ng-click="selectNodeLabel(node, $event)">{{node.' + h + '}}</span><div data-ng-hide="node.collapsed" data-tree-model="node.' + d + '" data-node-id=' + (c.nodeId || "id") + " data-node-label=" + h + " data-node-children=" + d + "></div></li></ul>";
                e && e.length && (c.angularTreeview ? (scope.$watch(e, function(m, b) {
                    g.empty().html($compile(k)(scope));
                }, !1), scope.selectNodeHead = scope.selectNodeHead || function(scope, b) {
                    b.stopPropagation && b.stopPropagation();
                    b.preventDefault && b.preventDefault();
                    b.cancelBubble = !0;
                    b.returnValue = !1;
                    scope.collapsed = !scope.collapsed;
                }, scope.selectNodeLabel = scope.selectNodeLabel || function(c, b) {
                    b.stopPropagation && b.stopPropagation();
                    b.preventDefault && b.preventDefault();
                    b.cancelBubble = !0;
                    b.returnValue = !1;
                    scope.currentNode && scope.currentNode.selected && (scope.currentNode.selected = void 0);
                    c.selected = "selected";
                    scope.currentNode = c;
                }) : g.html($compile(k)(scope)));
            }
        };
    });
})(angular);