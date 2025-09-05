import { blogs } from "/culture/related-content.min.js";
import { populateData, paginate } from "/content-part/related-post-loop.min.js";
populateData(blogs); // Populate with paginated data
paginate(blogs); // Populate with paginated data
