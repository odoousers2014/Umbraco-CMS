﻿/**
* @ngdoc service
* @name umbraco.mocks.sectionMocks
* @description 
* Mocks data retrival for the sections
**/
function sectionMocks($httpBackend, mocksUtils) {

    /** internal method to mock the sections to be returned */
    function getSections() {
        
        if (!mocksUtils.checkAuth()) {
            return [401, null, null];
        }

        var sections = [
            { name: "Rules", cssclass: "icon-script-alt", alias: "content" },
            { name: "Inputs", cssclass: "icon-window-popin", alias: "inputs" },
            { name: "Outputs", cssclass: "icon-out", alias: "outputs" },
            { name: "Settings", cssclass: "icon-umb-settings", alias: "settings" },
            { name: "Users", cssclass: "icon-umb-users", alias: "users" },
            { name: "Developer", cssclass: "icon-umb-developer", alias: "developer" },
            { name: "Users", cssclass: "icon-umb-users", alias: "users" }
        ];
        
        return [200, sections, null];
    }
    
    return {
        register: function () {
            $httpBackend
              .whenGET(mocksUtils.urlRegex('/umbraco/UmbracoApi/Section/GetSections'))
              .respond(getSections);
        }
    };
}

angular.module('umbraco.mocks').factory('sectionMocks', ['$httpBackend', 'mocksUtils', sectionMocks]);
