import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

var url = window["doorWorx"].LoginUrl;

@Injectable()
export class ErrorHandler {

    private static UNAUTHORIZED: number = 401;
    private static REDIRECT_PATH: string = url;
    private static REDIRECT_PARAMETERS: string = "?ReturnUrl=";

    constructor(private router: Router) {}

    handleError(error: any): Promise<any> {

        if (error.status && error.status === ErrorHandler.UNAUTHORIZED) {

            let origin = window.location.origin;

            let currentPath = window.location.pathname;
            let redirectUrl = ErrorHandler.REDIRECT_PATH + ErrorHandler.REDIRECT_PARAMETERS;

            redirectUrl += this.urlEncode(origin + currentPath);

            window.location.href = redirectUrl;
        }

        return Promise.reject(error.message || error);
    }

    private urlEncode(url: string): string {
        let result = url;
        result = result.replace(/:/g, "%3a");
        result = result.replace(/\//g, "%2f");
        return result;
    }
}