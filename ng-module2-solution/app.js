!function(){"use strict";function t(t){var e=this;e.buy=t.getBuyItems(),e.removeItem=function(e){t.addItem(e),t.removeItem(e)}}function e(t){var e=this;e.bought=t.getBoughtItems(),e.removeItem=function(e){t.removeItem(e)}}function n(){var t=this,e=[{name:"Milk",quantity:"2"},{name:"Donuts",quantity:"200"},{name:"Cookies",quantity:"300"},{name:"Chocolate",quantity:"5"},{name:"Coke",quantity:"4"}],n=[];t.addItem=function(t){n.push(e[t])},t.removeItem=function(t){e.splice(t,1)},t.getBuyItems=function(){return e},t.getBoughtItems=function(){return n}}angular.module("ShoppingListApp",[]).controller("ToBuyController",t).controller("AlreadyBoughtController",e).service("ShoppingListCheckOffServic",n),t.$inject=["ShoppingListCheckOffServic"],e.$inject=["ShoppingListCheckOffServic"]}();