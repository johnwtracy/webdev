John Tracy

I decided to go with my own desing on this just to fully
understand and grasp the limitations of desinging things without
SVGs or several images while still accomplishing an minimalist 
design in my own method. The format is the top left displaying 
the "Powered by yahoo" and the text box and submit button. The
center/ center right of the page displays the current location 
and its most important conditons. Finally, the very bottom of 
the page holds the five day forecast for that location.

The design of the software I stuck to the assignment directions
and made objects called model and view. the model object has a 
which accepts the data element retrieved by the script after 
finding the woeid. View is a literal oject which only contains 
methods altering the html and adding new html elements. The other
four random functions I have are just for onclick, onload, and 
the api callback functions. For the five day forecast at first
I styled the newly created "days" by creating divs and formatting
them in javaScript but thought it was poor form so I ended up
just changing the "day" div's class names to "day" and adding 
the correct styling to my CSS file.