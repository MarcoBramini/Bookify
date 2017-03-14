bookify.controller("mainCtrl", function ($scope) {

    $scope.activeMenu = "Home";

    $scope.menu = [{
        "label": "Home",
        "link": "/"
    }, {
        "label": "Login",
        "link": "/login"
    }];
});

bookify.controller("loginCtrl", function ($scope,authEngine) {

    $scope.activeMenu = "Login";

    $scope.menu = [{
        "label": "Home",
        "link": "/"
    }, {
        "label": "Login",
        "link": "/login"
    }];

    $scope.login = function () {
        authEngine.login($scope.id, $scope.password);
    }
});

bookify.controller("adminCtrl", function ($scope, authEngine, session) {
    authEngine.authRequired('ADMIN');
    console.log(session.getAuthUser());
    console.log(session.authType);
    $scope.adminData = session.authUser;

    $scope.activeMenu = "Admin";

    $scope.menu = [{
        "label": "Admin",
        "link": "/admin"
    }, {
        "label": "Logout",
        "link": "/logout"
    }];
});

bookify.controller("logoutCtrl", function ($scope, authEngine) {
    authEngine.logout();
});