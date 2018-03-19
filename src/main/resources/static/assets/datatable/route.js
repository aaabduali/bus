

//== Class definition

var DatatableRemoteAjaxDemo = function() {
    //== Private functions

    // basic demo
    var demo = function() {

        var datatable = $('.m_datatable').mDatatable({
            // datasource definition
            data: {
                type: 'remote',
                source: {
                    read: {
                        // sample GET method
                        method: 'GET',
                        //url: 'https://keenthemes.com/metronic/preview/inc/api/datatables/demos/default.php',
                        url: '../routes/table',
                        map: function(raw) {
                            // sample data mapping

                            var dataSet = raw;
                            if (typeof raw.data !== 'undefined') {
                                dataSet = raw.data;
                            }
                            return dataSet;
                        },
                    },
                },
                pageSize: 10,
                sortable: true,
            },

            // layout definition
            layout: {
                scroll: false,
                footer: false
            },

            // column sorting
            sortable: true,

            pagination: true,

            toolbar: {
                // toolbar items
                items: {
                    // pagination
                    pagination: {
                        // page size select
                        pageSizeSelect: [10, 20, 30, 50, 100],
                    },
                },
            },

            search: {
                input: $('#generalSearch'),
            },

            // columns definition
            columns: [
                {
                    field: 'id',
                    title: '#',
                    sortable: false, // disable sort for this column
                    width: 40,
                    selector: false,
                    textAlign: 'center',
                }, {
                    field: 'departure',
                    title: 'Route',
                    // sortable: 'asc', // default sort
                    filterable: true, // disable or enable filtering
                    width: 150,
                    template: function(row) {
                        // callback function support for column rendering

                        return row.departure+" - "+row.destination;},

                }, {
                    field: 'price',
                    title: 'Price',
                    width: 150,
                    filterable: true,
                }, {
                    field: 'time',
                    title: 'Departure Time',
                    filterable: true,
                }, {
                    field: 'bus',
                    title: 'Bus',
                    filterable: true,
                    template: function(row) {
                        // callback function support for column rendering

                        return row.bus.plate;},
                },
                {
                    field: 'Actions',
                    width: 110,
                    title: 'Actions',
                    sortable: false,
                    overflow: 'visible',
                    template: function (row, index, datatable) {
                        var dropup = (datatable.getPageSize() - index) <= 4 ? 'dropup' : '';
                        return '\
						<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\
							<i class="la la-edit"></i>\
						</a>\
						<a data-toggle="modal"  data-target="#myModal'+row.id+'" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\
							<i class="la la-trash"></i>\
						</a>\                                                                       <div class="modal" id="myModal' + row.id + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
						<div class="modal-dialog" role="document">\
						<div class="modal-content">\
						<div class="modal-header">\
						<h5 class="modal-title" id="exampleModalLabel">\n' +
                            'Confirm <i class="la la-question-circle"></i>\n' +
                            '</h5>\
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>\
                                                    <div class="modal-body">\
                                                    <p>Are you sure?</p>\
                                                    </div>\
                                                    <div class="modal-footer">\
                                                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancle</button>\
                                                    <a href="/routes/delete/' + row.id + '" class="btn btn-danger" role="button">Delete</a></div>\
						</div>\
						</div>\
						</div>\
					';
                    },
                }],
        });

        var query = datatable.getDataSourceQuery();



    };

    return {
        // public functions
        init: function() {
            demo();
        },
    };
}();

jQuery(document).ready(function() {
    DatatableRemoteAjaxDemo.init();
});