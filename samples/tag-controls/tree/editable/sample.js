﻿$.views.tags({
  tree: {
    render: function(val) {
      this.data = val;
    },
    onAfterLink: function() {
      var self = this;
      self.contents("li").first()
        .on("click", ".toggle", function() {
          self.toggle();
        });
    },
    template: "#treeTemplate",

    //METHODS
    toggle: function() {
      $.observable(this.data).setProperty("expanded", !this.data.expanded);
    },
    dataBoundOnly: true
  },
  editableTree: {
    render: function(val) {
      this.data = val;
    },
    onAfterLink: function() {
      var self = this;
      self.contents("li").first()
      .on("click", ".toggle", function() {
        self.toggle();
      })
      .on("click", ".remove", function() {
        self.remove();
      })
      .on("click", ".add", function() {
        self.addFolder();
      });
    },
    template: "#editableTreeTemplate",

    //METHODS
    toggle: function() {
      $.observable(this.data).setProperty("expanded", !this.data.expanded);
    },
    remove: function() {
      var parentFolders = this.parent.data.folders,
        index = this.tagCtx.view.index;
      $.observable(parentFolders).remove(index);
    },
    addFolder: function() {
      $.observable(this.data.folders).insert({
        name: "new folder",
        folders: []
      });
      $.observable(this.data).setProperty("expanded", true);
    },
    dataBoundOnly: true
  }
});

/* Hierarchy of named folders */
var rootFolder = {
  editable: true,
  name: "Categories", folders: [
    {name: "Drama", folders: [
      {name: "Courtroom", folders: []},
      {name: "Political", folders: []}
    ]},
    {name: "Classic", folders: [
      {name: "Musicals", folders: [
        {name: "Jazz", folders: []},
        {name: "R&B/Soul", folders: []}
      ]}
    ]}
  ]};

var pageTmpl = $.templates("#pageTemplate");

$("#pageContent").link(pageTmpl, rootFolder);
