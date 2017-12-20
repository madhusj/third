 function findMovie(e) {
     e.preventDefault(); /*this to prevent the default action in form*/
     /*this ajax calls the serach router in index.js*/
     $.ajax({
         url: '/movie/search/'+ document.getElementById('moviename').value,
         type: 'GET',
         /*data: {
             moviename: document.getElementById('moviename').value
         },
*/         error: function() {
             $('#movies').html('<p>An error has occurred</p>');
         },
         success: function(data) {
             var json_obj = $.parseJSON(data); //parse JSON
             var total = json_obj.total_results; /*this for display only 10 movies*/
             if (total > 10) {
                 total = 10;
             }
             if (json_obj.total_results != 0) {
                 var movieHTML = '';
                 var movieHead='<tr><th>Title</th><th>Poster</th><th>Release Date</th></tr>'
                 for (var i = 0; i < total; i++) {
                     /*poster_path return only half of the path remaining half is defined before exection for all the movies*/
                     var poster = 'http://image.tmdb.org/t/p/w500/' + json_obj.results[i].poster_path;
                     /*this object is for passing the object when clicking favourite button */
                     var favobj = {
                         title: json_obj.results[i].title,
                         poster: poster,
                         date: json_obj.results[i].release_date 
                     };
                     movieHTML += '<tr>';
                     movieHTML += '<td>' + json_obj.results[i].title + '</td>';
                     movieHTML += '<td>' + '<img  width="300" height= "300" src=' + poster + '>' + '</td>';
                     movieHTML += '<td>' + json_obj.results[i].release_date + '</td>';
                     movieHTML += "<td><center><button value='" + JSON.stringify(favobj) + "' onclick='favourite(event)'>Favourite</button></center></td>";
                     movieHTML += '</tr>';
                 }
                 $("#movies tbody").html(movieHTML);
                 $("#movies thead").html(movieHead);
             } else {
                 $('#heading').html('<p>No such movie</p>');
             }
         }
     });
 }


 /*this function is called when favourite button is clicked*/
 function favourite(e) {
     $.ajax({
         url: '/movie/addMovie',
         type: 'POST',
         data: JSON.parse(e.target.value),
         error: function() {
             $('#movies').html('<p>An error has occurred</p>');
         },
         success: function(data) {
             /*11000 is an error code which voilets the unique comment in schema*/
             if(data.code == 11000){
                 alert("Already Added!!!")
             }
             else{
                 alert("added successfully");
         }

         }
     });
 }



 /*this function is called when view favourite button is clicked on movie.html*/
 function favouritedisplay() {
     $.ajax({
         url: '/movie/viewMovie',
         type: 'GET',
         error: function() {
             $('#movies').html('<p>An error has occurred</p>');
         },
         success: function(data) {
             var movieHTML = '';
             movieHTML += '<tr>Favourite List</tr>';
             for (var i = 0; i < data.length; i++) {
                 movieHTML += '<tr>';
                 movieHTML += '<td><center>' + data[i].title + '</center></td>';
                 movieHTML += '<td><center>' + '<img width = "200" height = "200" src=' + data[i].poster + '>' + '</center></td>';
                 movieHTML += '<td><center>' + data[i].date + '</center></td>';
                 movieHTML += "<td><center><button value='" + JSON.stringify(data[i]) + "' onclick='dele(event)'>delete</button></center></td>";
                 movieHTML += '</tr>';
             }
             $("#movies tbody").html(movieHTML);
         }
     });
 }



 /*this function is called when delete button is clicked on the favourite list*/
 function dele(event) {
     $.ajax({
         url: '/movie/deleteMovie',
         type: 'POST',
         data: JSON.parse(event.target.value),
         error: function() {
             $('#movies').html('<p>An error has occurred</p>');
         },
         success: function(data) {
             alert("deleted successfully");
            favouritedisplay(); /*this function is called for displaying the movie after deletion*/
         }
     });
 }
