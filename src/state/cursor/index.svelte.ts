type TSeverity = "success" | "info" | "warning" | "error";

interface IOptions {
    icon?: TSeverity;
    duration?: number;
}

class CursorNotice {
    private static instance: CursorNotice;
    shown: boolean = $state(false);
    message: string = $state("");
    icon: TSeverity = $state("info");
    severity: TSeverity = $state("info");

    // delay to hide
    private hideTimeout: number | null = null;
    private defaultDuration = 3000;

    private constructor() {}

    public static getInstance(): CursorNotice {
        if (!CursorNotice.instance) {
            CursorNotice.instance = new CursorNotice();
        }
        return CursorNotice.instance;
    }

    /**
     * By default, duration is 3 seconds.
     */
    private show(message: string, severity: TSeverity, options?: IOptions) {
        this.shown = true;
        this.message = message;
        this.severity = severity;
        this.icon = options?.icon ?? severity;

        // Clear any previous timeout
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
        }

        const duration = options?.duration ?? this.defaultDuration;

        // Automatically hide after the specified duration
        this.hideTimeout = window.setTimeout(() => {
            this.hide();
        }, duration);
    }

    // public success(message: string, options?: IOptions) {
    //     this.show(message, "success", options);
    // }

    public info(message: string, options?: IOptions) {
        this.show(message, "info", options);
    }

    // public warning(message: string, options?: IOptions) {
    //     this.show(message, "warning", options);
    // }

    // public error(message: string, options?: IOptions) {
    //     this.show(message, "error", options);
    // }

    public hide() {
        this.shown = false;
        this.message = "";
        this.severity = "info";
        this.icon = "info";

        // Clear the timeout when manually hiding
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
    }
}

export default CursorNotice.getInstance();
