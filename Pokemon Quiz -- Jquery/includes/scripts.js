$(document).ready(function() {
    //show initial page
    $("#head").show(); 

    //hide the quiz form
    $("#start").hide();
    $("#form").hide();
    
    //check if the user enters a valid name
    $("#begin").click(function() {
        //store user input
        var user = $("#name").val();

        if (user == null || user == "" || !isNaN(user)) {
            //alert user if name is invalid
            alert("Invalid name. Please try again."); 
        }
        else {
            //hide initial page on start
            $("#head").hide();
            $("#welcome").hide();

            //load page as a fadeIn over 1 second with welcome message and quiz form
            $("#start").fadeIn(1000);
            $("#message").text(`Welcome, ${user}. Good luck on the quiz!`).hide().fadeIn(1500);
            $("#form").fadeIn(1000);
        }
        
        /* Displays hint as a fadeIn/fadeOut when user hovers over the word "HINT" */
        $("#hint1").mouseover(function() {
            $("#q1hint").stop().fadeIn(1000);   
        }).mouseout(function() {
            $("#q1hint").stop().fadeOut("slow");
        });

        $("#hint2").mouseover(function() {
            $("#q2hint").stop().fadeIn(1000);   
        }).mouseout(function() {
            $("#q2hint").stop().fadeOut("slow");
        });

        $("#hint3").mouseover(function() {
            $("#q3hint").stop().fadeIn(1000);   
        }).mouseout(function() {
            $("#q3hint").stop().fadeOut("slow");
        });

        $("#hint4").mouseover(function() {
            $("#q4hint").stop().fadeIn(1000);   
        }).mouseout(function() {
            $("#q4hint").stop().fadeOut("slow");
        });

        $("#hint5").mouseover(function() {
            $("#q5hint").stop().fadeIn(1000);   
        }).mouseout(function() {
            $("#q5hint").stop().fadeOut("slow");
        });

    
        //a function for submitting the form
        $("form").submit(function() {
            
            //check if user answered all 5 questions
            if ($("input:radio:checked").length < 5) {
                //alert user to answer all questions
                alert("Please answer all Questions!");
            }
            else {
                var correctAns = 0;

                //check how many correct answers the user got
                $("input:radio:checked").each(function() {

                    //match the radio input attribute id matching the word "answer"
                    //test() function returns true if it finds a match, otherwise false
                    if(/answer$/.test($(this).attr("id"))) {
                        //if it matches, increment correct answer
                        correctAns++;
                    }
                });
                console.log(correctAns);

                //alert when the user completed the quiz
                alert("Thank you for answering the quiz. Your score is being calculated and will be shown shortly.");


                //display score to the user
                $("#results").text("You scored " + correctAns + " out of 5").css("font-weight", "bold").hide().fadeIn(3000);
                $("#results2").text(`RESULTS for ${user}: You scored ${correctAns} out of 5`).hide().delay(3000).fadeIn(1000);
                //change background-color
                $("#results2").css("background-color", "yellow");
                
                //if the user scored a perfect score, an additional message will be shown below
                if (correctAns == 5) {
                    $("#results").text("You scored " + correctAns + " out of 5").css("font-weight", "bold").hide().fadeIn(3000);
                    $("#perfect").text(`You scored 5/5. Perfect!`).css("background-color", "yellow").hide().delay(3000);

                    //make the message flash 10 times before it becomes permanent
                    function flash() {
                        var blink = 10;
                        for (let i = 0; i < blink; i++) {
                            $("#perfect").delay(500).fadeOut(700);
                            $("#perfect").fadeIn(700);
                        }
                    }
                    setTimeout(flash(), 1000);
                    
                    //the message will be displayed as permanent
                    $("#perfect").fadeIn(1000);
                }
                else {
                    $("#perfect").hide();
                }
                //clear quiz after submission
                $("#form")[0].reset();
            }
        });
    });
});