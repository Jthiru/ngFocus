/**
 * Created by siyengar on 2/8/15.
 */
'use strict';

angular.module('ngreflect').controller('evalHomeCtrl', ['$scope', '$http', function($scope, $http) {
    //----- PLATFORM ---------
    $scope.navbar = {
        navbarright:false
        ,tabs:[
            {isLink:true, sref:"#", caption:'Focus'}
            ,{isLink:true, sref:"#", caption:'Reflect'}
            ,{isLink:true, sref:"#", caption:'Learn'}
        ]
    }
    $scope.usermenu = {
        username:'Rob Hernandez'
        ,menuitems:[
            {caption:'My Profile', nobutton:false}
            ,{caption:'My Content Drive', nobutton:false}
            ,{caption:'Goal Settings', nobutton:false}
            ,{caption:'Administration View', nobutton:false}
            ,{caption:'User View', nobutton:false}
            ,{caption:'Sign Out', nobutton:true}
        ]
    }

    //----- PAGE LEVEL -------
    $scope.pagedata = {};
    $http.get('/evalhome').
        success(function(retval, status, headers, config){$scope.pagedata = retval.pagedata;}).
        error(function(retval, status, headers, config){console.log(retval);});
}]);

/*
angular.module('ngreflect').controller('adminHomeCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.navbar = {
        tabs: [
            {
                isdropdown: true,
                pic: 'https://serpcloud.com/serp/upload/1373741454avatar4.jpg',
                navbarright: true,
                menus: [
                    {
                        text: "My Profile"
                    },
                    {
                        text: "My Videos & Files"
                    },
                    {
                        text: "Messages"
                    },
                    {
                        text: "Administration"
                    },
                    {
                        nobutton: true,
                        text: "User View"
                    }
                ]
            },
            {
                islink: true,
                navbarright: true,
                text: 'Help',
                sref: 'test'
            },
            {
                isdropdown: true,
                text: "Plan",
                menus: [
                    {
                        text: "Observer Training",
                        subtexts: ["Focus", "K-5"]
                    },
                    {
                        text: "Scoring Practice",
                        subtexts: ["Focus", "K-5"]
                    },
                    {
                        text: "Calibration",
                        subtexts: ["Focus", "K-5"]
                    },
                    {
                        hasbuttons: true,
                        buttons: [
                            {
                                text: "View All Plans",
                                primary: true
                            },
                            {
                                text: "Build a Plan",
                                default: true
                            }
                        ]
                    }

                ]
            },
            {
                isdropdown: true,
                navbarright: true,
                text: "System",
                menus: [
                    {
                        text: "District Communications"
                    },
                    {
                        text: "District Support & Wiki"
                    },
                    {
                        nobutton: true,
                        text: "Distict Settings"
                    }
                ]
            },
            {
                isdropdown: true,
                navbarright: true,
                text: "Libraries",
                menus: [
                    {
                        text: "Focus Content Library"
                    },
                    {
                        text: "Video Channels"
                    },
                    {
                        text: "Content Management"
                    },
                    {
                        text: "Teachscape Items & Sets"
                    },
                    {
                        text: "Custom Items & Sets"
                    },
                    {
                        nobutton: true,
                        text: "Rubrics"
                    }
                ]
            },
            {
                isdropdown: true,
                navbarright: true,
                text: "People",
                menus: [
                    {
                        text: "Overall Activity"
                    },
                    {
                        text: "Users"
                    },
                    {
                        text: "Organizations"
                    },
                    {
                        text: "Groups"
                    },
                    {
                        text: "Licenses"
                    },
                    {
                        buttons: [
                            {
                                text: "Add New People",
                                default: true
                            }
                        ]
                    }
                ]
            },
            {
                islink: true,
                text: 'Assign',
                sref: 'test'
            },
            {
                islink: true,
                text: 'Report',
                sref: 'test'
            }
        ]
    };
    $scope.pageheaderh2 = {
        text: 'People in: Current Organization'
    };
    $scope.searchbar = {
        placeholder: "Search People & Organizations"
    };
    $scope.subnav = {
        tabs: ['Overall Status', 'Users', 'Sub-Organizations', 'Permissions', 'Licenses', 'Archives']
    };
    $scope.sectionheader = {
        text: 'Users',
        btnprimary: {
            text: 'Add a Person',
            pullright: true,
            click: function() {
                $scope.plaintable.rows = [
                    {
                        cols: [
                            {
                                single: true,
                                lastName: 'Last',
                                firstName: 'First Name',
                                emailAddress: 'address@email.com'
                            },
                            {
                                multiple: true,
                                rows: [
                                    {
                                        texts: [
                                            { type: 'Current Organization' }
                                        ]
                                    },
                                    {
                                        texts: [
                                            { type: 'Sub Organization' }
                                        ]
                                    }
                                ]
                            },
                            {
                                multiple: true,
                                rows: [
                                    {
                                        texts: [
                                            { type: 'User'},
                                            { type: 'Admin'}
                                        ]
                                    },
                                    {
                                        texts: [
                                            { type: 'User' }
                                        ]
                                    }
                                ]
                            },
                            {
                                multiple: true,
                                rows: [
                                    {
                                        texts: [
                                            { type: 'Teacher_K-12' },
                                            { type: 'Peer-Observer' },
                                            { type: 'Reflect_Evaluator' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        cols: [
                            {
                                single: true,
                                lastName: 'Last',
                                firstName: 'First Name',
                                emailAddress: 'address@email.com'
                            },
                            {
                                multiple: true,
                                rows: [
                                    {
                                        texts: [
                                            { type: 'Current Organization' }
                                        ]
                                    },
                                    {
                                        texts: [
                                            { type: 'Sub Organization' }
                                        ]
                                    }
                                ]
                            },
                            {
                                multiple: true,
                                rows: [
                                    {
                                        texts: [
                                            { type: 'User'},
                                            { type: 'Admin'}
                                        ]
                                    },
                                    {
                                        texts: [
                                            { type: 'User' }
                                        ]
                                    }
                                ]
                            },
                            {
                                multiple: true,
                                rows: [
                                    {
                                        texts: [
                                            { type: 'Teacher_K-12' },
                                            { type: 'Peer-Observer' },
                                            { type: 'Reflect_Evaluator' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        btndefault: {
            text: 'Import New People',
            pullright: true,
            click: function() {
                $scope.plaintable.rows = []
            }
        }
    };
    $scope.welltabs = {
        text: 'EDIT PEOPLE',
        tabs: ['Persons Information', 'Role', 'Permissions', 'Organization', 'Tags', 'More']
    };
    $scope.plaintable = {
        headers: [
            { text: 'NAME'},
            { text: 'ORGANIZATIONS'},
            { text: 'ROLES'},
            { text: 'TAGS'}
        ],
        rows: [
            {
                cols: [
                    {
                        single: true,
                        lastName: 'Last',
                        firstName: 'First Name',
                        emailAddress: 'address@email.com'
                    },
                    {
                        multiple: true,
                        rows: [
                            {
                                texts: [
                                    { type: 'Current Organization' }
                                ]
                            },
                            {
                                texts: [
                                    { type: 'Sub Organization' }
                                ]
                            }
                        ]
                    },
                    {
                        multiple: true,
                        rows: [
                            {
                                texts: [
                                    { type: 'User'},
                                    { type: 'Admin'}
                                ]
                            },
                            {
                                texts: [
                                    { type: 'User' }
                                ]
                            }
                        ]
                    },
                    {
                        multiple: true,
                        rows: [
                            {
                                texts: [
                                    { type: 'Teacher_K-12' },
                                    { type: 'Peer-Observer' },
                                    { type: 'Reflect_Evaluator' }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                cols: [
                    {
                        single: true,
                        lastName: 'Last',
                        firstName: 'First Name',
                        emailAddress: 'address@email.com'
                    },
                    {
                        multiple: true,
                        rows: [
                            {
                                texts: [
                                    { type: 'Current Organization' }
                                ]
                            },
                            {
                                texts: [
                                    { type: 'Sub Organization' }
                                ]
                            }
                        ]
                    },
                    {
                        multiple: true,
                        rows: [
                            {
                                texts: [
                                    { type: 'User'},
                                    { type: 'Admin'}
                                ]
                            },
                            {
                                texts: [
                                    { type: 'User' }
                                ]
                            }
                        ]
                    },
                    {
                        multiple: true,
                        rows: [
                            {
                                texts: [
                                    { type: 'Teacher_K-12' },
                                    { type: 'Peer-Observer' },
                                    { type: 'Reflect_Evaluator' }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                cols: [
                    {
                        single: true,
                        lastName: 'Last',
                        firstName: 'First Name',
                        emailAddress: 'address@email.com'
                    },
                    {
                        multiple: true,
                        rows: [
                            {
                                texts: [
                                    { type: 'Current Organization' }
                                ]
                            },
                            {
                                texts: [
                                    { type: 'Sub Organization' }
                                ]
                            }
                        ]
                    },
                    {
                        multiple: true,
                        rows: [
                            {
                                texts: [
                                    { type: 'User'},
                                    { type: 'Admin'}
                                ]
                            },
                            {
                                texts: [
                                    { type: 'User' }
                                ]
                            }
                        ]
                    },
                    {
                        multiple: true,
                        rows: [
                            {
                                texts: [
                                    { type: 'Teacher_K-12' },
                                    { type: 'Peer-Observer' },
                                    { type: 'Reflect_Evaluator' }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };
    $scope.goto = function() {
        console.log('switch page to useShow');
    };
    $scope.sidebar = {
        links: [
            {
                bordertop: true,
                text: 'All People',
                resultsnumber: '100'
            },
            {
                text: 'People Without Permissions',
                resultsnumber: '3'
            }
        ],
        header: {
            text: 'Filters',
            subtext: 'Remove Filters'
        },
        filters: [
            {
                text: 'Name',
                model: ''
            },
            {
                text: 'Organization',
                model: ''
            },
            {
                text: 'Grade Span',
                model: ''
            },
            {
                text: 'Role',
                model: ''
            },
            {
                text: 'Permissions',
                model: ''
            },
            {
                text: 'License',
                model: ''
            },
            {
                text: 'Tags',
                model: ''
            },
            {
                text: 'Tenure Status',
                model: ''
            },
            {
                text: 'Activation Status',
                model: ''
            }
        ]
    };
}]);
*/