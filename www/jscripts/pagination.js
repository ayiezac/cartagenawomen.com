
var numberOfItems = $('#custom-pagination-container .custom-pagination-page').length;
var limitPerPage = 8;

$("#custom-pagination-container .custom-pagination-page:gt(" + (limitPerPage -1)  + ")").hide();
var totalPages = Math.ceil(numberOfItems / limitPerPage);
$('.pagination').append("<li class='custom-pagination-current-page active'><a href='#pagination-return-top'>" + 1 + "</a></li>");

for (var i = 2; i <= totalPages; i++) {
	$('.pagination').append("<li class='custom-pagination-current-page'><a href='#pagination-return-top'>" + i + "</a></li>");
}


$('.pagination').append("<li id='custom-pagination-next-page'><a href='#pagination-return-top'>Next</a></li>");

$(".pagination li.custom-pagination-current-page").on("click", function () {

	if ($(this).hasClass("active")) {
		return false;
	} else {
		var currentPage = $(this).index();
		$(".pagination li").removeClass("active");
		$(this).addClass("active");

		$("#custom-pagination-container .custom-pagination-page").hide();

		var grandTotal = limitPerPage * currentPage;

		for ( var i = grandTotal - limitPerPage; i < grandTotal; i++) {
			$("#custom-pagination-container .custom-pagination-page:eq(" + i + ")").show();
		}
	}

});

$("#custom-pagination-next-page").on("click", function () {
	var currentPage = $(".pagination li.active").index();
	if (currentPage === totalPages) {
		return false;
	} else {
		currentPage++;
		$(".pagination li").removeClass("active");
		$("#custom-pagination-container .custom-pagination-page").hide();

		var grandTotal = limitPerPage * currentPage;

		for ( var i = grandTotal - limitPerPage; i < grandTotal; i++) {
			$("#custom-pagination-container .custom-pagination-page:eq(" + i + ")").show();
		}

		$(".pagination li.custom-pagination-current-page:eq(" + (currentPage - 1) + ")").addClass("active");
	}
});

$("#custom-pagination-previous-page").on("click", function () {
	var currentPage = $(".pagination li.active").index();
	if (currentPage === 1) {
		return false;
	} else {
		currentPage--;
		$(".pagination li").removeClass("active");
		$("#custom-pagination-container .custom-pagination-page").hide();

		var grandTotal = limitPerPage * currentPage;

		for ( var i = grandTotal - limitPerPage; i < grandTotal; i++) {
			$("#custom-pagination-container .custom-pagination-page:eq(" + i + ")").show();
		}

		$(".pagination li.custom-pagination-current-page:eq(" + (currentPage - 1) + ")").addClass("active");
	}
});

