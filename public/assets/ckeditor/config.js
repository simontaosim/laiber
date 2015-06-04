CKEDITOR.editorConfig = function(e) {
    e.filebrowserBrowseUrl = "/ckeditor/attachment_files",
    e.filebrowserFlashBrowseUrl = "/ckeditor/attachment_files",
    e.filebrowserFlashUploadUrl = "/ckeditor/attachment_files",
    e.filebrowserImageBrowseLinkUrl = "/ckeditor/pictures",
    e.filebrowserImageBrowseUrl = "/ckeditor/pictures",
    e.filebrowserImageUploadUrl = "/ckeditor/pictures",
    e.filebrowserUploadUrl = "/ckeditor/attachment_files",
    e.allowedContent = !0,
    e.filebrowserParams = function() {
        for (var e, t, n, i = document.getElementsByTagName("meta"), o = new Object, a = 0; a < i.length; a++) switch (n = i[a], n.name) {
        case "csrf-token":
            e = n.content;
            break;
        case "csrf-param":
            t = n.content;
            break;
        default:
            continue
        }
        return void 0 !== t && void 0 !== e && (o[t] = e),
        o
    },
    e.addQueryString = function(e, t) {
        var n = [];
        if (!t) return e;
        for (var i in t) n.push(i + "=" + encodeURIComponent(t[i]));
        return e + ( - 1 != e.indexOf("?") ? "&": "?") + n.join("&")
    },
    CKEDITOR.on("dialogDefinition",
    function(t) {
        var n, i, o = t.data.name,
        a = t.data.definition;
        CKEDITOR.tools.indexOf(["link", "image", "attachment", "flash"], o) > -1 && (n = a.getContents("Upload") || a.getContents("upload"), i = null == n ? null: n.get("upload"), i && i.filebrowser && void 0 === i.filebrowser.params && (i.filebrowser.params = e.filebrowserParams(), i.action = e.addQueryString(i.action, i.filebrowser.params)))
    }),
    e.toolbar = [{
        name: "document",
        groups: ["mode", "document", "doctools"],
        items: ["Source"]
    },
    {
        name: "clipboard",
        groups: ["clipboard", "undo"],
        items: ["Cut", "Copy", "Paste", "PasteText", "PasteFromWord", "-", "Undo", "Redo"]
    },
    {
        name: "links",
        items: ["Link", "Unlink", "Anchor"]
    },
    {
        name: "insert",
        items: ["Image", "Flash", "Table", "HorizontalRule", "SpecialChar"]
    },
    {
        name: "paragraph",
        groups: ["list", "indent", "blocks", "align", "bidi"],
        items: ["NumberedList", "BulletedList", "-", "Outdent", "Indent", "-", "Blockquote", "CreateDiv", "-", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock"]
    },
    "/", {
        name: "styles",
        items: ["Styles", "Format"]
    },
    {
        name: "colors",
        items: ["TextColor", "BGColor"]
    },
    {
        name: "basicstyles",
        groups: ["basicstyles", "cleanup"],
        items: ["Bold", "Italic", "Underline", "Strike", "Subscript", "Superscript", "-", "RemoveFormat"]
    }],
    e.toolbar_mini = [{
        name: "paragraph",
        groups: ["list", "indent", "blocks", "align", "bidi"],
        items: ["NumberedList", "BulletedList", "-", "Outdent", "Indent", "-", "Blockquote", "CreateDiv", "-", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock"]
    },
    {
        name: "styles",
        items: [ "Format", "Font"]
    },
    {
        name: "basicstyles",
        groups: ["basicstyles", "cleanup"],
        items: ["Bold", "Italic", "Underline", "Strike", "Subscript", "Superscript", "-"]
    },
    {
        name: "insert",
        items: ["Image", "Table", "HorizontalRule", "SpecialChar"]
    }]
};