// Pre-requistes:
// 1. Run https://github.com/LibreTranslate/LibreTranslate on port 5000
//    (otherwise, remove ltranslate option around line 98)
//
// 2. Use my fork (https://github.com/MarquisdeGeek/flightradar24-client) of flight radar module, that returns trail data.

import { main } from "./src/flight_spy.js";


// Specific the ID
const flightID = `3702b0c3`;

// How to get this flight ID:
// 1. Visit https://www.flightradar24.com/
// 2. Search for the code number (top right)
// 3. Click on the 'Recent or schedule flights" option.
//    (this should open a page of flight history for that route)
// 4. Review the list to find a complete flight
// 5. Click on the 'Play' button
// 6. Notice the URL contains both the route ID, followed by a #, and another ID - use this one

main(flightID);
