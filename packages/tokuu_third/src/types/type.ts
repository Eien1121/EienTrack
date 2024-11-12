declare namespace FB {
    function init(params: any);
    function login(callback: Function);
    function ui(params: any, callback: Function);
}

declare namespace google.accounts.oauth2 {
    function initCodeClient(params: any);
}

declare namespace Telegram.Login {
    function auth(params: any, callback: Function);
}
