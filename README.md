# Gameboy Geek Site Redesign

My redesign can be found at: https://gameboygeek.vercel.app/

The original site can be found here: https://www.gameboygeek.com/

The site has been completely modernized, streamlined and redesigned with the singular goal of converting game publishers into paying customers.

# Massively improved load times

The new version of the site is fully loaded and interactive in less than 1 second while the old site takes over 6 seconds!

I accomplished this by completely statically generating the site with Next.js.

It uses incremental static regeneration to rebuild the home page every day to keep the list of latest videos up to date.

# Guide the visitor through the website

The redesign guides the visitor through the website in the following logical order:

1. View samples of his latest videos.
2. Read testimonials as to the quality of his work.
3. Review a list of his available services.
4. Fill out a contact form so they can commission work to be done.

# Modern Design

The redesign is completely responsive at all screen sizes.

The favicon has been simplified and is more easily recognizable.

It now uses https to securely submit the form (it is just a demo website so the form does not actually submit).

The site now has a clean, simple, uncluttered design that focuses on what is important.

# Tech

Next.js to build the entire site and statically generate it.

SASS modules to keep the CSS separated.

Unescape to convert some HTML entities to HTML characters.

Youtube API to link his latest videos.

Deployed on Vercel to take advantage of https and incremental static regeneration.
