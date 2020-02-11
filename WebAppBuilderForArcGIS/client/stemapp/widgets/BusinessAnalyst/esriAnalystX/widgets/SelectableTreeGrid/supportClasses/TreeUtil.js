define(
[
    "../../../utils/ObjectUtil",
    "../../../utils/DateUtil"
],
function (
    ObjectUtil,
    DateUtil
    ) {
    var utils = {};

    // optimization: dojo/date/locale is very slow
    var modifiedToInfo = {};

    // Provides formatted date properties.
    //  item: Object
    //      Item whose 'date' or 'modified' property contains a date.
    //  dateInfo: Object
    //      Optional info object to place date info in.
    // Returns the date info object or a new object populated with properties:
    //      formattedDate: String   Localized short representation of the date.
    //      dateTooltip: String     Localized Short representation of the date and time.
    //      dateTime: Number        Unix time 
    utils.provideDate = function (item, dateInfo) {
        dateInfo = dateInfo || {};
        var time = item.date instanceof Date ? item.date.getTime() : item.modified;
        if (!time) {
            return Object.assign(dateInfo, {
                formattedDate: "",
                dateTooltip: "",
                dateTime: 0
            });
        }

        var cachedInfo = modifiedToInfo[time];

        if (!cachedInfo) {
            var date = item.date instanceof Date ? item.date : ObjectUtil.objectToDate(item.modified);
            cachedInfo = modifiedToInfo[time] = {
                formattedDate: DateUtil.formatDateShort(date),
                dateTooltip: DateUtil.formatDateTimeShort(date),
                dateTime: time
            };
        }

        Object.assign(dateInfo, cachedInfo);

        return dateInfo;
    };

    // callback(node, depth)
    // root has depth -1
    // data - SelectableTree or an array of top tree items.
    // fromDeepToTop - if true, child nodes are traversed before their parent.
    utils.traverseTreeData = function (data, callback, fromDeepToTop) {
        if (!data)
            return;

        function traverseNode(node, depth) {
            !fromDeepToTop && callback(node, depth);
            node.children && node.children.forEach(function (child) {
                traverseNode(child, depth + 1);
            });
            fromDeepToTop && callback(node, depth);
        };

        var root = data.root || Array.isArray(data) && { children: data };
        root && traverseNode(root, -1);
    };

    return utils;
});