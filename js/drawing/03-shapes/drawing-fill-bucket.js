class DrawingFillBucket extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown() { }

    onDragging() { }
    onMouseMove() { }

    onMouseUp(coord, event) {
        paintBucketFill(coord, this.contextReal)
        cPush()
    }
    onMouseLeave() { }
    onMouseEnter() { }
}