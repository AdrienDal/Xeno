/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  .uib_w_9 */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#listeJeux"); 
         getAllGames();
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
