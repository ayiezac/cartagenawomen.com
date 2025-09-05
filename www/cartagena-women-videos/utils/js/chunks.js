const VIDEO_TYPE_PATHS = {
    TESTIMONIAL: "/testimonial/",
    INFORMATIONAL: "/informational/",
    TOURS: "/cartagena-women-videos/",
};
export const videoTypes = () => {
    if (location.pathname.includes(VIDEO_TYPE_PATHS.TESTIMONIAL))
        return "testimonial";
    if (location.pathname.includes(VIDEO_TYPE_PATHS.INFORMATIONAL))
        return "informational";
    if (location.pathname.includes(VIDEO_TYPE_PATHS.TOURS))
        return "tours";
    return null;
};
