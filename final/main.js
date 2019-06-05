
            $(document).ready(function(){
              $("button").click(function(){
                $("nav").slideToggle()[200];
              });
              var form = document.getElementById('donation_form');
              form.onsubmit = function(event){
                  event.preventDefault();
                  alert("We appreciate your donation!");
                  form.reset();
              }
            });



           