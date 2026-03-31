var accountid,
  userid,
  username,
  practiceid,
  practiceNPI,
  practicename,
  authorizationData,
  clientIpAddress;
$(document).ready(function () {
  // window.localStorage.removeItem("accountid");
  // window.localStorage.removeItem("userid");
  // window.localStorage.removeItem("practiceid");
  // window.localStorage.removeItem("practiceNPI");
  // window.localStorage.removeItem("authorizationData");

  var port2;
  // Listen for the intial port transfer message
  window.addEventListener("message", initPort);

  // Setup the transfered port
  function initPort(e) {
    if (e.data === "init") {
      port2 = e.ports[0];
      port2.onmessage = onMessage;
    } else {
      var msgObj = e.data;
      onMessage({
        data: msgObj,
      });
    }
  }

  // Handle messages received on port2
  function onMessage(e) { 
    if (e.data.accountid != undefined) {
      if (
        localStorage.getItem("practicename") != null &&
        localStorage.getItem("practicename") != e.data.practicename
      ) {
        window.location.reload();
        localStorage.clear();
      }

      window.localStorage.accountid = e.data.accountid;
      window.localStorage.userid = e.data.userid;
      window.localStorage.username = e.data.username;
      window.localStorage.practiceid = e.data.practiceid;
      window.localStorage.practiceNPI = e.data.practiceNPI;
      window.localStorage.practicename = e.data.practicename;
      window.localStorage.authorizationData = e.data.authorizationData;
      window.localStorage.clientIpAddress = e.data.ClientIpAddress;
      window.localStorage.currentUserSessionId = e.data.CurrentUserSessionId;
      accountid = e.data.accountid;
      userid = e.data.userid;
      username = e.data.username;
      practiceid = e.data.practiceid;
      practiceNPI = e.data.practiceNPI;
      practicename = e.data.practicename;
      authorizationData = e.data.authorizationData;
      clientIpAddress = e.data.ClientIpAddress;
      currentUserSessionId = e.data.CurrentUserSessionId;
      window.location.reload();

    }
  }

  // Sending message to the parent
  // var $form = document.querySelector("#iframe-form");
  // $form.addEventListener("submit", function (e) {
  //     e.preventDefault();
  //     var message = document.querySelector("#iframe-message").value;
  //     port2.postMessage(message);
  // });
});
// window.onbeforeunload = function(event)
//   {
//       return confirm("Confirm refresh");
//   };
// window.addEventListener("beforeunload", function(event) {

//   this.localStorage.removeItem("authorizationData")
//   this.localStorage.removeItem("userid")
//   this.localStorage.removeItem("accountid")
//   this.localStorage.removeItem("practiceid")
//   event.returnValue = "before";
// });

// function authDetails() {
//   var userInfo = {
//     accountid : accountid,
//     userId: userid,
//     practiceId: practiceid,
//     toke: authorizationData
//   }
//   return userInfo;
// }

// _______________________________________________________ Do Authorization _______________________________________________________
// var PracticeId = '<%= GetPracticeIdFromSession() %>';
// var AccountId = '<%= GetAccountIdFromSession() %>';
// var UserId = '<%= GetUserIdFromSession() %>';

// var servicesPaths = {
//     "AuthUrl": "http://dev.epm.com:5000/",
//     "AppUrl": "http://localhost:8292/"
// }

// $(document).ready(function () {
//     alert();
//     // DoAuthorization();
// });

// function authorizeCallback() {
//     console.log("AuthorizedController created, has hash");
//     var hash = window.location.hash.substr(1);

//     var result = hash.split('&').reduce(function (result, item) {
//         var parts = item.split('=');
//         result[parts[0]] = parts[1];
//         return result;
//     }, {});

//     var token = "";
//     var id_token = "";
//     var authResponseIsValid = false;
//     if (!result.error) {

//         if (result.state !== window.localStorage.authStateControl) {
//             window.location.href = "Default.aspx";
//             console.log("AuthorizedCallback incorrect state");
//         }
//         else {
//             token = result.access_token;
//             id_token = result.id_token
//             var dataIdToken = getDataFromToken(id_token);

//             // validate nonce
//             if (dataIdToken.nonce !== window.localStorage.authNonce) {
//                 console.log("AuthorizedCallback incorrect nonce");
//                 window.location.href = "Default.aspx";
//             }
//             else {
//                 window.localStorage.authNonce = "";
//                 window.localStorage.authStateControl = "";

//                 authResponseIsValid = true;
//                 console.log("AuthorizedCallback state and nonce validated, returning access token");
//             }
//         }
//     }

//     if (authResponseIsValid) {
//         SetAuthorizationData(token, id_token);

//         getLoggedInUser();
//         //this.$rootScope.isUserLoggedIn = true;
//     }
//     else {
//         ResetAuthorizationData();
//         window.location.href = "Default.aspx";
//         //this.$state.go("unauthorized");
//     }

// }
// function getLoggedInUser() {
//     $.ajax({
//         url: ServicesPathServer + "GetLoggedInUser",
//         contentType: 'application/json; charset=utf-8',
//         type: "Get",
//         dataType: 'json',
//         success: function (data) {
//             window.localStorage.loggedInKey = data[0].loggedInKey;
//             SetLoggedInUser(data);
//             //HFPracticeData.Add("BackEndLogin", "");
//             //HFPracticeData.Set("BackEndLogin", asd);

//             //backendLogin.DoClick();

