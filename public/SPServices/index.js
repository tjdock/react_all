(function ($) {
    if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.match(/8./i) == "8." || navigator.appVersion.match(/9./i) == "9.")) {

        var swiperBanner = new Swiper('#swiper-banner', {
            autoplay: 5000,
            loop: true,
            calculateHeight: true,
            pagination: '.pagination',
            autoplayDisableOnInteraction: false
        })
    }
    else {
        var swiperBanner = new Swiper("#swiper-banner", {
            loop: true,
            autoplay: {
                delay: 5000,
                stopOnLastSlide: false,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
            },
            on: {
                init: function () {
                    $(".swiper-slide").find(".animated").addClass("d-none");
                    $(".swiper-slide").eq(this.activeIndex).find(".animated").removeClass("d-none");
                },
                slideChangeTransitionEnd: function () {
                    $(".swiper-slide").find(".animated").addClass("d-none");
                    $(".swiper-slide").eq(this.activeIndex).find(".animated").removeClass("d-none");
                }
            }
        });
    }

    var webUrl = _spPageContextInfo.siteAbsoluteUrl;

    getListItemsByCamel({
        listName: "Docquest",
        camlString: "<View>  \n" +
            "            <Query> \n" +
            "               <Where><And><Eq><FieldRef Name='ifty' /><Value Type='Choice'>否</Value></Eq><Eq><FieldRef Name='AssignedTo' /><Value Type='Integer'><UserID /></Value></Eq></And></Where><OrderBy><FieldRef Name='Created' Ascending='FALSE' /></OrderBy> \n" +
            "            </Query> \n" +
            "            <RowLimit>6</RowLimit> \n" +
            "      </View>",
        weUrl: webUrl,
        includes: ""
    }).then(function (collListItem) {
        var items = jsomItemsToJSON(collListItem, ["Title", "Created"]);

        var html = "";

        for (var i = 0; i < items.length; i++) {
            var item = items[i];

            //html += '<li class="list-item' + (i === items.length - 1 ? ' last' : '') + '"><a href="/Lists/Docquest/DispForm.aspx?ID=' + item["ID"] + '" target="_blank">' + item["Title"] + '<span class="date">' + dateToStringDate(item["Created"]) + '</span></a></li>'
            html += '<li class="list-item' + (i === items.length - 1 ? ' last' : '') + '"><a href="/Lists/Docquest/DispForm.aspx?ID=' + item["ID"] + '" target="_blank">' +'<span class="title" titile="'+item["Title"]+'">'+ item["Title"] +'</span>'+ '<span class="date">' + dateToStringDate(item["Created"]) + '</span></a></li>'
        }


        $("#task").html(html);
    })

    getFilesFromFolder({
        listName: "管理文件库",
        weUrl: webUrl + "/KM",
        folderServerRelativeUrl:"/KM/DocLib1/工程技术研究院通知公告",
        camlString: "<View>  \n" +
            "            <Query> \n" +
       		"               <OrderBy><FieldRef Name='Created' Ascending='FALSE' /></OrderBy> \n" +
            "            </Query> \n" +
            "            <RowLimit>6</RowLimit> \n" +
    		"      </View>"

    }).then(function (collListItems) {
        var html = "";
        var listItemEnumerator = collListItems.getEnumerator();
        var items = [];
      
        while (listItemEnumerator.moveNext()) {
           
            var currentItem = listItemEnumerator.get_current();
            if (currentItem.get_fileSystemObjectType() == "0") {
                var file = currentItem.get_file();
                if (file != null) {
                	items.push(file);
                    // alert('File Name: ' + file.get_name() + '\n' + 'File Url: ' + file.get_serverRelativeUrl());
                    
                    

                }
            }
        }
        
         for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var fileName = item.get_name();
            var title = fileName.substring(0,fileName.lastIndexOf("."));

            //html += '<li class="list-item' + (i === items.length - 1 ? ' last' : '') + '"><a href="'+file.get_serverRelativeUrl()+'" target="_blank">' + title + '<span class="date">' + dateToStringDate(file.get_timeCreated()) + '</span></a></li>'
            html += '<li class="list-item' + (i === items.length - 1 ? ' last' : '') + '"><a href="/KM/_layouts/15/WopiFrame.aspx?sourcedoc='+encodeURI(item.get_serverRelativeUrl())+'&action=default" target="_blank">' +'<span class="title" titile="'+title+'">'+ title +'</span>'+ '<span class="date">' + dateToStringDate(item.get_timeCreated()) + '</span></a></li>'
        }


        $("#annoucements").html(html);
    })

})(jQuery);
