# FlightSpy

Before you fly, determine what'll be outside your window.

## Quick Start

1. Clone the repo.
2. Make sure that `npm` exists and install dependencies via `npm ci`.
3. Read the comments in `index.js` and make the necessary changes. The comments are
    How to get this flight ID:
    1. Visit https://www.flightradar24.com/
    2. Search for the code number (top right)
    3. Click on the 'Recent or schedule flights" option.
        (this should open a page of flight history for that route)
    4. Review the list to find a complete flight
    5. Click on the 'Play' button
    6. Notice the URL contains both the route ID, followed by a #, and another ID - use this one
4. Run the code via `node index.js`.

## Optional

Using local translations:

Run https://github.com/LibreTranslate/LibreTranslate on port 5000

## Example

See the output in example_London-to-Edinburgh

This is a verbose example, with altitude filtering turned off.
