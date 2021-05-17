class CCaptureRecorder {

    capturing = false;
    capturer;
    canvas;
    type = 'gif';

    constructor(canvas, format) {
        this.type = format || this.type;
        this.canvas = canvas;
    }

    start() {
        this.capturer = new window.CCapture( { 
            name: 'render',
            format: this.type, 
            workersPath: 'libs/ccapture/' 
        });
        this.capturing = true;
        this.capturer.start();
    }

    stop() {
        this.capturing = false;
        this.capturer.stop();
        this.capturer.save();
    }

    update() {
        if (this.capturing) {
            this.capturer.capture( this.canvas );
        }
    }

    setCanvas(canvas) {
        this.canvas = canvas;
    }

    setFormat(newFormat) {
        this.type = newFormat;
    }
}