//         },
//         error: function (data) {

//         }
//     });
// }
// function SetLoggedInUser(data) {

//     $.ajax({
//         type: "POST",
//         contentType: "application/json; charset=utf-8",
//         dataType: "json",
//         url: 'Default.aspx/SetLoggedInUser',
//         data: JSON.stringify({ LstPracticesClass: data }),
//         success: function (data) {

//             backendLogin.DoClick();
//         },
//         error: function (XMLHttpRequest, textStatus, errorThrown) {
//             //   showAlert('Alert', "Connectivity Problem with Server", 'error');
//         }
//     });
// }
// function getDataFromToken(token) {
//     var data;
//     if (typeof token !== 'undefined') {
//         var encoded = token.split('.')[1];
//         data = JSON.parse(urlBase64Decode(encoded));
//     }
//     return data;
// }
// function urlBase64Decode(str) {
//     var output = str.replace('-', '+').replace('_', '/');
//     switch (output.length % 4) {
//         case 0:
//             break;
//         case 2:
//             output += '==';
//             break;
//         case 3:
//             output += '=';
//             break;
//         default:
//             throw 'Illegal base64url string!';
//     }
//     return window.atob(output);
// }
// function ResetAuthorizationData() {
//     window.localStorage.authorizationData = "";
//     window.localStorage.authorizationDataIdToken = "";

//     //this.$rootScope.IsAuthorized = false;
//     //this.$rootScope.HasAdminRole = false;
// }
// function SetAuthorizationData(token, id_token) {

//     if (window.localStorage.authorizationData !== "") {
//         window.localStorage.authorizationData = "";
//     }

//     window.localStorage.authorizationData = token;
//     window.localStorage.authorizationDataIdToken = id_token;

//     //set token expiry time
//     var now = new Date();
//     now.setHours(now.getHours() + 12);
//     window.localStorage.tokenExpiryTime = now.getTime();
//     //end

//     var accessToken = window.localStorage.authorizationData;
//     $.ajaxSetup({
//         beforeSend: function (xhr) {
//             // xhr.setRequestHeader("Accept", "application/vvv.website+json;version=1");
//             xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
//         }
//     });

//     // req.setRequestHeader('Authorization', "Bearer " + accessToken);
//     // $http.defaults.headers.common["Authorization"] = "Bearer " + accessToken;

//     //this.$rootScope.IsAuthorized = true;

//     //var data = this.getDataFromToken(token);
//     //for (var i = 0; i < data.role.length; i++) {
//     //    if (data.role[i] === "dataEventRecords.admin") {
//     //        this.$rootScope.HasAdminRole = true;
//     //    }
//     //}
// }
// function DoAuthorization() {
//     var now = new Date();
//     if (now.getTime() > window.localStorage.tokenExpiryTime) {
//         window.localStorage.authorizationData = "";
//         window.localStorage.authorizationDataIdToken = "";
//         //expire session
//     }
//     if (UserId <= 0 && window.localStorage.authorizationData != "" && window.localStorage.authorizationData != null) {
//         Logoff();
//     }
//     else {
//         ResetAuthorizationData();

//         if (window.location.hash != "") {
//             authorizeCallback();
//         }
//         else {
//             authorize();
//         }
//     }

// }
// function Logoff() {
//     var id_token = window.localStorage.authorizationDataIdToken;
//     var authorizationUrl = servicesPaths.AuthUrl + 'connect/endsession';

//     var id_token_hint = id_token;
//     var post_logout_redirect_uri = servicesPaths.AppUrl + 'Default.aspx';

//     var state = Date.now() + "" + Math.random();

//     var url =
//         authorizationUrl + "?" +
//         "id_token_hint=" + id_token_hint + "&" +
//         "post_logout_redirect_uri=" + encodeURI(post_logout_redirect_uri) + "&" +
//         "state=" + encodeURI(state);

//     window.localStorage.authorizationData = "";
//     window.localStorage.authorizationDataIdToken = "";
//     window.location = url;

// }
// function authorize() {

//     var authorizationUrl = servicesPaths.AuthUrl + 'connect/authorize';

//     var client_id = 'epm';
//     var redirect_uri = servicesPaths.AppUrl + 'Default.aspx';

//     var response_type = "id_token token";
//     var scope = "epmapi openid";
//     var nonce = "N" + Math.random() + "" + Date.now();
//     var state = Date.now() + "" + Math.random();
//     var appType = 4;
//     window.localStorage.authNonce = nonce;
//     window.localStorage.authStateControl = state;

//     var url =
//         authorizationUrl + "?" +
//         "response_type=" + encodeURI(response_type) + "&" +
//         "client_id=" + encodeURI(client_id) + "&" +
//         "redirect_uri=" + encodeURI(redirect_uri) + "&" +
//         "scope=" + encodeURI(scope) + "&" +
//         "nonce=" + encodeURI(nonce) + "&" +
//         "state=" + encodeURI(state) + "&" +
//         "appType=" + appType + "&" +
//         "ipAddress=" + "192.168.10.21";

//     window.location = url;
// }
// function changeHashOnLoad() {
//     window.location.href += "#";
//     setTimeout("changeHashAgain()", "50");
// }
// function changeHashAgain() {
//     window.location.href += "1";
// }
// var storedHash = window.location.hash;
// window.setInterval(function () {
//     if (window.location.hash != storedHash) {
//         window.location.hash = storedHash;
//     }
// }, -1);
