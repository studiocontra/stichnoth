"use strict";/**
 * Rotating Features App
 */var mainHeaderApp=Vue.createApp({data:function data(){return{currentLocale:"",isSearchOpen:!1}},methods:{changeLocale:function changeLocale(a,b){this.currentLocale=a,setTimeout(function(){document.getElementById(b).submit()},200)}}});mainHeaderApp.config.compilerOptions.delimiters=["[[","]]"],mainHeaderApp.mount(".header");