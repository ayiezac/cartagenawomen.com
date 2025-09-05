import { createPagination } from "./pagination.min.js";
import debounce from 'https://cdn.jsdelivr.net/npm/lodash.debounce@4.0.8/+esm'

const contentLoop = (contents) => {
    $(document).ready(() => {
        $("#skeletonPlaceholderContainer").remove();
        $(".archive_skeleton_placeholder").each((index, el) => {
            $(el).remove();
        });

        if (contents.length === 0) {
            $(".cardcontainer").html(
                "<p class='text-center text-muted'>No videos to display</p>",
            );
        }

        const archiveContainer = $("#card_archive_container");
        const nextButton = $("#next");
        const prevButton = $("#prev");
        const paginationContainer = $("#pagination-container");

        const pathname = location.pathname;
        $("#navbar_nav li a").each(function () {
            const $this = $(this);
            const href = $this.attr("href");
            $this
                .toggleClass("link-body-emphasis", href === pathname)
                .toggleClass("link-secondary", href !== pathname);
        });

		const pagination = createPagination(paginationContainer, archiveContainer, prevButton, nextButton, contents);
		const { funcNextButton, funcPrevButton, funcPaginationContainer } = pagination;

        paginationContainer.on("click", ".page-btn", debounce((e) => {
            funcPaginationContainer(e);
        }, 300));

        nextButton.on("click", debounce(() => {
            funcNextButton();
        }, 300));

        prevButton.on("click", debounce(() => {
            funcPrevButton();
        }, 300));
    });
};

export default contentLoop;
