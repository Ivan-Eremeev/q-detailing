const smartgrid = require('smart-grid');
const settings = {
    filename: "smart-grid",
    outputStyle: "scss",
    columns: 12,
    offset: "0.4375%",
    mobileFirst: false,
    container: {
        maxWidth: "1600px",
        fields: "30px"
    },
    breakPoints: {
        xxl: {
            width: "1600px"
        },
        xl: {
            width: "1400px"
        },
        lg: {
            width: "1200px"
        },
        md: {
            width: "992px",
            fields: "15px"
        },
        sm: {
            width: "720px"
        },
        xs: {
            width: "576px"
        }
    },
    mixinNames: {
        container: "wrapper",
        row: "row-flex",
        rowFloat: "row-float",
        rowInlineBlock: "row-ib",
        rowOffsets: "row-offsets",
        column: "col",
        size: "size",
        columnFloat: "col-float",
        columnInlineBlock: "col-ib",
        columnPadding: "col-padding",
        columnOffsets: "col-offsets",
        shift: "shift",
        from: "from",
        to: "to",
        fromTo: "from-to",
        reset: "reset",
        clearfix: "clearfix",
        debug: "debug"
    },
    tab: "    ",
    defaultMediaDevice: "screen",
    detailedCalc: false
};
smartgrid('./src/styles', settings);