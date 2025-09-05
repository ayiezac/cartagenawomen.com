import { blogs as dating } from "/dating/related-content.js";
import { blogs as culture } from "/culture/related-content.js";
import { blogs as psychology } from "/psychology/related-content.js";
import { blogs as travel } from "/travel/related-content.js";
import { blogs as realities } from "/realities/related-content.js";
import { blogs as our_process } from "/our-process/related-content.js";

export const data = {
	culture: culture.map(blog => ({...blog, pathname: "culture"})),
	psychology: psychology.map(blog => ({...blog, pathname: "psychology"})),
	travel: travel.map(blog => ({...blog, pathname: "travel"})),
    realities: realities.map(blog => ({...blog, pathname: "realities"})),
    our_process: our_process.map(blog => ({...blog, pathname: "our-process"})),
};

export const dating_data = {
    dating: dating.map(blog => ({...blog, pathname: "dating"})),
}