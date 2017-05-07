webpackJsonp([2,0],[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var a=n(49),i=o(a),r=n(46),d=o(r),s=n(153),c=o(s);n(126),n(116),n(117);var l=n(48),u=o(l),m=n(50),v=o(m),f=n(45),_=o(f),p=n(5),h=o(p);n(127),n(115);var g=n(68),b=o(g);window.axios=v.default,window.querystring=_.default,i.default.prototype.$http=v.default,window.axios.defaults.headers.common={"X-Requested-With":"XMLHttpRequest"},h.default.loggedIn()&&(window.axios.defaults.headers.common={Authorization:h.default.getAuthHeader()}),i.default.use(c.default),i.default.use(u.default),i.default.material.registerTheme("custon",{primary:{color:"red",hue:"A200"},accent:{color:"blue",hue:"300"}}),i.default.material.setCurrentTheme("custon"),new i.default({el:"#app",template:"<App/>",components:{App:d.default},router:b.default})},,,,,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n){setTimeout(function(){n("joe@example.com"===t&&"password1"===e?{authenticated:!0,token:Math.random().toString(36).substring(7)}:{authenticated:!1})},0)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(8),r=o(i);e.default={login:function(t,e,n){var o=this;return n=arguments[arguments.length-1],window.localStorage.token?(n&&n(!0),void this.onChange(!0)):void a(t,e,function(t){t.authenticated?(window.localStorage.token=t.token,n&&n(!0),o.onChange(!0)):(n&&n(!1),o.onChange(!1))})},getToken:function(){return window.localStorage.getItem(r.default.STORAGE_TOKEN_KEY)},saveToken:function(t){window.localStorage.setItem(r.default.STORAGE_TOKEN_KEY,t)},logout:function(t){delete window.localStorage.token,t&&t(),this.onChange(!1)},loggedIn:function(){return!!window.localStorage.getItem(r.default.STORAGE_TOKEN_KEY)},getAuthHeader:function(){return"Bearer "+this.getToken()},getLatitude:function(){return window.localStorage.getItem(r.default.LATITUDE)},getLongitude:function(){return window.localStorage.getItem(r.default.LONGITUDE)},saveLatitude:function(t){return window.localStorage.setItem(r.default.LATITUDE,t)},saveLongitude:function(t){return window.localStorage.setItem(r.default.LONGITUDE,t)},onChange:function(){}}},,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={STORAGE_TOKEN_KEY:"token",OAUTH_CLIENT_ID:1,OAUTH_REDIRECT_URI:"http://localhost:8090/login",OAUTH_SERVER_URL:"https://todosbackend.pdavila.2dam.acacha.org/oauth/authorize?",API_TASK_URL:"https://todosbackend.pdavila.2dam.acacha.org/api/v1/task",API_PROFILE_URL:"https://todosbackend.pdavila.2dam.acacha.org/api/v1/user",LATITUDE:"latitude",LONGITUDE:"longitude",ANDROID_SENDER_ID:"925822830182",REGISTER_GCM_TOKEN_URL:"https://todosbackend.pdavila.2dam.acacha.org/api/v1/user/gcmtoken",GET_MESSAGES_URL:"https://todosbackend.pdavila.2dam.acacha.org/api/v1/user/messages"};e.default=n},,,,,,,,,,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(32),i=o(a),r=n(8),d=o(r),s=n(128),c=o(s),l=n(47),u=o(l),m=n(5),v=o(m);e.default={components:{"vue-pull-refresh":u.default},data:function(){return{PulltoRefreshConfig:{errorLabel:"Error Try again",startLabel:"Swipe to refresh",readyLabel:"Swipe to refresh",loadingLabel:"Reloading Components"}}},methods:{avatarUrl:function(){return"http:"+c.default.url(this.email)},fetchUserProfile:function(){var t=this;this.$http.get(d.default.API_PROFILE_URL).then(function(e){t.connecting=!1,t.id=e.data.id,t.name=e.data.name,t.email=e.data.email,t.createdAt=e.data.created_at,t.updatedAt=e.data.updated_at,t.avatar=t.avatarUrl(),t.latitude=v.default.getLatitude(),t.longitude=v.default.getLongitude()},function(e){t.connecting=!1,t.showConnectionError()})},showConnectionError:function(){this.$refs.connectionError.open()},onRefresh:function(){var t=this;return new i.default(function(t,e){setTimeout(function(){t()},1e3)}).then(function(){t.fetchUserProfile()})}},created:function(){var t=this;setTimeout(function(){t.fetchUserProfile()},2500)}}},,,,,,,,,,,,,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(8),i=o(a),r=n(46),d=o(r);e.default={enable:function(){console.log("Enabling notifications"),this.initPushNotifications(),this.registerPushNotifications(),this.processPushNotifications()},initPushNotifications:function(){d.default.push=window.PushNotification.init({android:{senderID:i.default.ANDROID_SENDER_ID},ios:{sound:!0,vibration:!0,badge:!0},windows:{}})},registerPushNotifications:function(){d.default.push.on("registration",function(t){console.log("registration event: "+t.registrationId);var e=window.localStorage.getItem("registrationId");e!==t.registrationId&&window.localStorage.setItem("registrationId",t.registrationId)})},processPushNotifications:function(){d.default.push.on("error",function(t){console.log("push error = "+t.message)}),d.default.push.on("notification",function(t){console.log("Notification event RECEIVED!!!!!!!!!!!!"),console.log("Title: "+t.title),console.log("Message: "+t.message),console.log("Foreground: "+t.additionalData.foreground)})}}},,,,,,,,,,,,,,,function(t,e,n){n(118);var o=n(3)(n(70),n(143),null,null);t.exports=o.exports},,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(48),i=o(a),r=n(69),d=o(r),s=n(5),c=o(s),l=new i.default({mode:"history",routes:d.default});l.beforeEach(function(t,e,n){return t.meta.auth&&!c.default.loggedIn()?n("/login"):void n()}),e.default=l},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(140),i=o(a),r=n(139),d=o(r),s=n(138),c=o(s),l=n(141),u=o(l),m=n(134),v=o(m),f=n(142),_=o(f),p=n(133),h=o(p),g=n(137),b=o(g),w=n(136),k=o(w),y=n(135),C=o(y),T=[{path:"/android_asset/www/index.html",component:i.default,meta:{auth:!0}},{path:"/index.html",component:i.default,meta:{auth:!0}},{path:"",component:i.default,meta:{auth:!0}},{path:"/",component:i.default,meta:{auth:!0}},{path:"/todos",component:i.default,meta:{auth:!0}},{path:"/tokens",component:u.default,meta:{auth:!0}},{path:"/profile",component:d.default,meta:{auth:!0}},{path:"/notifications",component:c.default,meta:{auth:!0}},{path:"/cordova",component:h.default,meta:{auth:!1}},{path:"/device-info",component:v.default,meta:{auth:!1}},{path:"/vibrate",component:_.default,meta:{auth:!1}},{path:"/login",component:k.default,meta:{auth:!1}},{path:"/exit",component:C.default,meta:{auth:!1}},{path:"*",component:b.default,meta:{auth:!1}}];e.default=T},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(18),i=o(a),r=n(31),d=o(r);e.default={name:"app",mixins:[i.default],data:function(){return{avatar:"",name:null,email:null,onDeviceReady:!1}},created:function(){console.log(window.location.href),document.addEventListener("deviceready",this.onDeviceReady,!1)},methods:{onDeviceReady:function(){console.log("Working on platform: "+window.device.platform),d.default.enable()},toggleLeftSidenav:function(){this.$refs.leftSidenav.toggle()}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){console.log("Component mounted.")}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{cordova:"",model:"",platform:"",uuid:"",version:"",manufacturer:"",isVirtual:"",serial:""}},created:function(){document.addEventListener("deviceready",this.onDeviceReady,!1)},beforeDestroy:function(){document.removeEventListener("deviceready",this.onBeforeDestroy,!1)},methods:{onDeviceReady:function(){this.cordova=window.device.cordova,this.model=window.device.model,this.platform=window.device.platform,this.uuid=window.device.uuid,this.version=window.device.version,this.manufacturer=window.device.manufacturer,this.isVirtual=window.device.isVirtual,this.serial=window.device.serial},onBeforeDestroy:function(){console.log("Device onBeforeDestroy!")}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={created:function(){document.addEventListener("deviceready",this.onDeviceReady,!1)},methods:{onDeviceReady:function(){navigator.notification.confirm("Do you want to quit",this.onConfirmQuit,"QUIT TITLE","OK,Cancel")},onConfirmQuit:function(t){1===t&&navigator.app.exitApp()}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(8),i=o(a),r=n(5),d=o(r);e.default={data:function(){return{authorized:!1}},methods:{extractToken:function(t){return t.match(/#(?:access_token)=([\S\s]*?)&/)[1]},login:function t(){e={client_id:i.default.OAUTH_CLIENT_ID,redirect_uri:i.default.OAUTH_REDIRECT_URI,response_type:"token",scope:""};var e=window.querystring.stringify(e);if(window.cordova&&"browser"!==window.device.platform){var n=window.cordova.InAppBrowser.open(i.default.OAUTH_SERVER_URL+e,"_blank","location=yes"),t=this;n.addEventListener("loadstart",function(e){var o=e.url,a=null;if(o.split("#")[1]&&(a=o.split("#")[1]),a){var i=t.extractToken("#"+String(a));i&&(d.default.saveToken(i),t.authorized=!0,n.close())}})}else window.location.replace(i.default.OAUTH_SERVER_URL+e)},initLogout:function(){this.openDialog("sureToLogout")},openDialog:function(t){this.$refs[t].open()},logout:function(){window.localStorage.removeItem(i.default.STORAGE_TOKEN_KEY),this.authorized=!1},onCloseSureToLogout:function(t){"ok"===t&&this.logout()}},created:function(){if(document.location.hash)var t=this.extractToken(document.location.hash);t&&d.default.saveToken(t),null==this.token&&(this.token=d.default.getToken()),this.token?(this.authorized=!0,this.$http.defaults.headers.common.Authorization=d.default.getAuthHeader()):(this.authorized=!1,this.$http.defaults.headers.common.Authorization="")}}},function(t,e){"use strict"},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(31),i=o(a);e.default={created:function(){document.addEventListener("deviceready",this.onDeviceReady,!1)},methods:{onDeviceReady:function(){i.default.enable()}},props:{notifications:{type:Array,default:function(){return[]}}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(5),i=o(a),r=n(18),d=o(r);e.default={mixins:[d.default],data:function(){return{avatar:"",id:null,name:null,email:null,createdAt:null,updatedAt:null,connecting:!0,latitude:"",longitude:""}},created:function(){document.addEventListener("deviceready",this.onDeviceReady,!1)},beforeDestroy:function(){document.removeEventListener("deviceready",this.onBeforeDestroy,!1)},mounted:function(){this.latitude=i.default.getLatitude(),this.longitude=i.default.getLongitude()},methods:{onDeviceReady:function(){console.log("Device Ready")},onSaveUserPhone:function(){navigator.contacts||this.$refs.contactsError.open(),navigator.notification.confirm("Do You Want Save",this.onConfirmSaveUser,"Save User Phone","OK,Cancel")},onConfirmSaveUser:function(t){if(1===t){var e=navigator.contacts.create();e.name=this.name,e.displayName=this.name,e.emails=this.email;var n=[];n[0]=new window.ContactField("mobile",this.phone,!0),e.phoneNumbers=n,e.save()}},onSaveLocation:function(){navigator.geolocation||this.$refs.geolocationError.open(),navigator.notification.confirm("Do You Want Save",this.onConfirmSaveLocation,"Save Geolocation","OK,Cancel")},onConfirmSaveLocation:function(t){1===t&&navigator.geolocation.getCurrentPosition(function(t){i.default.saveLatitude(t.coords.latitude),i.default.saveLongitude(t.coords.longitude),this.latitude=i.default.getLatitude(),this.longitude=i.default.getLongitude()})},onChangeAvatar:function(){navigator.camera||this.$refs.cameraError.open();var t={quality:50,destinationType:window.Camera.DestinationType.DATA_URL,sourceType:1,encodingType:0},e=this;return navigator.camera.getPicture(function(t){e.avatar="data:image/jpeg;base64,"+t,e.openDialog("ChangeAvatar")},function(){navigator.notification.alert("Error Change Avatar",null,"Avatar","OK")},t),!1},onBeforeDestroy:function(){console.log("Device onBeforeDestroy!")}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(32),i=o(a),r=n(8),d=o(r),s=n(47),c=o(s);e.default={components:{"vue-pull-refresh":c.default},data:function(){return{todos:[],connecting:!0,perPage:15,page:1,total:Number,PulltoRefreshConfig:{errorLabel:"Error Try again",startLabel:"Swipe to refresh",readyLabel:"Swipe to refresh",loadingLabel:"Reloading Components"}}},created:function(){var t=this;setTimeout(function(){t.fetchData()},500)},methods:{fetchData:function(){return this.fetchPage(1)},fetchPage:function(t){var e=this;this.$http.get(d.default.API_TASK_URL+"?page="+t).then(function(t){e.connecting=!1,e.todos=t.data.data,e.total=t.data.total,e.perPage=t.data.per_page,e.page=t.data.current_page},function(t){e.connecting=!1,e.showConnectionError(),e.authorized=!1})},showConnectionError:function(){this.$refs.connectionError.open()},onPagination:function(t){console.log(t.page),this.fetchPage(t.page)},onRefresh:function(t){var e=this;return new i.default(function(t,e){setTimeout(function(){t()},1e3)}).then(function(){e.fetchPage(t.page)})}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(18),i=o(a),r=n(5),d=o(r);e.default={mixins:[i.default],data:function(){return{name:null,email:null,connecting:!0,token:d.default.getToken()}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{delayHasTried:null,delayTime:null,teTime:null,cTime:null}},created:function(){document.addEventListener("deviceready",this.onDeviceReady,!1)},beforeDestroy:function(){document.removeEventListener("deviceready",this.onBeforeDestroy,!1)},methods:{onDeviceReady:function(){console.log("Device Ready")},onVibration:function(){navigator.vibrate?navigator.vibrate([1e3,1e3,1e3,1e3,1e3,500,1e3,500]):navigator.notification.alert("Vibration API not supported from device",null,"Vibration Plugin","OK")},onBeforeDestroy:function(){console.log("Device onBeforeDestroy!")},countTouch:function(t){this.delayHasTried=!0,this.teTime=Date.now(),t||(this.delayTime=this.cTime-this.teTime)},countClick:function(t){this.delayHasTried=!0,this.cTime=Date.now(),t&&(this.delayTime=this.cTime-this.teTime)}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,function(t,e,n){var o=n(3)(n(71),n(149),null,null);t.exports=o.exports},function(t,e,n){n(123);var o=n(3)(n(72),n(148),null,null);t.exports=o.exports},function(t,e,n){var o=n(3)(n(73),null,null,null);t.exports=o.exports},function(t,e,n){n(125);var o=n(3)(n(74),n(152),null,null);t.exports=o.exports},function(t,e,n){n(122);var o=n(3)(n(75),n(147),null,null);t.exports=o.exports},function(t,e,n){n(120);var o=n(3)(n(76),n(145),null,null);t.exports=o.exports},function(t,e,n){n(119);var o=n(3)(n(77),n(144),null,null);t.exports=o.exports},function(t,e,n){n(124);var o=n(3)(n(78),n(150),null,null);t.exports=o.exports},function(t,e,n){n(121);var o=n(3)(n(79),n(146),null,null);t.exports=o.exports},function(t,e,n){var o=n(3)(n(80),n(151),null,null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"phone-viewport"},[n("md-toolbar",[n("md-button",{staticClass:"md-icon-button",nativeOn:{click:function(e){t.toggleLeftSidenav(e)}}},[n("md-icon",[t._v("menu")])],1),t._v(" "),n("h2",{staticClass:"md-title"},[t._v("Todos")])],1),t._v(" "),n("div",{staticClass:"container"}),t._v(" "),n("md-sidenav",{ref:"leftSidenav",staticClass:"md-left",attrs:{"md-swipeable":""}},[n("md-toolbar",{staticClass:"md-account-header"},[n("md-list",{staticClass:"md-transparent"},[n("md-list-item",{staticClass:"md-list-text-container"},[n("md-avatar",{staticClass:"md-large"},[n("img",{attrs:{src:t.avatar,alt:t.name}})]),t._v(" "),n("div",{staticClass:"md-list-text-container"},[n("span",[t._v(t._s(t.name))]),t._v(" "),n("span",[t._v(t._s(t.email))])])],1)],1)],1),t._v(" "),n("div",{staticClass:"main-sidebar-links"},[n("md-list",{staticClass:"md-dense"},[n("md-list-item",[n("router-link",{attrs:{exact:"",to:"/todos"},nativeOn:{click:function(e){t.toggleLeftSidenav(e)}}},[n("md-icon",[t._v("move_to_inbox")]),n("p",[t._v("Todos")])],1)],1),t._v(" "),n("md-list-item",[n("router-link",{attrs:{exact:"",to:"/profile"},nativeOn:{click:function(e){t.toggleLeftSidenav(e)}}},[n("md-icon",[t._v("face")]),n("p",[t._v("Profile")])],1)],1),t._v(" "),n("md-list-item",[n("router-link",{attrs:{exact:"",to:"/notifications"},nativeOn:{click:function(e){t.toggleLeftSidenav(e)}}},[n("md-icon",[t._v("notifications")]),n("p",[t._v("Notifiactions")])],1)],1),t._v(" "),n("md-list-item",[n("router-link",{attrs:{exact:"",to:"/tokens"},nativeOn:{click:function(e){t.toggleLeftSidenav(e)}}},[n("md-icon",[t._v("https")]),n("p",[t._v("Tokens")])],1),t._v(" "),n("md-divider",{staticClass:"md-inset"})],1),t._v(" "),n("md-list-item",[n("md-icon",[t._v("phonelink_setup")]),t._v(" "),n("span",[t._v("Others Components")]),t._v(" "),n("md-list-expand",[n("md-list",[n("md-list-item",{staticClass:"md-inset"},[n("router-link",{attrs:{exact:"",to:"/device-info"},nativeOn:{click:function(e){t.toggleLeftSidenav(e)}}},[n("md-icon",[t._v("perm_device_information")]),n("p",[t._v("Device Info")])],1)],1),t._v(" "),n("md-list-item",{staticClass:"md-inset"},[n("router-link",{attrs:{exact:"",to:"/vibrate"},nativeOn:{click:function(e){t.toggleLeftSidenav(e)}}},[n("md-icon",[t._v("alarm_on")]),n("p",[t._v("Vibrate")])],1)],1),t._v(" "),n("md-list-item",{staticClass:"md-inset"},[n("router-link",{attrs:{exact:"",to:"/cordova"},nativeOn:{click:function(e){t.toggleLeftSidenav(e)}}},[n("md-icon",[t._v("remove_from_queue")]),n("p",[t._v("Cordova")])],1)],1)],1)],1)],1),t._v(" "),n("md-list-item",[n("router-link",{attrs:{exact:"",to:"/login"},nativeOn:{click:function(e){t.toggleLeftSidenav(e)}}},[n("md-icon",[t._v("exit_to_app")]),n("p",[t._v("Login/Logout")])],1)],1),t._v(" "),n("md-list-item",[n("router-link",{attrs:{exact:"",to:"/exit"},nativeOn:{click:function(e){t.toggleLeftSidenav(e)}}},[n("md-icon",[t._v("exit_to_app")]),n("p",[t._v("Exit App")])],1)],1)],1)],1)],1),t._v(" "),n("transition",{attrs:{name:"bounce","enter-active-class":"animated bounceIn","leave-active-class":"animated bounceOut"}},[n("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-pull-refresh",{attrs:{"on-refresh":t.onRefresh,config:t.PulltoRefreshConfig}},[n("div",[n("div",{attrs:{align:"center"}},[n("md-spinner",{directives:[{name:"show",rawName:"v-show",value:t.connecting,expression:"connecting"}],attrs:{"md-size":300,"md-indeterminate":""}})],1),t._v(" "),n("md-card",{attrs:{"md-with-hover":""}},[n("md-card-header",[n("md-avatar",[n("img",{attrs:{src:t.avatar,alt:t.name}})]),t._v(" "),n("div",{staticClass:"md-title"},[t._v(t._s(t.id)+" - "+t._s(t.name))]),t._v(" "),n("div",{staticClass:"md-subhead"},[t._v(t._s(t.email))])],1),t._v(" "),n("md-card-content",[n("form",{attrs:{novalidate:""},on:{submit:function(e){e.stopPropagation(),e.preventDefault(),t.submit(e)}}},[n("md-input-container",[n("md-icon",[t._v("person")]),t._v(" "),n("label",[t._v("Name")]),t._v(" "),n("md-input",{attrs:{placeholder:"Put your name here"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),n("md-input-container",[n("md-icon",[t._v("email")]),t._v(" "),n("label",[t._v("Email")]),t._v(" "),n("md-input",{attrs:{placeholder:"Put your email here"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),n("md-input-container",[n("md-icon",[t._v("date_range")]),t._v(" "),n("label",[t._v("Created at")]),t._v(" "),n("md-input",{attrs:{placeholder:"Date here"},model:{value:t.createdAt,callback:function(e){t.createdAt=e},expression:"createdAt"}})],1),t._v(" "),n("md-input-container",[n("md-icon",[t._v("date_range")]),t._v(" "),n("label",[t._v("Updated at")]),t._v(" "),n("md-input",{attrs:{placeholder:"Date here"},model:{value:t.updatedAt,callback:function(e){t.updatedAt=e},expression:"updatedAt"}})],1)],1),t._v(" "),n("md-button",{staticClass:"md-raised md-primary"},[n("router-link",{staticClass:"md-button",attrs:{exact:"",to:"/tokens"}},[t._v("Show Token")])],1)],1),t._v(" "),n("md-card-content",[n("md-input-container",[n("md-icon",[t._v("location_on")]),t._v(" "),n("label",[t._v("Position Latitude")]),t._v(" "),n("md-input",{attrs:{placeholder:"Latitude here"},model:{value:t.latitude,callback:function(e){t.latitude=e},expression:"latitude"}})],1),t._v(" "),n("md-input-container",[n("md-icon",[t._v("location_on")]),t._v(" "),n("label",[t._v("Position Longitude")]),t._v(" "),n("md-input",{attrs:{placeholder:"Longitude here"},model:{value:t.longitude,callback:function(e){t.longitude=e},expression:"longitude"}})],1)],1),t._v(" "),n("md-card-actions",[n("md-button",{nativeOn:{click:function(e){t.onSaveUserPhone(e)}}},[n("md-icon",[t._v("contacts")]),t._v(" "),n("span",{staticClass:"md-subheading"},[t._v("Contact")])],1),t._v(" "),n("md-button",{nativeOn:{click:function(e){t.onSaveLocation(e)}}},[n("md-icon",[t._v("add_location")]),t._v(" "),n("span",{staticClass:"md-subheading"},[t._v("Location")])],1),t._v(" "),n("md-button",{nativeOn:{click:function(e){t.onChangeAvatar(e)}}},[n("md-icon",[t._v("person_pin")]),t._v(" "),n("span",{staticClass:"md-subheading"},[t._v("Change Avatar")])],1)],1),t._v(" "),n("md-snackbar",{ref:"connectionError",attrs:{"md-position":"bottom center","md-duration":"4000"}},[n("span",[t._v("Connection error. Please reconnect using connect button!.")])]),t._v(" "),n("md-snackbar",{ref:"contactsError",attrs:{"md-position":"bottom center","md-duration":"4000"}},[n("span",[t._v("Contacts API not supported!")])]),t._v(" "),n("md-snackbar",{ref:"geolocationError",attrs:{"md-position":"bottom center","md-duration":"4000"}},[n("span",[t._v("Geolocation API not supported!")])]),t._v(" "),n("md-snackbar",{ref:"cameraError",attrs:{"md-position":"bottom center","md-duration":"4000"}},[n("span",[t._v("Camera API not supported!")])]),t._v(" "),n("md-snackbar",{ref:"ChangeAvatar",attrs:{"md-position":"bottom center","md-duration":"4000"}},[n("span",[t._v("Your avatar was changed successfully!")])])],1)],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"notifications"}},[n("h1",[t._v("Received notifications: ")]),t._v(" "),t._l(t.notifications,function(e,o){return n("md-card",[n("md-card-header",[n("div",{staticClass:"md-title"},[t._v(t._s(e.user.name))])]),t._v(" "),n("md-card-content",[t._v(t._s(e.message))])],1)})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-pull-refresh",{attrs:{"on-refresh":t.onRefresh,config:t.PulltoRefreshConfig}},[n("div",[n("div",{attrs:{align:"center"}},[n("md-spinner",{directives:[{name:"show",rawName:"v-show",value:t.connecting,expression:"connecting"}],attrs:{"md-size":300,"md-indeterminate":""}})],1),t._v(" "),n("md-card",{attrs:{"md-with-hover":""}},[n("md-card-content",[n("md-input-container",[n("md-icon",[t._v("person")]),t._v(" "),n("label",[t._v("Name")]),t._v(" "),n("md-input",{attrs:{placeholder:"Name",disabled:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),n("md-input-container",[n("md-icon",[t._v("mail")]),t._v(" "),n("label",[t._v("Email")]),t._v(" "),n("md-input",{attrs:{placeholder:"Email",disabled:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),n("md-input-container",[n("md-icon",[t._v("lock")]),t._v(" "),n("label",[t._v("Your Token")]),t._v(" "),n("md-textarea",{attrs:{placeholder:"Token",disabled:""},model:{value:t.token,callback:function(e){t.token=e},expression:"token"}})],1),t._v(" "),n("md-button",{staticClass:"md-raised md-primary"},[n("router-link",{staticClass:"md-button",attrs:{exact:"",to:"/profile"}},[t._v("Return to Profile")])],1)],1),t._v(" "),n("md-snackbar",{ref:"connectionError",attrs:{"md-position":"bottom center","md-duration":"4000"}},[n("span",[t._v("Connection error. Please reconnect using connect button!.")])])],1)],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("ROUTE NOT FOUND")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-card",{attrs:{"md-with-hover":""}},[n("md-card-content",[n("form",{attrs:{novalidate:""}},[n("md-input-container",[n("md-icon",[t._v("remove_from_queue")]),t._v(" "),n("label",[t._v("Cordova")]),t._v(" "),n("md-input",{attrs:{disabled:""},model:{value:t.cordova,callback:function(e){t.cordova=e},expression:"cordova"}})],1),t._v(" "),n("md-input-container",[n("md-icon",[t._v("input")]),t._v(" "),n("label",[t._v("Model")]),t._v(" "),n("md-input",{attrs:{disabled:""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1),t._v(" "),n("md-input-container",[n("md-icon",[t._v("android")]),t._v(" "),n("label",[t._v("Platform")]),t._v(" "),n("md-input",{attrs:{disabled:""},model:{value:t.platform,callback:function(e){t.platform=e},expression:"platform"}})],1),t._v(" "),n("md-input-container",[n("md-icon",[t._v("info")]),t._v(" "),n("label",[t._v("Uuid")]),t._v(" "),n("md-input",{attrs:{disabled:""},model:{value:t.uuid,callback:function(e){t.uuid=e},expression:"uuid"}})],1),t._v(" "),n("md-input-container",[n("md-icon",[t._v("system_update_at")]),t._v(" "),n("label",[t._v("Version")]),t._v(" "),n("md-input",{attrs:{disabled:""},model:{value:t.version,callback:function(e){t.version=e},expression:"version"}})],1),t._v(" "),n("md-input-container",[n("md-icon",[t._v("check_circle")]),t._v(" "),n("label",[t._v("isVirtual")]),t._v(" "),n("md-input",{attrs:{disabled:""},model:{value:t.isVirtual,callback:function(e){t.isVirtual=e},expression:"isVirtual"}})],1),t._v(" "),n("md-input-container",[n("md-icon",[t._v("developer_mode")]),t._v(" "),n("label",[t._v("serial")]),t._v(" "),n("md-input",{attrs:{disabled:""},model:{value:t.serial,callback:function(e){t.serial=e},expression:"serial"}})],1)],1)])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8 col-md-offset-2"},[n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-heading"},[t._v("Cordova Component")]),t._v(" "),n("div",{staticClass:"panel-body"},[t._v("\n                    I'm an cordova component!\n                ")])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-pull-refresh",{attrs:{"on-refresh":t.onRefresh,config:t.PulltoRefreshConfig}},[n("div",[n("div",{attrs:{align:"center"}},[n("md-spinner",{directives:[{name:"show",rawName:"v-show",value:t.connecting,expression:"connecting"}],attrs:{"md-size":300,"md-indeterminate":""}})],1),t._v(" "),n("md-table-card",[n("md-toolbar",[n("h1",{staticClass:"md-title"},[t._v("Todos")]),t._v(" "),n("md-button",{staticClass:"md-icon-button"},[n("md-icon",[t._v("filter_list")])],1),t._v(" "),n("md-button",{staticClass:"md-icon-button"},[n("md-icon",[t._v("search")])],1)],1),t._v(" "),n("md-table",{attrs:{"md-sort":"name","md-sort-type":"desc"}},[n("md-table-header",[n("md-table-row",[n("md-table-head",{attrs:{"md-sort-by":"id","md-numeric":"","md-tooltip":"The id of the task."}},[t._v("ID")]),t._v(" "),n("md-table-head",{attrs:{"md-sort-by":"name","md-tooltip":"The name of the task."}},[t._v("Name")]),t._v(" "),n("md-table-head",{attrs:{"md-sort-by":"priority","md-numeric":"","md-tooltip":"The priority for task"}},[t._v("Priority")]),t._v(" "),n("md-table-head",{attrs:{"md-tooltip":"Task is done?"}},[t._v("Done")])],1)],1),t._v(" "),n("md-table-body",t._l(t.todos,function(e,o){return n("md-table-row",{attrs:{"md-auto-select":"","md-selection":""}},[n("md-table-cell",{attrs:{"md-numeric":""}},[t._v(t._s(o+1))]),t._v(" "),n("md-table-cell",[t._v(t._s(e.name))]),t._v(" "),n("md-table-cell",{attrs:{"md-numeric":""}},[t._v(t._s(e.priority))]),t._v(" "),n("md-table-cell",[n("md-switch",{staticClass:"md-primary",attrs:{id:"done",name:"done"},model:{value:e.done,callback:function(t){e.done=t},expression:"todo.done"}})],1),t._v(" "),n("md-table-cell",[n("md-button",{staticClass:"md-raised md-primary"},[n("md-icon",[t._v("edit")])],1),t._v(" "),n("md-button",{staticClass:"md-raised md-accent"},[n("md-icon",[t._v("delete")])],1)],1)],1)}))],1),t._v(" "),n("md-table-pagination",{attrs:{"md-size":t.perPage,"md-total":t.total,"md-page":t.page,"md-label":"Rows","md-separator":"of","md-page-options":[15,25,50]},on:{pagination:t.onPagination}})],1),t._v(" "),n("md-snackbar",{ref:"connectionError",attrs:{"md-position":"bottom center","md-duration":"4000"}},[n("span",[t._v("Connection error. Please reconnect using connect button!.")])])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"md-button",on:{touchend:function(e){t.countTouch(!0)},click:function(e){t.countClick(!0)}}},[t._v("Delay")]),t._v(" "),n("md-list",[n("p",{directives:[{name:"show",rawName:"v-show",value:t.delayHasTried,expression:"delayHasTried"}]},[t._v(t._s(t.delayTime)+"ms.")])]),t._v(" "),n("md-button",{staticClass:"md-raised md-primary",nativeOn:{click:function(e){t.onVibration(e)}}},[t._v("Vibrate")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-card",[n("md-card-header",[n("div",{staticClass:"md-title"},[t._v("Login")])]),t._v(" "),n("md-card-content",[n("md-button",{directives:[{name:"show",rawName:"v-show",value:!t.authorized,expression:"!authorized"}],staticClass:"md-raised md-primary",nativeOn:{click:function(e){t.login(e)}}},[t._v("Login")]),t._v(" "),n("md-button",{directives:[{name:"show",rawName:"v-show",value:t.authorized,expression:"authorized"}],staticClass:"md-raised md-primary",nativeOn:{click:function(e){t.initLogout(e)}}},[t._v("Logout")])],1),t._v(" "),n("md-dialog-confirm",{ref:"sureToLogout",attrs:{"md-title":"Logout","md-content":"Are you sure you want to logout?","md-ok-text":"Ok","md-cancel-text":"Cancel"},on:{close:t.onCloseSureToLogout}})],1)},staticRenderFns:[]}}]);
//# sourceMappingURL=app.44dd98159558f6bfc77c.js.map