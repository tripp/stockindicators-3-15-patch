YUI.add('gallery-stockindicators-3-15-patch', function (Y, NAME) {

var defaultAxisLabelFormat = {
    value: null
};

Y.CategoryAxisBase.ATTRS.labelFormat = defaultAxisLabelFormat;
Y.CategoryAxis.ATTRS.labelFormat = defaultAxisLabelFormat;

//patch CartesianSeries destructor bug
if(Y.CartesianSeries) {
    Y.CartesianSeries.prototype.destructor = function() {
        if(this.get("rendered"))
        {
            if(this._xDataReadyHandle)
            {
                this._xDataReadyHandle.detach();
            }
            if(this._xDataUpdateHandle)
            {
                this._xDataUpdateHandle.detach();
            }
            if(this._yDataReadyHandle)
            {
                this._yDataReadyHandle.detach();
            }
            if(this._yDataUpdateHandle)
            {
                this._yDataUpdateHandle.detach();
            }
            if(this._xAxisChangeHandle)
            {
                this._xAxisChangeHandle.detach();
            }
            if(this._yAxisChangeHandle)
            {
                this._yAxisChangeHandle.detach();
            }
        }
    };
}
//addresses canvas chaining bug
if(Y.CanvasPath) {
    Y.CanvasPath.prototype.end = function() {
        this._draw();
        return this;
    };
}



}, '@VERSION@');
